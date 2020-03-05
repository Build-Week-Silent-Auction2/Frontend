import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import DisplayShop from "./DisplayShop";
import CreateItem from "./CreateItem";
import styled from "styled-components";
import { Button } from "@material-ui/core";

// Styles //
const DashWrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 10% 5% 10%;
  /* FIRST OPTION: Line 16-20 Setup with alfredo's gradient */
  /* background-image: linear-gradient(#09d1d4, #050a5c); */
  /* border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 20px lightgray; */
  /* SECOND OPTION: */
  border: 30px outset turquoise;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px gray;
  /* background: #f8f9f9; */
  /* background: #e5e8e8; */
  /* background: #ccd1d1; */
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
  /* box-shadow: 0 0 10px 5px gray; */
  border: 10px outset turquoise;
  border-radius: 10px;
  h2 {
    text-align: center;
    font-size: 1.4rem;
  }
`;
const ButtonWrapper = styled.div`
  margin-bottom: 1%;
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

// Seller Dashboard Component //
const SellerDash = props => {
  const [data, setData] = useState([]);
  const [getTrigger, setGetTrigger] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://silent-auctionbw3.herokuapp.com/api/items")
      .then(res => {
        setData(res.data.items);
        setGetTrigger(false);
      })
      .catch(err => {
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
      <HeaderWrapper>
        <HeaderStyles>
          <h2>SELLER DASHBOARD</h2>
        </HeaderStyles>
        <ButtonWrapper>
          <Button variant="outlined" color="secondary" onClick={signOut}>
            Sign Out
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setToggle(!toggle)}
          >
            Add Item
          </Button>
        </ButtonWrapper>
      </HeaderWrapper>
      <div>
        {toggle ? (
          <CreateItem setGetTrigger={setGetTrigger} setToggle={setToggle} />
        ) : null}
      </div>
      <DashWrapper>
        {data.map(each => {
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
      </DashWrapper>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state[0].username
  };
}

export default connect(mapStateToProps, null)(SellerDash);
