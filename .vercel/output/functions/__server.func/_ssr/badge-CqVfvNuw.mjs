import { r as __toESM } from "../_runtime.mjs";
import { a as Overlay2, b as require_react, c as Title2, i as Description2, n as Cancel, o as Portal2, r as Content2, s as Root2, t as Action, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { c as ITEM_KINDS, d as RARITY, f as SLOT_LABEL, g as slotAccepts, h as cn, i as Button, m as buttonVariants, o as CATEGORY, p as STATS, r as BODY_SLOTS } from "./button-DAk3Wu8A.mjs";
import { i as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { S as Droplet, b as Heart, c as Trash2, i as Volume2, n as X, r as VolumeX, t as Zap, x as GripVertical } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { H as subscribeCustomIcons, M as mapRoll, P as recentRolls, R as resolveIconSrc, h as allIcons, r as BUILTIN_ICONS, w as getCustomIcons, z as rollD20 } from "./app-chrome-DwMabm_R.mjs";
import { a as Input, o as Label } from "./label-u3lZHMsn.mjs";
import { a as ValueStepper, i as Textarea, r as Select } from "./character-form-DOAnAMpH.mjs";
import { t as supabase } from "./client-DjwEYBS_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-CqVfvNuw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Pentagon radar of the five attributes: base (outline) vs current effective (filled). */
function AttributeRadar({ stats }) {
	const values = STATS.map((s) => stats[s.key]);
	const top = Math.max(20, ...values.map((v) => Math.max(v.total, v.base)));
	const max = Math.ceil(top / 5) * 5;
	const cx = 110;
	const cy = 108;
	const R = 78;
	const point = (i, v) => {
		const a = -Math.PI / 2 + i * 2 * Math.PI / STATS.length;
		const r = Math.max(0, v) / max * R;
		return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
	};
	const poly = (fn) => STATS.map((_, i) => point(i, fn(i)).join(",")).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 220 220",
			className: "mx-auto w-full max-w-[320px]",
			role: "img",
			"aria-label": "Radar de atributos",
			children: [
				[
					.25,
					.5,
					.75,
					1
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: poly(() => max * f),
					fill: "none",
					className: "stroke-border",
					strokeWidth: "1"
				}, f)),
				STATS.map((_, i) => {
					const [x, y] = point(i, max);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: cx,
						y1: cy,
						x2: x,
						y2: y,
						className: "stroke-border",
						strokeWidth: "1"
					}, i);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: poly((i) => values[i].base),
					fill: "none",
					className: "stroke-muted/60",
					strokeWidth: "1.2",
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: poly((i) => values[i].total),
					className: "fill-primary/30 stroke-hp-bright",
					strokeWidth: "1.8",
					strokeLinejoin: "round",
					style: { transition: "all 400ms cubic-bezier(0.22,1,0.36,1)" }
				}),
				STATS.map((s, i) => {
					const [x, y] = point(i, values[i].total);
					const [lx, ly] = point(i, max * 1.2);
					const b = values[i].bonus;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: "3",
							className: "fill-hp-bright"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: lx,
							y: ly - 4,
							textAnchor: "middle",
							className: "fill-muted font-display",
							fontSize: "9",
							letterSpacing: "1",
							children: s.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
							x: lx,
							y: ly + 8,
							textAnchor: "middle",
							className: "fill-fg font-display",
							fontSize: "11",
							children: [values[i].total, b !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tspan", {
								className: b > 0 ? "fill-stamina-bright" : "fill-hp-bright",
								fontSize: "8",
								children: [" ", b > 0 ? `+${b}` : b]
							}) : null]
						})
					] }, s.key);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "flex justify-center gap-4 text-xs text-subtle",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-sm bg-primary/60" }), " Atual (com bônus)"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-0 w-3 border-t border-dashed border-muted" }), " Base"]
			})]
		})]
	});
}
var sharedCtx = null;
function ctx() {
	if (typeof window === "undefined") return null;
	const Ctor = window.AudioContext || window.webkitAudioContext;
	if (!Ctor) return null;
	if (!sharedCtx) sharedCtx = new Ctor();
	if (sharedCtx.state === "suspended") sharedCtx.resume();
	return sharedCtx;
}
function noiseBuffer(audio, duration) {
	const length = Math.floor(audio.sampleRate * duration);
	const buffer = audio.createBuffer(1, length, audio.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
	return buffer;
}
function tone(audio, freq, start, dur, type, gain, slideTo) {
	const osc = audio.createOscillator();
	const g = audio.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, start);
	if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, start + dur);
	g.gain.setValueAtTime(1e-4, start);
	g.gain.exponentialRampToValueAtTime(gain, start + .02);
	g.gain.exponentialRampToValueAtTime(1e-4, start + dur);
	osc.connect(g);
	g.connect(audio.destination);
	osc.start(start);
	osc.stop(start + dur + .05);
}
/** Resume the shared context inside a user gesture so later chimes are not blocked. */
function unlockAudio() {
	ctx();
}
/** Soft major chime — points landed. Call unlockAudio() in the same click first. */
function playPointsAppliedSound(muted) {
	if (muted) return;
	const audio = ctx();
	if (!audio) return;
	const t = audio.currentTime + .01;
	tone(audio, 392, t, .14, "sine", .045);
	tone(audio, 523, t + .07, .16, "sine", .05);
	tone(audio, 659, t + .14, .22, "triangle", .04);
	tone(audio, 784, t + .2, .32, "sine", .035);
}
function playDiceSound(value, muted) {
	if (muted) return;
	const audio = ctx();
	if (!audio) return;
	const t = audio.currentTime;
	const src = audio.createBufferSource();
	src.buffer = noiseBuffer(audio, .28);
	const filter = audio.createBiquadFilter();
	filter.type = "bandpass";
	filter.frequency.value = 900;
	filter.Q.value = .8;
	const g = audio.createGain();
	g.gain.setValueAtTime(.22, t);
	g.gain.exponentialRampToValueAtTime(1e-4, t + .32);
	src.connect(filter);
	filter.connect(g);
	g.connect(audio.destination);
	src.start(t);
	src.stop(t + .32);
	for (let i = 0; i < 5; i += 1) {
		const clickAt = t + .04 * i;
		tone(audio, 180 + Math.random() * 90, clickAt, .05, "triangle", .08);
	}
	const hit = t + .38;
	if (value === 1) {
		tone(audio, 90, hit, .7, "sawtooth", .12, 40);
		tone(audio, 70, hit + .08, .6, "square", .06, 36);
	} else if (value <= 8) tone(audio, 160, hit, .28, "triangle", .08, 90);
	else if (value <= 15) {
		tone(audio, 320, hit, .22, "sine", .1);
		tone(audio, 480, hit + .08, .18, "sine", .05);
	} else if (value < 20) {
		tone(audio, 440, hit, .28, "sine", .11);
		tone(audio, 660, hit + .1, .26, "triangle", .07);
		tone(audio, 880, hit + .18, .3, "sine", .05);
	} else {
		tone(audio, 523, hit, .45, "sine", .12);
		tone(audio, 659, hit + .08, .42, "sine", .1);
		tone(audio, 784, hit + .16, .5, "triangle", .08);
		tone(audio, 1046, hit + .24, .55, "sine", .06);
	}
}
function verdictFor(value) {
	if (value <= 1) return {
		value,
		tier: "crit-fail",
		title: "Falha crítica",
		flavor: "Os deuses viraram o rosto. Até a feijoada azedou na panela."
	};
	if (value <= 4) return {
		value,
		tier: "fail",
		title: "Desastre",
		flavor: "Tropeçou na própria capa. A taverna inteira viu."
	};
	if (value <= 8) return {
		value,
		tier: "feijoada",
		title: "Feijoada",
		flavor: "Não foi o suficiente. O destino serviu o prato do dia — morno."
	};
	if (value <= 11) return {
		value,
		tier: "close",
		title: "Raso",
		flavor: "Passou por um fio. A sorte ainda está indecisa."
	};
	if (value <= 15) return {
		value,
		tier: "good",
		title: "Honroso",
		flavor: "O aço cantou. Não é lenda, mas também não é vergonha."
	};
	if (value <= 19) return {
		value,
		tier: "great",
		title: "Deu bom",
		flavor: "A lâmina encontrou o alvo. Até o bardo vai lembrar."
	};
	return {
		value,
		tier: "crit",
		title: "Golpe lendário",
		flavor: "Os céus se abriram. Esta noite as crônicas ganham um capítulo."
	};
}
var TIER_CLASS = {
	"crit-fail": "bg-dice-crit-fail text-fg",
	fail: "bg-dice-fail text-fg",
	feijoada: "bg-dice-feijoada text-fg",
	close: "bg-dice-close text-fg",
	good: "bg-dice-good text-fg",
	great: "bg-dice-great text-fg",
	crit: "bg-dice-crit text-bg"
};
var SUSPENSE_MS = 2200;
/**
* Shared D20. The number is drawn by the server (roll_d20) and broadcast to
* every open panel; the animation here only dramatizes a result that is
* already fixed.
*/
function DiceRoller({ myUserId }) {
	const [current, setCurrent] = (0, import_react.useState)(null);
	const [rolling, setRolling] = (0, import_react.useState)(false);
	const [flicker, setFlicker] = (0, import_react.useState)(null);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [requesting, setRequesting] = (0, import_react.useState)(false);
	const seen = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const queue = (0, import_react.useRef)([]);
	const busy = (0, import_react.useRef)(false);
	const mutedRef = (0, import_react.useRef)(muted);
	mutedRef.current = muted;
	const playNext = (0, import_react.useCallback)(() => {
		const next = queue.current.shift();
		if (!next) {
			busy.current = false;
			return;
		}
		busy.current = true;
		setCurrent(next);
		setRolling(true);
		const flick = window.setInterval(() => setFlicker(1 + Math.floor(Math.random() * 20)), 80);
		window.setTimeout(() => playDiceSound(next.value, mutedRef.current), 1820);
		window.setTimeout(() => {
			window.clearInterval(flick);
			setFlicker(null);
			setRolling(false);
			setHistory((h) => [next, ...h.filter((x) => x.id !== next.id)].slice(0, 8));
			window.setTimeout(playNext, 900);
		}, SUSPENSE_MS);
	}, []);
	const enqueue = (0, import_react.useCallback)((roll) => {
		if (seen.current.has(roll.id)) return;
		seen.current.add(roll.id);
		queue.current.push(roll);
		if (!busy.current) playNext();
	}, [playNext]);
	(0, import_react.useEffect)(() => {
		recentRolls().then((rows) => {
			rows.forEach((r) => seen.current.add(r.id));
			setHistory(rows);
		});
		const channel = supabase.channel("dice-stage").on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: "dice_rolls"
		}, (p) => enqueue(mapRoll(p.new))).subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [enqueue]);
	async function roll() {
		setRequesting(true);
		try {
			enqueue(await rollD20());
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Falha ao rolar.");
		} finally {
			setRequesting(false);
		}
	}
	const verdict = current && !rolling ? verdictFor(current.value) : null;
	const mine = current?.userId === myUserId;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-lg gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Dado de vinte faces"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Toda a mesa vê cada lançamento, ao mesmo tempo."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon",
					"aria-label": muted ? "Ativar som" : "Silenciar",
					onClick: () => setMuted((v) => !v),
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative overflow-hidden rounded-xl bg-elevated px-6 py-10 text-center shadow-border", verdict?.tier === "crit-fail" && "animate-shake-x"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuneRing, { spinning: rolling }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mb-4 text-xs tracking-[0.2em] text-muted uppercase",
						children: current ? rolling ? `${mine ? "Você" : current.rollerName} está rolando…` : mine ? "Seu lançamento" : current.rollerName : "A mesa aguarda"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid size-36 place-items-center sm:size-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(D20Shape, { className: cn("absolute inset-0", rolling ? "animate-d20-tumble text-primary" : verdict ? "text-ring" : "text-muted/40") }, current?.id ?? "idle"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("relative grid size-16 place-items-center rounded-full font-display text-4xl tabular-nums sm:size-20 sm:text-5xl", rolling ? "text-fg/70 blur-[1px]" : verdict ? cn(TIER_CLASS[verdict.tier], "animate-number-pop") : "text-muted"),
							children: rolling ? flicker ?? "?" : current ? current.value : "—"
						}, `${current?.id}-${rolling}`)]
					}),
					verdict ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-6 grid gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl",
							children: verdict.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto max-w-sm text-sm text-muted",
							children: verdict.flavor
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mt-6 text-sm text-subtle",
						children: rolling ? "O osso ainda gira…" : "Nenhum julgamento ainda."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "lg",
				onClick: roll,
				disabled: requesting || rolling,
				children: requesting || rolling ? "Girando…" : "Girar o D20"
			}),
			history.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-muted uppercase",
					children: "Últimos lançamentos da mesa"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-2",
					children: history.map((entry) => {
						const v = verdictFor(entry.value);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-lg bg-surface px-3 py-2 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-9 place-items-center rounded-md font-display tabular-nums", TIER_CLASS[v.tier]),
									children: entry.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1 truncate text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: entry.userId === myUserId ? "Você" : entry.rollerName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [" · ", v.title]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
									className: "text-xs text-subtle tabular-nums",
									children: new Date(entry.createdAt).toLocaleTimeString("pt-BR", {
										hour: "2-digit",
										minute: "2-digit"
									})
								})
							]
						}, entry.id);
					})
				})]
			}) : null
		]
	});
}
/** Toasts rolls from other players when the dice tab isn't open. */
function useDiceToasts(myUserId, active) {
	const activeRef = (0, import_react.useRef)(active);
	activeRef.current = active;
	(0, import_react.useEffect)(() => {
		if (!myUserId) return;
		const channel = supabase.channel("dice-toasts").on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: "dice_rolls"
		}, (p) => {
			const r = mapRoll(p.new);
			if (r.userId === myUserId || activeRef.current) return;
			window.setTimeout(() => toast(`${r.rollerName} tirou ${r.value} — ${verdictFor(r.value).title}`), SUSPENSE_MS);
		}).subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [myUserId]);
}
function D20Shape({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "50,4 90,27 90,73 50,96 10,73 10,27",
					fill: "currentColor",
					fillOpacity: "0.08"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "50,22 76,66 24,66" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 4 L50 22 M90 27 L76 66 M10 27 L24 66 M50 96 L24 66 M50 96 L76 66 M10 27 L50 22 L90 27 M10 73 L24 66 M90 73 L76 66",
					strokeOpacity: "0.6"
				})
			]
		})
	});
}
function RuneRing({ spinning }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 200",
		className: cn("pointer-events-none absolute inset-3 m-auto text-muted/25", spinning && "animate-rune-spin"),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "100",
			cy: "100",
			r: "88",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1",
			strokeDasharray: "4 10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "100",
			cy: "100",
			r: "76",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "0.6"
		})]
	});
}
/** Base attributes + equipped items + buffs/debuffs + conditions. */
function effectiveStats(c) {
	const mods = [
		...c.inventory.filter((i) => i.equippedSlot && i.equipment).map((i) => i.equipment.modifiers),
		...c.effects.map((e) => e.effect.modifiers),
		...c.conditions.map((x) => x.condition.modifiers)
	];
	const out = {};
	for (const s of STATS) {
		const base = c[s.key];
		const bonus = mods.reduce((acc, m) => acc + (Number(m?.[s.key]) || 0), 0);
		out[s.key] = {
			base,
			bonus,
			total: Math.max(0, base + bonus)
		};
	}
	return out;
}
function formatModifiers(m) {
	return STATS.filter((s) => m?.[s.key]).map((s) => `${m[s.key] > 0 ? "+" : ""}${m[s.key]} ${s.short}`).join(" · ");
}
BUILTIN_ICONS.map((i) => i.key);
Object.fromEntries(BUILTIN_ICONS.map((i) => [i.key, i.label]));
/** Re-renders consumers whenever the GM's imported icons change. */
function useIconRegistry() {
	(0, import_react.useSyncExternalStore)(subscribeCustomIcons, getCustomIcons, () => getCustomIcons());
	return allIcons();
}
function useIconSrc(name) {
	return (0, import_react.useSyncExternalStore)(subscribeCustomIcons, () => resolveIconSrc(name), () => resolveIconSrc(name));
}
function GameIcon({ name, className, title, rarity, muted, ...rest }) {
	const src = useIconSrc(name);
	const [loadedSrc, setLoadedSrc] = (0, import_react.useState)(null);
	const loaded = loadedSrc === src;
	(0, import_react.useEffect)(() => {
		const image = new Image();
		image.src = src;
		if (image.complete) setLoadedSrc(src);
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: title ?? "",
		title,
		loading: "eager",
		decoding: "async",
		onLoad: () => setLoadedSrc(src),
		draggable: false,
		"data-game-icon": "",
		className: cn("fantasy-icon size-7 shrink-0 object-contain select-none", loaded ? "fantasy-icon--loaded" : "fantasy-icon--loading", rarity ? `fantasy-icon--${rarity}` : null, muted ? "fantasy-icon--muted" : null, className),
		"aria-hidden": title ? void 0 : true,
		...rest
	});
}
function EffectChip({ chip, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "group relative flex items-start gap-3 rounded-lg bg-elevated px-3 py-2.5 shadow-border",
		style: { boxShadow: `inset 3px 0 0 ${chip.color}, 0 0 0 1px rgb(239 230 214 / 0.08)` },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-12 shrink-0 place-items-center rounded-md",
				style: {
					backgroundColor: `${chip.color}26`,
					color: chip.color
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
					name: chip.icon,
					className: "size-9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex flex-wrap items-baseline gap-x-2 font-medium leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: chip.color },
							children: chip.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] tracking-[0.14em] text-subtle uppercase",
							children: chip.tag
						})]
					}),
					chip.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: chip.description
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-subtle",
						children: [chip.detail, chip.duration].filter(Boolean).join(" · ")
					})
				]
			}),
			onRemove ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onRemove,
				"aria-label": `Remover ${chip.name}`,
				className: "grid size-8 place-items-center rounded-md text-muted hover:bg-surface hover:text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}) : null
		]
	});
}
function EffectsList({ effects, conditions, onRemoveEffect, onRemoveCondition, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid gap-5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xs font-semibold tracking-[0.16em] text-muted uppercase",
				children: "Buffs e debuffs"
			}), effects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-subtle",
				children: "Nenhum efeito ativo."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: effects.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffectChip, {
					chip: {
						id: a.id,
						icon: a.effect.icon,
						name: a.effect.name,
						color: a.effect.color,
						description: a.effect.description,
						detail: formatModifiers(a.effect.modifiers),
						duration: a.duration,
						tag: a.effect.kind === "buff" ? "Buff" : "Debuff"
					},
					onRemove: onRemoveEffect ? () => onRemoveEffect(a.id) : void 0
				}, a.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-xs font-semibold tracking-[0.16em] text-muted uppercase",
				children: "Condições"
			}), conditions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-subtle",
				children: "Nenhuma condição."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: conditions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffectChip, {
					chip: {
						id: a.id,
						icon: a.condition.icon,
						name: a.condition.name,
						color: a.condition.color,
						description: a.condition.effect || a.condition.description,
						detail: formatModifiers(a.condition.modifiers),
						duration: a.duration,
						tag: "Condição"
					},
					onRemove: onRemoveCondition ? () => onRemoveCondition(a.id) : void 0
				}, a.id))
			})]
		})]
	});
}
/** Small wrapper: run an action, toast errors/success, refresh the table state. */
function useAct() {
	const qc = useQueryClient();
	const m = useMutation({
		mutationFn: async ({ fn }) => fn(),
		onSuccess: async (_d, v) => {
			if (v.ok) toast.success(v.ok);
			await Promise.all([qc.refetchQueries({ queryKey: ["rpg-state"] }), qc.refetchQueries({ queryKey: ["rpg-library"] })]);
		},
		onError: (err) => toast.error(err.message)
	});
	return {
		run: async (fn, ok) => {
			try {
				await m.mutateAsync({
					fn,
					ok
				});
				return true;
			} catch {
				return false;
			}
		},
		pending: m.isPending
	};
}
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
/** Figure box inside the HUD (percent of container). */
var FIG = {
	left: 32,
	width: 36,
	top: 4,
	height: 92
};
var toX = (fx) => FIG.left + fx / 120 * FIG.width;
var toY = (fy) => FIG.top + fy / 220 * FIG.height;
var LAYOUT = {
	cabeca: {
		side: "left",
		top: 11,
		anchor: [60, 18]
	},
	acessorio: {
		side: "right",
		top: 11,
		anchor: [60, 36]
	},
	torso: {
		side: "right",
		top: 32,
		anchor: [72, 78]
	},
	mao_direita: {
		side: "left",
		top: 48,
		anchor: [26, 128]
	},
	mao_esquerda: {
		side: "right",
		top: 48,
		anchor: [94, 128]
	},
	pernas: {
		side: "left",
		top: 68,
		anchor: [60, 148],
		fork: [[46, 168], [74, 168]]
	},
	pe_direito: {
		side: "left",
		top: 90,
		anchor: [46, 208]
	},
	pe_esquerdo: {
		side: "right",
		top: 90,
		anchor: [74, 208]
	}
};
var DRAG_MIME = "application/x-mesa-item";
var SILHOUETTE_SRC = `/references/equipment-silhouette.png`;
function Humanoid({ equipped, hover }) {
	const active = equipped.size > 0 || hover !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[8%] rounded-full bg-ring/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: SILHOUETTE_SRC,
			alt: "",
			className: cn("relative left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain equipment-silhouette", active && "is-active"),
			draggable: false
		})]
	});
}
function BodyFigure({ items, canEquip, onEquip, onUnequip }) {
	const [hover, setHover] = (0, import_react.useState)(null);
	const [rejected, setRejected] = (0, import_react.useState)(null);
	const equipped = /* @__PURE__ */ new Map();
	for (const it of items) if (it.equippedSlot) equipped.set(it.equippedSlot, it);
	function handleDrop(slot, e) {
		e.preventDefault();
		setHover(null);
		const id = Number(e.dataTransfer.getData(DRAG_MIME));
		const item = items.find((i) => i.id === id);
		if (!item?.equipment) return;
		if (!slotAccepts(item.equipment.category, slot)) {
			setRejected(slot);
			window.setTimeout(() => setRejected(null), 320);
			const label = BODY_SLOTS.find((s) => s.key === slot)?.label ?? slot;
			toast.error(`${item.name} não pode ser usado em "${label}". Encaixe correto: ${CATEGORY[item.equipment.category].where}.`);
			return;
		}
		onEquip(item.id, slot);
	}
	const card = (slotKey) => {
		const slot = BODY_SLOTS.find((s) => s.key === slotKey);
		const item = equipped.get(slotKey);
		const rarity = item?.equipment ? RARITY[item.equipment.rarity] : null;
		const side = LAYOUT[slotKey].side;
		const occupied = Boolean(item);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onDragOver: canEquip ? (e) => {
				e.preventDefault();
				setHover(slotKey);
			} : void 0,
			onDragLeave: canEquip ? () => setHover((h) => h === slotKey ? null : h) : void 0,
			onDrop: canEquip ? (e) => handleDrop(slotKey, e) : void 0,
			title: item?.equipment ? [item.equipment.description, formatModifiers(item.equipment.modifiers)].filter(Boolean).join(" — ") : `Encaixe vazio: ${slot.label}`,
			className: cn("equip-plaque group relative flex min-h-[4.25rem] items-center gap-2.5 px-2.5 py-2", side === "right" && "sm:flex-row-reverse sm:text-right", occupied ? cn("is-occupied", rarity?.ring, rarity?.glow) : "is-empty", hover === slotKey && "is-aim", rejected === slotKey && "animate-slot-reject"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("equip-sigil grid size-11 shrink-0 place-items-center", !occupied && "opacity-45"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
						name: item?.equipment?.icon ?? slot.icon,
						className: "size-9",
						rarity: item ? rarity?.key : void 0,
						muted: !item
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "equip-slot-name",
						children: slot.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("truncate text-sm leading-tight", occupied ? cn("font-medium", rarity?.text) : "text-xs italic text-subtle"),
						children: item ? item.name : canEquip ? "solte aqui" : "vazio"
					})]
				}),
				item && canEquip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onUnequip(item.id),
					"aria-label": `Desequipar ${item.name}`,
					className: "grid size-8 shrink-0 place-items-center rounded-sm text-muted opacity-70 hover:bg-surface hover:text-fg hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				}) : null,
				occupied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "equip-gem",
					"aria-hidden": true
				}) : null
			]
		}, slotKey);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "equip-hud relative mx-auto hidden aspect-[128/100] w-full max-w-[820px] sm:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "equip-hud__frame",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "pointer-events-none absolute inset-0 h-full w-full",
					viewBox: "0 0 100 100",
					preserveAspectRatio: "none",
					"aria-hidden": "true",
					children: BODY_SLOTS.map((s) => {
						const l = LAYOUT[s.key];
						const x1 = l.side === "left" ? 27.2 : 72.8;
						const x2 = toX(l.anchor[0]);
						const y2 = toY(l.anchor[1]);
						const on = equipped.has(s.key) || hover === s.key;
						const stroke = on ? "var(--color-ring)" : "color-mix(in srgb, var(--color-muted) 38%, transparent)";
						if (l.fork) {
							const [a, b] = l.fork;
							const mx = toX(l.anchor[0]);
							const my = toY(l.anchor[1]);
							const fx1 = toX(a[0]);
							const fy1 = toY(a[1]);
							const fx2 = toX(b[0]);
							const fy2 = toY(b[1]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: `M ${x1} ${l.top} H ${x1 + 2.4} L ${mx} ${my}`,
									fill: "none",
									vectorEffect: "non-scaling-stroke",
									stroke,
									strokeWidth: on ? 1.5 : 1.1,
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeDasharray: on ? void 0 : "3 4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: `M ${mx} ${my} L ${fx1} ${fy1}`,
									fill: "none",
									vectorEffect: "non-scaling-stroke",
									stroke,
									strokeWidth: on ? 1.4 : 1,
									strokeLinecap: "round",
									strokeDasharray: on ? void 0 : "3 4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: `M ${mx} ${my} L ${fx2} ${fy2}`,
									fill: "none",
									vectorEffect: "non-scaling-stroke",
									stroke,
									strokeWidth: on ? 1.4 : 1,
									strokeLinecap: "round",
									strokeDasharray: on ? void 0 : "3 4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: fx1,
									cy: fy1,
									r: "0.7",
									fill: on ? "var(--color-ring)" : "var(--color-muted)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: fx2,
									cy: fy2,
									r: "0.7",
									fill: on ? "var(--color-ring)" : "var(--color-muted)"
								})
							] }, s.key);
						}
						const elbow = l.side === "left" ? x1 + 2.4 : x1 - 2.4;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M ${x1} ${l.top} H ${elbow} L ${x2} ${y2}`,
							fill: "none",
							vectorEffect: "non-scaling-stroke",
							stroke,
							strokeWidth: on ? 1.5 : 1.1,
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeDasharray: on ? void 0 : "3 4"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x2,
							cy: y2,
							r: "0.72",
							fill: on ? "var(--color-ring)" : "var(--color-muted)"
						})] }, s.key);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute",
					style: {
						left: `${FIG.left}%`,
						width: `${FIG.width}%`,
						top: `${FIG.top}%`,
						height: `${FIG.height}%`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Humanoid, {
						equipped: new Set(equipped.keys()),
						hover
					})
				}),
				BODY_SLOTS.map((s) => {
					const l = LAYOUT[s.key];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("absolute w-[26.5%] -translate-y-1/2", l.side === "left" ? "left-[1%]" : "right-[1%]"),
						style: { top: `${l.top}%` },
						children: card(s.key)
					}, s.key);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "equip-hud mx-auto flex h-64 w-40 items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Humanoid, {
					equipped: new Set(equipped.keys()),
					hover
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: BODY_SLOTS.map((s) => card(s.key))
			})]
		})]
	});
}
function InventoryPanel({ character, canEquipItems, canManageItems, canEditNotes, canRemoveEquipment, pending, onAddItem, onRemoveItem, onEquip, onUnequip, onSaveNotes }) {
	const [kind, setKind] = (0, import_react.useState)("item");
	const [notes, setNotes] = (0, import_react.useState)(character.notes);
	const gear = character.inventory.filter((i) => i.equipment);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg",
						children: "Corpo e equipamentos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Arraste até o encaixe do corpo — ou use Equipar."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyFigure, {
					items: character.inventory,
					canEquip: canEquipItems,
					onEquip,
					onUnequip
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg",
					children: "Equipamentos na sacola"
				}), gear.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-subtle",
					children: "Nenhum equipamento. O Mestre entrega os equipamentos."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-2 md:grid-cols-2",
					children: gear.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GearRow, {
						item,
						canEquip: canEquipItems,
						canRemove: canRemoveEquipment,
						pending,
						onEquip: (slot) => onEquip(item.id, slot),
						onUnequip: () => onUnequip(item.id),
						onRemove: () => onRemoveItem?.(item.id)
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: ITEM_KINDS.map((section) => {
					const items = character.inventory.filter((i) => !i.equipment && i.kind === section.key);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid content-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg",
							children: section.label
						}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-subtle",
							children: canManageItems ? "Nada registrado." : "Nada registrado. O Mestre entrega itens e pertences."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-2",
							children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-lg bg-elevated px-3 py-2.5 shadow-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-medium",
										children: [item.name, item.quantity > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ml-2 tabular-nums text-subtle",
											children: ["×", item.quantity]
										}) : null]
									}), item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: item.description
									}) : null]
								}), canManageItems ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-11 place-items-center rounded-md text-muted transition-colors duration-150 hover:bg-surface hover:text-fg",
									disabled: pending,
									onClick: () => onRemoveItem?.(item.id),
									"aria-label": `Remover ${item.name}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								}) : null]
							}, item.id))
						})]
					}, section.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [canManageItems && onAddItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid content-start gap-3 rounded-xl bg-elevated p-4 shadow-border",
					onSubmit: (event) => {
						event.preventDefault();
						const form = event.currentTarget;
						const data = new FormData(form);
						onAddItem({
							name: String(data.get("name") ?? ""),
							description: String(data.get("description") ?? ""),
							quantity: Number(data.get("quantity") ?? 1),
							kind
						});
						form.reset();
						setKind("item");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base",
							children: "Adicionar ao inventário"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_90px] gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "item-name",
									children: "Nome"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "item-name",
									name: "name",
									required: true,
									maxLength: 80
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "item-qty",
									children: "Qtd."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStepper, {
									name: "quantity",
									defaultValue: 1,
									min: 1,
									max: 999,
									ariaLabel: "quantidade"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "item-kind",
								children: "Tipo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								id: "item-kind",
								value: kind,
								onChange: (e) => setKind(e.target.value),
								children: ITEM_KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: k.key,
									children: k.label
								}, k.key))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "item-desc",
								children: "Descrição"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "item-desc",
								name: "description",
								maxLength: 400
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: pending,
							variant: "secondary",
							children: "Guardar item"
						})
					]
				}) : null, onSaveNotes || !canEditNotes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid content-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg",
						children: "Anotações"
					}), canEditNotes && onSaveNotes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							rows: 7,
							maxLength: 8e3,
							placeholder: "Segredos, pistas, dívidas, juramentos..."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							disabled: pending || notes === character.notes,
							onClick: () => onSaveNotes(notes),
							children: "Salvar anotações"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-wrap text-sm text-muted",
						children: character.notes || "Nenhuma anotação."
					})]
				}) : null]
			})
		]
	});
}
function GearRow({ item, canEquip, canRemove, pending, onEquip, onUnequip, onRemove }) {
	const eq = item.equipment;
	const rarity = RARITY[eq.rarity];
	const cat = CATEGORY[eq.category];
	const mods = formatModifiers(eq.modifiers);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		draggable: canEquip,
		onDragStart: (e) => {
			e.dataTransfer.setData(DRAG_MIME, String(item.id));
			e.dataTransfer.effectAllowed = "move";
		},
		className: cn("flex items-start gap-3 rounded-lg bg-elevated px-3 py-2.5 shadow-border ring-1", rarity.ring, rarity.glow, canEquip && "cursor-grab active:cursor-grabbing"),
		children: [
			canEquip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "mt-3 size-4 shrink-0 text-subtle" }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-14 shrink-0 place-items-center rounded-md bg-bg/50", rarity.text),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
					name: eq.icon,
					className: "size-12",
					rarity: rarity.key
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("font-medium leading-tight", rarity.text),
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] tracking-wide text-subtle uppercase",
						children: [
							rarity.label,
							" · ",
							cat.label,
							" · ",
							cat.where
						]
					}),
					eq.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: eq.description
					}) : null,
					eq.effects ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted italic",
						children: eq.effects
					}) : null,
					mods ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-stamina-bright",
						children: mods
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap items-center gap-2",
						children: item.equippedSlot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-primary/25 px-2 py-0.5 text-xs text-fg",
							children: ["Equipado · ", SLOT_LABEL[item.equippedSlot]]
						}), canEquip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							disabled: pending,
							onClick: onUnequip,
							children: "Desequipar"
						}) : null] }) : canEquip ? cat.slots.length === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							disabled: pending,
							onClick: () => onEquip(cat.slots[0]),
							children: "Equipar"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							"aria-label": `Equipar ${item.name}`,
							className: "h-9 w-auto text-sm",
							value: "",
							disabled: pending,
							onChange: (e) => e.target.value && onEquip(e.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Equipar em…"
							}), cat.slots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: SLOT_LABEL[s]
							}, s))]
						}) : null
					})
				]
			}),
			canRemove ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-9 place-items-center rounded-md text-muted hover:bg-surface hover:text-fg",
				disabled: pending,
				onClick: onRemove,
				"aria-label": `Remover ${item.name}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
			}) : null
		]
	});
}
var EMPTY = {
	strength: 0,
	agility: 0,
	resistance: 0,
	intelligence: 0,
	presence: 0
};
function appliedKeys(alloc) {
	return STATS.filter((s) => alloc[s.key] > 0).map((s) => s.key);
}
function sheetSignature(character) {
	return [
		character.updatedAt,
		character.unspentPoints,
		character.strength,
		character.agility,
		character.resistance,
		character.intelligence,
		character.presence
	].join("|");
}
/**
* Attributes list. When `canSpend`, points are staged locally and only saved
* after the player confirms the whole distribution.
*/
function StatsPanel({ character, stats, canSpend, pending, onConfirm }) {
	const [alloc, setAlloc] = (0, import_react.useState)(EMPTY);
	const [confirmOpen, setConfirmOpen] = (0, import_react.useState)(false);
	const [flash, setFlash] = (0, import_react.useState)([]);
	const [flashGen, setFlashGen] = (0, import_react.useState)(0);
	const signature = sheetSignature(character);
	const stagedSig = (0, import_react.useRef)(signature);
	const allocRef = (0, import_react.useRef)(alloc);
	allocRef.current = alloc;
	const currentAlloc = stagedSig.current === signature ? alloc : EMPTY;
	const staged = Object.values(currentAlloc).reduce((a, b) => a + b, 0);
	const remaining = Math.max(0, character.unspentPoints - staged);
	(0, import_react.useEffect)(() => {
		if (stagedSig.current === signature) return;
		const leftover = appliedKeys(allocRef.current);
		stagedSig.current = signature;
		setAlloc(EMPTY);
		if (leftover.length > 0) {
			setFlash(leftover);
			setFlashGen((g) => g + 1);
		}
	}, [signature]);
	(0, import_react.useEffect)(() => {
		if (flash.length === 0) return;
		const t = window.setTimeout(() => setFlash([]), 900);
		return () => window.clearTimeout(t);
	}, [flash, flashGen]);
	const bump = (k, d) => {
		stagedSig.current = signature;
		setAlloc((a) => ({
			...a,
			[k]: Math.max(0, a[k] + d)
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg",
					children: "Atributos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Base · bônus de itens e efeitos."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs tracking-wide text-muted uppercase",
						children: "Pontos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tabular-nums leading-none",
						children: remaining
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: STATS.map((stat) => {
					const s = stats[stat.key];
					const add = currentAlloc[stat.key];
					const highlighted = flash.includes(stat.key);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-center gap-3 rounded-lg bg-elevated px-3 py-2.5 shadow-border transition-shadow", add > 0 && "ring-1 ring-ring/40", highlighted && "stat-row-applied"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium leading-tight",
									children: stat.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-subtle",
									children: stat.hint
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-display text-xl tabular-nums", highlighted && "stat-value-applied"),
									children: s.total + add
								}, highlighted ? `${stat.key}-${flashGen}` : stat.key), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-[11px] tabular-nums text-subtle",
									children: [
										s.base,
										add > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-ring",
											children: [" +", add]
										}) : null,
										s.bonus !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: s.bonus > 0 ? "text-stamina-bright" : "text-hp-bright",
											children: [" ", s.bonus > 0 ? `+${s.bonus}` : s.bonus]
										}) : null
									]
								})]
							}),
							canSpend && remaining + add > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStepper, {
								value: add,
								min: 0,
								max: add + remaining,
								disabled: pending,
								ariaLabel: `ponto de ${stat.label}`,
								onChange: (next) => bump(stat.key, next - add)
							}) : null
						]
					}, stat.key);
				})
			}),
			canSpend && staged > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					className: "flex-1",
					disabled: pending,
					onClick: () => setConfirmOpen(true),
					children: [
						"Confirmar distribuição (",
						staged,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					disabled: pending,
					onClick: () => {
						stagedSig.current = signature;
						setAlloc(EMPTY);
					},
					children: "Desfazer"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: confirmOpen,
				onOpenChange: setConfirmOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					className: "border-border bg-surface text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
							className: "font-display",
							children: "Deseja confirmar a sua distribuição?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
							className: "text-muted",
							children: "Depois de confirmada, só o Mestre poderá corrigi-la."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-1 text-sm",
							children: STATS.filter((s) => currentAlloc[s.key] > 0).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between rounded-md bg-elevated px-3 py-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [
										character[s.key],
										" → ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: character[s.key] + currentAlloc[s.key] })
									]
								})]
							}, s.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
							className: "border-border bg-transparent text-fg hover:bg-elevated",
							onClick: () => {
								stagedSig.current = signature;
								setAlloc(EMPTY);
							},
							children: "Cancelar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
							className: "bg-primary text-primary-fg hover:bg-primary/90",
							disabled: pending,
							onClick: async () => {
								unlockAudio();
								const payload = { ...currentAlloc };
								const keys = appliedKeys(payload);
								if (await onConfirm(payload) === false) return;
								setFlash(keys);
								setFlashGen((g) => g + 1);
								playPointsAppliedSound(false);
							},
							children: "Confirmar"
						})] })
					]
				})
			})
		]
	});
}
/** GM-only: rewrite base attributes and unspent points, showing the diff. */
function GmStatsEditor({ character, pending, onSave }) {
	const original = {
		strength: character.strength,
		agility: character.agility,
		resistance: character.resistance,
		intelligence: character.intelligence,
		presence: character.presence,
		unspent: character.unspentPoints
	};
	const [v, setV] = (0, import_react.useState)(original);
	const [flash, setFlash] = (0, import_react.useState)([]);
	const [flashGen, setFlashGen] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => setV(original), [character.updatedAt]);
	(0, import_react.useEffect)(() => {
		if (flash.length === 0) return;
		const t = window.setTimeout(() => setFlash([]), 900);
		return () => window.clearTimeout(t);
	}, [flash, flashGen]);
	const rows = [...STATS.map((s) => ({
		key: s.key,
		label: s.label
	})), {
		key: "unspent",
		label: "Pontos livres"
	}];
	const changed = rows.filter((r) => v[r.key] !== original[r.key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg",
				children: "Corrigir distribuição"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Somente o Mestre. As mudanças ficam destacadas antes de salvar."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-1.5",
				children: rows.map((r) => {
					const diff = v[r.key] - original[r.key];
					const highlighted = flash.includes(r.key);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-center gap-2 rounded-lg bg-elevated px-3 py-1.5 shadow-border", diff !== 0 && "ring-1 ring-ring/50", highlighted && "stat-row-applied"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm",
								children: r.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 text-right text-xs tabular-nums text-subtle",
								children: original[r.key]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								children: "→"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(highlighted && "stat-value-applied"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStepper, {
									value: v[r.key],
									min: 0,
									disabled: pending,
									compact: true,
									ariaLabel: r.label,
									onChange: (next) => setV((x) => ({
										...x,
										[r.key]: next
									}))
								})
							}, highlighted ? `${r.key}-${flashGen}` : r.key),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("w-9 text-right text-xs tabular-nums", diff > 0 ? "text-stamina-bright" : diff < 0 ? "text-hp-bright" : "text-transparent"),
								children: diff > 0 ? `+${diff}` : diff
							})
						]
					}, r.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "secondary",
					className: "flex-1",
					disabled: pending || changed.length === 0,
					onClick: async () => {
						unlockAudio();
						const keys = changed.map((r) => r.key);
						if (await onSave(v) === false) return;
						setFlash(keys);
						setFlashGen((g) => g + 1);
						playPointsAppliedSound(false);
					},
					children: ["Salvar correção", changed.length ? ` (${changed.length})` : ""]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					disabled: changed.length === 0,
					onClick: () => setV(original),
					children: "Descartar"
				})]
			})
		]
	});
}
var TONES = {
	hp: {
		fill: "from-hp/70 to-hp-bright",
		icon: "text-hp-bright bg-hp/20",
		ring: "shadow-[0_0_12px_-2px_var(--color-hp)]"
	},
	mana: {
		fill: "from-mana/70 to-mana-bright",
		icon: "text-mana-bright bg-mana/20",
		ring: "shadow-[0_0_12px_-2px_var(--color-mana)]"
	},
	stamina: {
		fill: "from-stamina/70 to-stamina-bright",
		icon: "text-stamina-bright bg-stamina/20",
		ring: "shadow-[0_0_12px_-2px_var(--color-stamina)]"
	}
};
function Bar({ label, value, max, tone, Icon }) {
	const pct = max > 0 ? Math.max(0, Math.min(100, value / max * 100)) : 0;
	const t = TONES[tone];
	const low = pct <= 25;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-lg bg-bg/40 p-2.5 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-9 shrink-0 place-items-center rounded-md", t.icon),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4.5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-w-0 flex-1 gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold tracking-[0.14em] text-muted uppercase",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-sm tabular-nums text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn(low && "text-hp-bright"),
							children: value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-subtle",
							children: [" / ", max]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 text-xs text-subtle",
							children: [Math.round(pct), "%"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-3 overflow-hidden rounded-full bg-elevated shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("h-full rounded-full bg-gradient-to-r transition-[width] duration-300 ease-out", t.fill, pct > 0 && t.ring),
						style: { width: `${pct}%` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-0 grid grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "border-r border-bg/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "border-r border-bg/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "border-r border-bg/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-fg/10" })
				]
			})]
		})]
	});
}
function VitalsBars({ character, footnote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				label: "Vida",
				value: character.hp,
				max: character.hpMax,
				tone: "hp",
				Icon: Heart
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				label: "Mana",
				value: character.mana,
				max: character.manaMax,
				tone: "mana",
				Icon: Droplet
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				label: "Estamina",
				value: character.stamina,
				max: character.staminaMax,
				tone: "stamina",
				Icon: Zap
			}),
			footnote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: footnote
			}) : null
		]
	});
}
function Badge({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-elevated px-2.5 py-1 text-xs font-medium tracking-wide text-muted shadow-border", className),
		...props
	});
}
//#endregion
export { useIconRegistry as S, VitalsBars as _, AlertDialogDescription as a, useAct as b, AlertDialogTitle as c, DiceRoller as d, EffectsList as f, StatsPanel as g, InventoryPanel as h, AlertDialogContent as i, AttributeRadar as l, GmStatsEditor as m, AlertDialogAction as n, AlertDialogFooter as o, GameIcon as p, AlertDialogCancel as r, AlertDialogHeader as s, AlertDialog as t, Badge as u, effectiveStats as v, useDiceToasts as x, formatModifiers as y };
