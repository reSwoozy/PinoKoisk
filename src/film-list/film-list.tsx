import React, { useEffect, useState } from "react";
import "./film-list.css";
import { FilmItem } from "../film-item/film-item";

export const FilmList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://devlab.website/v1/movies")
      .then(response => response.json())
      .then(setData);
  }, []);

  return (
    <div className="film-list">
      {data.map((film: any) => (
        <FilmItem {...film} key={film.id} />
      ))}
    </div>
  );
};
