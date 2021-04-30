import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "../actions/index";

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: "",
      dish: "",
    };
  }
  search() {
    //const url = "http://www.recipepuppy.com/api?i=chicken,garlic&q=adobo";
    const { ingredients, dish } = this.state;
    let url = "http://www.recipepuppy.com/api";
    if (ingredients) url = url.concat(`?i=${ingredients}`);
    if (dish) {
      url = url.concat(`&q=${dish}`);
    }

    console.log("this.state", this.state, url);
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((json) => {
        console.log("resipes", "url", url, json, "store", this.props);
        this.props.setRecipes(json.results);
      });
  }
  render() {
    return (
      <div>
        <Form inline className="center">
          <FormGroup className="pr-2">
            <FormLabel className="pr-2">Ingredients </FormLabel>

            <FormControl
              type="text"
              placeholder="garlic, chicken"
              onChange={(event) =>
                this.setState({ ingredients: event.target.value })
              }
            />
          </FormGroup>

          <FormGroup className="pr-2">
            <FormControl
              type="text"
              placeholder="adobo"
              onChange={(event) => this.setState({ dish: event.target.value })}
            />
          </FormGroup>
          <FormGroup className="pr-2 pr-2">
            <Button onClick={() => this.search()}>Submit</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
