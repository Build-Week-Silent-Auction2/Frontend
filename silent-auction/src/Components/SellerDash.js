import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import DisplayShop from "./DisplayShop";

const SellerDash = (props) => {
  const [data, setData] = useState([
    {
      id: 0,
      item_name: "Hammer",
      description: "lorem",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 1,
      item_name: "Hammer",
      description: "lorem",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 2,
      item_name: "Hammer",
      description: "lorem",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 3,
      item_name: "Hammer",
      description: "lorem",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 4,
      item_name: "Hammer",
      description: "lorem",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 5,
      item_name: "Hammer",
      description: "lorem",
      price: 20,
      item_end_time: "20 minutes"
    }
  ]);

  // useEffect(() => {
  //   axios
  //     .get(data)
  //     .then((res) => {
  //       console.log("DATA SET", res);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("Now You Fucked Up Homie kek", err);
  //     });
  // }, []);

  console.log(props);
  const history = useHistory();
  const location = useLocation();

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
        <button onClick={() => history.push(`${location.pathname}/additem`)}>
          ➕ Item
        </button>
      </div>
      {data.map((each) => (
        <DisplayShop
          key={each.id}
          item_name={each.item_name}
          description={each.description}
          price={each.price}
          item_end_time={each.item_end_time}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state[0].username
  };
}

export default connect(mapStateToProps, null)(SellerDash);
