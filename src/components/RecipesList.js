import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";

class RecipesList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="pt-2">
        <h3>
          {this.props.favouriteRecipes.length > 0 ? (
            <Link to="/favourites" className="link">
              Favourites
            </Link>
          ) : (
            <div></div>
          )}
        </h3>
        <h3>RecipesList</h3>
        {this.props.recipes.map((recipe, index) => {
          return (
            <RecipeItem key={index} recipe={recipe} favouriteList={true} />
          );
        })}
      </div>
    );
  }
}
function mapStateToProps2(state) {
  return state;
}
export default connect(mapStateToProps2, null)(RecipesList);
