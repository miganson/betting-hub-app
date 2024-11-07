import { useCategory } from "./contexts/CategoryContext";
import { useEffect } from "react";
import { useState } from "react";
import sportsIconUrl from "../assets/design-assets/svg-icons/SPORTS.svg";
import faveIconUrl from "../assets/design-assets/svg-icons/FAVE.svg";
import inviteIconUrl from "../assets/design-assets/svg-icons/INVITE.svg";
import liveIconUrl from "../assets/design-assets/svg-icons/LIVE.svg";
import cashierIconUrl from "../assets/design-assets/svg-icons/CASHIER.svg";

const FOOTER_LIST = [
  { title: "SPORTS", iconUrl: sportsIconUrl },
  { title: "Favorites", iconUrl: faveIconUrl },
  { title: "INVITE", iconUrl: inviteIconUrl },
  { title: "CASINO LIVE", iconUrl: liveIconUrl },
  { title: "CASHIER", iconUrl: cashierIconUrl },
];

const Footer = () => {
  const { activeCategory, setActiveCategory } = useCategory();
  const [activeItem, setActiveItem] = useState<string | null>(activeCategory);

  useEffect(() => {
    setActiveItem(activeCategory);
  }, [activeCategory]);

  const handleClick = (title: string) => {
    setActiveItem(title);
    setActiveCategory(title);
  };

  return (
    <footer className="sticky-bottom bg-white py-2 shadow-sm">
      <div className="container-fluid">
        <div className="d-flex justify-content-around align-items-center">
          {FOOTER_LIST.map((item) => {
            const isActive = activeItem === item.title;

            return (
              <div
                key={item.title}
                className="d-flex flex-column align-items-center"
                style={{
                  flex: 1,
                  textAlign: "center",
                  maxWidth: "20%",
                }}
              >
                <button
                  type="button"
                  onClick={() => handleClick(item.title)}
                  className="btn p-2 d-flex flex-column align-items-center"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                  }}
                >
                  <div
                    className="mb-1 d-flex align-items-center justify-content-center"
                    style={{
                      width: "1rem",
                      height: "1rem",
                      maxWidth: "50px",
                      maxHeight: "50px",
                      borderRadius: "50%",
                      border: isActive ? "2px solid rgb(0, 166, 255)" : "none",
                      filter: isActive
                        ? "brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(500%) hue-rotate(170deg) brightness(1)"
                        : "brightness(0) saturate(100%) invert(80%) sepia(0%) saturate(30%) hue-rotate(0deg) brightness(0.75)",
                    }}
                  >
                    <img
                      src={item.iconUrl}
                      alt={`${item.title} icon`}
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        maxWidth: "32px",
                        maxHeight: "32px",
                      }}
                    />
                  </div>
                  <span
                    className="text-center"
                    style={{
                      color: isActive ? "rgb(0, 166, 255)" : "#6c757d",
                      fontWeight: isActive ? "bold" : "normal",
                      fontSize: "12px",
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
