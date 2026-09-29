import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { h as cn, i as Button, l as RACES, s as CLASSES } from "./button-DAk3Wu8A.mjs";
import { g as Minus, p as Plus, v as Lock } from "../_libs/lucide-react.mjs";
import { a as Input, o as Label } from "./label-u3lZHMsn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/character-form-DOAnAMpH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("flex h-11 w-full appearance-none rounded-md bg-elevated bg-[length:12px] bg-[right_12px_center] bg-no-repeat px-3 pr-10 text-base text-fg shadow-border [color-scheme:dark]", "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 fill=%22none%22 stroke=%22%23a89880%22 stroke-width=%221.6%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m2 4 4 4 4-4%22/></svg>')]", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-lg bg-elevated px-3 py-2.5 text-base text-fg shadow-border", "placeholder:text-subtle", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
/**
* Shared tactile number control for attributes, vitals, modifiers and GM
* corrections. It keeps a hidden form value so it can be dropped into native
* forms without changing their submit behavior.
*/
function ValueStepper({ name, value, defaultValue = 0, min = 0, max = 9999, step = 1, disabled, required, compact, ariaLabel, onChange }) {
	const controlled = value !== void 0;
	const [internal, setInternal] = (0, import_react.useState)(defaultValue);
	const current = controlled ? value : internal;
	const [delta, setDelta] = (0, import_react.useState)(null);
	const [pulse, setPulse] = (0, import_react.useState)(0);
	const timerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => {
		if (timerRef.current) window.clearTimeout(timerRef.current);
	}, []);
	const update = (next) => {
		const bounded = Math.max(min, Math.min(max, Math.trunc(next)));
		if (bounded === current) return;
		const change = bounded - current;
		if (!controlled) setInternal(bounded);
		onChange?.(bounded);
		setDelta(change);
		setPulse((x) => x + 1);
		if (timerRef.current) window.clearTimeout(timerRef.current);
		timerRef.current = window.setTimeout(() => setDelta(null), 480);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("value-stepper", compact && "scale-[0.92] origin-right"),
		"data-value-stepper": "",
		children: [
			name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name,
				value: current,
				required
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "value-stepper__button",
				disabled: disabled || current <= min,
				onClick: () => update(current - step),
				"aria-label": `Diminuir ${ariaLabel}`,
				"data-testid": `button-decrease-${name ?? ariaLabel}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
					className: "size-3.5",
					strokeWidth: 2.2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("value-stepper__value", pulse > 0 && "is-changing"),
				"aria-live": "polite",
				children: [current, delta !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("value-stepper__delta", delta < 0 && "is-negative"),
					children: delta > 0 ? `+${delta}` : delta
				}) : null]
			}, pulse),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "value-stepper__button",
				disabled: disabled || current >= max,
				onClick: () => update(current + step),
				"aria-label": `Aumentar ${ariaLabel}`,
				"data-testid": `button-increase-${name ?? ariaLabel}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "size-3.5",
					strokeWidth: 2.2
				})
			})
		]
	});
}
function CharacterForm({ initial, submitLabel, pending, onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-4",
		onSubmit: (event) => {
			event.preventDefault();
			const form = new FormData(event.currentTarget);
			onSubmit({
				name: String(form.get("name") ?? ""),
				race: String(form.get("race") ?? ""),
				className: String(form.get("className") ?? ""),
				age: Number(form.get("age") ?? 0),
				backstory: String(form.get("backstory") ?? "")
			});
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "name",
					children: "Nome"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					name: "name",
					required: true,
					maxLength: 80,
					defaultValue: initial?.name ?? "",
					placeholder: "Nome do personagem"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "race",
							children: "Raça"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "race",
							name: "race",
							required: true,
							defaultValue: initial?.race ?? "Humano",
							children: RACES.map((race) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: race,
								children: race
							}, race))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "className",
							children: "Classe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "className",
							name: "className",
							required: true,
							defaultValue: initial?.className ?? "Guerreiro",
							children: CLASSES.map((klass) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: klass,
								children: klass
							}, klass))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "age",
							children: "Idade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStepper, {
							name: "age",
							defaultValue: initial?.age ?? 20,
							min: 1,
							max: 2e3,
							required: true,
							ariaLabel: "idade"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "backstory",
					children: "História"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "backstory",
					name: "backstory",
					rows: 6,
					maxLength: 4e3,
					defaultValue: initial?.backstory ?? "",
					placeholder: "De onde veio, o que busca, o que teme..."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: pending,
				className: "mt-1",
				children: pending ? "Gravando..." : submitLabel
			})
		]
	});
}
/**
* Ficha travada: nome, raça, classe, idade e história ficam permanentes após a
* criação. Só o Mestre pode corrigi-las (o banco também recusa qualquer outra
* tentativa de alteração).
*/
function LockedIdentity({ character }) {
	const rows = [
		{
			label: "Nome",
			value: character.name
		},
		{
			label: "Raça",
			value: character.race
		},
		{
			label: "Classe",
			value: character.className
		},
		{
			label: "Idade",
			value: `${character.age} anos`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-lg bg-elevated px-3 py-2 text-xs text-muted shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Identidade selada na criação da ficha. Peça ao Mestre para corrigir." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-3 sm:grid-cols-2",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 rounded-lg bg-elevated/60 px-3 py-2 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
						className: "flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] text-subtle uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), r.label]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "truncate font-medium",
						children: r.value || "—"
					})]
				}, r.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] text-subtle uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), "História"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whitespace-pre-wrap rounded-lg bg-elevated/60 px-3 py-2 text-sm text-muted shadow-border",
					children: character.backstory || "Sem história registrada."
				})]
			})
		]
	});
}
//#endregion
export { ValueStepper as a, Textarea as i, LockedIdentity as n, Select as r, CharacterForm as t };
