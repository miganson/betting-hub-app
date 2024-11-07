import Group86Image from "../../assets/design-assets/game-icons/Group-86.webp";
import Group94Image from "../../assets/design-assets/game-icons/Group-94.webp";
import Group88Image from "../../assets/design-assets/game-icons/Group-88.webp";
import Group72Image from "../../assets/design-assets/game-icons/Group-72.webp";
import Group83Image from "../../assets/design-assets/game-icons/Group-83.webp";
import Group85Image from "../../assets/design-assets/game-icons/Group-85.webp";
import Group87Image from "../../assets/design-assets/game-icons/Group-87.webp";
import Group84Image from "../../assets/design-assets/game-icons/Group-84.webp";
import Group75Image from "../../assets/design-assets/game-icons/Group-75.webp";
import Group70Image from "../../assets/design-assets/game-icons/Group-70.webp";
import PrideOfPersiaImage from "../../assets/design-assets/game-icons/gpas_etpop_pop.webp.webp";
import IncaImage from "../../assets/design-assets/game-icons/sw_ijp.webp.webp";

export interface GameDataItem {
  id: string;
  name: string;
  category: string;
  gameProvider: string;
  location: string;
}

export interface GameData {
  [key: string]: GameDataItem;
}

export const GAME_LIST: GameData = {
  "1": {
    id: "1",
    name: "Anaconda Wild 2",
    category: "Jackpots",
    gameProvider: "Playtech",
    location: Group86Image,
  },
  "2": {
    id: "2",
    name: "Aztec Bonus Lines",
    category: "Jackpots",
    gameProvider: "Playtech",
    location: Group94Image,
  },
  "3": {
    id: "3",
    name: "Beach Life",
    category: "Others",
    gameProvider: "Playtech",
    location: Group88Image,
  },
  "4": {
    id: "4",
    name: "Big Bad Wolf",
    category: "Others",
    gameProvider: "Playtech",
    location: Group72Image,
  },
  "5": {
    id: "5",
    name: "Book of Egypt",
    category: "Table Games",
    gameProvider: "Expanse",
    location: Group83Image,
  },
  "6": {
    id: "6",
    name: "Crocodile Blitz Xtreme FB",
    category: "Others",
    gameProvider: "Playtech",
    location: Group85Image,
  },
  "7": {
    id: "7",
    name: "Inca Jackpot",
    category: "Jackpots",
    gameProvider: "Game Art",
    location: IncaImage,
  },
  "8": {
    id: "8",
    name: "Maya Jackpot",
    category: "Jackpots",
    gameProvider: "Game Art",
    location: Group87Image,
  },
  "9": {
    id: "9",
    name: "Pirates Power",
    category: "Others",
    gameProvider: "Expanse",
    location: Group84Image,
  },
  "10": {
    id: "10",
    name: "Shaolin Crew",
    category: "Others",
    gameProvider: "Expanse",
    location: Group75Image,
  },
  "11": {
    id: "11",
    name: "Sugar Rush",
    category: "Slots",
    gameProvider: "Pragmatic Play",
    location: Group70Image,
  },
  "12": {
    id: "12",
    name: "Pride Of Persia",
    category: "New",
    gameProvider: "Playtech",
    location: PrideOfPersiaImage,
  },
};
