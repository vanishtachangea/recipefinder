import { combineReducers } from "redux";
import recipes from "./recipesReducer";
import favouriteRecipes from "./favouriteRecipesReducer";

const rootReducer = combineReducers({ recipes, favouriteRecipes });
export default rootReducer;
