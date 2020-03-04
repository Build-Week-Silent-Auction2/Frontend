import React from "react";
import { useHistory } from "react-router-dom";

const BidderDash = (props) => {
  const history = useHistory();
  const signOut = () => {
    window.localStorage.removeItem("token");
  };
  //.get array with users items that have bids
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
      <p>bidderDash.js</p>

      <button onClick={() => history.push("/shop/")}>Go To Auctions</button>
    </div>
  );
};

export default BidderDash;
