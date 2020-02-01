import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./film-list.css";
import { FilmItem, FilmsItemType } from "../film-item/film-item";
import { addElementAction } from "../reduxSetup";

export const FilmList = () => {
  const dispatch = useDispatch();
  const api = "https://devlab.website/v1";

  useEffect(() => {
    fetch(api + "/movies")
      .then(response => response.json())
      .then(result => {
        result.map((film: FilmsItemType[]) => {
          dispatch(addElementAction(film));
        });
      });
  }, []);

  const content = useSelector<RootStore, FilmsItemType[]>(state => state.list);

  return (
    <div className="film-list">
      {content && content.map(film => <FilmItem {...film} key={film.id} />)}
    </div>
  );
};
