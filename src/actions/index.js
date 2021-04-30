export const SET_RECIPES = "SET_RECIPES";
export const SET_FAVOURITE_RECIPE = "SET_FAVOURITE_RECIPE";
export function setRecipes(items) {
  //return action object
  return {
    type: SET_RECIPES,
    items,
  };
}
export function setFavouritRecipe(recipe) {
  return {
    type: SET_FAVOURITE_RECIPE,
    recipe,
  };
}
