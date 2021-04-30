import React, { Component } from "react";
import { setFavouritRecipe } from "../actions";
import { connect } from "react-redux";

class RecipeItem extends Component {
  constructor() {
    super();
    this.state = {
      isFavourite: false,
    };
  }
  setFavourite(recipe) {
    this.props.setFavouritRecipe(recipe);
    this.setState({ isFavourite: true });
  }
  render() {
    let { recipe } = this.props;
    return (
      <div className="recipe-item">
        {this.props.favouriteList ? (
          this.state.isFavourite ? (
            <div className="recipe-star">&#9733;</div>
          ) : (
            <div
              className="recipe-star"
              onClick={() => this.setFavourite(recipe)}
            >
              &#9734;
            </div>
          )
        ) : (
          <div></div>
        )}

        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img src={recipe.thumbnail} alt={recipe.title} className="recipe-img" />
      </div>
    );
  }
}

export default connect(null, { setFavouritRecipe })(RecipeItem);
