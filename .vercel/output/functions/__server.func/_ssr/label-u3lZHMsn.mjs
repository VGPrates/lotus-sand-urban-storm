import "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { h as cn } from "./button-DAk3Wu8A.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-surface p-5 text-fg shadow-border", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 flex flex-col gap-1", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: cn("font-display text-lg font-medium tracking-tight", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md bg-elevated px-3 text-base text-fg shadow-border", "placeholder:text-subtle", "transition-[box-shadow] duration-150 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium tracking-wide text-muted", className),
		...props
	});
}
//#endregion
export { Input as a, CardTitle as i, CardDescription as n, Label as o, CardHeader as r, Card as t };
