import { createFileRoute } from "@tanstack/react-router";
import { DepensesPage } from "@/pages/depenses-page";

export const Route = createFileRoute("/_app/depenses")({
  component: DepensesPage,
});
