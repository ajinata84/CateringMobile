import SearchCard from "@/components/SearchCard";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSpinner,
} from "@ionic/react";
import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import { CateringSearch } from "@/types/interfaces";

export default function Search() {
  const searchBarRef = useRef<HTMLIonSearchbarElement>(null);

  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CateringSearch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const categories = ["Semua", "Harian", "Kantoran", "Pernikahan", "Acara"];

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      try {
        setIsLoading(true);
        const response = await axios.post<CateringSearch[]>(
          `http://localhost:3000/catering/search?query=${query}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, debouncedSearch]);

  useEffect(() => {
    searchBarRef.current?.setFocus();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="search-container p-8">
          <div className="search-bar">
            <IonSearchbar
              ref={searchBarRef}
              value={searchQuery}
              onIonInput={(e) => setSearchQuery(e.detail.value!)}
              class="custom"
            />
          </div>
          <div className="category-list">
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
        {isLoading ? (
          <div className="flex justify-center items-center p-4">
            <IonSpinner name="crescent" />
          </div>
        ) : searchResults.length === 0 && searchQuery ? (
          <div className="text-center p-4 text-gray-500">
            Tidak menemukan catering, coba melihat kategori lainnya
          </div>
        ) : (
          searchResults
            .filter((result) =>
              activeCategory === "Semua"
                ? true
                : result.kategoris.includes(activeCategory)
            )
            .map((cateringResult) => (
              <SearchCard
                key={cateringResult.id}
                cateringResult={cateringResult}
              />
            ))
        )}
      </IonContent>
    </IonPage>
  );
}
