import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DeleteDialog({
  open,
  deleteFn,
  closeFn,
}: {
  open: boolean;
  deleteFn: () => void;
  closeFn: () => void;
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="items-center">
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Kamu akan menghapus item ini dari keranjang
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="px-4">
          <AlertDialogCancel onClick={closeFn}>Cancel</AlertDialogCancel>
          <Button
            variant={"destructive"}
            className="w-full"
            onClick={() => {
              deleteFn();
              closeFn();
            }}
          >
            Hapus
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
