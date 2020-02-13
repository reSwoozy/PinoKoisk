import {
  addElement,
  addAllElements,
  likeElement,
  resetAll
} from "./actionTypes";
import { FilmsItemType } from "../Components/Film/Item";

export const addElementAction = (newElement: FilmsItemType[]) => ({
  type: addElement,
  payload: newElement
});

export const addAllElementsAction = (allElement: []) => ({
  type: addAllElements,
  payload: allElement
});

export const likeElementAction = (likedElement: number) => ({
  type: likeElement,
  payload: likedElement
});

export const resetStoreAction = () => ({ type: resetAll });
