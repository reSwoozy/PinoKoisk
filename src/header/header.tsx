import React, { ChangeEvent, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: "linear-gradient(45deg, #ff9800 30%, #f57c00 90%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.3)
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(3),
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 400
    }
  }
}));

export const Header = () => {
  const classes = useStyles();

  const findFilm = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.toolbar}>
        <Grid item>
          <Typography variant="h6" noWrap style={{ color: "white" }}>
            Pino Koisk
          </Typography>
        </Grid>
        <Grid className={classes.search}>
          <Grid className={classes.searchIcon}>
            <SearchIcon />
          </Grid>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={findFilm}
          />
        </Grid>
        <IconButton>
          <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
