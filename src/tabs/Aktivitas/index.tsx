import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./index.css";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import axios from "axios";
import TransactionList from "./TransactionList";
import { Transaction } from "@/types/transaction-interfaces";

export default function Aktivitas() {
  const router = useIonRouter();
  const pathName = router.routeInfo.pathname;
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const ongoingTransactions = transactions.filter(
    (transaction) =>
      !transaction.Orders.every((order) => order.statusOrder === "FINISHED")
  );
  const completedTransactions = transactions.filter((transaction) =>
    transaction.Orders.every((order) => order.statusOrder === "FINISHED")
  );

  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">(
    "ongoing"
  );

  const showContent = (tab: "ongoing" | "completed") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/transaksi", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (pathName === "/tabs/aktivitas") {
      fetchTransactions();
    }
  }, [pathName]);

  return (
    <IonPage>
      <div className="sticky top-0 z-50 bg-white w-full ">
        <div className="back-confirm">
          <p>List Transaksi</p>
        </div>

        <div className="tab-container">
          <div
            className={`tab ${activeTab === "ongoing" ? "active" : ""}`}
            onClick={() => showContent("ongoing")}
          >
            Sedang berjalan
          </div>
          <div
            className={`tab ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => showContent("completed")}
          >
            Pesanan selesai
          </div>
        </div>
      </div>
      <IonContent>
        {activeTab === "ongoing" &&
          ongoingTransactions.map((transaction) => (
            <TransactionList
              transactionData={transaction}
              key={transaction.id + "ongoing"}
            />
          ))}

        {activeTab === "completed" &&
          completedTransactions.map((transaction) => (
            <TransactionList
              transactionData={transaction}
              key={transaction.id + "ongoing"}
            />
          ))}
      </IonContent>
    </IonPage>
  );
}
