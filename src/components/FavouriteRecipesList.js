import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";
class FavouriteRecipesList extends Component {
  render() {
    console.log("favourite re", this.props.favouriteRecipes);
    return (
      <div>
        <h3>
          <Link to="/" className="link">
            Home
          </Link>
        </h3>
        <h3>Favourite Recipes</h3>
        <div>
          {this.props.favouriteRecipes.map((recipe, index) => {
            return (
              <RecipeItem key={index} recipe={recipe} favouriteList={false} />
            );
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { favouriteRecipes: state.favouriteRecipes };
}
export default connect(mapStateToProps, null)(FavouriteRecipesList);
