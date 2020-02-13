import React from "react";
import { FilmList } from "./Components/Film/List";
import { Header } from "./Components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <FilmList />
    </>
  );
};

export default App;
