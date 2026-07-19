import { Wallet } from "lucide-react";
import { APP_COMPANY } from "@/constants/app";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const DIMS = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-14 w-14" } as const;
const ICON = { sm: 18, md: 22, lg: 28 } as const;
const TEXT = { sm: "text-sm", md: "text-lg", lg: "text-2xl" } as const;

export function Logo({ size = "md", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`${DIMS[size]} shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-lg shadow-primary/25`}
      >
        <Wallet size={ICON[size]} className="text-primary-foreground" strokeWidth={2.5} />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`${TEXT[size]} font-bold tracking-tight text-foreground`}>
            Gardnet <span className="text-primary">Caisse</span>
          </span>
          {size !== "sm" && (
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {APP_COMPANY}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
