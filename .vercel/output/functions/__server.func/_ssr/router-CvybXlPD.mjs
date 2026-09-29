import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { S as useRouter, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { s as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CvybXlPD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var THEMES = [
	{
		id: "sombria",
		label: "Sombria",
		hint: "Carvão e sangue seco",
		swatch: [
			"#0c0a09",
			"#9a3b32",
			"#efe6d6"
		]
	},
	{
		id: "medieval",
		label: "Medieval",
		hint: "Pergaminho e madeira",
		swatch: [
			"#100d09",
			"#8a6a35",
			"#ecdfc4"
		]
	},
	{
		id: "arcano",
		label: "Arcano",
		hint: "Runas e éter violeta",
		swatch: [
			"#0a0912",
			"#7a5cc4",
			"#e4ddf7"
		]
	},
	{
		id: "infernal",
		label: "Infernal",
		hint: "Brasa e enxofre",
		swatch: [
			"#0f0806",
			"#c2440f",
			"#f6dcc6"
		]
	},
	{
		id: "gelido",
		label: "Gélido",
		hint: "Névoa e gelo antigo",
		swatch: [
			"#070b0f",
			"#3f7fa6",
			"#dceaf3"
		]
	},
	{
		id: "dourado",
		label: "Dourado",
		hint: "Salão real iluminado",
		swatch: [
			"#0d0b07",
			"#c9962f",
			"#f5ead0"
		]
	}
];
var AMBIENTS = [
	{
		id: "none",
		label: "Nenhum",
		hint: "Sem efeito de fundo"
	},
	{
		id: "embers",
		label: "Brasas",
		hint: "Fagulhas subindo devagar"
	},
	{
		id: "mist",
		label: "Névoa",
		hint: "Bruma lenta e baixa"
	}
];
var THEME_KEY = "ma.theme";
var AMBIENT_KEY = "ma.ambient";
var DEFAULT_THEME = "sombria";
var DEFAULT_AMBIENT = "none";
var g = globalThis;
var AppearanceContext = g.__maAppearanceCtx ??= (0, import_react.createContext)(null);
function isTheme(v) {
	return !!v && THEMES.some((t) => t.id === v);
}
function isAmbient(v) {
	return !!v && AMBIENTS.some((a) => a.id === v);
}
function AppearanceProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)(DEFAULT_THEME);
	const [ambient, setAmbientState] = (0, import_react.useState)(DEFAULT_AMBIENT);
	(0, import_react.useEffect)(() => {
		const storedTheme = window.localStorage.getItem(THEME_KEY);
		const storedAmbient = window.localStorage.getItem(AMBIENT_KEY);
		if (isTheme(storedTheme)) setThemeState(storedTheme);
		if (isAmbient(storedAmbient)) setAmbientState(storedAmbient);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset["theme"] = theme;
	}, [theme]);
	const setTheme = (0, import_react.useCallback)((id) => {
		setThemeState(id);
		window.localStorage.setItem(THEME_KEY, id);
	}, []);
	const setAmbient = (0, import_react.useCallback)((id) => {
		setAmbientState(id);
		window.localStorage.setItem(AMBIENT_KEY, id);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		ambient,
		setTheme,
		setAmbient
	}), [
		theme,
		ambient,
		setTheme,
		setAmbient
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearanceContext.Provider, {
		value,
		children
	});
}
function useAppearance() {
	const ctx = (0, import_react.useContext)(AppearanceContext);
	if (!ctx) throw new Error("useAppearance precisa estar dentro de AppearanceProvider");
	return ctx;
}
var EMBERS = [
	4,
	13,
	22,
	31,
	39,
	48,
	57,
	66,
	74,
	83,
	91,
	96
];
function AmbientLayer() {
	const { ambient } = useAppearance();
	if (ambient === "none") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ambient-layer",
		"aria-hidden": "true",
		children: [ambient === "mist" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ambient-mist ambient-mist--a" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ambient-mist ambient-mist--b" })] }), ambient === "embers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ambient-embers",
			children: EMBERS.map((left, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
				left: `${left}%`,
				animationDelay: `${i * 1.7 % 12}s`,
				animationDuration: `${11 + i % 5 * 2}s`
			} }, left))
		})]
	});
}
var styles_default = "/assets/styles-DGYhOfiM.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-bg px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Esse caminho não existe nesta mesa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm text-primary-fg",
						children: "Voltar"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	const message = error instanceof Error ? error.message : String(error ?? "Erro inesperado");
	(0, import_react.useEffect)(() => {
		console.error("Erro na rota:", error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-bg px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Esta página não carregou"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm text-primary-fg",
						children: "Tentar de novo"
					})
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "RPG Fallen Gods" },
			{
				name: "description",
				content: "Painel de RPG de fantasia medieval — fichas, inventário e o D20."
			},
			{
				name: "theme-color",
				content: "#0c0a09"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppearanceProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientLayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center",
				richColors: true
			})
		] })
	}) });
}
var $$splitComponentImporter$5 = () => import("./routes-30NgoMpw.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "RPG Fallen Gods — O grimório da sua mesa de RPG" },
		{
			name: "description",
			content: "Fichas, inventário, efeitos e o D20 compartilhado para a sua mesa de RPG de fantasia."
		},
		{
			property: "og:title",
			content: "RPG Fallen Gods — O grimório da sua mesa de RPG"
		},
		{
			property: "og:description",
			content: "Fichas, inventário, efeitos e o D20 compartilhado para a sua mesa de RPG de fantasia."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./login-ntF7o4kE.mjs");
var Route$4 = createFileRoute("/login")({
	validateSearch: (search) => search["mode"] === "signup" ? { mode: "signup" } : {},
	head: () => ({ meta: [{ title: "Entrar — RPG Fallen Gods" }, {
		name: "description",
		content: "Escolha um nick e entre como jogador ou mestre."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./mestre-CG9bzlxE.mjs");
var Route$3 = createFileRoute("/mestre")({
	head: () => ({ meta: [
		{ title: "Painel do Mestre — RPG Fallen Gods" },
		{
			name: "description",
			content: "Conduza a mesa: fichas, arsenal, buffs, condições e o D20."
		},
		{
			property: "og:title",
			content: "Painel do Mestre — RPG Fallen Gods"
		},
		{
			property: "og:description",
			content: "Conduza a mesa: fichas, arsenal, buffs, condições e o D20."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./onboarding-B15Pkc1v.mjs");
var Route$2 = createFileRoute("/onboarding")({
	head: () => ({ meta: [
		{ title: "Escolha seu papel — RPG Fallen Gods" },
		{
			name: "description",
			content: "Mestre ou jogador: escolha seu lugar na mesa e crie sua ficha."
		},
		{
			property: "og:title",
			content: "Escolha seu papel — RPG Fallen Gods"
		},
		{
			property: "og:description",
			content: "Mestre ou jogador: escolha seu lugar na mesa e crie sua ficha."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./painel-Bd0lsvOd.mjs");
var Route$1 = createFileRoute("/painel")({
	head: () => ({ meta: [
		{ title: "Painel do jogador — RPG Fallen Gods" },
		{
			name: "description",
			content: "Sua ficha, atributos, equipamentos e o D20 da mesa."
		},
		{
			property: "og:title",
			content: "Painel do jogador — RPG Fallen Gods"
		},
		{
			property: "og:description",
			content: "Sua ficha, atributos, equipamentos e o D20 da mesa."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./recuperar-senha-BgR7oCEf.mjs");
var Route = createFileRoute("/recuperar-senha")({
	head: () => ({ meta: [
		{ title: "Recuperar senha — RPG Fallen Gods" },
		{
			name: "description",
			content: "Recupere o acesso à sua conta e defina uma nova senha."
		},
		{
			property: "og:title",
			content: "Recuperar senha — RPG Fallen Gods"
		},
		{
			property: "og:description",
			content: "Recupere o acesso à sua conta e defina uma nova senha."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	LoginRoute: Route$4.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$6
	}),
	MestreRoute: Route$3.update({
		id: "/mestre",
		path: "/mestre",
		getParentRoute: () => Route$6
	}),
	OnboardingRoute: Route$2.update({
		id: "/onboarding",
		path: "/onboarding",
		getParentRoute: () => Route$6
	}),
	PainelRoute: Route$1.update({
		id: "/painel",
		path: "/painel",
		getParentRoute: () => Route$6
	}),
	RecuperarSenhaRoute: Route.update({
		id: "/recuperar-senha",
		path: "/recuperar-senha",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useAppearance as i, AMBIENTS as n, THEMES as r, router_exports as t };
