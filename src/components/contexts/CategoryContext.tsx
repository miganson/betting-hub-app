import { createContext, useContext, useState, FC, ReactNode, useEffect } from "react";

interface CategoryContextType {
  activeCategory: string | null;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchActive: boolean;
  setSearchActive: (active: boolean) => void;
  isFilterModalOpen: boolean;
  setIsFilterModalOpen: (isOpen: boolean) => void;
  activeProviders: string[];
  setActiveProviders: React.Dispatch<React.SetStateAction<string[]>>;
  favoriteGameIds: Set<string>;
  toggleFavorite: (gameId: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider: FC<CategoryProviderProps> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>("Start");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [activeProviders, setActiveProviders] = useState<string[]>([]);
  const [favoriteGameIds, setFavoriteGameIds] = useState<Set<string>>(() => {
    const storedFavorites = localStorage.getItem("favoriteGameIds");
    return storedFavorites ? new Set(JSON.parse(storedFavorites)) : new Set();
  });

  const toggleFavorite = (gameId: string) => {
    setFavoriteGameIds((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(gameId)) {
        newFavorites.delete(gameId);
      } else {
        newFavorites.add(gameId);
      }
      return newFavorites;
    });
  };

  useEffect(() => {
    localStorage.setItem("favoriteGameIds", JSON.stringify(Array.from(favoriteGameIds)));
  }, [favoriteGameIds]);

  return (
    <CategoryContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        searchActive,
        setSearchActive,
        isFilterModalOpen,
        setIsFilterModalOpen,
        activeProviders,
        setActiveProviders,
        favoriteGameIds,
        toggleFavorite,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
