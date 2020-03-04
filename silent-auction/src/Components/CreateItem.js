import React, { useState } from "react";

const CreateItem = () => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    timer: ""
  });

  const handleChanges = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //post call
  };

  return (
    <div>
      <h2>Create new item form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="name" value={item.name} onChange={handleChanges} />
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
            <input name="price" value={item.price} onChange={handleChanges} />
          </label>

          <label>
            Timer:
            <input name="timer" value={item.timer} onChange={handleChanges} />
          </label>

          <button type="submit">Create Item</button>
        </form>
      </div>
    </div>
  );
};

export default CreateItem;
