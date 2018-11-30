import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/HomePage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/edit/:id" component={EditProduct} />
      </Switch>
    );
  }
}

export default Main;
