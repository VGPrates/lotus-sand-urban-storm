import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { h as cn, i as Button, t as APP_NAME } from "./button-DAk3Wu8A.mjs";
import { b as Navigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as writeDevSession, S as ensureProfile, d as LoadingScreen, q as useSession } from "./app-chrome-DwMabm_R.mjs";
import { a as Input, i as CardTitle, n as CardDescription, o as Label, r as CardHeader, t as Card } from "./label-u3lZHMsn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-ntF7o4kE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { user, isPending } = useSession();
	const [role, setRole] = (0, import_react.useState)("player");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	function onEnter(event) {
		event.preventDefault();
		setError(null);
		const form = new FormData(event.currentTarget);
		const nick = String(form.get("nick") ?? "").trim();
		if (nick.length < 2) {
			setError("Escolha um nick com pelo menos 2 letras.");
			return;
		}
		setBusy(true);
		const slug = nick.toLowerCase().replace(/\s+/g, "-").slice(0, 24);
		const userId = `dev-${role}-${slug}`;
		writeDevSession({
			userId,
			nick,
			role
		});
		ensureProfile(role, nick, userId);
		window.location.href = role === "gm" ? "/mestre" : "/painel";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.24em] text-muted uppercase",
							children: APP_NAME
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-2xl",
							children: "Entrar na mesa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Modo de testes: só nick e papel. Sem senha, email ou cadastro." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-5",
					onSubmit: onEnter,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "nick",
								children: "Nick"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "nick",
								name: "nick",
								required: true,
								autoComplete: "nickname",
								placeholder: "Seu nome na mesa",
								maxLength: 32
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "Entrar como"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RolePick, {
									title: "Jogador",
									body: "Ficha, inventário e o D20.",
									selected: role === "player",
									onSelect: () => setRole("player")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RolePick, {
									title: "Mestre",
									body: "Conduz a mesa e as fichas.",
									selected: role === "gm",
									onSelect: () => setRole("gm")
								})]
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-hp-bright",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							children: busy ? "Abrindo..." : "Entrar"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-subtle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "underline-offset-4 hover:text-fg hover:underline",
						children: "Voltar"
					})
				})
			]
		})
	});
}
function RolePick({ title, body, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("rounded-xl bg-elevated p-3 text-left shadow-border transition-[box-shadow] duration-150", selected ? "ring-1 ring-ring/50 shadow-border-hover" : "hover:shadow-border-hover"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-base",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted",
			children: body
		})]
	});
}
//#endregion
export { Login as component };
