import SearchCard from "@/components/SearchCard";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";

import React, { useState } from "react";

export default function Search() {
  const [activeCategory, setActiveCategory] = useState("Harian"); // Default buat category
  const categories = ["Harian", "Kantoran", "Pernikahan", "Acara"]; // List category
  return (
    <IonPage>
      <IonContent>
        <div className="search-container p-8">
          <div className="search-bar">
            <IonSearchbar value="" class="custom"></IonSearchbar>
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
        <SearchCard />
      </IonContent>
    </IonPage>
  );
}
