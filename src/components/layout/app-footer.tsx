import { APP_COMPANY, APP_NAME } from "@/constants/app";

export function AppFooter() {
  return (
    <footer className="border-t border-border bg-card/50 px-4 py-3 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} {APP_COMPANY} — {APP_NAME}
    </footer>
  );
}
