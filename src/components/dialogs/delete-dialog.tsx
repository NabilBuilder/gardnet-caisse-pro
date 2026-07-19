import { ConfirmDialog } from "./confirm-dialog";

interface DeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemLabel?: string;
  onConfirm: () => void;
}

/** Dialogue de suppression basé sur ConfirmDialog avec variante destructive. */
export function DeleteDialog({
  open,
  onOpenChange,
  itemLabel = "cet élément",
  onConfirm,
}: DeleteDialogProps) {
  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Confirmer la suppression"
      description={`Voulez-vous vraiment supprimer ${itemLabel} ? Cette action est irréversible.`}
      confirmLabel="Supprimer"
      variant="destructive"
      onConfirm={onConfirm}
    />
  );
}
