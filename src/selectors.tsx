import { createSelector } from "reselect";
import { FilmsItemType } from "./film-item/film-item";

const films = (state: { list: FilmsItemType[] }) => state.list;
const likedFilms = (state: { liked: number[] }) => state.liked;

export const likedSelector = createSelector(
  films,
  likedFilms,
  (films, likedFilms) =>
    films.filter(film => {
      return likedFilms.includes(film.id);
    })
);

// export const likedSelector = createSelector(
//     films,
//     likedFilms,
//     (films, likedFilms) => {
//       likedFilms.map(likedFilm => {
//         films.filter(film => film.id === likedFilm);
//       });
//     }
//   );
