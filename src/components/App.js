import React, { Component } from "react";
import SearchRecipes from "./SearchRecipes";
import "../styles/index.css";
import RecipesList from "./RecipesList";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipesList />
      </div>
    );
  }
}

export default App;
