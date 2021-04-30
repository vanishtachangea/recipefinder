import { SET_FAVOURITE_RECIPE } from "../actions";
function favouriteRecipes(state = [], action) {
  switch (action.type) {
    case SET_FAVOURITE_RECIPE:
      return [...state, action.recipe];
    default:
      return state;
  }
}
export default favouriteRecipes;
