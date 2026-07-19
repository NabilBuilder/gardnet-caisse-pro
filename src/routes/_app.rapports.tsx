import { createFileRoute } from "@tanstack/react-router";
import { RapportsPage } from "@/pages/rapports-page";

export const Route = createFileRoute("/_app/rapports")({
  component: RapportsPage,
});
