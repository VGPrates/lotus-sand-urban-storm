import { useState, type FormEvent } from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { useSession } from "@/lib/rpg/hooks";
import { APP_NAME } from "@/lib/rpg/constants";
import { LoadingScreen } from "@/components/app-chrome";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { writeDevSession } from "@/lib/rpg/dev-session";
import { ensureProfile } from "@/lib/rpg/local-api";
import type { Role } from "@/lib/rpg/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>): { mode?: "signup" } =>
    search["mode"] === "signup" ? { mode: "signup" } : {},
  head: () => ({
    meta: [
      { title: "Entrar — RPG Fallen Gods" },
      { name: "description", content: "Escolha um nick e entre como jogador ou mestre." },
    ],
  }),
  component: Login,
});

function Login() {
  const { user, isPending } = useSession();
  const [role, setRole] = useState<Role>("player");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (isPending) return <LoadingScreen />;
  if (user) return <Navigate to="/" />;

  function onEnter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = new FormData(event.currentTarget);
    const nick = String(form.get("nick") ?? "").trim();
    if (nick.length < 2) {
      setError("Escolha um nick com pelo menos 2 letras.");
      return;
    }
    setBusy(true);
    const slug = nick.toLowerCase().replace(/\s+/g, "-").slice(0, 24);
    const userId = `dev-${role}-${slug}`;
    writeDevSession({ userId, nick, role });
    ensureProfile(role, nick, userId);
    window.location.href = role === "gm" ? "/mestre" : "/painel";
  }

  return (
    <main className="grid min-h-dvh place-items-center px-4 py-10">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader className="mb-6">
          <p className="text-xs tracking-[0.24em] text-muted uppercase">{APP_NAME}</p>
          <CardTitle className="text-2xl">Entrar na mesa</CardTitle>
          <CardDescription>
            Modo de testes: só nick e papel. Sem senha, email ou cadastro.
          </CardDescription>
        </CardHeader>

        <form className="grid gap-5" onSubmit={onEnter}>
          <div className="grid gap-1.5">
            <Label htmlFor="nick">Nick</Label>
            <Input id="nick" name="nick" required autoComplete="nickname" placeholder="Seu nome na mesa" maxLength={32} />
          </div>

          <div className="grid gap-2">
            <p className="text-sm font-medium">Entrar como</p>
            <div className="grid grid-cols-2 gap-2">
              <RolePick
                title="Jogador"
                body="Ficha, inventário e o D20."
                selected={role === "player"}
                onSelect={() => setRole("player")}
              />
              <RolePick
                title="Mestre"
                body="Conduz a mesa e as fichas."
                selected={role === "gm"}
                onSelect={() => setRole("gm")}
              />
            </div>
          </div>

          {error ? <p className="text-sm text-hp-bright">{error}</p> : null}

          <Button type="submit" disabled={busy}>
            {busy ? "Abrindo..." : "Entrar"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-subtle">
          <Link to="/" className="underline-offset-4 hover:text-fg hover:underline">
            Voltar
          </Link>
        </p>
      </Card>
    </main>
  );
}

function RolePick({
  title,
  body,
  selected,
  onSelect,
}: {
  title: string;
  body: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "rounded-xl bg-elevated p-3 text-left shadow-border transition-[box-shadow] duration-150",
        selected ? "ring-1 ring-ring/50 shadow-border-hover" : "hover:shadow-border-hover",
      )}
    >
      <p className="font-display text-base">{title}</p>
      <p className="mt-1 text-xs text-muted">{body}</p>
    </button>
  );
}
