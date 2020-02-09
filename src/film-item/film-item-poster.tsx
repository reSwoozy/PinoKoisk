import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardMedia,
  CardActionArea,
  SvgIcon,
  IconButton
} from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { likeElementAction, resetStoreAction } from "../reduxSetup";
import { FilmsItemType } from "../film-item/film-item";
import { red } from "@material-ui/core/colors";
import { likedSelector } from "../selectors";

const useStyles = makeStyles(theme => ({
  card: { position: "relative" },
  likeButton: {
    backgroundColor: "rgba(255,255,255,.7)",
    position: "absolute",
    bottom: "5px",
    right: "5px",
    borderRadius: "100%",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.9)"
    }
  }
}));

export const FilmItemPoster = (props: FilmsItemType) => {
  const likedFilms = useSelector<RootStore, number[]>(state => state.liked);
  const { id, poster_path } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const api = "https://devlab.website";
  const likeThis = () => {
    dispatch(likeElementAction(id));
  };

  const lk = useSelector(likedSelector);
  console.log(lk);

  return (
    <Grid item xs={12} sm={5} lg={2}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" height="250" image={api + poster_path} />
        </CardActionArea>
        <IconButton className={classes.likeButton} onClick={likeThis}>
          {likedFilms.includes(id) ? (
            <SvgIcon style={{ color: red[800] }} component={Favorite}></SvgIcon>
          ) : (
            <SvgIcon component={FavoriteBorder}></SvgIcon>
          )}
        </IconButton>
      </Card>
    </Grid>
  );
};
