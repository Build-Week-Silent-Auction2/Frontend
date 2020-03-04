import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NewSignUp from "./Components/Signup/NewSignUp";
import Navigation from "./Components/Navigation/Navigation";
import NewLogin from "./Components/Login/NewLogin";

//protected route
import { PrivateRoute } from "./utilities/PrivateRoute";
import SellerDash from "./Components/SellerDash";
import BidderDash from "./Components/BidderDash";

import CreateItem from "./Components/CreateItem";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={NewLogin} />
        <Route exact path="/signup" component={NewSignUp} />
        <PrivateRoute
          exact
          path="/sellers/dash/:username"
          component={SellerDash}
        />
        <PrivateRoute
          exact
          path="/bidders/dash/:username"
          component={BidderDash}
        />
        <PrivateRoute
          exact
          path="/sellers/dash/:username/additem"
          component={CreateItem}
        />
      </Switch>
    </div>
  );
}

export default App;
