import { INITIAL_UNSPENT_POINTS, slotAccepts } from "./constants";
import { sessionUserId, readDevSession } from "./dev-session";
import type {
  AppliedCondition,
  AppliedEffect,
  BodySlot,
  Character,
  CharacterDraft,
  Condition,
  DiceRoll,
  Effect,
  Equipment,
  InventoryItem,
  Modifiers,
  Profile,
  Role,
  StatKey,
} from "./types";
import type { RpgState } from "./api-types";

const STATE_KEY = "mesa-dev-table";

type Table = {
  schemaVersion?: number;
  nextId: number;
  profiles: Profile[];
  characters: Character[];
  library: { equipment: Equipment[]; effects: Effect[]; conditions: Condition[] };
  rolls: DiceRoll[];
};

const TABLE_SCHEMA_VERSION = 2;

function nid(t: Table) {
  t.nextId += 1;
  return t.nextId;
}

function seedEquipment(t: Table): Equipment[] {
  const mk = (
    name: string,
    icon: string,
    category: Equipment["category"],
    rarity: Equipment["rarity"],
    description: string,
    modifiers: Modifiers,
  ): Equipment => ({
    id: nid(t),
    name,
    icon,
    category,
    rarity,
    description,
    effects: "",
    modifiers,
  });
  return [
    mk("Elmo de Ferro", "helmet", "elmo", "comum", "Protege o crânio contra golpes rasos.", { resistance: 1 }),
    mk("Cota de Malha", "armor", "armadura", "incomum", "Anéis entrelaçados para o tronco.", { resistance: 2 }),
    mk("Grevas de Couro", "pants", "calca", "comum", "Cobrem coxas e joelhos.", { agility: 1 }),
    mk("Espada Longa", "sword", "arma", "raro", "Lâmina equilibrada para a mão dominante.", { strength: 2 }),
    mk("Escudo Redondo", "shield", "escudo", "incomum", "Madeira e bronze, bom para aparar.", { resistance: 1 }),
    mk("Botas de Caminhada", "boot", "bota", "comum", "Sola firme para longas marchas.", { agility: 1 }),
    mk("Anel de Vigília", "ring", "acessorio", "epico", "Um olho gravado no metal.", { presence: 1, intelligence: 1 }),
  ];
}

function emptyChar(t: Table, userId: string, createdBy: string, d: CharacterDraft): Character {
  return {
    id: nid(t),
    userId,
    createdBy,
    name: d.name,
    race: d.race,
    className: d.className,
    age: d.age,
    backstory: d.backstory,
    hp: 20,
    hpMax: 20,
    mana: 12,
    manaMax: 12,
    stamina: 16,
    staminaMax: 16,
    strength: 10,
    agility: 10,
    resistance: 10,
    intelligence: 10,
    presence: 10,
    unspentPoints: INITIAL_UNSPENT_POINTS,
    notes: "",
    inventory: [],
    effects: [],
    conditions: [],
    updatedAt: new Date().toISOString(),
  };
}

function giveGear(t: Table, character: Character) {
  const items: InventoryItem[] = t.library.equipment.map((eq) => ({
    id: nid(t),
    name: eq.name,
    description: eq.description,
    quantity: 1,
    kind: "body",
    equipment: eq,
    equippedSlot: null,
  }));
  items.push({
    id: nid(t),
    name: "Poção de vida",
    description: "Restaura um pouco de vigor.",
    quantity: 3,
    kind: "item",
    equipment: null,
    equippedSlot: null,
  });
  items.push({
    id: nid(t),
    name: "Diário de viagem",
    description: "Anotações da estrada.",
    quantity: 1,
    kind: "belonging",
    equipment: null,
    equippedSlot: null,
  });
  character.inventory = items;
}

function defaultTable(): Table {
  const t: Table = {
    schemaVersion: TABLE_SCHEMA_VERSION,
    nextId: 10,
    profiles: [],
    characters: [],
    library: { equipment: [], effects: [], conditions: [] },
    rolls: [],
  };
  t.library.equipment = seedEquipment(t);
  t.library.effects = [
    {
      id: nid(t),
      kind: "buff",
      name: "Bênção",
      icon: "sparkles",
      color: "#7fa065",
      description: "Um sopro de favor.",
      modifiers: { presence: 1 },
    },
  ];
  t.library.conditions = [
    {
      id: nid(t),
      name: "Ferido",
      icon: "blood",
      color: "#d0564d",
      description: "Sangra pelas fendas da armadura.",
      effect: "Desvantagem em testes de resistência.",
      modifiers: { resistance: -1 },
    },
  ];
  return t;
}

function looksLikeUntouchedDefault(c: Character) {
  return (
    c.unspentPoints === 4 &&
    c.strength === 10 &&
    c.agility === 10 &&
    c.resistance === 10 &&
    c.intelligence === 10 &&
    c.presence === 10
  );
}

function migrateTable(t: Table): Table {
  const version = t.schemaVersion ?? 1;
  if (version < 2) {
    // Old emptyChar seeded 4 free points. Strip that only on untouched defaults.
    for (const c of t.characters) {
      if (looksLikeUntouchedDefault(c)) c.unspentPoints = INITIAL_UNSPENT_POINTS;
    }
    t.schemaVersion = TABLE_SCHEMA_VERSION;
  }
  for (const c of t.characters) {
    if (typeof c.unspentPoints !== "number" || !Number.isFinite(c.unspentPoints) || c.unspentPoints < 0) {
      c.unspentPoints = 0;
    }
  }
  return t;
}

function load(): Table {
  if (typeof window === "undefined") return defaultTable();
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) {
      const t = defaultTable();
      save(t);
      return t;
    }
    const parsed = JSON.parse(raw) as Table;
    const before = parsed.schemaVersion ?? 1;
    const t = migrateTable(parsed);
    if ((t.schemaVersion ?? 1) !== before) save(t);
    return t;
  } catch {
    return defaultTable();
  }
}

function save(t: Table) {
  localStorage.setItem(STATE_KEY, JSON.stringify(t));
}

export function ensureProfile(role: Role, nick: string, userId: string) {
  const t = load();
  let p = t.profiles.find((x) => x.userId === userId);
  if (!p) {
    p = { userId, role, displayName: nick, avatarUrl: null };
    t.profiles.push(p);
  } else {
    p.role = role;
    p.displayName = nick;
  }
  if (role === "player" && !t.characters.some((c) => c.userId === userId)) {
    const c = emptyChar(
      t,
      userId,
      userId,
      {
        name: nick,
        race: "Humano",
        className: "Guerreiro",
        age: 24,
        backstory: "Aventureiro recém-chegado à mesa.",
      },
    );
    giveGear(t, c);
    t.characters.push(c);
  }
  if (role === "gm" && t.characters.length === 0) {
    const npc = emptyChar(t, "npc-alda", userId, {
      name: "Alda da Ponte",
      race: "Elfo",
      className: "Ranger",
      age: 112,
      backstory: "Guarda a estrada velha.",
    });
    giveGear(t, npc);
    t.characters.push(npc);
  }
  save(t);
}

export async function getMyState(): Promise<RpgState> {
  const uid = sessionUserId();
  const t = load();
  const profile = t.profiles.find((p) => p.userId === uid) ?? null;
  if (!profile) return { profile: null, character: null, party: [] };
  if (profile.role === "gm") return { profile, character: null, party: t.characters };
  return {
    profile,
    character: t.characters.find((c) => c.userId === uid) ?? null,
    party: [],
  };
}

export async function getLibrary() {
  return load().library;
}

export async function chooseRole(role: Role, displayName: string, character?: CharacterDraft) {
  const uid = sessionUserId();
  const t = load();
  let p = t.profiles.find((x) => x.userId === uid);
  if (!p) {
    p = { userId: uid, role, displayName, avatarUrl: null };
    t.profiles.push(p);
  } else {
    p.role = role;
    p.displayName = displayName;
  }
  if (role === "player" && character && !t.characters.some((c) => c.userId === uid)) {
    const c = emptyChar(t, uid, uid, character);
    giveGear(t, c);
    t.characters.push(c);
  }
  save(t);
}

export async function gmUpdateIdentity(characterId: number, d: CharacterDraft) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  if (!c) throw new Error("Personagem não encontrado.");
  Object.assign(c, {
    name: d.name,
    race: d.race,
    className: d.className,
    age: d.age,
    backstory: d.backstory,
    updatedAt: new Date().toISOString(),
  });
  save(t);
}

export async function updateNotes(characterId: number, notes: string) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  if (!c) throw new Error("Personagem não encontrado.");
  c.notes = notes;
  save(t);
}

export async function updateMyAvatar(avatar: string | null) {
  const uid = sessionUserId();
  const t = load();
  const p = t.profiles.find((x) => x.userId === uid);
  if (p) p.avatarUrl = avatar;
  save(t);
}

export async function spendPoints(characterId: number, alloc: Partial<Record<StatKey, number>>) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  if (!c) throw new Error("Personagem não encontrado.");
  const spent = (Object.keys(alloc) as StatKey[]).reduce(
    (sum, k) => sum + Math.max(0, Math.floor(Number(alloc[k] ?? 0))),
    0,
  );
  if (spent <= 0) return;
  if (spent > c.unspentPoints) throw new Error("Pontos insuficientes.");
  (Object.keys(alloc) as StatKey[]).forEach((k) => {
    const n = Math.max(0, Math.floor(Number(alloc[k] ?? 0)));
    if (n) c[k] += n;
  });
  c.unspentPoints = Math.max(0, c.unspentPoints - spent);
  c.updatedAt = new Date().toISOString();
  save(t);
}

export async function gmSetStats(
  characterId: number,
  s: Record<StatKey, number> & { unspent: number },
) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  if (!c) throw new Error("Personagem não encontrado.");
  c.strength = s.strength;
  c.agility = s.agility;
  c.resistance = s.resistance;
  c.intelligence = s.intelligence;
  c.presence = s.presence;
  c.unspentPoints = Math.max(0, Math.floor(Number(s.unspent)));
  c.updatedAt = new Date().toISOString();
  save(t);
}

export async function gmGrantPoints(characterId: number, amount: number) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  if (!c) throw new Error("Personagem não encontrado.");
  c.unspentPoints = Math.max(0, c.unspentPoints + Math.max(0, Math.floor(Number(amount))));
  c.updatedAt = new Date().toISOString();
  save(t);
}

export async function gmUpdateVitals(
  characterId: number,
  v: {
    hp: number;
    hpMax: number;
    mana: number;
    manaMax: number;
    stamina: number;
    staminaMax: number;
  },
) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  if (!c) throw new Error("Personagem não encontrado.");
  Object.assign(c, v);
  save(t);
}

export async function gmCreateCharacter(d: CharacterDraft) {
  const uid = sessionUserId();
  const t = load();
  const c = emptyChar(t, null as unknown as string, uid, d);
  c.userId = null;
  giveGear(t, c);
  t.characters.push(c);
  save(t);
  return { id: c.id, name: c.name };
}

export async function gmDeleteCharacter(characterId: number) {
  const t = load();
  t.characters = t.characters.filter((c) => c.id !== characterId);
  save(t);
}

export async function addItem(
  characterId: number,
  item: { name: string; description: string; quantity: number; kind: "item" | "belonging" },
) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  if (!c) throw new Error("Personagem não encontrado.");
  c.inventory.push({
    id: nid(t),
    name: item.name,
    description: item.description,
    quantity: item.quantity,
    kind: item.kind,
    equipment: null,
    equippedSlot: null,
  });
  save(t);
}

export async function removeItem(itemId: number) {
  const t = load();
  for (const c of t.characters) {
    c.inventory = c.inventory.filter((i) => i.id !== itemId);
  }
  save(t);
}

export async function equipItem(itemId: number, slot: BodySlot) {
  const t = load();
  for (const c of t.characters) {
    const item = c.inventory.find((i) => i.id === itemId);
    if (!item?.equipment) continue;
    if (!slotAccepts(item.equipment.category, slot)) {
      throw new Error("Este equipamento não cabe neste encaixe.");
    }
    const occupant = c.inventory.find((i) => i.equippedSlot === slot);
    if (occupant) occupant.equippedSlot = null;
    item.equippedSlot = slot;
    save(t);
    return;
  }
  throw new Error("Item não encontrado.");
}

export async function unequipItem(itemId: number) {
  const t = load();
  for (const c of t.characters) {
    const item = c.inventory.find((i) => i.id === itemId);
    if (item) {
      item.equippedSlot = null;
      save(t);
      return;
    }
  }
}

export async function gmGiveEquipment(characterId: number, equipmentId: number) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  const eq = t.library.equipment.find((e) => e.id === equipmentId);
  if (!c || !eq) throw new Error("Não encontrado.");
  c.inventory.push({
    id: nid(t),
    name: eq.name,
    description: eq.description,
    quantity: 1,
    kind: "body",
    equipment: eq,
    equippedSlot: null,
  });
  save(t);
}

type LibTable = "equipment" | "effects" | "conditions";

export async function saveLibraryEntry(table: LibTable, id: number | null, values: Record<string, unknown>) {
  const t = load();
  if (table === "equipment") {
    if (id) {
      const row = t.library.equipment.find((e) => e.id === id);
      if (row) Object.assign(row, values);
    } else {
      t.library.equipment.push({
        id: nid(t),
        name: String(values.name ?? "Novo"),
        icon: String(values.icon ?? "sword"),
        category: (values.category as Equipment["category"]) ?? "arma",
        rarity: (values.rarity as Equipment["rarity"]) ?? "comum",
        description: String(values.description ?? ""),
        effects: String(values.effects ?? ""),
        modifiers: (values.modifiers as Modifiers) ?? {},
      });
    }
  } else if (table === "effects") {
    if (id) {
      const row = t.library.effects.find((e) => e.id === id);
      if (row) Object.assign(row, values);
    } else {
      t.library.effects.push({
        id: nid(t),
        kind: (values.kind as Effect["kind"]) ?? "buff",
        name: String(values.name ?? "Novo"),
        icon: String(values.icon ?? "sparkles"),
        color: String(values.color ?? "#7fa065"),
        description: String(values.description ?? ""),
        modifiers: (values.modifiers as Modifiers) ?? {},
      });
    }
  } else if (id) {
    const row = t.library.conditions.find((e) => e.id === id);
    if (row) Object.assign(row, values);
  } else {
    t.library.conditions.push({
      id: nid(t),
      name: String(values.name ?? "Novo"),
      icon: String(values.icon ?? "blood"),
      color: String(values.color ?? "#d0564d"),
      description: String(values.description ?? ""),
      effect: String(values.effect ?? ""),
      modifiers: (values.modifiers as Modifiers) ?? {},
    });
  }
  save(t);
}

export async function deleteLibraryEntry(table: LibTable, id: number) {
  const t = load();
  if (table === "equipment") t.library.equipment = t.library.equipment.filter((e) => e.id !== id);
  if (table === "effects") t.library.effects = t.library.effects.filter((e) => e.id !== id);
  if (table === "conditions") t.library.conditions = t.library.conditions.filter((e) => e.id !== id);
  save(t);
}

export async function applyEffect(characterId: number, effectId: number, duration: string) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  const effect = t.library.effects.find((e) => e.id === effectId);
  if (!c || !effect) throw new Error("Não encontrado.");
  c.effects.push({ id: nid(t), duration, effect });
  save(t);
}

export async function removeAppliedEffect(id: number) {
  const t = load();
  for (const c of t.characters) c.effects = c.effects.filter((e) => e.id !== id);
  save(t);
}

export async function applyCondition(characterId: number, conditionId: number, duration: string) {
  const t = load();
  const c = t.characters.find((x) => x.id === characterId);
  const condition = t.library.conditions.find((e) => e.id === conditionId);
  if (!c || !condition) throw new Error("Não encontrado.");
  c.conditions.push({ id: nid(t), duration, condition });
  save(t);
}

export async function removeAppliedCondition(id: number) {
  const t = load();
  for (const c of t.characters) c.conditions = c.conditions.filter((e) => e.id !== id);
  save(t);
}

export function mapEquipment(e: Equipment) {
  return e;
}
export function mapEffect(e: Effect) {
  return e;
}
export function mapCondition(c: Condition) {
  return c;
}
export function mapRoll(r: DiceRoll) {
  return r;
}

export async function rollD20(): Promise<DiceRoll> {
  const s = readDevSession();
  if (!s) throw new Error("Não autenticado.");
  const t = load();
  const roll: DiceRoll = {
    id: nid(t),
    userId: s.userId,
    rollerName: s.nick,
    value: 1 + Math.floor(Math.random() * 20),
    createdAt: new Date().toISOString(),
  };
  t.rolls.unshift(roll);
  t.rolls = t.rolls.slice(0, 16);
  save(t);
  return roll;
}

export async function recentRolls(): Promise<DiceRoll[]> {
  return load().rolls.slice(0, 8);
}

export type { AppliedCondition, AppliedEffect };
