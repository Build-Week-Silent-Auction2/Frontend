import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <h1>Home Page Here</h1>
      <p>Welcome to Silent Auction</p>
      <br />
      <span>Sign up </span>
      <Link to="/signup">here!</Link>
      <br />
      <span>Login </span>
      <Link to="/login">here!</Link>
    </div>
  );
};

export default HomePage;
