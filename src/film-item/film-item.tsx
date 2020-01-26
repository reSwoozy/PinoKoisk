import React from "react";
import "./film-item.css";

export interface FilmsItemType {
  id: number;
  title: string;
  imdb_id?: string;
  overview: string;
  genres: string[];
  revenue?: number;
  duration?: number;
  likes?: number;
  vote_average?: number;
  vote_count?: number;
  director?: string;
  poster_path?: string;
  release_date?: string;
}

export const FilmItemComponent = (props: FilmsItemType) => {
  const { title, overview, genres, poster_path } = props;

  return (
    <div className="film-item">
      <div className="film-item__poster">
        <img src={poster_path} alt="" />
      </div>
      <div className="film-item__title">{title}</div>
      <div className="film-item__genres">Genres: {genres.join(", ")}</div>
      <div className="film-item__overview">{overview}</div>
    </div>
  );
};
