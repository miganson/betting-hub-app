import React from "react";
import { GAME_LIST, GameDataItem } from "./GameList";
import { useCategory } from "../contexts/CategoryContext";

const Category: React.FC = () => {
  const { activeCategory, searchQuery, activeProviders } = useCategory();

  const filteredGames = Object.values(GAME_LIST).filter((game) => {
    const matchesCategory =
      activeCategory === "Start" || game.category === activeCategory;

    const matchesSearch =
      !searchQuery || game.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesProvider =
      activeProviders.length === 0 ||
      activeProviders.includes(game.gameProvider);

    return matchesCategory && matchesSearch && matchesProvider;
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "16px",
        padding: "20px",
      }}
    >
      {filteredGames.map((game: GameDataItem) => (
        <div
          key={game.id}
          style={{
            overflow: "hidden",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <img
            src={game.location}
            alt={game.name}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <p>{game.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
