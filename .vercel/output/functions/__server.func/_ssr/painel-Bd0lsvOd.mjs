import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Dices, E as Backpack, f as ScrollText } from "../_libs/lucide-react.mjs";
import { C as equipItem, K as useRpgState, U as unequipItem, V as spendPoints, W as updateNotes, d as LoadingScreen, f as ProfileAvatar, p as TabBar, q as useSession, t as AppChrome } from "./app-chrome-DwMabm_R.mjs";
import { i as CardTitle, n as CardDescription, r as CardHeader, t as Card } from "./label-u3lZHMsn.mjs";
import { n as LockedIdentity } from "./character-form-DOAnAMpH.mjs";
import { _ as VitalsBars, b as useAct, d as DiceRoller, f as EffectsList, g as StatsPanel, h as InventoryPanel, l as AttributeRadar, p as GameIcon, u as Badge, v as effectiveStats, x as useDiceToasts } from "./badge-CqVfvNuw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/painel-Bd0lsvOd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlayerPanel({ profile, character }) {
	const [tab, setTab] = (0, import_react.useState)("ficha");
	const { run, pending } = useAct();
	const stats = effectiveStats(character);
	useDiceToasts(profile.userId, tab === "dado");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppChrome, {
		roleLabel: "Jogador",
		profile,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileAvatar, {
							profile,
							size: "lg"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-muted uppercase",
								children: profile.displayName ?? "Aventureiro"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl",
								children: character.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted",
								children: [
									character.race,
									" · ",
									character.className,
									" · ",
									character.age,
									" anos"
								]
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5",
						children: [[...character.effects.map((e) => e.effect), ...character.conditions.map((c) => c.condition)].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							title: x.name,
							className: "grid size-11 place-items-center rounded-full shadow-border",
							style: {
								backgroundColor: `${x.color}33`,
								color: x.color
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
								name: x.icon,
								className: "size-8",
								title: x.name
							})
						}, i)), character.unspentPoints > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [character.unspentPoints, " pontos para distribuir"] }) : null]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBar, {
					value: tab,
					onChange: setTab,
					tabs: [
						{
							id: "ficha",
							label: "Ficha",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollText, { className: "size-4" })
						},
						{
							id: "dado",
							label: "D20",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, { className: "size-4" })
						},
						{
							id: "inventario",
							label: "Inventário",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "size-4" })
						}
					]
				}),
				tab === "ficha" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid content-start gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Poder atual" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Atributos com equipamentos, buffs e condições." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttributeRadar, { stats })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsPanel, {
							character,
							stats,
							canSpend: true,
							pending,
							onConfirm: (alloc) => run(() => spendPoints(character.id, alloc), "Distribuição confirmada.")
						}) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid content-start gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Vitalidade" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Somente o Mestre altera estas barras." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalsBars, { character })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Efeitos ativos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Aplicados pelo Mestre." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffectsList, {
								effects: character.effects,
								conditions: character.conditions
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Sua lenda" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Identidade permanente — apenas o Mestre pode corrigir." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockedIdentity, { character })] })
						]
					})]
				}) : null,
				tab === "dado" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-6 sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiceRoller, { myUserId: profile.userId })
				}) : null,
				tab === "inventario" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryPanel, {
					character,
					canEquipItems: true,
					canManageItems: false,
					canEditNotes: true,
					canRemoveEquipment: false,
					pending,
					onEquip: (id, slot) => run(() => equipItem(id, slot), "Equipado."),
					onUnequip: (id) => run(() => unequipItem(id)),
					onSaveNotes: (notes) => run(() => updateNotes(character.id, notes), "Anotações guardadas.")
				}) }) : null
			]
		})
	});
}
function PainelPage() {
	const { user, isPending: authPending } = useSession();
	const { data, isPending } = useRpgState(!!user);
	if (authPending || user && isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/login" });
	if (!data?.profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/onboarding" });
	if (data.profile.role === "gm") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/mestre" });
	if (!data.character) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Sua ficha ainda não foi encontrada."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerPanel, {
		profile: data.profile,
		character: data.character
	});
}
//#endregion
export { PainelPage as component };
