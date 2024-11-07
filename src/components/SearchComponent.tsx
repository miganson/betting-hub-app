import { FC } from "react";
import filterIconUrl from "../assets/design-assets/svg-icons/FILTER.svg";
import { useCategory } from "./contexts/CategoryContext";

const SearchComponent: FC = () => {
  const { searchQuery, setSearchQuery, setIsFilterModalOpen } = useCategory();

  return (
    <div
      className="d-flex align-items-center mt-2"
      style={{ maxWidth: "800px" }}
    >
      <input
        type="text"
        placeholder="Search games"
        className="form-control"
        style={{ borderColor: "#888", width: "100%" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="btn ms-2 border"
        onClick={() => setIsFilterModalOpen(true)}
      >
        <img
          src={filterIconUrl}
          alt="Filter Icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default SearchComponent;
