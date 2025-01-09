import { Transaction } from "@/types/transaction-interfaces";
import { useIonRouter } from "@ionic/react";
import { ChevronRight } from "lucide-react";

export default function TransactionList({
  transactionData,
}: {
  transactionData: Transaction;
}) {
  const router = useIonRouter();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const transStartDate = new Date(transactionData.startDate);

  const totalPrice =
    transactionData.Orders.reduce((acc, order) => acc + order.totalHarga, 0) +
    15000;

  return (
    <div
      className="list-card w-full  outline outline-1 outline-[#D5D5D5] active:bg-gray-100 transition-colors py-4 pt-6 px-4"
      onClick={() => router.push(`/transaksi/${transactionData.id}`)}
    >
      <div className="flex flex-row items-center justify-between  pb-0">
        <h1 className="font-semibold text-xl">
          {transStartDate.toLocaleDateString("id-ID", options)}
        </h1>
        <ChevronRight />
      </div>
      <div className="flex flex-col mt-2 font-medium">
        <div className="flex flex-row justify-between">
          <h6>Durasi</h6>
          <span>
            {Math.ceil(
              (new Date(transactionData.endDate).getTime() -
                new Date(transactionData.startDate).getTime()) /
                (1000 * 60 * 60 * 24)
            ) + " Hari"}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <h6>Total Transaksi</h6>
          <span>
            {totalPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <h6>Alamat</h6>
          <span>{transactionData.alamat}</span>
        </div>
      </div>
      {transactionData.Orders.map((order) => {
        const orderStartDate = new Date(transactionData.startDate);
        const orderEndDate = new Date(orderStartDate);
        orderEndDate.setDate(orderStartDate.getDate() + order.durasi);

        return (
          <div className="card !m-0" key={order.id}>
            <div className="title">
              <h1>{order.catering.nama}</h1>
              <p>{order.durasi} Hari</p>
            </div>

            <div className="card-detail">
              <div className="row">
                <p>Paket</p>
                <p className="information">{order.paket.nama}</p>
              </div>
              <div className="row">
                <p>Tanggal Mulai</p>
                <p className="information">
                  {orderStartDate.toLocaleDateString("id-ID", options)}
                </p>
              </div>
              <div className="row">
                <p>Tanggal Selesai</p>
                <p className="information">
                  {orderEndDate.toLocaleDateString("id-ID", options)}
                </p>
              </div>
              <div className="row">
                <p>Status</p>
                <p className="information">{order.statusOrder}</p>
              </div>
              <div className="row">
                <p>Total Harga</p>
                <p className="information">
                  {order.totalHarga.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
