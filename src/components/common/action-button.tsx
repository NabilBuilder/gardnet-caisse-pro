import type { LucideIcon } from "lucide-react";
import { Button, type buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

/** Bouton avec icône + label, uniforme dans toute l'application. */
export function ActionButton({
  icon: Icon,
  label,
  onClick,
  className,
  variant = "default",
  size,
  type = "button",
  disabled,
  loading,
}: ActionButtonProps) {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn("gap-2", className)}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </Button>
  );
}
