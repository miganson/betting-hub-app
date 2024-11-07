import React, { useState, useEffect } from "react";
import { GAME_LIST, GameDataItem } from "./GameList";
import { useCategory } from "../contexts/CategoryContext";
import { FaStar } from "react-icons/fa";

const Category: React.FC = () => {
  const {
    activeCategory,
    searchQuery,
    activeProviders,
    favoriteGameIds,
    toggleFavorite,
  } = useCategory();

  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  const filteredGames = Object.values(GAME_LIST).filter((game) => {
    const matchesCategory =
      activeCategory === "Start" ||
      (activeCategory === "Favorites" ? favoriteGameIds.has(game.id) : game.category === activeCategory);

    const matchesSearch =
      !searchQuery || game.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesProvider =
      activeProviders.length === 0 || activeProviders.includes(game.gameProvider);

    return matchesCategory && matchesSearch && matchesProvider;
  });

  useEffect(() => {
    const loadImages = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const loadedImages = filteredGames.reduce((acc, game) => {
        acc[game.id] = true;
        return acc;
      }, {} as { [key: string]: boolean });
      setImageLoaded(loadedImages);
    };

    loadImages();
  }, [filteredGames]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "16px",
        padding: "20px",
      }}
    >
      {filteredGames.map((game: GameDataItem) => {
        const isLoaded = imageLoaded[game.id] || false;
        const isFavorited = favoriteGameIds.has(game.id);

        return (
          <div
            key={game.id}
            style={{
              overflow: "hidden",
              textAlign: "center",
              padding: "10px",
              position: "relative", 
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "100%", 
                overflow: "visible",
              }}
            >
              {!isLoaded && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      border: "4px solid rgba(0,0,0,0.1)",
                      borderRadius: "50%",
                      borderTopColor: "#09f",
                      width: "36px",
                      height: "36px",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                </div>
              )}
              <img
                src={game.location}
                alt={game.name}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <FaStar
                onClick={() => toggleFavorite(game.id)}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                  color: isFavorited ? "yellow" : "gray",
                  fontSize: "20px",
                  zIndex: 1,
                }}
                aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
              />
            </div>
            <div style={{ marginTop: "8px" }}>{game.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
