import React, { useState } from "react";
import { connect } from "react-redux";
import UpdateListing from "./UpdateListing";
import { DeleteItem } from "../actions/index";
import { useHistory } from "react-router-dom";

const ItemDisplay = (props) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const deletes = (id) => {
    props.DeleteItem(id);
    history.goBack();
  };

  return (
    <div>
      <h1>{props.location.state.item_name}</h1>
      <img src={props.location.state.img_url} />
      <p>{props.location.state.description}</p>
      <p>{`$${props.location.state.price} USD`}</p>
      <p>{props.location.state.item_end_time}</p>
      <div>
        <button onClick={() => setToggle(!toggle)}>Update Listing</button>
        <button onClick={() => deletes(props.location.state.id)}>
          Delete Listing
        </button>
      </div>
      <div>{toggle ? <UpdateListing setToggle={setToggle} /> : null}</div>
    </div>
  );
};

export default connect(null, { DeleteItem })(ItemDisplay);
