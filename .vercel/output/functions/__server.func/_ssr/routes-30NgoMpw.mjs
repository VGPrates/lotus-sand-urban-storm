import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as Button, n as APP_TAGLINE, t as APP_NAME } from "./button-DAk3Wu8A.mjs";
import { b as Navigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as useRpgState, d as LoadingScreen, n as AppearanceSettings, q as useSession } from "./app-chrome-DwMabm_R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-30NgoMpw.js
var import_jsx_runtime = require_jsx_runtime();
var knight_campfire_default = "/assets/knight-campfire-CwXu4dxW.jpg";
var SPARKS = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampfireScene, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 right-3 z-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearanceSettings, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in grid max-w-xl gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.28em] text-muted uppercase",
							children: "Fantasia medieval"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl leading-[1.05] font-medium sm:text-6xl",
							children: APP_NAME
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-lg text-muted",
							children: APP_TAGLINE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base text-muted",
							children: "Fichas, inventário, o D20 e o olhar do Mestre — tudo na mesma mesa. Jogadores cuidam da própria lenda. O mestre conduz o resto."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3 sm:flex-row",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: "Entrar na mesa"
								})
							})
						})
					]
				})
			})
		]
	});
}
function CampfireScene() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 select-none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: knight_campfire_default,
				alt: "",
				width: 1920,
				height: 1088,
				decoding: "async",
				fetchPriority: "high",
				className: "absolute inset-0 size-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "campfire-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "campfire-sparks",
				children: SPARKS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
					left: `${62 + i % 5 * 1.8}%`,
					animationDelay: `${i * 1.3}s`,
					animationDuration: `${6 + i % 4 * 1.6}s`
				} }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.86)_0%,rgb(0_0_0/0.62)_45%,transparent_78%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--color-bg),transparent)]" })
		]
	});
}
function Home() {
	const { user, isPending } = useSession();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedInHome, {});
}
function SignedInHome() {
	const { data, isPending, isError } = useRpgState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/login" });
	if (!data?.profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/onboarding" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: data.profile.role === "gm" ? "/mestre" : "/painel" });
}
//#endregion
export { Home as component };
