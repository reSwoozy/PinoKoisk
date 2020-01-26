import React from "react";
import "./film-list.css";
import { FilmItemComponent } from "../film-item/film-item";
import data from "../json/movies.json";

export const FilmListComponent = () => {
  return (
    <div className="film-list">
      {data.map(film => (
        <FilmItemComponent {...film} key={film.id} />
      ))}
    </div>
  );
};
