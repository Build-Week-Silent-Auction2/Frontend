import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuctionSignUp from "./Components/Signup/SignUp";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/Home/HomePage";
import AuctionLogin from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={AuctionSignUp} />
        <Route path="/login" component={AuctionLogin} />
      </Switch>
    </div>
  );
}

export default App;
