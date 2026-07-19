import { createFileRoute } from "@tanstack/react-router";
import { AvancesPage } from "@/pages/avances-page";

export const Route = createFileRoute("/_app/avances")({
  component: AvancesPage,
});
