import { addElement, likeElement, resetAll } from "./actionTypes";
import { FilmsItemType } from "../film-item/film-item";

export const addElementAction = (newElement: FilmsItemType[]) => ({
  type: addElement,
  payload: newElement
});

export const likeElementAction = (likedElement: number) => ({
  type: likeElement,
  payload: likedElement
});

export const resetStoreAction = () => ({ type: resetAll });
