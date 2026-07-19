import { createFileRoute } from "@tanstack/react-router";
import { ParametresPage } from "@/pages/parametres-page";

export const Route = createFileRoute("/_app/parametres")({
  component: ParametresPage,
});
