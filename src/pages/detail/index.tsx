import { Star } from "lucide-react";
import "./index.css";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import AppHeader from "@/components/AppHeader";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { TransactionDetail } from "@/types/detail-interfaces";

export default function Detail() {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const longOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const { transaksiId } = useParams<{
    transaksiId: string;
  }>();

  const [transaksi, setTransaksi] = useState<TransactionDetail>();
  const [loading, setLoading] = useState(true);

  const [nettPrice, setNettPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [transactionStartDate, setTransactionStartDate] = useState(new Date());
  const [transactionFinishDate, setTransactionFinishDate] = useState(
    new Date()
  );

  useEffect(() => {
    axios
      .get<TransactionDetail>(
        `http://localhost:3000/transaksi/${transaksiId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        const tempTransaksi = response.data;

        const nettPrice = tempTransaksi.Orders.reduce(
          (acc, order) => acc + order.totalHarga,
          0
        );
        const totalPrice =
          tempTransaksi.Orders.reduce(
            (acc, order) => acc + order.totalHarga,
            0
          ) + 15000;

        const transactionStartDate = new Date(tempTransaksi.startDate);
        const transactionFinishDate = new Date(tempTransaksi.endDate);

        setNettPrice(nettPrice);
        setTotalPrice(totalPrice);
        setTransactionStartDate(transactionStartDate);
        setTransactionFinishDate(transactionFinishDate);

        setTransaksi(response.data);
      })
      .catch((error) => {
        console.error("Get Detail Failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [transaksiId]);

  return (
    <IonPage>
      <AppHeader title="Detail Transaksi" />
      <IonContent>
        {transaksi?.Orders.map((order) => {
          const orderEndDate = new Date(transactionStartDate);
          orderEndDate.setDate(transactionStartDate.getDate() + order.durasi);

          return (
            <div className=" w-full   outline-1 outline-dashed  outline-[#597445] my-4 py-4">
              <div className="info-catering">
                <h1>{order.catering.nama}</h1>
                <p>{order.paket.nama}</p>
                <p>
                  {transactionStartDate.toLocaleDateString("id-ID", options)} -{" "}
                  {orderEndDate.toLocaleDateString("id-ID", options)}
                </p>
              </div>

              <div className="menu-catering">
                <h1>Status</h1>
                <p>{order.statusOrder}</p>
              </div>

              <div className="bottom-border"></div>

              <div className="menu-catering">
                <h1>Detail Paket</h1>
                {order.paket.Schedules.map((sch) =>
                  sch.ScheduleFoods.map((scf) => <p>{scf.makanan.nama}</p>)
                )}
                <div className="alamat mt-2">
                  <h1 className="mb-2">Harga</h1>
                  <h2>
                    {order.paket.harga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bottom-border"></div>

        <div className="alamat-catering">
          <div className="alamat">
            <h1>Alamat:</h1>
            <h2>{transaksi?.alamat}</h2>
          </div>
          <div className="alamat">
            <h1>Mulai:</h1>
            <h2>
              {transactionStartDate.toLocaleDateString("id-ID", longOptions)}
            </h2>
          </div>
          <div className="alamat">
            <h1>Selesai:</h1>
            <h2>
              {transactionFinishDate.toLocaleDateString("id-ID", longOptions)}
            </h2>
          </div>
        </div>

        <div className="bottom-border"></div>

        <div className="payment-catering mb-40">
          <h1>Detail Payment</h1>
          <div className="payment-rows">
            <p>Harga</p>
            <p>
              {nettPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>

          <div className="payment-rows">
            <p>Biaya Pengiriman</p>
            <p>Rp15.000</p>
          </div>
          <div className="bottom-border-dashed"></div>
          <div className="payment-rows">
            <p>Total</p>
            <h2>
              {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h2>
          </div>
          <div className="bottom-border-dashed"></div>
        </div>

        <div className="button-container ">
          <button className="outline-button !bg-white">Bantuan</button>
        </div>
      </IonContent>
    </IonPage>
  );
}
