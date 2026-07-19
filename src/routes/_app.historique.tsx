import { createFileRoute } from "@tanstack/react-router";
import { HistoriquePage } from "@/pages/historique-page";

export const Route = createFileRoute("/_app/historique")({
  component: HistoriquePage,
});
