import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronLeft, Sunrise } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import FoodCardLarge from "@/components/FoodCardLarge";
import AppHeader from "@/components/AppHeader";

export default function PaketView() {
  return (
    <IonPage>
      <AppHeader />
      <IonContent>
        <div className="p-8">
          <h1 className="font-semibold text-3xl">
            Paket Kenyang Gembira sangat gembira
          </h1>
          <div className="flex flex-row justify-between  mt-4">
            <span className="font-semibold !mt-0">RP. 50.000</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-[30%] rounded-full bg-[#597445]">
                  <ChevronDown />
                  Harian
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl">
                <DropdownMenuRadioGroup>
                  <DropdownMenuRadioItem value="bottom">
                    Harian
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Mingguan
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="space-y-2">
            <span className="flex flex-row items-center space-x-4">
              <span className="font-semibold !mt-0">Pagi</span>
              <span className="text-sm">07.00 - 07.30</span>
              <Sunrise size={15} color="#E8751A" />
            </span>
          </div>
          <FoodCardLarge />
          <FoodCardLarge />
          <FoodCardLarge />
        </div>
      </IonContent>
    </IonPage>
  );
}
