import React, { useState } from "react";
import { connect } from "react-redux";
import { NewItem } from "../actions/index";

const CreateItem = (props) => {
  const [item, setItem] = useState({
    item_name: "",
    description: "",
    img_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flight-bulb&psig=AOvVaw06mYz8idZe2emCYHZ4dDWV&ust=1583447736616000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDtitHwgegCFQAAAAAdAAAAABAD",
    price: "",
    item_end_time: ""
  });

  const handleChanges = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const priceChange = (event) => {
    setItem({ ...item, ["price"]: parseFloat(event.target.value) });
  };

  const dateChange = (event) => {
    setItem({ ...item, ["item_end_time"]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //post call
    props.NewItem(props.id, item);
    //reset form and or push back to dash
    setItem({
      item_name: "",
      description: "",
      price: "",
      item_end_time: ""
    });
    props.setGetTrigger(true);
    props.setToggle(false);
  };

  return (
    <div>
      <h2>Create new item form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="item_name"
              value={item.item_name}
              onChange={handleChanges}
            />
          </label>

          <label>
            Description:
            <input
              name="description"
              value={item.description}
              onChange={handleChanges}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={priceChange}
            />
          </label>

          <label>
            Listing End Time:
            <input
              type="date"
              name="item_end_time"
              value={item.item_end_time}
              onChange={dateChange}
            />
          </label>

          <button type="submit">Create Item</button>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    id: state[0].id
  };
}

export default connect(mapStateToProps, { NewItem })(CreateItem);
