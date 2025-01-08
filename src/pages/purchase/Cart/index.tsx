import React, { useState } from "react";
import { IonPage, IonContent, IonFooter, IonIcon } from "@ionic/react";
import { addOutline, removeOutline, trash, trashBinOutline, trashBinSharp, trashOutline } from "ionicons/icons";
import "./index.css";
import AppHeader from "@/components/AppHeader";
import { useCart } from "@/hooks/use-cart";
import { DeleteDialog } from "./DeleteDialog";
import { Paket } from "@/types/interfaces";

const CartCatering = () => {
  const { items, addToCart, subtractQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState<Paket[]>([]); // Changed to Paket[]
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [currentDelete, setCurrentDelete] = useState<string>("");

  const handleCheckboxChange = (paket: Paket) => {
    if (selectedItems.some((item) => item.id === paket.id)) {
      setSelectedItems(selectedItems.filter((item) => item.id !== paket.id));
    } else {
      setSelectedItems([...selectedItems, paket]);
    }
  };

  const handleDelete = () => {
    setDeleteDialog(true);
  };

  const calculateTotal = () => {
    return selectedItems.reduce(
      (acc, item) =>
        acc + item.harga * items.find((i) => i.paket.id === item.id)?.quantity!,
      0
    );
  };

  const calculateDurasi = () => {
    const maxDurasi = Math.max(
      ...selectedItems.map(
        (item) =>
          items.find((i) => i.paket.id === item.id)?.quantity! * item.durasi
      )
    );

    return selectedItems.length > 0 ? maxDurasi : 0;
  };

  return (
    <>
      <IonPage>
        <AppHeader title="Cart" />
        <IonContent>
          {items.map((item) => (
            <div
              key={item.paket.id}
              className="flex flex-col items-center gap-4 py-4 border-b border-gray-300 grid-cols-[auto_1fr_auto_auto] active:bg-gray-100 transition-colors p-4"
            >
              <div className="flex flex-row  items-center w-full justify-start">
                <div
                  onClick={() => handleCheckboxChange(item.paket)}
                  className={`h-6 w-6 border-2 rounded-full flex items-center justify-center cursor-pointer self-start${
                    selectedItems.some(
                      (selected) => selected.id === item.paket.id
                    )
                      ? "border-custom-green !bg-[#597445] "
                      : "border-gray-300"
                  }`}
                >
                  {selectedItems.some(
                    (selected) => selected.id === item.paket.id
                  ) && <span className="checkmark ">✔</span>}
                </div>

                <div className="w-full flex flex-row justify-evenly flex-wrap">
                  {item.imageUrls.map((url) => (
                    <img
                      src={url}
                      alt={item.paket.nama}
                      className="w-24 h-24 object-cover rounded-md mt-2"
                      key={url}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-center w-full  pt-2">
                <div className="flex-1">
                  <h3 className="catering-name text-base font-semibold text-ellipsis overflow-hidden">
                    {item.paket.nama}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (item.quantity === 1) {
                        setCurrentDelete(item.paket.id);
                        handleDelete();
                      } else {
                        subtractQuantity(item.paket.id);
                      }
                    }}
                    className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 !mt-0"
                  >
                    {item.quantity === 1 ? <IonIcon icon={trashOutline} /> : <IonIcon icon={removeOutline} />}
                  </button>

                  <span className="font-semibold text-sm !mt-0">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addToCart(item.paket.id)} // You'll need to adjust this based on your Paket interface
                    className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 !mt-0"
                  >
                    <IonIcon icon={addOutline} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </IonContent>
        <IonFooter>
          <div className="footer-container">
            <span className="footer-label">Total:</span>
            <span className="footer-total">
              Rp{calculateTotal().toLocaleString()}
            </span>
          </div>
          <div className="footer-container">
            <span className="footer-label">Durasi:</span>
            <span className="footer-total">{calculateDurasi()} hari</span>
          </div>
          <button className="btn-order">Payment</button>
        </IonFooter>
      </IonPage>
      <DeleteDialog
        open={deleteDialog}
        deleteFn={() => subtractQuantity(currentDelete)}
        closeFn={() => setDeleteDialog(false)}
      />
    </>
  );
};

export default CartCatering;
