import React, { useState, useEffect } from "react";
import { GAME_LIST, GameDataItem } from "./GameList";
import { useCategory } from "../contexts/CategoryContext";

const Category: React.FC = () => {
  const { activeCategory, searchQuery, activeProviders } = useCategory();

  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  const filteredGames = Object.values(GAME_LIST).filter((game) => {
    const matchesCategory =
      activeCategory === "Start" || game.category === activeCategory;

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

        return (
          <div
            key={game.id}
            style={{
              overflow: "hidden",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "75%", 
                overflow: "hidden",
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
