import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import "./List.css";
import { FilmsItemType } from "./Item";
import { addElementAction, addAllElementsAction } from "../../reduxSetup";
import { FilmItemPoster } from "./ItemPoster";
import { APIURL } from "../../Constants/Constants";

export const FilmList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(APIURL + "/movies")
      .then(response => response.json())
      .then(result => dispatch(addAllElementsAction(result)));
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
