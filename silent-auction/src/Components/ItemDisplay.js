import React, { useState } from "react";
import { connect } from "react-redux";
import UpdateListing from "./UpdateListing";
import { DeleteItem } from "../actions/index";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// STYLED COMPONENT STYLES //
// const HeaderWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   button {
//     margin-bottom: 1%;
//   }
// `;
const ItemStyles = styled.div`
  width: 35%;
  margin-bottom: 5%;
  margin-top: 5%;
  border: 20px outset turquoise;
  box-shadow: 0 0 25px 10px gray;
  border-radius: 10px;
  padding: 2%;
  h2 {
    text-align: center;
    font-size: 1.4rem;
  }
  img {
    width: 100%;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// MATERIAL UI STYLES //
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const ItemDisplay = props => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const deletes = id => {
    props.DeleteItem(id);
    history.goBack();
  };
  const date = new Date(props.location.state.item_end_time).toLocaleString();
  return (
    <ItemContainer>
      <ItemStyles>
        <h1>{props.location.state.item_name}</h1>
        <img src={props.location.state.img_url} />
        <p>{props.location.state.description}</p>
        <p>{`$${props.location.state.price} USD`}</p>
        <p>Bidding Ends On: {date}</p>
        <ButtonContainer>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setToggle(!toggle)}
          >
            Update Listing
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => deletes(props.location.state.id)}
          >
            Delete Listing
          </Button>
        </ButtonContainer>
        <div>{toggle ? <UpdateListing setToggle={setToggle} /> : null}</div>
      </ItemStyles>
    </ItemContainer>
  );
};

export default connect(null, { DeleteItem })(ItemDisplay);
