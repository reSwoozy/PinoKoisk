import { createSelector } from "reselect";
import { FilmsItemType } from "./Components/Film/Item";

const films = (state: { list: FilmsItemType[] }) => state.list;
const likedFilms = (state: { liked: number[] }) => state.liked;

export const likedSelector = createSelector(
  films,
  likedFilms,
  (films, likedFilms) =>
    films.filter(film => {
      return new Set(likedFilms).has(film.id);
    })
);
