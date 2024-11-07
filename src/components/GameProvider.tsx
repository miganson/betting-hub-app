import { FC } from "react";
import { useCategory } from "./contexts/CategoryContext";
import EMLogo from "../assets/design-assets/logos/EM.webp";
import EVOLogo from "../assets/design-assets/logos/EVO.webp";
import ExpanseLogo from "../assets/design-assets/logos/EXPANSE.webp";
import EZGLogo from "../assets/design-assets/logos/EZG.webp";
import F1M5Logo from "../assets/design-assets/logos/F1M5_Logo.webp";
import GameArtLogo from "../assets/design-assets/logos/GAMEART.webp";
import HABLogo from "../assets/design-assets/logos/HAB.webp";
import HacksawLogo from "../assets/design-assets/logos/HACKSAW.webp";
import INBETLogo from "../assets/design-assets/logos/INBET.webp";
import MPlayLogo from "../assets/design-assets/logos/MPLAY.webp";
import NetEntLogo from "../assets/design-assets/logos/NETENT.webp";
import PGSoftLogo from "../assets/design-assets/logos/PGSOFT.webp";
import PNGLogo from "../assets/design-assets/logos/PNG.webp";
import PPLogo from "../assets/design-assets/logos/PP.webp";
import PragmaticPlayLogo from "../assets/design-assets/logos/PRAGMATICPLAY.webp";
import PSLogo from "../assets/design-assets/logos/PS.webp";
import PTLogo from "../assets/design-assets/logos/PT.webp";
import RedTigerLogo from "../assets/design-assets/logos/REDTIGER.webp";
import RelaxLogo from "../assets/design-assets/logos/RELAX.webp";

export interface ProviderDataItem {
  id: string;
  name: string;
  location: string;
}

export interface ProviderData {
  [key: string]: ProviderDataItem;
}

export const PROVIDER_LIST: ProviderData = {
  "1": { id: "1", name: "EM", location: EMLogo },
  "2": { id: "2", name: "EVO", location: EVOLogo },
  "3": { id: "3", name: "Expanse", location: ExpanseLogo },
  "4": { id: "4", name: "EZG", location: EZGLogo },
  "5": { id: "5", name: "F1M5", location: F1M5Logo },
  "6": { id: "6", name: "Game Art", location: GameArtLogo },
  "7": { id: "7", name: "HAB", location: HABLogo },
  "8": { id: "8", name: "HACKSAW", location: HacksawLogo },
  "9": { id: "9", name: "INBET", location: INBETLogo },
  "10": { id: "10", name: "MPLAY", location: MPlayLogo },
  "11": { id: "11", name: "NETENT", location: NetEntLogo },
  "12": { id: "12", name: "PGSOFT", location: PGSoftLogo },
  "13": { id: "13", name: "PNG", location: PNGLogo },
  "14": { id: "14", name: "PP", location: PPLogo },
  "15": { id: "15", name: "Pragmatic Play", location: PragmaticPlayLogo },
  "16": { id: "16", name: "PS", location: PSLogo },
  "17": { id: "17", name: "Playtech", location: PTLogo },
  "18": { id: "18", name: "REDTIGER", location: RedTigerLogo },
  "19": { id: "19", name: "RELAX", location: RelaxLogo },
};

const GameProvider: FC = () => {
  const {
    isFilterModalOpen,
    setIsFilterModalOpen,
    activeProviders,
    setActiveProviders,
  } = useCategory();

  const toggleProviderSelection = (providerName: string) => {
    setActiveProviders((prevSelected: string[]) => {
      if (prevSelected.includes(providerName)) {
        return prevSelected.filter(
          (provider: string) => provider !== providerName
        );
      } else {
        return [...prevSelected, providerName];
      }
    });
  };

  const closeModal = () => {
    setIsFilterModalOpen(false);
  };

  return (
    <div
      className={`position-fixed bottom-0 start-0 w-100 bg-white p-4 ${
        isFilterModalOpen ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        height: "80vh",
        zIndex: 1050,
        transition: "transform 0.3s ease-in-out",
        transform: isFilterModalOpen ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Filter by Game Provider</h5>
        <button className="btn-close" onClick={closeModal}></button>
      </div>
      <div className="container overflow-auto" style={{ maxHeight: "70vh" }}>
        <div className="row">
          {Object.values(PROVIDER_LIST).map((provider: ProviderDataItem) => {
            const isSelected = activeProviders.includes(provider.name);
            return (
              <div key={provider.id} className="col-6 mb-3">
                <button
                  onClick={() => toggleProviderSelection(provider.name)}
                  className="w-100 h-100 rounded d-flex align-items-center justify-content-center bg-light"
                  style={{
                    height: "80px",
                    position: "relative",
                    borderStyle: "solid", 
                    borderColor: isSelected ? "rgb(0, 166, 255)" : "#ced4da", 
                    borderWidth: isSelected ? "2px" : "1px", 
                  }}
                >
                  <img
                    src={provider.location}
                    alt={provider.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameProvider;
