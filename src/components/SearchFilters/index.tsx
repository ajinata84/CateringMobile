import React, { useState } from "react";
import "./index.css";
import {
  IonHeader,
  IonIcon,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { History, ListFilter, MapPin } from "lucide-react";
import PromoBanner from "../PromoBanner";
import { Button } from "../ui/button";
import { searchOutline } from "ionicons/icons";

interface searchFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function SearchFilters({
  activeCategory,
  setActiveCategory,
}: searchFilterProps) {
  const router = useIonRouter();

  const categories = ["Semua", "Harian", "Kantoran", "Pernikahan", "Acara"];

  const goToSearch = () => {
    router.push("/search", "forward", "push");
  };

  return (
    <div className="mb-4">
      <div className="fixed top-0 z-50 bg-white pt-4 auto w-full pr-16">
        <div className="search-bar">
          <Button
            className="justify-start w-full text-lg outline-offset-[-2px] rounded-[15px] h-[46px] py-3 px-6 outline outline-2 outline-[#597445] text-[#597445] hover:text-[#597445] hover:bg-[#f2f2f2]"
            variant={"ghost"}
            onClick={goToSearch}
          >
            
            Search
          </Button>
        </div>

        <div className="location-history ">
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
      </div>
      <div className="p-1">
        <div className="mt-28" />
        <PromoBanner />
        <div className="categories">
          <h1>Categories</h1>
          <ListFilter size={32} color="#597445" strokeWidth={2.25} />
        </div>

        <div className="category-list ">
          <IonGrid>
            <IonRow>
              {categories.map((category) => (
                <IonCol
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </div>
    </div>
  );
}
