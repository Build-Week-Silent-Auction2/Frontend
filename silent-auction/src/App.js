import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NewSignUp from "./Components/Signup/NewSignUp";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/Home/HomePage";
import NewLogin from "./Components/Login/NewLogin";

//protected route
import { PrivateRoute } from "./utilities/PrivateRoute";
import SellerDash from "./Components/SellerDash";
import BidderDash from "./Components/BidderDash";
import Shop from "./Components/Shop";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/login" component={NewLogin} />
        <Route path="/signup" component={NewSignUp} />
        <PrivateRoute path="/sellers/" component={SellerDash} />
        <PrivateRoute path="/bidders/" component={BidderDash} />
        <PrivateRoute path="/shop/" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
