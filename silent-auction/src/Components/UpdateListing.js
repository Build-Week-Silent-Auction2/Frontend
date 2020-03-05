import React, { useState } from "react";
import { connect } from "react-redux";
import { UpdateItem } from "../actions/index";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// STYLES HERE //
const UpdateStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const UpdateListing = props => {
  const [updateObj, setUpdateObj] = useState({
    item_name: "",
    description: "",
    img_url: "",
    price: "",
    item_end_time: ""
  });
  const params = useParams();
  const classes = useStyles();

  const handleChanges = event => {
    setUpdateObj({ ...updateObj, [event.target.name]: event.target.value });
  };

  const priceChange = event => {
    setUpdateObj({ ...updateObj, ["price"]: parseFloat(event.target.value) });
  };

  const dateChange = event => {
    setUpdateObj({ ...updateObj, ["item_end_time"]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    //put call
    props.UpdateItem(params.id, updateObj);
    //reset form and or push back to dash
    setUpdateObj({
      item_name: "",
      description: "",
      img_url: "",
      price: "",
      item_end_time: ""
    });
    props.setToggle(false);
  };

  return (
    <div>
      <h2>Change Listing</h2>
      <UpdateStyles onSubmit={handleSubmit} className={classes.root}>
        <TextField
          label="Name"
          variant="outlined"
          name="item_name"
          value={updateObj.item_name}
          onChange={handleChanges}
          required
        />

        <TextField
          label="Description"
          variant="outlined"
          name="description"
          value={updateObj.description}
          onChange={handleChanges}
          required
        />

        <TextField
          label="Insert Image"
          variant="outlined"
          type="text"
          name="img_url"
          placeholder="enter url here"
          value={updateObj.img_url}
          onChange={handleChanges}
        />

        <TextField
          label="Price"
          variant="outlined"
          type="number"
          name="price"
          value={updateObj.price}
          onChange={priceChange}
          required
        />

        <TextField
          variant="outlined"
          type="date"
          name="item_end_time"
          value={updateObj.item_end_time}
          onChange={dateChange}
          required
        />

        <Button variant="contained" type="submit">
          Accept Changes
        </Button>
      </UpdateStyles>
    </div>
  );
};

export default connect(null, { UpdateItem })(UpdateListing);
