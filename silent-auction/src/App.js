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
import ItemDisplay from "./Components/ItemDisplay";

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
          path="/:userType/dash/:username/item/:id"
          component={ItemDisplay}
        />
      </Switch>
    </div>
  );
}

export default App;
