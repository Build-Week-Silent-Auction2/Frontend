import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DisplayShop from "./DisplayShop";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const DashWrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 10% 5% 10%;
  /* FIRST OPTION: Line 16-20 Setup with alfredo's gradient */

  /* background-image: linear-gradient(#09d1d4, #050a5c);
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 20px lightgray; */

  /* SECOND OPTION: */
  /* border: 30px outset #09d1d4; */

  /* THIRD OPTION */
  border-width: 30px;
  border-style: outset;
  border-top-color: #09d1d4;
  border-left-color: #050a5c;
  border-right-color: #09d1d4;
  border-bottom-color: #050a5c;

  /* FOURTH OPTION */
  /* border: 30px outset transparent;
  border-image: linear-gradient(#09d1d4, #050a5c);
  border-image-slice: 1; */

  /* REQUIRED FOR ALL */
  border-radius: 10px;
  box-shadow: 0 0 10px 5px gray;
  background: #ebedef;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-bottom: 1%;
  }
`;
const HeaderStyles = styled.div`
  width: 25%;
  margin-bottom: 1%;
  margin-top: 2%;
  border-width: 10px;
  border-style: outset;
  border-top-color: #09d1d4;
  border-left-color: #050a5c;
  border-right-color: #09d1d4;
  border-bottom-color: #050a5c;
  border-radius: 10px;
  /* box-shadow: 0 0 10px 5px gray; */
  h2 {
    text-align: center;
    font-size: 1.4rem;
  }
`;

// Bidder Dashboard Component //
const BidderDash = () => {
  const history = useHistory();
  const location = useLocation();

  const [data, setData] = useState([
    {
      id: 0,
      item_name: "Hammer",
      description: "Lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 1,
      item_name: "Hammer",
      description: "lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 2,
      item_name: "Hammer",
      description: "lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 3,
      item_name: "Hammer",
      description: "lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 4,
      item_name: "Hammer",
      description: "lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 5,
      item_name: "Hammer",
      description: "lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 0,
      item_name: "Hammer",
      description: "Lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      price: 20,
      item_end_time: "20 minutes"
    },
    {
      id: 1,
      item_name: "Hammer",
      description: "lorem",
      img_url:
        "https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
    <HeaderWrapper>
      <HeaderStyles>
        <h2>BIDDER DASHBOARD</h2>
      </HeaderStyles>
      <Button variant="outlined" color="secondary" onClick={signOut}>
        Sign Out
      </Button>
      <DashWrapper>
        {data.map(each => (
          <DisplayShop
            key={each.id}
            item_name={each.item_name}
            description={each.description}
            price={each.price}
            item_end_time={each.item_end_time}
            img_url={each.img_url}
          />
        ))}
      </DashWrapper>
    </HeaderWrapper>
  );
};

export default BidderDash;
