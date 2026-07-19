import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const SIZES = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
} as const;

export function ResponsiveContainer({ children, className, size = "full" }: ResponsiveContainerProps) {
  return <div className={cn("mx-auto w-full", SIZES[size], className)}>{children}</div>;
}
