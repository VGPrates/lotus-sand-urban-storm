import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, d as DialogContent$1, f as DialogDescription$1, g as DialogTrigger$1, h as DialogTitle$1, l as Dialog$1, m as DialogPortal$1, p as DialogOverlay$1, u as DialogClose, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { g as slotAccepts, h as cn, t as APP_NAME } from "./button-DAk3Wu8A.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { T as Camera, _ as LogOut, c as Trash2, h as Palette, n as X, o as Upload, w as Check } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useAppearance, n as AMBIENTS, r as THEMES } from "./router-CvybXlPD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-chrome-DwMabm_R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function AppearanceSettings({ className }) {
	const { theme, ambient, setTheme, setAmbient } = useAppearance();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
		"aria-label": "Aparência",
		className: cn("grid size-10 place-items-center rounded-md text-muted transition-colors hover:bg-elevated hover:text-fg", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-4" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: "max-h-[85dvh] overflow-y-auto border-border bg-surface text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "font-display text-xl",
				children: "Aparência"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "text-muted",
				children: "Escolha a paleta da mesa e o clima do ambiente. Fica salvo neste navegador."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs tracking-[0.2em] text-subtle uppercase",
					children: "Tema de cores"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: THEMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTheme(t.id),
						"aria-pressed": theme === t.id,
						className: cn("flex items-center gap-3 rounded-lg border p-3 text-left transition-colors", theme === t.id ? "border-ring/60 bg-elevated" : "border-border hover:border-ring/40 hover:bg-elevated/60"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex shrink-0 overflow-hidden rounded-md shadow-border",
								children: t.swatch.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-5",
									style: { backgroundColor: c }
								}, c))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm",
									children: t.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs text-muted",
									children: t.hint
								})]
							}),
							theme === t.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-ring" }) : null
						]
					}, t.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs tracking-[0.2em] text-subtle uppercase",
						children: "Efeito de ambiente"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: AMBIENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setAmbient(a.id),
							"aria-pressed": ambient === a.id,
							className: cn("flex items-center gap-3 rounded-lg border p-3 text-left transition-colors", ambient === a.id ? "border-ring/60 bg-elevated" : "border-border hover:border-ring/40 hover:bg-elevated/60"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm",
									children: a.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-xs text-muted",
									children: a.hint
								})]
							}), ambient === a.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-ring" }) : null]
						}, a.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Os efeitos são leves e desligam sozinhos se o sistema pedir menos animações."
					})
				]
			})
		]
	})] });
}
var KEY = "mesa-dev-session";
var listeners$1 = /* @__PURE__ */ new Set();
function emit() {
	for (const l of listeners$1) l();
}
function subscribeDevSession(listener) {
	listeners$1.add(listener);
	return () => {
		listeners$1.delete(listener);
	};
}
function readDevSession() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!parsed?.userId || !parsed.nick || parsed.role !== "gm" && parsed.role !== "player") return null;
		return parsed;
	} catch {
		return null;
	}
}
function writeDevSession(session) {
	localStorage.setItem(KEY, JSON.stringify(session));
	emit();
}
function clearDevSession() {
	localStorage.removeItem(KEY);
	emit();
}
function sessionUserId() {
	const s = readDevSession();
	if (!s) throw new Error("Não autenticado.");
	return s.userId;
}
var STATE_KEY = "mesa-dev-table";
var TABLE_SCHEMA_VERSION = 2;
function nid(t) {
	t.nextId += 1;
	return t.nextId;
}
function seedEquipment(t) {
	const mk = (name, icon, category, rarity, description, modifiers) => ({
		id: nid(t),
		name,
		icon,
		category,
		rarity,
		description,
		effects: "",
		modifiers
	});
	return [
		mk("Elmo de Ferro", "helmet", "elmo", "comum", "Protege o crânio contra golpes rasos.", { resistance: 1 }),
		mk("Cota de Malha", "armor", "armadura", "incomum", "Anéis entrelaçados para o tronco.", { resistance: 2 }),
		mk("Grevas de Couro", "pants", "calca", "comum", "Cobrem coxas e joelhos.", { agility: 1 }),
		mk("Espada Longa", "sword", "arma", "raro", "Lâmina equilibrada para a mão dominante.", { strength: 2 }),
		mk("Escudo Redondo", "shield", "escudo", "incomum", "Madeira e bronze, bom para aparar.", { resistance: 1 }),
		mk("Botas de Caminhada", "boot", "bota", "comum", "Sola firme para longas marchas.", { agility: 1 }),
		mk("Anel de Vigília", "ring", "acessorio", "epico", "Um olho gravado no metal.", {
			presence: 1,
			intelligence: 1
		})
	];
}
function emptyChar(t, userId, createdBy, d) {
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
		unspentPoints: 0,
		notes: "",
		inventory: [],
		effects: [],
		conditions: [],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function giveGear(t, character) {
	const items = t.library.equipment.map((eq) => ({
		id: nid(t),
		name: eq.name,
		description: eq.description,
		quantity: 1,
		kind: "body",
		equipment: eq,
		equippedSlot: null
	}));
	items.push({
		id: nid(t),
		name: "Poção de vida",
		description: "Restaura um pouco de vigor.",
		quantity: 3,
		kind: "item",
		equipment: null,
		equippedSlot: null
	});
	items.push({
		id: nid(t),
		name: "Diário de viagem",
		description: "Anotações da estrada.",
		quantity: 1,
		kind: "belonging",
		equipment: null,
		equippedSlot: null
	});
	character.inventory = items;
}
function defaultTable() {
	const t = {
		schemaVersion: TABLE_SCHEMA_VERSION,
		nextId: 10,
		profiles: [],
		characters: [],
		library: {
			equipment: [],
			effects: [],
			conditions: []
		},
		rolls: []
	};
	t.library.equipment = seedEquipment(t);
	t.library.effects = [{
		id: nid(t),
		kind: "buff",
		name: "Bênção",
		icon: "sparkles",
		color: "#7fa065",
		description: "Um sopro de favor.",
		modifiers: { presence: 1 }
	}];
	t.library.conditions = [{
		id: nid(t),
		name: "Ferido",
		icon: "blood",
		color: "#d0564d",
		description: "Sangra pelas fendas da armadura.",
		effect: "Desvantagem em testes de resistência.",
		modifiers: { resistance: -1 }
	}];
	return t;
}
function looksLikeUntouchedDefault(c) {
	return c.unspentPoints === 4 && c.strength === 10 && c.agility === 10 && c.resistance === 10 && c.intelligence === 10 && c.presence === 10;
}
function migrateTable(t) {
	if ((t.schemaVersion ?? 1) < 2) {
		for (const c of t.characters) if (looksLikeUntouchedDefault(c)) c.unspentPoints = 0;
		t.schemaVersion = TABLE_SCHEMA_VERSION;
	}
	for (const c of t.characters) if (typeof c.unspentPoints !== "number" || !Number.isFinite(c.unspentPoints) || c.unspentPoints < 0) c.unspentPoints = 0;
	return t;
}
function load() {
	if (typeof window === "undefined") return defaultTable();
	try {
		const raw = localStorage.getItem(STATE_KEY);
		if (!raw) {
			const t = defaultTable();
			save(t);
			return t;
		}
		const parsed = JSON.parse(raw);
		const before = parsed.schemaVersion ?? 1;
		const t = migrateTable(parsed);
		if ((t.schemaVersion ?? 1) !== before) save(t);
		return t;
	} catch {
		return defaultTable();
	}
}
function save(t) {
	localStorage.setItem(STATE_KEY, JSON.stringify(t));
}
function ensureProfile(role, nick, userId) {
	const t = load();
	let p = t.profiles.find((x) => x.userId === userId);
	if (!p) {
		p = {
			userId,
			role,
			displayName: nick,
			avatarUrl: null
		};
		t.profiles.push(p);
	} else {
		p.role = role;
		p.displayName = nick;
	}
	if (role === "player" && !t.characters.some((c) => c.userId === userId)) {
		const c = emptyChar(t, userId, userId, {
			name: nick,
			race: "Humano",
			className: "Guerreiro",
			age: 24,
			backstory: "Aventureiro recém-chegado à mesa."
		});
		giveGear(t, c);
		t.characters.push(c);
	}
	if (role === "gm" && t.characters.length === 0) {
		const npc = emptyChar(t, "npc-alda", userId, {
			name: "Alda da Ponte",
			race: "Elfo",
			className: "Ranger",
			age: 112,
			backstory: "Guarda a estrada velha."
		});
		giveGear(t, npc);
		t.characters.push(npc);
	}
	save(t);
}
async function getMyState() {
	const uid = sessionUserId();
	const t = load();
	const profile = t.profiles.find((p) => p.userId === uid) ?? null;
	if (!profile) return {
		profile: null,
		character: null,
		party: []
	};
	if (profile.role === "gm") return {
		profile,
		character: null,
		party: t.characters
	};
	return {
		profile,
		character: t.characters.find((c) => c.userId === uid) ?? null,
		party: []
	};
}
async function getLibrary() {
	return load().library;
}
async function chooseRole(role, displayName, character) {
	const uid = sessionUserId();
	const t = load();
	let p = t.profiles.find((x) => x.userId === uid);
	if (!p) {
		p = {
			userId: uid,
			role,
			displayName,
			avatarUrl: null
		};
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
async function gmUpdateIdentity(characterId, d) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	if (!c) throw new Error("Personagem não encontrado.");
	Object.assign(c, {
		name: d.name,
		race: d.race,
		className: d.className,
		age: d.age,
		backstory: d.backstory,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	});
	save(t);
}
async function updateNotes(characterId, notes) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	if (!c) throw new Error("Personagem não encontrado.");
	c.notes = notes;
	save(t);
}
async function updateMyAvatar(avatar) {
	const uid = sessionUserId();
	const t = load();
	const p = t.profiles.find((x) => x.userId === uid);
	if (p) p.avatarUrl = avatar;
	save(t);
}
async function spendPoints(characterId, alloc) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	if (!c) throw new Error("Personagem não encontrado.");
	const spent = Object.keys(alloc).reduce((sum, k) => sum + Math.max(0, Math.floor(Number(alloc[k] ?? 0))), 0);
	if (spent <= 0) return;
	if (spent > c.unspentPoints) throw new Error("Pontos insuficientes.");
	Object.keys(alloc).forEach((k) => {
		const n = Math.max(0, Math.floor(Number(alloc[k] ?? 0)));
		if (n) c[k] += n;
	});
	c.unspentPoints = Math.max(0, c.unspentPoints - spent);
	c.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	save(t);
}
async function gmSetStats(characterId, s) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	if (!c) throw new Error("Personagem não encontrado.");
	c.strength = s.strength;
	c.agility = s.agility;
	c.resistance = s.resistance;
	c.intelligence = s.intelligence;
	c.presence = s.presence;
	c.unspentPoints = Math.max(0, Math.floor(Number(s.unspent)));
	c.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	save(t);
}
async function gmGrantPoints(characterId, amount) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	if (!c) throw new Error("Personagem não encontrado.");
	c.unspentPoints = Math.max(0, c.unspentPoints + Math.max(0, Math.floor(Number(amount))));
	c.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	save(t);
}
async function gmUpdateVitals(characterId, v) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	if (!c) throw new Error("Personagem não encontrado.");
	Object.assign(c, v);
	save(t);
}
async function gmCreateCharacter(d) {
	const uid = sessionUserId();
	const t = load();
	const c = emptyChar(t, null, uid, d);
	c.userId = null;
	giveGear(t, c);
	t.characters.push(c);
	save(t);
	return {
		id: c.id,
		name: c.name
	};
}
async function gmDeleteCharacter(characterId) {
	const t = load();
	t.characters = t.characters.filter((c) => c.id !== characterId);
	save(t);
}
async function addItem(characterId, item) {
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
		equippedSlot: null
	});
	save(t);
}
async function removeItem(itemId) {
	const t = load();
	for (const c of t.characters) c.inventory = c.inventory.filter((i) => i.id !== itemId);
	save(t);
}
async function equipItem(itemId, slot) {
	const t = load();
	for (const c of t.characters) {
		const item = c.inventory.find((i) => i.id === itemId);
		if (!item?.equipment) continue;
		if (!slotAccepts(item.equipment.category, slot)) throw new Error("Este equipamento não cabe neste encaixe.");
		const occupant = c.inventory.find((i) => i.equippedSlot === slot);
		if (occupant) occupant.equippedSlot = null;
		item.equippedSlot = slot;
		save(t);
		return;
	}
	throw new Error("Item não encontrado.");
}
async function unequipItem(itemId) {
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
async function gmGiveEquipment(characterId, equipmentId) {
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
		equippedSlot: null
	});
	save(t);
}
async function saveLibraryEntry(table, id, values) {
	const t = load();
	if (table === "equipment") {
		if (id) {
			const row = t.library.equipment.find((e) => e.id === id);
			if (row) Object.assign(row, values);
		} else t.library.equipment.push({
			id: nid(t),
			name: String(values.name ?? "Novo"),
			icon: String(values.icon ?? "sword"),
			category: values.category ?? "arma",
			rarity: values.rarity ?? "comum",
			description: String(values.description ?? ""),
			effects: String(values.effects ?? ""),
			modifiers: values.modifiers ?? {}
		});
	} else if (table === "effects") {
		if (id) {
			const row = t.library.effects.find((e) => e.id === id);
			if (row) Object.assign(row, values);
		} else t.library.effects.push({
			id: nid(t),
			kind: values.kind ?? "buff",
			name: String(values.name ?? "Novo"),
			icon: String(values.icon ?? "sparkles"),
			color: String(values.color ?? "#7fa065"),
			description: String(values.description ?? ""),
			modifiers: values.modifiers ?? {}
		});
	} else if (id) {
		const row = t.library.conditions.find((e) => e.id === id);
		if (row) Object.assign(row, values);
	} else t.library.conditions.push({
		id: nid(t),
		name: String(values.name ?? "Novo"),
		icon: String(values.icon ?? "blood"),
		color: String(values.color ?? "#d0564d"),
		description: String(values.description ?? ""),
		effect: String(values.effect ?? ""),
		modifiers: values.modifiers ?? {}
	});
	save(t);
}
async function deleteLibraryEntry(table, id) {
	const t = load();
	if (table === "equipment") t.library.equipment = t.library.equipment.filter((e) => e.id !== id);
	if (table === "effects") t.library.effects = t.library.effects.filter((e) => e.id !== id);
	if (table === "conditions") t.library.conditions = t.library.conditions.filter((e) => e.id !== id);
	save(t);
}
async function applyEffect(characterId, effectId, duration) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	const effect = t.library.effects.find((e) => e.id === effectId);
	if (!c || !effect) throw new Error("Não encontrado.");
	c.effects.push({
		id: nid(t),
		duration,
		effect
	});
	save(t);
}
async function removeAppliedEffect(id) {
	const t = load();
	for (const c of t.characters) c.effects = c.effects.filter((e) => e.id !== id);
	save(t);
}
async function applyCondition(characterId, conditionId, duration) {
	const t = load();
	const c = t.characters.find((x) => x.id === characterId);
	const condition = t.library.conditions.find((e) => e.id === conditionId);
	if (!c || !condition) throw new Error("Não encontrado.");
	c.conditions.push({
		id: nid(t),
		duration,
		condition
	});
	save(t);
}
async function removeAppliedCondition(id) {
	const t = load();
	for (const c of t.characters) c.conditions = c.conditions.filter((e) => e.id !== id);
	save(t);
}
function mapRoll(r) {
	return r;
}
async function rollD20() {
	const s = readDevSession();
	if (!s) throw new Error("Não autenticado.");
	const t = load();
	const roll = {
		id: nid(t),
		userId: s.userId,
		rollerName: s.nick,
		value: 1 + Math.floor(Math.random() * 20),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	t.rolls.unshift(roll);
	t.rolls = t.rolls.slice(0, 16);
	save(t);
	return roll;
}
async function recentRolls() {
	return load().rolls.slice(0, 8);
}
var sword_default = "/assets/sword-Dz0w5IrY.webp";
var dagger_default = "/assets/dagger-Cszl2IvC.webp";
var axe_default = "/assets/axe-D1L9PbMK.webp";
var bow_default = "/assets/bow-CYEjEoE1.webp";
var shield_default = "/assets/shield-ksdh0cXq.webp";
var helmet_default = "/assets/helmet-DX8hzhek.webp";
var armor_default = "/assets/armor-DdQTLRBX.webp";
var pants_default = "/assets/pants-CgOwfYX4.webp";
var boot_default = "/assets/boot-vjt71tlN.webp";
var ring_default = "/assets/ring-CStPd4Q7.webp";
var potion_default = "/assets/potion-DTTOx6TD.webp";
var scroll_default = "/assets/scroll-BmKIrnNr.webp";
var bag_default = "/assets/bag-DivnRDuU.webp";
var gem_default = "/assets/gem-DNAby9Pk.webp";
var muscle_default = "/assets/muscle-DMk8RmSf.webp";
var aegis_default = "/assets/aegis-B0mjxyIy.webp";
var sparkles_default = "/assets/sparkles-B-ZgzqXa.webp";
var flame_default = "/assets/flame-BPv1Q5Cl.webp";
var frost_default = "/assets/frost-COGr2vxs.webp";
var heart_default = "/assets/heart-DT-PQbW9.webp";
var droplet_default = "/assets/droplet-CvMV3ufi.webp";
var blood_default = "/assets/blood-u71K2K4V.webp";
var bone_default = "/assets/bone-BovbT7OH.webp";
var stun_default = "/assets/stun-Ck8oRWU-.webp";
var poison_default = "/assets/poison-Bw34oNnx.webp";
var wilt_default = "/assets/wilt-CxaUGVla.webp";
var ICON_CATEGORIES = [
	{
		key: "equipment",
		label: "Equipamentos"
	},
	{
		key: "effect",
		label: "Buffs e Debuffs"
	},
	{
		key: "condition",
		label: "Condições"
	}
];
var ICON_CATEGORY_LABEL = {
	equipment: "Equipamento",
	effect: "Buff / Debuff",
	condition: "Condição"
};
var BUILTIN_ICONS = [
	{
		key: "sword",
		label: "Espada",
		category: "equipment",
		src: sword_default
	},
	{
		key: "dagger",
		label: "Adaga",
		category: "equipment",
		src: dagger_default
	},
	{
		key: "axe",
		label: "Machado",
		category: "equipment",
		src: axe_default
	},
	{
		key: "bow",
		label: "Arco",
		category: "equipment",
		src: bow_default
	},
	{
		key: "shield",
		label: "Escudo",
		category: "equipment",
		src: shield_default
	},
	{
		key: "helmet",
		label: "Elmo",
		category: "equipment",
		src: helmet_default
	},
	{
		key: "armor",
		label: "Armadura",
		category: "equipment",
		src: armor_default
	},
	{
		key: "pants",
		label: "Grevas",
		category: "equipment",
		src: pants_default
	},
	{
		key: "boot",
		label: "Bota",
		category: "equipment",
		src: boot_default
	},
	{
		key: "ring",
		label: "Anel",
		category: "equipment",
		src: ring_default
	},
	{
		key: "potion",
		label: "Poção",
		category: "equipment",
		src: potion_default
	},
	{
		key: "scroll",
		label: "Pergaminho",
		category: "equipment",
		src: scroll_default
	},
	{
		key: "bag",
		label: "Bolsa",
		category: "equipment",
		src: bag_default
	},
	{
		key: "gem",
		label: "Gema",
		category: "equipment",
		src: gem_default
	},
	{
		key: "muscle",
		label: "Vigor",
		category: "effect",
		src: muscle_default
	},
	{
		key: "aegis",
		label: "Proteção",
		category: "effect",
		src: aegis_default
	},
	{
		key: "sparkles",
		label: "Arcano",
		category: "effect",
		src: sparkles_default
	},
	{
		key: "flame",
		label: "Chama",
		category: "effect",
		src: flame_default
	},
	{
		key: "frost",
		label: "Gelo",
		category: "effect",
		src: frost_default
	},
	{
		key: "heart",
		label: "Vida",
		category: "effect",
		src: heart_default
	},
	{
		key: "droplet",
		label: "Gota",
		category: "effect",
		src: droplet_default
	},
	{
		key: "blood",
		label: "Sangramento",
		category: "condition",
		src: blood_default
	},
	{
		key: "bone",
		label: "Fratura",
		category: "condition",
		src: bone_default
	},
	{
		key: "stun",
		label: "Atordoado",
		category: "condition",
		src: stun_default
	},
	{
		key: "poison",
		label: "Veneno",
		category: "condition",
		src: poison_default
	},
	{
		key: "wilt",
		label: "Definhar",
		category: "condition",
		src: wilt_default
	}
];
var FALLBACK_ICON = sparkles_default;
var builtinIconByKey = new Map(BUILTIN_ICONS.map((icon) => [icon.key, icon]));
var customIcons = [];
var customIconByKey = /* @__PURE__ */ new Map();
var hiddenBuiltinKeys = /* @__PURE__ */ new Set();
var listeners = /* @__PURE__ */ new Set();
function getCustomIcons() {
	return customIcons;
}
function subscribeCustomIcons(fn) {
	listeners.add(fn);
	return () => listeners.delete(fn);
}
function notify() {
	for (const fn of listeners) fn();
}
function setCustomIcons(next) {
	customIcons = next;
	customIconByKey = new Map(next.map((icon) => [icon.key, icon]));
	notify();
}
function setHiddenBuiltinKeys(next) {
	hiddenBuiltinKeys = next;
	notify();
}
function resolveIconSrc(name) {
	const key = name ?? "";
	if (hiddenBuiltinKeys.has(key)) return FALLBACK_ICON;
	return builtinIconByKey.get(key)?.src ?? customIconByKey.get(key)?.src ?? FALLBACK_ICON;
}
function allIcons() {
	return [...BUILTIN_ICONS.filter((icon) => !hiddenBuiltinKeys.has(icon.key)), ...customIcons];
}
async function fetchCustomIcons() {
	return getCustomIcons();
}
async function createCustomIcon(input) {
	const key = `custom_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
	setCustomIcons([...customIcons, {
		key,
		label: input.label.slice(0, 40),
		category: input.category,
		src: input.dataUrl,
		custom: true
	}]);
	return key;
}
async function deleteCustomIcon(key) {
	if (builtinIconByKey.has(key)) {
		setHiddenBuiltinKeys(/* @__PURE__ */ new Set([...hiddenBuiltinKeys, key]));
		return;
	}
	setCustomIcons(customIcons.filter((icon) => icon.key !== key));
}
var ICON_CONTENT_SIZE = 224;
async function normalizeIconFile(file) {
	const bitmapUrl = URL.createObjectURL(file);
	try {
		const img = await new Promise((resolve, reject) => {
			const el = new Image();
			el.onload = () => resolve(el);
			el.onerror = () => reject(/* @__PURE__ */ new Error("Não foi possível ler esta imagem."));
			el.src = bitmapUrl;
		});
		const sourceCanvas = document.createElement("canvas");
		sourceCanvas.width = img.naturalWidth;
		sourceCanvas.height = img.naturalHeight;
		const sourceCtx = sourceCanvas.getContext("2d", { willReadFrequently: true });
		if (!sourceCtx) throw new Error("Não foi possível processar a imagem.");
		sourceCtx.drawImage(img, 0, 0);
		const pixels = sourceCtx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height).data;
		let left = sourceCanvas.width;
		let top = sourceCanvas.height;
		let right = -1;
		let bottom = -1;
		for (let y = 0; y < sourceCanvas.height; y += 1) for (let x = 0; x < sourceCanvas.width; x += 1) if ((pixels[(y * sourceCanvas.width + x) * 4 + 3] ?? 0) > 12) {
			left = Math.min(left, x);
			top = Math.min(top, y);
			right = Math.max(right, x);
			bottom = Math.max(bottom, y);
		}
		if (right < left || bottom < top) throw new Error("A imagem está vazia.");
		const sourceWidth = right - left + 1;
		const sourceHeight = bottom - top + 1;
		const scale = Math.min(ICON_CONTENT_SIZE / sourceWidth, ICON_CONTENT_SIZE / sourceHeight);
		const drawWidth = sourceWidth * scale;
		const drawHeight = sourceHeight * scale;
		const drawX = (256 - drawWidth) / 2;
		const drawY = (256 - drawHeight) / 2;
		const canvas = document.createElement("canvas");
		canvas.width = 256;
		canvas.height = 256;
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("Não foi possível processar a imagem.");
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";
		ctx.drawImage(sourceCanvas, left, top, sourceWidth, sourceHeight, drawX, drawY, drawWidth, drawHeight);
		const dataUrl = canvas.toDataURL("image/webp", .76);
		return dataUrl.startsWith("data:image/webp") ? dataUrl : canvas.toDataURL("image/png");
	} finally {
		URL.revokeObjectURL(bitmapUrl);
	}
}
function useSession() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [isPending, setPending] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const sync = () => {
			setSession(readDevSession());
			setPending(false);
		};
		sync();
		return subscribeDevSession(sync);
	}, []);
	return {
		session,
		user: session ? {
			id: session.userId,
			email: `${session.nick}@mesa.local`,
			user_metadata: { name: session.nick }
		} : null,
		isPending
	};
}
function useRpgState(enabled = true) {
	return useQuery({
		queryKey: ["rpg-state"],
		queryFn: getMyState,
		enabled
	});
}
function useLibrary() {
	return useQuery({
		queryKey: ["rpg-library"],
		queryFn: getLibrary
	});
}
function useCustomIcons() {
	return useQuery({
		queryKey: ["custom-icons"],
		queryFn: fetchCustomIcons
	});
}
function useTableSync() {
	const qc = useQueryClient();
	(0, import_react.useEffect)(() => {
		const onStorage = (e) => {
			if (e.key === "mesa-dev-table") {
				qc.invalidateQueries({ queryKey: ["rpg-state"] });
				qc.invalidateQueries({ queryKey: ["rpg-library"] });
			}
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, [qc]);
}
var ACCEPTED = [
	"image/png",
	"image/jpeg",
	"image/webp"
];
var MAX_INPUT_BYTES = 5242880;
var OUTPUT_SIZE = 256;
/** Reads an image file, center-crops it square and resizes to 256px JPEG. */
async function fileToAvatarDataUrl(file) {
	const url = URL.createObjectURL(file);
	try {
		const img = await new Promise((resolve, reject) => {
			const el = new Image();
			el.onload = () => resolve(el);
			el.onerror = () => reject(/* @__PURE__ */ new Error("Não foi possível ler a imagem."));
			el.src = url;
		});
		const side = Math.min(img.naturalWidth, img.naturalHeight);
		const sx = (img.naturalWidth - side) / 2;
		const sy = (img.naturalHeight - side) / 2;
		const canvas = document.createElement("canvas");
		canvas.width = OUTPUT_SIZE;
		canvas.height = OUTPUT_SIZE;
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("Seu navegador não suporta o recorte da imagem.");
		ctx.drawImage(img, sx, sy, side, side, 0, 0, OUTPUT_SIZE, OUTPUT_SIZE);
		return canvas.toDataURL("image/jpeg", .85);
	} finally {
		URL.revokeObjectURL(url);
	}
}
function ProfileAvatar({ profile, size = "md", className }) {
	const dims = size === "lg" ? "size-16 text-xl" : size === "sm" ? "size-8 text-sm" : "size-10 text-base";
	const initial = (profile.displayName ?? "?").trim().charAt(0).toUpperCase() || "?";
	return profile.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: profile.avatarUrl,
		alt: profile.displayName ? `Foto de ${profile.displayName}` : "Foto de perfil",
		className: cn("shrink-0 rounded-full object-cover shadow-border", dims, className)
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid shrink-0 place-items-center rounded-full bg-elevated font-display text-muted shadow-border", dims, className),
		children: initial
	});
}
/** Header avatar: click to add/change the photo; menu to remove it. */
function AvatarEditor({ profile }) {
	const inputRef = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const queryClient = useQueryClient();
	const mut = useMutation({
		mutationFn: (avatar) => updateMyAvatar(avatar),
		onSuccess: (_res, avatar) => {
			toast.success(avatar ? "Foto de perfil atualizada." : "Foto de perfil removida.");
			queryClient.invalidateQueries({ queryKey: ["rpg-state"] });
			setOpen(false);
		},
		onError: (err) => toast.error(err.message)
	});
	async function onFile(file) {
		if (!file) return;
		if (!ACCEPTED.includes(file.type)) {
			toast.error("Formato não suportado. Use PNG, JPG ou WEBP.");
			return;
		}
		if (file.size > MAX_INPUT_BYTES) {
			toast.error("A imagem deve ter no máximo 5 MB.");
			return;
		}
		try {
			mut.mutate(await fileToAvatarDataUrl(file));
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Falha ao processar a imagem.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((v) => !v),
				disabled: mut.isPending,
				"aria-label": "Foto de perfil",
				className: "group relative block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileAvatar, {
					profile,
					size: "sm",
					className: mut.isPending ? "animate-pulse" : ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -right-1 -bottom-1 grid size-4 place-items-center rounded-full bg-primary text-primary-fg shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-2.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: ACCEPTED.join(","),
				className: "hidden",
				onChange: (e) => {
					onFile(e.target.files?.[0]);
					e.target.value = "";
				}
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-0 z-30 mt-2 grid w-52 gap-1 rounded-lg bg-elevated p-1.5 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => inputRef.current?.click(),
						className: "flex min-h-10 items-center gap-2 rounded-md px-2.5 text-left text-sm text-fg hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4 text-muted" }), profile.avatarUrl ? "Trocar foto" : "Adicionar foto"]
					}),
					profile.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => mut.mutate(null),
						className: "flex min-h-10 items-center gap-2 rounded-md px-2.5 text-left text-sm text-fg hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-muted" }), "Remover foto"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2.5 pt-1 pb-0.5 text-xs text-subtle",
						children: "PNG, JPG ou WEBP · até 5 MB"
					})
				]
			}) : null
		]
	});
}
function AppChrome({ children, roleLabel, profile }) {
	useTableSync();
	useCustomIcons();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-md bg-primary font-display text-xs text-primary-fg",
						children: "MA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base tracking-tight",
						children: APP_NAME
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs tracking-wide text-muted uppercase sm:block",
							children: roleLabel
						}),
						profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarEditor, { profile }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearanceSettings, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								clearDevSession();
								window.location.href = "/";
							},
							"aria-label": "Sair",
							className: "grid size-10 place-items-center rounded-md text-muted hover:bg-elevated hover:text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-6xl px-4 py-6 pb-24 sm:py-8",
			children
		})]
	});
}
function TabBar({ tabs, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden gap-1 rounded-xl bg-surface p-1 shadow-border sm:flex",
		children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange(tab.id),
			className: cn("flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg px-3 text-sm transition-colors duration-150", value === tab.id ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
			children: [tab.icon, tab.label]
		}, tab.id))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-bg/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-1",
			style: { gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` },
			children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(tab.id),
				className: cn("flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md text-xs", value === tab.id ? "text-fg" : "text-muted"),
				children: [tab.icon, tab.label]
			}, tab.id))
		})
	})] });
}
function LoadingScreen({ label = "Abrindo o grimório..." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto size-10 animate-pulse rounded-md bg-elevated" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: label
			})]
		})
	});
}
//#endregion
export { gmUpdateIdentity as A, saveLibraryEntry as B, equipItem as C, gmGiveEquipment as D, gmDeleteCharacter as E, removeAppliedCondition as F, useLibrary as G, subscribeCustomIcons as H, removeAppliedEffect as I, writeDevSession as J, useRpgState as K, removeItem as L, mapRoll as M, normalizeIconFile as N, gmGrantPoints as O, recentRolls as P, resolveIconSrc as R, ensureProfile as S, gmCreateCharacter as T, unequipItem as U, spendPoints as V, updateNotes as W, applyEffect as _, DialogContent as a, deleteCustomIcon as b, DialogTitle as c, LoadingScreen as d, ProfileAvatar as f, applyCondition as g, allIcons as h, Dialog as i, gmUpdateVitals as j, gmSetStats as k, ICON_CATEGORIES as l, addItem as m, AppearanceSettings as n, DialogDescription as o, TabBar as p, useSession as q, BUILTIN_ICONS as r, DialogHeader as s, AppChrome as t, ICON_CATEGORY_LABEL as u, chooseRole as v, getCustomIcons as w, deleteLibraryEntry as x, createCustomIcon as y, rollD20 as z };
