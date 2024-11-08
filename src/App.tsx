import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryBar from "./components/CategoryBar";
import Category from "./components/categories/Category";
import GameProvider from "./components/GameProvider";
import {
  CategoryProvider,
  useCategory,
} from "./components/contexts/CategoryContext";
import Footer from "./components/Footer";

const AppContent: React.FC = () => {
  const { activeCategory } = useCategory();

  return (
    <>
      <Header />
      <Banner />
      <CategoryBar />
      {activeCategory && <Category />}
      <GameProvider />
      <Footer />
    </>
  );
};

const App: React.FC = () => (
  <CategoryProvider>
    <AppContent />
  </CategoryProvider>
);

export default App;
