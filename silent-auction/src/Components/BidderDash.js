import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DisplayShop from "./DisplayShop";

const BidderDash = () => {
  const history = useHistory();
  const location = useLocation();

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

  const signOut = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  //.get array with users items that have bids
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>

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

export default BidderDash;
