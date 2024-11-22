import CateringList from "@/components/CateringList";
import SearchFilters from "@/components/SearchFilters";

import React from "react";

export default function Beranda() {
  return (
    <div className="p-8">
      <SearchFilters />
      <CateringList />
    </div>
  );
}
