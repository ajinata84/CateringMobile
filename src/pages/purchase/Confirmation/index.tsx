import { Bike, CalendarIcon, ChevronLeft, Copy } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./index.css";
import { IonContent, IonFooter, IonPage } from "@ionic/react";
import AppHeader from "@/components/AppHeader";
import { useSelectedItems } from "@/hooks/use-cart";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Transaction {
  orders: {
    paketId: string;
    qty: number;
  }[];
  startDate: Date;
  alamat: string;
  paymentMethod: string;
}

export default function Confirmation() {
  const { selectedItems } = useSelectedItems();
  const [alamatOpen, setAlamatOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [alamat, setAlamat] = useState<string>("");
  const [alamatInput, setAlamatInput] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("GoPay");

  const [userData, setUserData] = useState({
    hp: "",
    alamat: "",
  });

  const paymentMethods = ["GoPay", "OVO", "DANA", "LinkAja"];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/customer/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.user);
        setAlamat(
          response.data.user.alamat !== null ? response.data.user.alamat : ""
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.paket.harga * item.quantity,
    0
  );

  const handleAlamatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlamatInput(e.target.value);
  };

  const handleAlamat = (al: string) => {
    setAlamat(al);
  };

  const handlePayment = () => {
    if (!date || alamat.length === 0) {
      toast("Cek alamat, tanggal, atau metode pembayaran!", {
        position: "bottom-center",
        duration: 1000,
      });
      return;
    }

    const transaction: Transaction = {
      orders: selectedItems.map((item) => ({
        paketId: item.paket.id,
        qty: item.quantity,
      })),
      startDate: date!,
      alamat: alamat,
      paymentMethod: paymentMethod,
    };

    const token = localStorage.getItem("token");

    toast("Membuat pesanan...", {
      position: "bottom-center",
      duration: 1000,
    });

    axios
      .post("http://localhost:3000/transaksi", transaction, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast("Pesanan berhasil dibuat!", {
          position: "bottom-center",
          duration: 1000,
        });
      })
      .catch((error) => {
        console.error("Error creating transaction:", error);
        toast("Gagal membuat pesanan!", {
          position: "bottom-center",
          duration: 1000,
        });
      });
  };

  return (
    <IonPage>
      <AppHeader title="Konfirmasi Order" />
      <IonContent>
        <div className="!pt-4">
          <div className="p-4">
            <Dialog open={alamatOpen} onOpenChange={setAlamatOpen}>
              <DialogTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="w-full h-auto rounded-2xl px-6 bg-white shadow-xl"
                >
                  <div className="w-full">
                    <div className="flex flex-row justify-between mb-2 w-full items-center text-center">
                      <h1 className="font-semibold text-base flex flex-col text-start">
                        Alamat Pengiriman
                        <p className="font-normal text-sm text-wrap">
                          {alamat ? alamat : <span>Tulis alamat</span>}
                        </p>
                      </h1>
                      <p className="font-light text-gray-500 ">Ubah</p>
                    </div>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Ubah Alamat</DialogTitle>
                  <DialogDescription>Ubah alamat pengiriman</DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Input
                      defaultValue={alamat}
                      type="text"
                      onChange={handleAlamatChange}
                    />
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <Button
                    type="button"
                    variant="default"
                    className="bg-[#597445] active:bg-[#6a8258] hover:bg-[#6a8258] rounded-xl"
                    onClick={() => {
                      handleAlamat(alamatInput);
                      setAlamatOpen(false);
                    }}
                  >
                    Simpan
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {alamat.length === 0 && (
              <p className="text-red-500 mt-2 p-2 font-medium text-sm">
                Butuh Alamat!
              </p>
            )}
          </div>
          <div className="confirmation">
            <div className="menu-order">
              {selectedItems.map((item) => (
                <div className="list-menu">
                  <div className="list-image flex-wrap gap-2">
                    {item.imageUrls.map((url) => (
                      <>
                        <img src={url} />
                      </>
                    ))}
                  </div>
                  <div className=" p-4">
                    <div className="detail-menu mb-2">
                      <h2>{item.paket.nama}</h2>
                      <h3>Rp{item.paket.harga.toLocaleString()}</h3>
                    </div>
                    <div className="detail-menu mb-2">
                      <h2>Kuantitas</h2>
                      <h3>{item.quantity}</h3>
                    </div>
                    <div className="detail-menu">
                      <h2>Durasi</h2>
                      <h3>{item.paket.durasi * item.quantity} Hari</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="w-full h-auto rounded-2xl px-6 bg-white shadow-xl active:bg-gray-100 hover:bg-white"
                >
                  <div className="w-full">
                    <div className="flex flex-row justify-between mb-2 w-full items-center text-center">
                      <h1 className="font-semibold text-base flex flex-col text-start">
                        Jadwal Pengiriman
                        <span className="font-normal text-sm">
                          {date ? (
                            format(date, "PPPP")
                          ) : (
                            <span>Pilih tanggal</span>
                          )}
                        </span>
                      </h1>
                      <p className="font-light text-gray-500 ">Ubah</p>
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
            {!date && (
              <p className="text-red-500 mt-2 p-2 font-medium text-sm">
                Butuh Tanggal Pengiriman!
              </p>
            )}
          </div>

          <div className="confirmation ">
            <h1>Detail pembayaran</h1>
            <div className="payment-detail">
              <div className="payment-row">
                <p>Harga</p>
                <p className="harga">Rp. {totalPrice.toLocaleString()}</p>
              </div>

              <div className="payment-row">
                <p>Biaya pengiriman</p>
                <p className="harga">Rp. 15.000</p>
              </div>
            </div>
          </div>

          <div className="p-4 mb-64">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className="w-full h-auto rounded-2xl px-6 bg-white shadow-xl"
                >
                  <div className="w-full">
                    <div className="flex flex-row justify-between mb-2 w-full items-center text-center">
                      <h1 className="font-semibold text-base flex flex-col text-start">
                        Metode Pembayaran
                        <p className="font-normal text-sm text-wrap">
                          {paymentMethod ? (
                            paymentMethod
                          ) : (
                            <span>Pilih Metode Pembayaran</span>
                          )}
                        </p>
                      </h1>
                      <p className="font-light text-gray-500 ">Ubah</p>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Payment Method</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  {paymentMethods.map((method) => (
                    <DropdownMenuRadioItem value={method} key={method}>
                      {method}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            {paymentMethod.length === 0 && (
              <p className="text-red-500 mt-2 p-2 font-medium text-sm">
                Butuh Metode Pembayaran!
              </p>
            )}
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <div className="order-container">
          <div className="order-button">
            <div className="total-payment">
              <h1>Total tagihan</h1>
              <p>Rp. {(totalPrice + 15000).toLocaleString()}</p>
            </div>
            <Button
              className="bg-[#597445] active:bg-[#6a8258] hover:bg-[#6a8258] rounded-xl w-full text-lg py-2 h-auto"
              onClick={handlePayment}
            >
              Pesan sekarang
            </Button>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
}
