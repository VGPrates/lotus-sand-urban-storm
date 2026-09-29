import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as Button, t as APP_NAME } from "./button-DAk3Wu8A.mjs";
import { x as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Input, i as CardTitle, n as CardDescription, o as Label, r as CardHeader, t as Card } from "./label-u3lZHMsn.mjs";
import { t as supabase } from "./client-DjwEYBS_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recuperar-senha-BgR7oCEf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RecoverPassword() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)("email");
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [info, setInfo] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let alive = true;
		supabase.auth.getSession().then(({ data }) => {
			if (alive && data.session) setStep("password");
		});
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setStep("password");
		});
		return () => {
			alive = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	async function onSendCode(event) {
		event.preventDefault();
		setError(null);
		setInfo(null);
		setBusy(true);
		const address = email.trim().toLowerCase();
		await supabase.auth.resetPasswordForEmail(address, { redirectTo: `${window.location.origin}/recuperar-senha` });
		setBusy(false);
		setInfo("Se existir uma conta com este email, enviamos as instruções de recuperação. Verifique também o lixo eletrônico.");
		setStep("code");
	}
	async function onVerifyCode(event) {
		event.preventDefault();
		setError(null);
		setBusy(true);
		const form = new FormData(event.currentTarget);
		const token = String(form.get("token") ?? "").replace(/\s+/g, "");
		const { error: err } = await supabase.auth.verifyOtp({
			email: email.trim().toLowerCase(),
			token,
			type: "recovery"
		});
		setBusy(false);
		if (err) {
			setError("Código inválido, já utilizado ou expirado. Peça um novo código.");
			return;
		}
		setInfo(null);
		setStep("password");
	}
	async function onNewPassword(event) {
		event.preventDefault();
		setError(null);
		const form = new FormData(event.currentTarget);
		const password = String(form.get("password") ?? "");
		const confirm = String(form.get("confirm") ?? "");
		if (password.length < 8) {
			setError("A nova senha precisa ter ao menos 8 caracteres.");
			return;
		}
		if (password !== confirm) {
			setError("As senhas não são iguais.");
			return;
		}
		setBusy(true);
		const { error: err } = await supabase.auth.updateUser({ password });
		if (err) {
			setBusy(false);
			setError("Não foi possível trocar a senha. Reinicie a recuperação.");
			return;
		}
		await supabase.auth.signOut();
		setBusy(false);
		navigate({
			to: "/login",
			search: {}
		});
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
							children: step === "password" ? "Defina a nova senha" : "Esqueci minha senha"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: step === "email" ? "Informe o email da sua conta para receber o código de recuperação." : step === "code" ? "Digite o código que chegou no seu email, ou abra o link da mensagem." : "Escolha uma nova senha. A senha antiga deixa de funcionar." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						step === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid gap-3",
							onSubmit: onSendCode,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										name: "email",
										type: "email",
										required: true,
										autoComplete: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value)
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-hp-bright",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: busy,
									children: busy ? "Enviando..." : "Enviar código"
								})
							]
						}) : null,
						step === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid gap-3",
							onSubmit: onVerifyCode,
							children: [
								info ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-stamina-bright",
									children: info
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "token",
										children: "Código de recuperação"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "token",
										name: "token",
										inputMode: "numeric",
										autoComplete: "one-time-code",
										maxLength: 10,
										required: true,
										placeholder: "000000"
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-hp-bright",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: busy,
									children: busy ? "Validando..." : "Validar código"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
									onClick: () => {
										setStep("email");
										setError(null);
										setInfo(null);
									},
									children: "Usar outro email ou pedir novo código"
								})
							]
						}) : null,
						step === "password" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid gap-3",
							onSubmit: onNewPassword,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "password",
										children: "Nova senha"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "password",
										name: "password",
										type: "password",
										required: true,
										minLength: 8,
										autoComplete: "new-password"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "confirm",
										children: "Repita a nova senha"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "confirm",
										name: "confirm",
										type: "password",
										required: true,
										minLength: 8,
										autoComplete: "new-password"
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-hp-bright",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									disabled: busy,
									children: busy ? "Salvando..." : "Salvar nova senha"
								})
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-subtle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "underline-offset-4 hover:text-fg hover:underline",
						children: "Voltar para o login"
					})
				})
			]
		})
	});
}
//#endregion
export { RecoverPassword as component };
