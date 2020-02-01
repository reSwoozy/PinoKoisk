import React from "react";
import { useDispatch } from "react-redux";

import "./film-item.css";
import { likeElementAction } from "../reduxSetup";

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

export const FilmItem = (props: FilmsItemType) => {
  const {
    id,
    title,
    overview,
    genres,
    poster_path,
    imdb_id,
    vote_average,
    vote_count
  } = props;

  const dispatch = useDispatch();

  const api = "https://devlab.website";

  const likeThis = () => {
    dispatch(likeElementAction(id));
  };

  return (
    <div className="film-item">
      <div className="film-item__poster">
        <img src={api + poster_path} alt="" width="100%" />
      </div>
      <div className="film-item__title">{title}</div>
      <div className="film-item__genres">Genres: {genres.join(", ")}</div>
      <div className="film-item__votes">
        <span className="star">★</span> {vote_average}/10 (
        <a
          href={
            "https://www.imdb.com/title/" + imdb_id + "/ratings?ref_=tt_ov_rt"
          }
        >
          {vote_count}
        </a>
        )
      </div>
      <div className="film-item__overview">{overview}</div>
      <button onClick={likeThis}>Ставлю класс!</button>
    </div>
  );
};
