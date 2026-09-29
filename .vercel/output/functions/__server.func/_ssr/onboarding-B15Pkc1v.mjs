import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { h as cn, i as Button } from "./button-DAk3Wu8A.mjs";
import { b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { K as useRpgState, d as LoadingScreen, q as useSession, v as chooseRole } from "./app-chrome-DwMabm_R.mjs";
import { i as CardTitle, n as CardDescription, r as CardHeader, t as Card } from "./label-u3lZHMsn.mjs";
import { t as CharacterForm } from "./character-form-DOAnAMpH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding-B15Pkc1v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Onboarding() {
	const { user, isPending: authPending } = useSession();
	const { data, isPending } = useRpgState(!!user);
	const [role, setRole] = (0, import_react.useState)(null);
	const queryClient = useQueryClient();
	const createMut = useMutation({
		mutationFn: (payload) => chooseRole(payload.role, payload.displayName ?? "", payload.character),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["rpg-state"] });
			window.location.href = "/";
		},
		onError: (err) => toast.error(err.message)
	});
	if (authPending || user && isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/login" });
	if (data?.profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: data.profile.role === "gm" ? "/mestre" : "/painel" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto grid min-h-dvh max-w-2xl place-items-center px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.24em] text-muted uppercase",
						children: "Primeiro passo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-2xl",
						children: "Quem é você nesta mesa?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "O mestre vê todas as fichas. O jogador cria uma só — a sua — e vive por ela." })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleCard, {
						title: "Mestre da Mesa",
						body: "Conduz a campanha, altera vida e mana, entrega itens e concede pontos.",
						selected: role === "gm",
						onSelect: () => setRole("gm")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleCard, {
						title: "Jogador",
						body: "Preenche a ficha, gira o D20, cuida do inventário e gasta os pontos recebidos.",
						selected: role === "player",
						onSelect: () => setRole("player")
					})]
				}),
				role === "gm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						disabled: createMut.isPending,
						onClick: () => createMut.mutate({
							role: "gm",
							displayName: user.user_metadata?.["name"] ?? user.email ?? "Mestre"
						}),
						children: createMut.isPending ? "Abrindo a mesa..." : "Assumir o manto"
					})
				}) : null,
				role === "player" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Sua ficha"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterForm, {
						submitLabel: "Entrar no painel",
						pending: createMut.isPending,
						onSubmit: (draft) => createMut.mutate({
							role: "player",
							displayName: user.user_metadata?.["name"] ?? draft.name,
							character: draft
						})
					})]
				}) : null
			]
		})
	});
}
function RoleCard({ title, body, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("rounded-xl bg-elevated p-4 text-left shadow-border transition-[box-shadow,background-color] duration-150", selected ? "shadow-border-hover ring-1 ring-ring/40" : "hover:shadow-border-hover"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: body
		})]
	});
}
//#endregion
export { Onboarding as component };
