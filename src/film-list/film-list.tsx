import React, { useEffect, useState } from "react";
import "./film-list.css";
import { FilmItem, FilmsItemType } from "../film-item/film-item";

export const FilmList = () => {
  const [data, setData] = useState<FilmsItemType[]>([]);
  const api = "https://devlab.website/v1/movies";

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(setData);
  }, []);

  return (
    <div className="film-list">
      {data.map(film => (
        <FilmItem {...film} key={film.id} />
      ))}
    </div>
  );
};
