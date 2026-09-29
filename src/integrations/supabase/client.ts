/* eslint-disable @typescript-eslint/no-explicit-any */
const stub: any = {
  auth: {
    getSession: async () => ({ data: { session: null, user: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: (cb: any) => {
      cb("SIGNED_OUT", null);
      return { data: { subscription: { unsubscribe() {} } } };
    },
    signOut: async () => ({ error: null }),
    signInWithPassword: async () => ({ error: { message: "Modo de testes: use nick + papel." } }),
    signUp: async () => ({ data: { session: null }, error: { message: "Modo de testes." } }),
    signInWithOAuth: async () => ({ error: { message: "Modo de testes." } }),
    resetPasswordForEmail: async () => ({ error: null }),
    updateUser: async () => ({ error: null }),
  },
  channel: () => {
    const ch: any = {
      on() {
        return ch;
      },
      subscribe() {
        return ch;
      },
    };
    return ch;
  },
  removeChannel: async () => undefined,
  from: () => ({
    select: () => ({
      eq: () => ({ maybeSingle: async () => ({ data: null, error: null }) }),
      order: async () => ({ data: [], error: null }),
    }),
    update: () => ({ eq: async () => ({ error: null }) }),
    insert: async () => ({ error: null }),
    delete: () => ({ eq: async () => ({ error: null }) }),
  }),
  rpc: async () => ({ data: null, error: null }),
};

export const supabase = stub;
