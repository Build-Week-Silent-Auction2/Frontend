import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import DisplayShop from "./DisplayShop";
import CreateItem from "./CreateItem";

const SellerDash = (props) => {
  const [data, setData] = useState([]);
  const [getTrigger, setGetTrigger] = useState(false);
  const [toggle, setToggle] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    axios
      .get("https://silent-auctionbw3.herokuapp.com/api/items")
      .then((res) => {
        setData(res.data.items);
        setGetTrigger(false);
      })
      .catch((err) => {
        setGetTrigger(false);
      });
  }, [getTrigger]);

  const signOut = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  // .get with items that are currently up for auction
  // form to list items for auction(edit and delete here)
  return (
    <div>
      <div>
        <button onClick={signOut}>Sign Out</button>
        <button onClick={() => setToggle(!toggle)}>Add Item</button>
      </div>
      {toggle ? (
        <CreateItem setGetTrigger={setGetTrigger} setToggle={setToggle} />
      ) : null}
      <div>
        {data.map((each) => {
          return (
            <DisplayShop
              key={each.id}
              item_name={each.item_name}
              description={each.description}
              price={each.price}
              item_end_time={each.item_end_time}
              allData={each}
            />
          );
        })}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state[0].username
  };
}

export default connect(mapStateToProps, null)(SellerDash);
