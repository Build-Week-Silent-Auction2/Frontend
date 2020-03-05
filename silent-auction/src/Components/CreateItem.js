import React, { useState } from "react";
import { connect } from "react-redux";
import { NewItem } from "../actions/index";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// STYLES //
const UpdateStyles = styled.form`
  display: flex;
  justify-content: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TopWrapper = styled.div`
  margin: 3% 10%;
  border: 10px outset turquoise;
  border-radius: 10px;
`;
const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const CreateItem = props => {
  const classes = useStyles();
  const [item, setItem] = useState({
    item_name: "",
    description: "",
    img_url: "",
    price: "",
    item_end_time: ""
  });
  console.log(item);
  console.log(props);

  const handleChanges = event => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const priceChange = event => {
    setItem({ ...item, ["price"]: parseFloat(event.target.value) });
  };

  const dateChange = event => {
    setItem({ ...item, ["item_end_time"]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    //post call
    props.NewItem(props.id, item);
    //reset form and or push back to dash
    setItem({
      item_name: "",
      description: "",
      img_url: "",
      price: "",
      item_end_time: ""
    });
    props.setGetTrigger(true);
    props.setToggle(false);
  };

  return (
    <TopWrapper>
      <HeaderContainer>
        <h2>Add Item</h2>
      </HeaderContainer>
      <UpdateStyles onSubmit={handleSubmit} className={classes.root}>
        <TextField
          label="Name"
          variant="outlined"
          name="item_name"
          value={item.item_name}
          onChange={handleChanges}
          required
        />

        <TextField
          label="Description"
          variant="outlined"
          name="description"
          value={item.description}
          onChange={handleChanges}
          required
        />

        <TextField
          label="Insert Image"
          variant="outlined"
          type="text"
          name="img_url"
          placeholder="enter url here"
          value={item.img_url}
          onChange={handleChanges}
        />

        <TextField
          label="Price"
          variant="outlined"
          type="number"
          name="price"
          value={item.price}
          onChange={priceChange}
          required
        />

        <TextField
          variant="outlined"
          type="date"
          name="item_end_time"
          value={item.item_end_time}
          onChange={dateChange}
          required
        />

        <Button variant="contained" type="submit">
          Add Listing
        </Button>
      </UpdateStyles>
    </TopWrapper>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    id: state[0].id
  };
}

export default connect(mapStateToProps, { NewItem })(CreateItem);
