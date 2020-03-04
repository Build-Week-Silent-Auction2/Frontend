import React from "react";
import { Button, TextField, Select, MenuItem } from "@material-ui/core";

import { connect } from "react-redux";
import { SignUp } from "../../actions/index";

const NewSignUp = (props) => {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
    userType: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //validation
    props.SignUp(user.userType, user);
  };

  const handleChanges = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChanges}
          />

          <TextField
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChanges}
          />
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChanges}
          />
          <TextField
            label="Street Address"
            name="streetAddress"
            value={user.streetAddress}
            onChange={handleChanges}
          />
          <TextField
            label="City"
            name="city"
            value={user.city}
            onChange={handleChanges}
          />
          <TextField
            label="State"
            name="state"
            value={user.state}
            onChange={handleChanges}
          />
          <TextField
            label="Zip Code"
            name="zipCode"
            value={user.zipCode}
            onChange={handleChanges}
          />
          <TextField
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChanges}
          />
          <TextField
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChanges}
          />

          <Select
            label="User Type"
            name="userType"
            value={user.userType}
            onChange={handleChanges}
          >
            <MenuItem disabled value="">
              Pick One
            </MenuItem>
            <MenuItem value="bidders">Bidder</MenuItem>
            <MenuItem value="sellers">Seller</MenuItem>
          </Select>

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { SignUp })(NewSignUp);
