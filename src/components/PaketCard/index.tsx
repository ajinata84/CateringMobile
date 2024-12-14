import { useIonRouter } from "@ionic/react";
import React from "react";

export default function PaketCard({ paketRoute }: { paketRoute: string }) {
  const router = useIonRouter();

  const images = [
    "https://asset.kompas.com/crops/0TAYtSARLhrA8bCNnfQyXeXj2N0=/100x67:900x600/1200x800/data/photo/2021/01/01/5fee5925f248d.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrs-a1Trah8Z5MnhzBF7Ix2pq8ldQSoEUyw&s",
    "https://cdn0-production-images-kly.akamaized.net/GfoYUbIjsNs49qE_BsYXe2aGfF8=/2340x0:6316x5303/500x667/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2987431/original/059279800_1575532929-shutterstock_1262600215.jpg",
    "https://asset.kompas.com/crops/-EW4dZIFD3U055K4qtHqSgUg_hM=/92x67:892x600/1200x800/data/photo/2023/08/23/64e59deb79bfb.jpg",
  ];
  return (
    <div
      className="flex flex-row outline outline-2 outline-[#D5D5D5] active:bg-gray-100"
      onClick={() => {
        router.push(`${paketRoute}/paket/1`, "forward", "push");
      }}
    >
      <div className="w-[55%] p-4 ">
        <h1 className="text-xl font-semibold">Paket Kenyang Gembira</h1>
        <span className="text-xs">Items List:</span>

        <div className="flex flex-col gap-1 mt-2">
          <span>Capjay Mantap Jiwa</span>
          <span>Lalapan Ayam Goreng</span>
          <span>Boba Tea Diabetes</span>
          <span className="text-gray-500 font-medium !mt-0">+4 more items</span>
        </div>
        <span className="font-semibold">Rp. 50k - 100k</span>
      </div>
      <div className="w-[45%] grid grid-cols-2 grid-rows-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
