import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function PromoBanner() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const banners = [
    "https://api-storage.djie.cloud/aji/catering-banner/banner-1.jpg",
    "https://api-storage.djie.cloud/aji/catering-banner/banner-2.jpg",
    "https://api-storage.djie.cloud/aji/catering-banner/banner-3.jpg",
  ];

  useEffect(() => {
    if (api) {
      const onSelect = () => {
        setSelectedIndex(api.selectedScrollSnap());
      };
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }
  }, [api]);

  return (
    <div className="p-1">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="relative"
        setApi={setApi}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <img
                src={banner}
                alt={`Promo Banner ${index}`}
                className="rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                selectedIndex === index ? "bg-[#597445]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
