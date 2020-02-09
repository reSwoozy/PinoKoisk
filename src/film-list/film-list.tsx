import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import "./film-list.css";
import { FilmsItemType } from "../film-item/film-item";
import { addElementAction } from "../reduxSetup";
import { FilmItemPoster } from "../film-item/film-item-poster";

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

  const films = useSelector<RootStore, FilmsItemType[]>(state => state.list);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      spacing={0}
    >
      <Grid
        container
        item
        justify="center"
        alignItems="stretch"
        xs={10}
        md={8}
        spacing={2}
      >
        {films && films.map(film => <FilmItemPoster {...film} key={film.id} />)}
      </Grid>
    </Grid>
  );
};
