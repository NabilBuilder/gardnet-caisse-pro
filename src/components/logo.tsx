import { Wallet } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const dims =
    size === "sm" ? "h-8 w-8" : size === "lg" ? "h-14 w-14" : "h-10 w-10";
  const iconSize = size === "sm" ? 18 : size === "lg" ? 28 : 22;
  const textSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${dims} shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-lg shadow-primary/25`}
      >
        <Wallet size={iconSize} className="text-primary-foreground" strokeWidth={2.5} />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`${textSize} font-bold tracking-tight text-foreground`}>
            Gardnet <span className="text-primary">Caisse</span>
          </span>
          {size !== "sm" && (
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Groupe Gardnet Services
            </span>
          )}
        </div>
      )}
    </div>
  );
}
