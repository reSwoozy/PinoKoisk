import React from "react";
import { FilmList } from "./film-list/film-list";
import { Header } from "./header/header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <FilmList />
    </>
  );
};

export default App;
