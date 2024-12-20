import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons"; // Import icon yang digunakan
import "./index.css"; // File CSS tetap digunakan
import { ChevronLeft } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const CartCatering = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paket Kenyang Gembira",
      quantity: 1,
      imageUrl: "./src/pages/purchase/cart/img/capjay.jpg",
      timespan: "Harian",
      price: 40000,
    },
    {
      id: 2,
      name: "Paket Kenyang Gembira",
      quantity: 1,
      imageUrl: "./src/pages/purchase/cart/img/nasgor.jpg",
      timespan: "Mingguan",
      price: 40000,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <AppHeader title="Cart" />
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 py-4 border-b border-gray-300 grid-cols-[auto_1fr_auto_auto]"
          >
            {/* Checkbox */}
            <div
              onClick={() => handleCheckboxChange(item.id)}
              className={`h-6 w-6 border-2 rounded-full flex items-center justify-center cursor-pointer ${
                selectedItems.includes(item.id)
                  ? "bg-custom-green border-custom-green"
                  : "border-gray-300"
              }`}
            >
              {selectedItems.includes(item.id) && (
                <span className="checkmark">✔</span>
              )}
            </div>

            {/* Product Image */}
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />

            {/* Product Info */}
            <div className="flex-1">
              <h3 className=" catering-name text-base font-semibold text-ellipsis overflow-hidden">
                {item.name}
              </h3>
              {/* Detail Harian/Mingguan */}
              <p className="text-sm text-gray-500">{item.timespan}</p>
              {/* Harga */}
              <p className="text-sm text-gray-500 mt-2">
                Rp{item.price.toLocaleString()}
              </p>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center gap-3">
              {/* Tombol Minus */}
              <button
                onClick={() =>
                  setCartItems((prev) =>
                    prev.map((product) =>
                      product.id === item.id
                        ? {
                            ...product,
                            quantity: Math.max(1, product.quantity - 1),
                          }
                        : product
                    )
                  )
                }
                className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <IonIcon icon={removeOutline} />
              </button>

              <span className="font-semibold text-sm">{item.quantity}</span>

              {/* Tombol Plus */}
              <button
                onClick={() =>
                  setCartItems((prev) =>
                    prev.map((product) =>
                      product.id === item.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                    )
                  )
                }
                className="h-6 w-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <IonIcon icon={addOutline} />
              </button>
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

          <button className="btn-order">Payment</button>
        </IonFooter>
    </IonPage>
  );
};

export default CartCatering;
