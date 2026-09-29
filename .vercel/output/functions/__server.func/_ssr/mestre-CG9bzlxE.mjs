import { r as __toESM } from "../_runtime.mjs";
import { b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as CATEGORIES, d as RARITY, h as cn, i as Button, o as CATEGORY, p as STATS, u as RARITIES } from "./button-DAk3Wu8A.mjs";
import { b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Dices, a as Users, c as Trash2, d as Settings2, l as Swords, m as Pencil, o as Upload, u as Sparkles, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as gmUpdateIdentity, B as saveLibraryEntry, C as equipItem, D as gmGiveEquipment, E as gmDeleteCharacter, F as removeAppliedCondition, G as useLibrary, I as removeAppliedEffect, K as useRpgState, L as removeItem, N as normalizeIconFile, O as gmGrantPoints, T as gmCreateCharacter, U as unequipItem, _ as applyEffect, a as DialogContent, b as deleteCustomIcon, c as DialogTitle, d as LoadingScreen, g as applyCondition, i as Dialog, j as gmUpdateVitals, k as gmSetStats, l as ICON_CATEGORIES, m as addItem, o as DialogDescription, p as TabBar, q as useSession, s as DialogHeader, t as AppChrome, u as ICON_CATEGORY_LABEL, x as deleteLibraryEntry, y as createCustomIcon } from "./app-chrome-DwMabm_R.mjs";
import { a as Input, i as CardTitle, n as CardDescription, o as Label, r as CardHeader, t as Card } from "./label-u3lZHMsn.mjs";
import { a as ValueStepper, i as Textarea, r as Select, t as CharacterForm } from "./character-form-DOAnAMpH.mjs";
import { S as useIconRegistry, _ as VitalsBars, a as AlertDialogDescription, b as useAct, c as AlertDialogTitle, d as DiceRoller, f as EffectsList, h as InventoryPanel, i as AlertDialogContent, l as AttributeRadar, m as GmStatsEditor, n as AlertDialogAction, o as AlertDialogFooter, p as GameIcon, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog, u as Badge, v as effectiveStats, x as useDiceToasts, y as formatModifiers } from "./badge-CqVfvNuw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mestre-CG9bzlxE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Icon picker split in shelves (gear / buffs & debuffs / conditions).
* The GM can import new art: it is centre-cropped to the standard square
* canvas so every icon keeps the same weight on screen.
*/
function IconPicker({ value, onChange, defaultCategory = "equipment", canImport = true }) {
	const icons = useIconRegistry();
	const [tab, setTab] = (0, import_react.useState)(defaultCategory);
	const [importing, setImporting] = (0, import_react.useState)(false);
	const [importBusy, setImportBusy] = (0, import_react.useState)(false);
	const [manageOpen, setManageOpen] = (0, import_react.useState)(false);
	const [deletingKey, setDeletingKey] = (0, import_react.useState)(null);
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const [label, setLabel] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)(defaultCategory);
	const fileRef = (0, import_react.useRef)(null);
	const shelf = (0, import_react.useMemo)(() => icons.filter((i) => i.category === tab), [icons, tab]);
	const managedIcons = icons;
	async function importIcon() {
		const file = fileRef.current?.files?.[0];
		if (!file) {
			toast.error("Escolha uma imagem.");
			return;
		}
		if (!label.trim()) {
			toast.error("Dê um nome ao ícone.");
			return;
		}
		setImportBusy(true);
		try {
			const dataUrl = await normalizeIconFile(file);
			const key = await createCustomIcon({
				label: label.trim(),
				category,
				dataUrl
			});
			setTab(category);
			onChange(key);
			setLabel("");
			if (fileRef.current) fileRef.current.value = "";
			setImporting(false);
			toast.success("Ícone importado.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Falha ao importar o ícone.");
		} finally {
			setImportBusy(false);
		}
	}
	async function removeIcon(key) {
		setDeletingKey(key);
		try {
			await deleteCustomIcon(key);
			if (value === key) onChange(icons.filter((icon) => icon.key !== key)[0]?.key ?? "");
			setPendingDelete(null);
			toast.success("Ícone removido.");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "Falha ao remover o ícone.");
		} finally {
			setDeletingKey(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Ícone" }), canImport ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: () => setManageOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-3.5" }), "Gerenciar ícones"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						onClick: () => setImporting((v) => !v),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3.5" }), "Importar"]
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1 rounded-lg bg-surface p-1 shadow-border",
				children: ICON_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(c.key),
					className: cn("min-h-9 flex-1 rounded-md px-2 text-xs transition-colors duration-150", tab === c.key ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
					children: c.label
				}, c.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-14 shrink-0 place-items-center rounded-md bg-bg/50 text-fg ring-1 ring-ring/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
						name: value,
						className: "size-11"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-wrap gap-1.5 rounded-lg bg-bg/30 p-2",
					children: [shelf.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 py-2 text-xs text-subtle",
						children: "Nenhum ícone nesta categoria."
					}) : null, shelf.map((i) => {
						const selected = value === i.key;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								title: i.label,
								"aria-label": i.label,
								"aria-pressed": selected,
								onClick: () => onChange(i.key),
								className: cn("grid size-11 place-items-center rounded-md text-muted transition-colors duration-150", selected ? "bg-elevated text-fg ring-2 ring-primary shadow-[0_0_12px_-4px_var(--color-primary)]" : "ring-1 ring-border/60 hover:bg-surface hover:text-fg"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
									name: i.key,
									className: "size-8"
								})
							})
						}, i.key);
					})]
				})]
			}),
			importing && canImport ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 rounded-lg bg-surface p-3 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "A imagem é recortada no centro e ajustada ao tamanho padrão dos ícones, sem deformar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "icon-import-label",
								children: "Nome do ícone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "icon-import-label",
								value: label,
								maxLength: 40,
								onChange: (e) => setLabel(e.target.value),
								placeholder: "Ex.: Lança élfica"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "icon-import-cat",
								children: "Categoria"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								id: "icon-import-cat",
								value: category,
								onChange: (e) => setCategory(e.target.value),
								children: ICON_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.key,
									children: ICON_CATEGORY_LABEL[c.key]
								}, c.key))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "image/png,image/jpeg,image/webp,image/svg+xml",
						className: "text-xs text-muted file:mr-3 file:rounded-md file:border-0 file:bg-elevated file:px-3 file:py-2 file:text-xs file:text-fg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: () => void importIcon(),
							disabled: importBusy,
							children: [importBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, "Importar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => setImporting(false),
							disabled: importBusy,
							children: "Cancelar"
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: manageOpen,
				onOpenChange: setManageOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[85dvh] overflow-y-auto border-border bg-surface text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display",
						children: "Gerenciar ícones"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-muted",
						children: "Exclua os ícones que não deseja mais usar, importados ou originais."
					})] }), managedIcons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-bg/40 px-3 py-6 text-center text-sm text-subtle",
						children: "Nenhum ícone disponível."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: ICON_CATEGORIES.map((iconCategory) => {
							const items = managedIcons.filter((icon) => icon.category === iconCategory.key);
							if (items.length === 0) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs tracking-[0.14em] text-subtle uppercase",
									children: iconCategory.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid gap-1.5",
									children: items.map((icon) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex min-h-14 items-center gap-3 rounded-md bg-bg/40 px-2.5 py-2 shadow-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-10 shrink-0 place-items-center rounded-md bg-elevated",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
													name: icon.key,
													className: "size-8"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 flex-1 truncate text-sm",
												children: icon.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "ghost",
												size: "sm",
												disabled: deletingKey === icon.key,
												onClick: () => setPendingDelete({
													key: icon.key,
													label: icon.label
												}),
												className: "text-muted hover:text-hp-bright",
												children: [deletingKey === icon.key ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Excluir"]
											})
										]
									}, icon.key))
								})]
							}, iconCategory.key);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: pendingDelete !== null,
				onOpenChange: (open) => {
					if (!open && !deletingKey) setPendingDelete(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					className: "border-border bg-surface text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, {
						className: "font-display",
						children: [
							"Excluir ",
							pendingDelete?.label,
							"?"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
						className: "text-muted",
						children: "Este ícone deixará de aparecer na seleção. Itens que já o utilizam mostrarão o ícone padrão."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
						disabled: deletingKey !== null,
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogAction, {
						disabled: !pendingDelete || deletingKey !== null,
						onClick: (event) => {
							event.preventDefault();
							if (pendingDelete) removeIcon(pendingDelete.key);
						},
						className: "bg-hp text-fg hover:bg-hp/90",
						children: [deletingKey ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Excluir"]
					})] })]
				})
			})
		]
	});
}
function readMods(form) {
	const m = {};
	for (const s of STATS) {
		const v = Number(form.get(`mod_${s.key}`) || 0);
		if (v) m[s.key] = Math.max(-50, Math.min(50, Math.trunc(v)));
	}
	return m;
}
function ModifierFields({ initial }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Modificadores de atributo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 gap-2",
			children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] tracking-[0.14em] text-subtle uppercase",
					children: s.short
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStepper, {
					name: `mod_${s.key}`,
					defaultValue: initial?.[s.key] ?? 0,
					min: -50,
					max: 50,
					compact: true,
					ariaLabel: `modificador de ${s.label}`
				})]
			}, s.key))
		})]
	});
}
function IconField({ initial, category }) {
	const [v, setV] = (0, import_react.useState)(initial || "sword");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "hidden",
		name: "icon",
		value: v
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPicker, {
		value: v,
		onChange: setV,
		defaultCategory: category
	})] });
}
function EntryRow({ icon, title, sub, color, className, onEdit, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: cn("flex items-center gap-3 rounded-lg bg-elevated px-3 py-2 shadow-border", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-12 place-items-center rounded-md bg-bg/50",
				style: color ? { color } : void 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, {
					name: icon,
					className: "size-9"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-medium",
					style: color ? { color } : void 0,
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-subtle",
					children: sub
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onEdit,
				"aria-label": `Editar ${title}`,
				className: "grid size-9 place-items-center rounded-md text-muted hover:bg-surface hover:text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onDelete,
				"aria-label": `Excluir ${title}`,
				className: "grid size-9 place-items-center rounded-md text-muted hover:bg-surface hover:text-hp-bright",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
			})
		]
	});
}
function EquipmentLibrary() {
	const { data } = useLibrary();
	const { run, pending } = useAct();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const list = data?.equipment ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: editing ? `Editar ${editing.name}` : "Forjar equipamento" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "A categoria define em que parte do corpo o item encaixa." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3",
			onSubmit: async (e) => {
				e.preventDefault();
				const f = new FormData(e.currentTarget);
				const form = e.currentTarget;
				await run(() => saveLibraryEntry("equipment", editing?.id ?? null, {
					name: String(f.get("name")).slice(0, 80),
					icon: String(f.get("icon")),
					category: String(f.get("category")),
					rarity: String(f.get("rarity")),
					description: String(f.get("description") ?? "").slice(0, 400),
					effects: String(f.get("effects") ?? "").slice(0, 400),
					modifiers: readMods(f),
					updated_at: (/* @__PURE__ */ new Date()).toISOString()
				}), editing ? "Equipamento atualizado." : "Equipamento criado.");
				setEditing(null);
				form.reset();
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "eq-name",
						children: "Nome"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "eq-name",
						name: "name",
						required: true,
						maxLength: 80,
						defaultValue: editing?.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconField, {
					initial: editing?.icon ?? "sword",
					category: "equipment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "eq-cat",
							children: "Tipo / local"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "eq-cat",
							name: "category",
							defaultValue: editing?.category ?? "arma",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: c.key,
								children: [
									c.label,
									" → ",
									c.where
								]
							}, c.key))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "eq-rar",
							children: "Raridade"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							id: "eq-rar",
							name: "rarity",
							defaultValue: editing?.rarity ?? "comum",
							children: RARITIES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: r.key,
								children: r.label
							}, r.key))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "eq-desc",
						children: "Descrição"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "eq-desc",
						name: "description",
						rows: 2,
						maxLength: 400,
						defaultValue: editing?.description
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "eq-eff",
						children: "Efeitos especiais"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "eq-eff",
						name: "effects",
						maxLength: 400,
						defaultValue: editing?.effects,
						placeholder: "Ex.: Imune a fogo leve"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModifierFields, { initial: editing?.modifiers }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "flex-1",
						disabled: pending,
						children: editing ? "Salvar alterações" : "Criar equipamento"
					}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						onClick: () => setEditing(null),
						children: "Cancelar"
					}) : null]
				})
			]
		}, editing?.id ?? "new")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Arsenal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Alterações valem para todas as cópias já entregues." })] }),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-subtle",
				children: "Nenhum equipamento."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2",
				children: list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryRow, {
					icon: e.icon,
					title: e.name,
					className: cn("ring-1", RARITY[e.rarity].ring, RARITY[e.rarity].glow),
					sub: [
						RARITY[e.rarity].label,
						CATEGORY[e.category].where,
						formatModifiers(e.modifiers)
					].filter(Boolean).join(" · "),
					onEdit: () => setEditing(e),
					onDelete: () => {
						if (confirm(`Excluir ${e.name}? Ele some do inventário de todos.`)) run(() => deleteLibraryEntry("equipment", e.id), "Equipamento excluído.");
					}
				}, e.id))
			})
		] })]
	});
}
function EffectForm({ kind, editing, onDone }) {
	const { run, pending } = useAct();
	const isEffect = kind === "effect";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-3",
		onSubmit: async (e) => {
			e.preventDefault();
			const form = e.currentTarget;
			const f = new FormData(form);
			const base = {
				name: String(f.get("name")).slice(0, 80),
				icon: String(f.get("icon")),
				color: String(f.get("color")),
				description: String(f.get("description") ?? "").slice(0, 400),
				modifiers: readMods(f)
			};
			await run(() => isEffect ? saveLibraryEntry("effects", editing?.id ?? null, {
				...base,
				kind: String(f.get("kind"))
			}) : saveLibraryEntry("conditions", editing?.id ?? null, {
				...base,
				effect: String(f.get("effect") ?? "").slice(0, 400)
			}), "Salvo.");
			form.reset();
			onDone();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_64px] gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `${kind}-name`,
						children: "Nome"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `${kind}-name`,
						name: "name",
						required: true,
						maxLength: 80,
						defaultValue: editing?.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `${kind}-color`,
						children: "Cor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `${kind}-color`,
						name: "color",
						type: "color",
						defaultValue: editing?.color ?? (isEffect ? "#7fa065" : "#d0564d"),
						className: "h-11 w-full cursor-pointer rounded-md bg-elevated p-1 shadow-border"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconField, {
				initial: editing?.icon ?? (isEffect ? "sparkles" : "blood"),
				category: isEffect ? "effect" : "condition"
			}),
			isEffect ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "effect-kind",
					children: "Tipo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					id: "effect-kind",
					name: "kind",
					defaultValue: editing?.kind ?? "buff",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "buff",
						children: "Buff"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "debuff",
						children: "Debuff"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "cond-effect",
					children: "Efeito"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "cond-effect",
					name: "effect",
					maxLength: 400,
					defaultValue: editing?.effect,
					placeholder: "Ex.: Perde 1 de vida por turno"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `${kind}-desc`,
					children: "Descrição"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: `${kind}-desc`,
					name: "description",
					rows: 2,
					maxLength: 400,
					defaultValue: editing?.description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModifierFields, { initial: editing?.modifiers }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "flex-1",
					disabled: pending,
					children: editing ? "Salvar alterações" : "Criar"
				}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					onClick: onDone,
					children: "Cancelar"
				}) : null]
			})
		]
	}, editing?.id ?? "new");
}
function EffectsLibrary() {
	const { data } = useLibrary();
	const { run } = useAct();
	const [editEffect, setEditEffect] = (0, import_react.useState)(null);
	const [editCond, setEditCond] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Buffs e debuffs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Bênçãos e maldições, com ou sem prazo." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffectForm, {
				kind: "effect",
				editing: editEffect,
				onDone: () => setEditEffect(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-2",
				children: (data?.effects ?? []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryRow, {
					icon: e.icon,
					title: e.name,
					color: e.color,
					sub: [e.kind === "buff" ? "Buff" : "Debuff", formatModifiers(e.modifiers)].filter(Boolean).join(" · "),
					onEdit: () => setEditEffect(e),
					onDelete: () => {
						if (confirm(`Excluir ${e.name}?`)) run(() => deleteLibraryEntry("effects", e.id), "Excluído.");
					}
				}, e.id))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Condições" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Estados do corpo: sangramento, fratura, veneno…" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffectForm, {
				kind: "condition",
				editing: editCond,
				onDone: () => setEditCond(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-2",
				children: (data?.conditions ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryRow, {
					icon: c.icon,
					title: c.name,
					color: c.color,
					sub: [c.effect, formatModifiers(c.modifiers)].filter(Boolean).join(" · "),
					onEdit: () => setEditCond(c),
					onDelete: () => {
						if (confirm(`Excluir ${c.name}?`)) run(() => deleteLibraryEntry("conditions", c.id), "Excluída.");
					}
				}, c.id))
			})
		] })]
	});
}
function GmPanel({ profile, party }) {
	const [tab, setTab] = (0, import_react.useState)("fichas");
	const [selectedId, setSelectedId] = (0, import_react.useState)(party[0]?.id ?? "new");
	const selected = (0, import_react.useMemo)(() => party.find((c) => c.id === selectedId) ?? null, [party, selectedId]);
	useDiceToasts(profile.userId, tab === "dado");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppChrome, {
		roleLabel: "Mestre da Mesa",
		profile,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-muted uppercase",
						children: profile.displayName ?? "Mestre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl",
						children: "A mesa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Fichas, arsenal, efeitos e o D20 — tudo passa por aqui."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBar, {
					value: tab,
					onChange: setTab,
					tabs: [
						{
							id: "fichas",
							label: "Fichas",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
						},
						{
							id: "arsenal",
							label: "Arsenal",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "size-4" })
						},
						{
							id: "efeitos",
							label: "Efeitos",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })
						},
						{
							id: "dado",
							label: "D20",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dices, { className: "size-4" })
						}
					]
				}),
				tab === "fichas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "grid h-fit gap-2 rounded-xl bg-surface p-2 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedId("new"),
							className: cn("min-h-11 rounded-lg px-3 text-left text-sm", selectedId === "new" ? "bg-elevated" : "text-muted hover:text-fg"),
							children: "Nova ficha"
						}), party.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 py-2 text-sm text-subtle",
							children: "Nenhuma ficha ainda."
						}) : party.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelectedId(c.id),
							className: cn("min-h-11 rounded-lg px-3 py-2 text-left", selected?.id === c.id ? "bg-elevated" : "hover:bg-elevated/50"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 truncate font-medium",
								children: [c.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: [...c.effects.map((e) => e.effect.icon), ...c.conditions.map((x) => x.condition.icon)].slice(0, 4).join("")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-xs text-subtle",
								children: [
									c.userId ? "Jogador" : "Mesa",
									" · ",
									c.className
								]
							})]
						}, c.id))]
					}), selectedId === "new" || !selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateSheet, { onCreated: (id) => setSelectedId(id) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmEditor, { character: selected }, selected.id)]
				}) : null,
				tab === "arsenal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentLibrary, {}) : null,
				tab === "efeitos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffectsLibrary, {}) : null,
				tab === "dado" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-6 sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiceRoller, { myUserId: profile.userId })
				}) : null
			]
		})
	});
}
function CreateSheet({ onCreated }) {
	const { run, pending } = useAct();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Criar ficha" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Personagens da mesa ficam com você. Jogadores criam a própria ficha ao entrar." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterForm, {
		submitLabel: "Criar ficha",
		pending,
		onSubmit: (draft) => run(async () => {
			onCreated((await gmCreateCharacter(draft)).id);
		}, `${draft.name} entrou na mesa.`)
	})] });
}
function GmEditor({ character }) {
	const { run, pending } = useAct();
	const { data: lib } = useLibrary();
	const stats = effectiveStats(character);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: character.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: character.userId ? "Jogador" : "Mesa" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [
						character.race,
						" · ",
						character.className
					] }),
					character.unspentPoints > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [character.unspentPoints, " pontos livres"] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Poder atual" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttributeRadar, { stats })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmStatsEditor, {
					character,
					pending,
					onSave: (v) => run(() => gmSetStats(character.id, v), "Distribuição corrigida.")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 flex flex-col gap-3 sm:flex-row",
					onSubmit: (e) => {
						e.preventDefault();
						const amount = Number(new FormData(e.currentTarget).get("amount"));
						run(() => gmGrantPoints(character.id, amount), "Pontos concedidos.");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStepper, {
						name: "amount",
						defaultValue: 1,
						min: 1,
						max: 50,
						ariaLabel: "pontos a conceder"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: pending,
						children: "Conceder pontos"
					})]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Efeitos e condições" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "O jogador vê, mas só você aplica ou remove." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EffectsList, {
						effects: character.effects,
						conditions: character.conditions,
						onRemoveEffect: (id) => run(() => removeAppliedEffect(id), "Efeito removido."),
						onRemoveCondition: (id) => run(() => removeAppliedCondition(id), "Condição removida.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyForm, {
							label: "Aplicar buff/debuff",
							options: (lib?.effects ?? []).map((e) => ({
								id: e.id,
								label: `${e.name} (${e.kind === "buff" ? "buff" : "debuff"})`
							})),
							defaultDuration: "Permanente",
							pending,
							onApply: (id, d) => run(() => applyEffect(character.id, id, d), "Efeito aplicado.")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyForm, {
							label: "Aplicar condição",
							options: (lib?.conditions ?? []).map((c) => ({
								id: c.id,
								label: c.name
							})),
							defaultDuration: "Até ser curado",
							pending,
							onApply: (id, d) => run(() => applyCondition(character.id, id, d), "Condição aplicada.")
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Vida, mana e estamina" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Só o mestre move estas barras." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalsBars, { character }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3",
							onSubmit: (e) => {
								e.preventDefault();
								const f = new FormData(e.currentTarget);
								const n = (k) => Number(f.get(k));
								run(() => gmUpdateVitals(character.id, {
									hp: n("hp"),
									hpMax: n("hpMax"),
									mana: n("mana"),
									manaMax: n("manaMax"),
									stamina: n("stamina"),
									staminaMax: n("staminaMax")
								}), "Vitais ajustados.");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalField, {
									name: "hp",
									label: "Vida",
									defaultValue: character.hp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalField, {
									name: "hpMax",
									label: "Vida máx.",
									defaultValue: character.hpMax
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalField, {
									name: "mana",
									label: "Mana",
									defaultValue: character.mana
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalField, {
									name: "manaMax",
									label: "Mana máx.",
									defaultValue: character.manaMax
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalField, {
									name: "stamina",
									label: "Estamina",
									defaultValue: character.stamina
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalField, {
									name: "staminaMax",
									label: "Estamina máx.",
									defaultValue: character.staminaMax
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "col-span-2 sm:col-span-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: pending,
										variant: "secondary",
										children: "Atualizar vitais"
									})
								})
							]
						}, character.updatedAt)
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Entregar equipamento" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex flex-col gap-3 sm:flex-row",
						onSubmit: (e) => {
							e.preventDefault();
							const id = Number(new FormData(e.currentTarget).get("equipment"));
							if (id) run(() => gmGiveEquipment(character.id, id), "Equipamento entregue.");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							name: "equipment",
							"aria-label": "Equipamento",
							defaultValue: "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Escolha do arsenal…"
							}), (lib?.equipment ?? []).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: e.id,
								children: [
									e.name,
									" — ",
									RARITY[e.rarity].label
								]
							}, e.id))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: pending,
							children: "Entregar"
						})]
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Ficha" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Identidade travada para o jogador — só você pode corrigir." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterForm, {
				initial: character,
				submitLabel: "Salvar ficha",
				pending,
				onSubmit: (draft) => run(() => gmUpdateIdentity(character.id, draft), "Ficha atualizada.")
			}, character.updatedAt)] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Inventário" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryPanel, {
				character,
				canEquipItems: true,
				canManageItems: true,
				canEditNotes: false,
				canRemoveEquipment: true,
				pending,
				onAddItem: (item) => run(() => addItem(character.id, item), "Item adicionado."),
				onRemoveItem: (id) => run(() => removeItem(id)),
				onEquip: (id, slot) => run(() => equipItem(id, slot), "Equipado."),
				onUnequip: (id) => run(() => unequipItem(id))
			})] }),
			!character.userId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "destructive",
				disabled: pending,
				onClick: () => {
					if (confirm(`Remover ${character.name} da mesa?`)) run(() => gmDeleteCharacter(character.id), "Ficha da mesa removida.");
				},
				children: "Remover ficha da mesa"
			}) : null
		]
	});
}
function ApplyForm({ label, options, defaultDuration, pending, onApply }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-2 rounded-lg bg-elevated p-3 shadow-border",
		onSubmit: (e) => {
			e.preventDefault();
			const f = new FormData(e.currentTarget);
			const id = Number(f.get("id"));
			if (id) onApply(id, String(f.get("duration") || defaultDuration).slice(0, 60));
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 sm:grid-cols-[minmax(0,1fr)_140px_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					name: "id",
					defaultValue: "",
					"aria-label": label,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Escolha…"
					}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: o.id,
						children: o.label
					}, o.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					name: "duration",
					placeholder: defaultDuration,
					"aria-label": "Duração",
					maxLength: 60
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "secondary",
					disabled: pending,
					children: "Aplicar"
				})
			]
		})]
	});
}
function VitalField({ name, label, defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: name,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueStepper, {
			name,
			defaultValue,
			min: 0,
			max: 9999,
			ariaLabel: label
		})]
	});
}
function MestrePage() {
	const { user, isPending: authPending } = useSession();
	const { data, isPending } = useRpgState(!!user);
	if (authPending || user && isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/login" });
	if (!data?.profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/onboarding" });
	if (data.profile.role !== "gm") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/painel" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmPanel, {
		profile: data.profile,
		party: data.party
	});
}
//#endregion
export { MestrePage as component };
