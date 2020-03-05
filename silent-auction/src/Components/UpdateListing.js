import React, { useState } from "react";
import { connect } from "react-redux";
import { UpdateItem } from "../actions/index";
import { useParams } from "react-router-dom";

const UpdateListing = (props) => {
  const [updateObj, setUpdateObj] = useState({
    item_name: "",
    description: "",
    img_url: "",
    price: "",
    item_end_time: ""
  });
  const params = useParams();

  const handleChanges = (event) => {
    setUpdateObj({ ...updateObj, [event.target.name]: event.target.value });
  };

  const priceChange = (event) => {
    setUpdateObj({ ...updateObj, ["price"]: parseFloat(event.target.value) });
  };

  const dateChange = (event) => {
    setUpdateObj({ ...updateObj, ["item_end_time"]: event.target.value });
  };

  const handleSubmit = (event) => {
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
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="item_name"
            value={updateObj.item_name}
            onChange={handleChanges}
          />
        </label>

        <label>
          Description:
          <input
            name="description"
            value={updateObj.description}
            onChange={handleChanges}
          />
        </label>

        <label>
          Insert Image:
          <input
            type="text"
            name="img_url"
            placeholder="enter url here"
            value={updateObj.img_url}
            onChange={handleChanges}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={updateObj.price}
            onChange={priceChange}
          />
        </label>

        <label>
          Listing End Time:
          <input
            type="date"
            name="item_end_time"
            value={updateObj.item_end_time}
            onChange={dateChange}
          />
        </label>

        <button type="submit">Accept Changes</button>
      </form>
    </div>
  );
};

export default connect(null, { UpdateItem })(UpdateListing);
