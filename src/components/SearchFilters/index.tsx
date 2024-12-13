import React, { useState } from "react";
import "./index.css";
import { IonHeader, IonSearchbar, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { History, ListFilter, MapPin } from "lucide-react";

export default function SrachFilters() {
  const router = useIonRouter();

  const [activeCategory, setActiveCategory] = useState("Harian"); // Default buat category
  const categories = ["Harian", "Kantoran", "Pernikahan", "Acara"]; // List category

  const goToSearch = () => {
    router.push('/search/test', 'root', 'push');
  };

  return (
    <div className="mb-4">
      <div className="search-bar">
        <IonSearchbar value="" class="custom" onClick={goToSearch}></IonSearchbar>
      </div>

      <div className="location-history">
        <IonGrid>
          <IonRow>
            <IonCol>
              <MapPin color="#597445" className="icon" />
              <p>Malang, Jawa Timur</p>
            </IonCol>
            <IonCol>
              <History color="#30a6ea" className="icon" />
              <p>Order History</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>

      <div className="categories">
        <h1>Categories</h1>
        <ListFilter size={32} color="#597445" strokeWidth={2.25} />
      </div>

      <div className="category-list">
        <IonGrid>
          <IonRow>
            {categories.map((category) => (
              <IonCol
                key={category}
                className={activeCategory === category ? "active" : ""} // Tambahkan class "active" jika sesuai
                onClick={() => setActiveCategory(category)} // Ubah kategori aktif saat diklik
              >
                {category}
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
}
