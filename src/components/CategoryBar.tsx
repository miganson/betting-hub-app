import { FC } from "react";
import { useCategory } from "./contexts/CategoryContext";
import searchIconUrl from "../assets/design-assets/svg-icons/SEARCH.svg";
import fireIconUrl from "../assets/design-assets/svg-icons/fire-svgrepo-com-1.svg";
import newIconUrl from "../assets/design-assets/svg-icons/NEW.svg";
import slotsIconUrl from "../assets/design-assets/svg-icons/SLOTS.svg";
import liveIconUrl from "../assets/design-assets/svg-icons/LIVE.svg";
import jackpotsIconUrl from "../assets/design-assets/svg-icons/jackpots.svg";
import tableGamesIconUrl from "../assets/design-assets/svg-icons/card.svg";
import bingoIconUrl from "../assets/design-assets/svg-icons/coins-1.svg";
import othersIconUrl from "../assets/design-assets/svg-icons/APP-SQUARE.svg";
import SearchComponent from "./SearchComponent";

const CATEGORY_LIST = [
  { title: "Start", iconUrl: fireIconUrl },
  { title: "New", iconUrl: newIconUrl },
  { title: "Slots", iconUrl: slotsIconUrl },
  { title: "Live", iconUrl: liveIconUrl },
  { title: "Jackpots", iconUrl: jackpotsIconUrl },
  { title: "Table Games", iconUrl: tableGamesIconUrl },
  { title: "Bingo", iconUrl: bingoIconUrl },
  { title: "Others", iconUrl: othersIconUrl },
];

interface CategoryItemProps {
  title: string;
  iconUrl: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryItem: FC<CategoryItemProps> = ({
  title,
  iconUrl,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`py-1 px-2 rounded d-flex flex-column align-items-center ${
      isActive ? "text-primary" : "text-secondary"
    }`}
    style={{
      backgroundColor: "transparent",
      border: "none",
      color: isActive ? "#007bff" : "#6c757d",
    }}
  >
    <img
      src={iconUrl}
      alt={`${title} Icon`}
      width="26"
      height="26"
      style={{
        filter: isActive
          ? "brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(500%) hue-rotate(170deg) brightness(1)"
          : "brightness(0) saturate(100%) invert(80%) sepia(0%) saturate(30%) hue-rotate(0deg) brightness(0.75)",
      }}
    />
    <span
      className="small text-uppercase"
      style={{
        color: isActive ? "rgb(0 166 255/var(--tw-text-opacity))" : "#6c757d",
        textDecoration: isActive ? "underline" : "none",
      }}
    >
      {title}
    </span>
  </button>
);

const CategoryBar: FC = () => {
  const {
    activeCategory,
    setActiveCategory,
    searchActive,
    setSearchActive,
    activeProviders,
    setActiveProviders,
  } = useCategory();

  const clearProviderFilter = () => {
    setActiveProviders([]);
  };

  return (
    <div
      className="bg-white sticky-top"
      style={{ top: "50px", width: "100%", padding: "0.5rem" }}
    >
      <div className="d-flex align-items-center">
        <CategoryItem
          title="Search"
          iconUrl={searchIconUrl}
          isActive={searchActive}
          onClick={() => setSearchActive(!searchActive)}
        />
        <div
          className="d-block"
          style={{ width: "1px", height: "30px", backgroundColor: "#88888880" }}
        />
        <div
          className="flex-grow-1 d-flex justify-content-center"
          style={{ overflowX: "auto" }}
        >
          <div
            className="d-flex gap-1"
            style={{
              whiteSpace: "nowrap",
              maxWidth: "100%", 
            }}
          >
            {CATEGORY_LIST.map(({ title, iconUrl }) => (
              <CategoryItem
                key={title}
                title={title}
                iconUrl={iconUrl}
                isActive={activeCategory === title}
                onClick={() => setActiveCategory(title)}
              />
            ))}
          </div>
        </div>
      </div>
      {searchActive && <SearchComponent />}
      {activeProviders.length > 0 && (
        <div className="mt-2 d-flex align-items-center">
          <span>
            Filtering by Providers: {activeProviders.join(", ")}
          </span>
          <button
            className="btn btn-sm btn-link ms-2"
            onClick={clearProviderFilter}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryBar;