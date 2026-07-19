import { useRouterState } from "@tanstack/react-router";
import { APP_NAME } from "@/constants/app";
import { PAGE_TITLES } from "@/constants/navigation";

/** Retourne le titre de la page courante en se basant sur son pathname. */
export function usePageTitle(): string {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return PAGE_TITLES[pathname] ?? APP_NAME;
}
