import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { Eye, EyeOff, LogIn } from "lucide-react";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-background">
      {/* Branding panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-glow p-12 text-primary-foreground">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
        <div className="relative">
          <Logo size="lg" />
        </div>
        <div className="relative space-y-4">
          <h2 className="text-4xl font-bold leading-tight">
            Gérez votre caisse<br />en toute simplicité.
          </h2>
          <p className="text-primary-foreground/80 max-w-md">
            Suivi des dépenses, avances et rapports centralisés pour le Groupe Gardnet Services.
          </p>
        </div>
        <div className="relative text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Groupe Gardnet Services
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <Card className="w-full max-w-md border-border/60 shadow-xl shadow-primary/5 p-8">
          <div className="mb-6 flex flex-col items-center gap-3 lg:hidden">
            <Logo size="md" />
          </div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Connexion</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Accédez à votre espace administrateur.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Utilisateur</Label>
              <Input
                id="username"
                type="text"
                placeholder="admin"
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Masquer" : "Afficher"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-11 gap-2" size="lg">
              <LogIn className="h-4 w-4" />
              Se connecter
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Application interne — Accès réservé
          </p>
        </Card>
      </div>
    </div>
  );
}
