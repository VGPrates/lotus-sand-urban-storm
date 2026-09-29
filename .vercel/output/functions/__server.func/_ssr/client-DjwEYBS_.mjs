//#region node_modules/.nitro/vite/services/ssr/assets/client-DjwEYBS_.js
var supabase = {
	auth: {
		getSession: async () => ({
			data: {
				session: null,
				user: null
			},
			error: null
		}),
		getUser: async () => ({
			data: { user: null },
			error: null
		}),
		onAuthStateChange: (cb) => {
			cb("SIGNED_OUT", null);
			return { data: { subscription: { unsubscribe() {} } } };
		},
		signOut: async () => ({ error: null }),
		signInWithPassword: async () => ({ error: { message: "Modo de testes: use nick + papel." } }),
		signUp: async () => ({
			data: { session: null },
			error: { message: "Modo de testes." }
		}),
		signInWithOAuth: async () => ({ error: { message: "Modo de testes." } }),
		resetPasswordForEmail: async () => ({ error: null }),
		updateUser: async () => ({ error: null })
	},
	channel: () => {
		const ch = {
			on() {
				return ch;
			},
			subscribe() {
				return ch;
			}
		};
		return ch;
	},
	removeChannel: async () => void 0,
	from: () => ({
		select: () => ({
			eq: () => ({ maybeSingle: async () => ({
				data: null,
				error: null
			}) }),
			order: async () => ({
				data: [],
				error: null
			})
		}),
		update: () => ({ eq: async () => ({ error: null }) }),
		insert: async () => ({ error: null }),
		delete: () => ({ eq: async () => ({ error: null }) })
	}),
	rpc: async () => ({
		data: null,
		error: null
	})
};
//#endregion
export { supabase as t };
