import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLibrary, getMyState } from "./api";
import { fetchCustomIcons } from "./icons";
import { readDevSession, subscribeDevSession, type DevSession } from "./dev-session";

export type DevUser = {
  id: string;
  email: string;
  user_metadata: { name: string };
};

export function useSession() {
  const [session, setSession] = useState<DevSession | null>(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    const sync = () => {
      setSession(readDevSession());
      setPending(false);
    };
    sync();
    return subscribeDevSession(sync);
  }, []);

  const user: DevUser | null = session
    ? { id: session.userId, email: `${session.nick}@mesa.local`, user_metadata: { name: session.nick } }
    : null;

  return { session, user, isPending };
}

export function useRpgState(enabled = true) {
  return useQuery({ queryKey: ["rpg-state"], queryFn: getMyState, enabled });
}

export function useLibrary() {
  return useQuery({ queryKey: ["rpg-library"], queryFn: getLibrary });
}

export function useCustomIcons() {
  return useQuery({ queryKey: ["custom-icons"], queryFn: fetchCustomIcons });
}

export function useTableSync() {
  const qc = useQueryClient();
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "mesa-dev-table") {
        void qc.invalidateQueries({ queryKey: ["rpg-state"] });
        void qc.invalidateQueries({ queryKey: ["rpg-library"] });
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [qc]);
}
