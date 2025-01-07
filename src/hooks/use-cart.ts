import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";
import { Paket } from "../types/interfaces";

interface CartItem {
  paket: Paket
  imageUrls: string[];
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (paket: Paket | string) => void;
  removeFromCart: (paketId: string) => void;
  subtractQuantity: (paketId: string) => void;
  getQuantity: (paketId: string) => number;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (input: Paket | string) => {
        if (typeof input === "string") {
          set((state) => {
            const existingItem = state.items.find(
              (item) => item.paket.id === input
            );
            if (existingItem) {
              return {
                items: state.items.map((item) =>
                  item.paket.id === input
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
              };
            }
            return state;
          });
        } else {
          set((state) => {
            const existingItem = state.items.find(
              (item) => item.paket.id === input.id
            );
            if (existingItem) {
              return {
                items: state.items.map((item) =>
                  item.paket.id === input.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
              };
            }

            const imageUrls = input.Schedules.flatMap((schedule) =>
              schedule.ScheduleFoods.map((sf) => sf.makanan.imageUrl)
            );

            toast("Added to cart!", {
              position: "bottom-center",
              duration: 1000,
              icon: "🛒",
            });

            return {
              items: [
                ...state.items,
                {
                  paket: input,
                  imageUrls,
                  quantity: 1,
                },
              ],
            };
          });
        }
      },

      removeFromCart: (paketId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.paket.id !== paketId),
        }));
      },

      subtractQuantity: (paketId: string) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.paket.id === paketId
          );
          if (existingItem && existingItem.quantity > 1) {
            return {
              items: state.items.map((item) =>
                item.paket.id === paketId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          }
          return {
            items: state.items.filter((item) => item.paket.id !== paketId),
          };
        });
      },

      getQuantity: (paketId: string) => {
        const item = get().items.find((item) => item.paket.id === paketId);
        return item?.quantity || 0;
      },

      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
