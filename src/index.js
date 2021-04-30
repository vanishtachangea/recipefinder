import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavouriteRecipesList from "./components/FavouriteRecipesList";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store:", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/favourites" component={FavouriteRecipesList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
