import "../_runtime.mjs";
import { b as require_react, v as Slot, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var APP_NAME = "RPG Fallen Gods";
var APP_TAGLINE = "O grimório da sua mesa de RPG";
var RACES = [
	"Humano",
	"Elfo",
	"Anão",
	"Orc",
	"Halfling",
	"Tiefling",
	"Draconato",
	"Meio-Elfo",
	"Meio-Orc",
	"Gnomo"
];
var CLASSES = [
	"Guerreiro",
	"Mago",
	"Ladino",
	"Clérigo",
	"Ranger",
	"Bárbaro",
	"Paladino",
	"Bardo",
	"Druida",
	"Feiticeiro",
	"Bruxo",
	"Monge"
];
var STATS = [
	{
		key: "strength",
		label: "Força",
		short: "FOR",
		hint: "Golpes, carga e poder bruto"
	},
	{
		key: "agility",
		label: "Agilidade",
		short: "AGI",
		hint: "Reflexo, furtividade e pontaria"
	},
	{
		key: "resistance",
		label: "Resistência",
		short: "RES",
		hint: "Fôlego, veneno e dor"
	},
	{
		key: "intelligence",
		label: "Inteligência",
		short: "INT",
		hint: "Magia, estudo e engenho"
	},
	{
		key: "presence",
		label: "Presença",
		short: "PRE",
		hint: "Carisma, intimidação e fé"
	}
];
var BODY_SLOTS = [
	{
		key: "cabeca",
		label: "Cabeça",
		icon: "helmet"
	},
	{
		key: "acessorio",
		label: "Acessório",
		icon: "ring"
	},
	{
		key: "torso",
		label: "Corpo",
		icon: "armor"
	},
	{
		key: "mao_direita",
		label: "Mão direita",
		icon: "sword"
	},
	{
		key: "mao_esquerda",
		label: "Mão esquerda",
		icon: "shield"
	},
	{
		key: "pernas",
		label: "Pernas",
		icon: "pants"
	},
	{
		key: "pe_direito",
		label: "Pé direito",
		icon: "boot"
	},
	{
		key: "pe_esquerdo",
		label: "Pé esquerdo",
		icon: "boot"
	}
];
var SLOT_LABEL = Object.fromEntries(BODY_SLOTS.map((s) => [s.key, s.label]));
var CATEGORIES = [
	{
		key: "elmo",
		label: "Elmo / Capacete",
		slots: ["cabeca"],
		where: "Cabeça"
	},
	{
		key: "armadura",
		label: "Armadura",
		slots: ["torso"],
		where: "Corpo"
	},
	{
		key: "calca",
		label: "Calça / Grevas",
		slots: ["pernas"],
		where: "Pernas"
	},
	{
		key: "arma",
		label: "Arma",
		slots: ["mao_direita", "mao_esquerda"],
		where: "Mãos"
	},
	{
		key: "escudo",
		label: "Escudo",
		slots: ["mao_direita", "mao_esquerda"],
		where: "Mãos"
	},
	{
		key: "bota",
		label: "Botas",
		slots: ["pe_direito", "pe_esquerdo"],
		where: "Pés"
	},
	{
		key: "acessorio",
		label: "Acessório",
		slots: ["acessorio"],
		where: "Acessório"
	}
];
var CATEGORY = Object.fromEntries(CATEGORIES.map((c) => [c.key, c]));
function slotAccepts(category, slot) {
	return CATEGORY[category]?.slots.includes(slot) ?? false;
}
var RARITIES = [
	{
		key: "comum",
		label: "Comum",
		text: "text-rarity-comum",
		ring: "ring-rarity-comum/40",
		glow: ""
	},
	{
		key: "incomum",
		label: "Incomum",
		text: "text-rarity-incomum",
		ring: "ring-rarity-incomum/60",
		glow: ""
	},
	{
		key: "raro",
		label: "Raro",
		text: "text-rarity-raro",
		ring: "ring-rarity-raro/70",
		glow: "shadow-[0_0_14px_-4px_var(--color-rarity-raro)]"
	},
	{
		key: "epico",
		label: "Épico",
		text: "text-rarity-epico",
		ring: "ring-rarity-epico/80",
		glow: "shadow-[0_0_16px_-3px_var(--color-rarity-epico)]"
	},
	{
		key: "lendario",
		label: "Lendário",
		text: "text-rarity-lendario",
		ring: "ring-rarity-lendario",
		glow: "rarity-legendary"
	}
];
var RARITY = Object.fromEntries(RARITIES.map((r) => [r.key, r]));
var ITEM_KINDS = [{
	key: "item",
	label: "Itens"
}, {
	key: "belonging",
	label: "Pertences"
}];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-border hover:bg-primary/90",
			outline: "bg-transparent text-fg shadow-border hover:bg-elevated hover:shadow-border-hover",
			ghost: "bg-transparent text-fg hover:bg-elevated",
			secondary: "bg-elevated text-fg shadow-border hover:bg-elevated/80",
			destructive: "bg-hp text-fg hover:bg-hp/90"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-6",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { CATEGORIES as a, ITEM_KINDS as c, RARITY as d, SLOT_LABEL as f, slotAccepts as g, cn as h, Button as i, RACES as l, buttonVariants as m, APP_TAGLINE as n, CATEGORY as o, STATS as p, BODY_SLOTS as r, CLASSES as s, APP_NAME as t, RARITIES as u };
