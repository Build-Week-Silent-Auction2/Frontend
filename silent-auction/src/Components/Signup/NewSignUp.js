import React, { useState, useEffect } from "react";
import { Button, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { SignUp } from "../../actions/index";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";
import styled from "styled-components";
import { Spinner } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Styled Components Styles //
const MainFormWrapper = styled.div`
  margin: 10% 40% 10% 40%;
  border-width: 30px;
  border-style: outset;
  border-top-color: #09d1d4;
  border-left-color: #050a5c;
  border-right-color: #09d1d4;
  border-bottom-color: #050a5c;
  border-radius: 10px;
  box-shadow: 0 0 60px 20px gray;
`;
const FormWrapper = styled(ValidatorForm)`
  display: flex;
  justify-content: center;
  margin: 2% 0% 0% 0%;
  padding: 10%;
  h2 {
    text-align: center;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25%;
`;
const InnerRouter = styled.div`
  text-align: center;
  padding: 3%;
`;
// Material UI Styles Here //
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

// Signup Form Component //
const NewSignUp = props => {
  console.log(props);
  const classes = useStyles();

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

  const [spinner, setSpinner] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    //validation
    setSpinner(true);
    props.SignUp(user.userType, user);
    setTimeout(() => {
      setSpinner(false);
      props.history.push(`/${user.userType}/dash/${user.username}`);
    }, 10000);
  };

  const handleChanges = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  return (
    <div>
      {spinner ? (
        <SpinnerWrapper>
          <Spinner style={{ width: "25rem", height: "25rem" }} color="info" />
        </SpinnerWrapper>
      ) : (
        <MainFormWrapper>
          <InnerRouter>
            <em>
              Already have an account?
              <br /> Click <Link to="/">here</Link>!
            </em>
          </InnerRouter>
          <FormWrapper
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>
              <h2>Sign Up</h2>
              <div>
                <TextValidator
                  label="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChanges}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  variant="outlined"
                />
              </div>
              <div>
                <TextValidator
                  label="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChanges}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  variant="outlined"
                />
              </div>
              <div>
                <TextValidator
                  label="Email"
                  name="email"
                  value={user.email}
                  onChange={handleChanges}
                  variant="outlined"
                  validators={["required", "isEmail"]}
                  errorMessages={["this field is required"]}
                  type="email"
                />
              </div>
              <div>
                <TextValidator
                  label="Street Address"
                  name="streetAddress"
                  value={user.streetAddress}
                  onChange={handleChanges}
                  variant="outlined"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </div>
              <div>
                <TextValidator
                  label="City"
                  name="city"
                  value={user.city}
                  onChange={handleChanges}
                  variant="outlined"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </div>
              <div>
                <SelectValidator
                  value={user.state}
                  onChange={handleChanges}
                  name="state"
                  label="State"
                  variant="outlined"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                >
                  <MenuItem value="AL">Alabama</MenuItem>
                  <MenuItem value="AK">Alaska</MenuItem>
                  <MenuItem value="AZ">Arizona</MenuItem>
                  <MenuItem value="AR">Arkansas</MenuItem>
                  <MenuItem value="CA">California</MenuItem>
                  <MenuItem value="CO">Colorado</MenuItem>
                  <MenuItem value="CT">Connecticut</MenuItem>
                  <MenuItem value="DE">Delaware</MenuItem>
                  <MenuItem value="FL">Florida</MenuItem>
                  <MenuItem value="GA">Georgia</MenuItem>
                  <MenuItem value="HI">Hawaii</MenuItem>
                  <MenuItem value="ID">Idaho</MenuItem>
                  <MenuItem value="IL">Illinois</MenuItem>
                  <MenuItem value="IN">Indiana</MenuItem>
                  <MenuItem value="IA">Iowa</MenuItem>
                  <MenuItem value="KS">Kansas</MenuItem>
                  <MenuItem value="KY">Kentucky</MenuItem>
                  <MenuItem value="LA">Louisiana</MenuItem>
                  <MenuItem value="ME">Maine</MenuItem>
                  <MenuItem value="MD">Maryland</MenuItem>
                  <MenuItem value="MA">Massachusetts</MenuItem>
                  <MenuItem value="MI">Michigan</MenuItem>
                  <MenuItem value="MN">Minnesota</MenuItem>
                  <MenuItem value="MS">Mississippi</MenuItem>
                  <MenuItem value="MO">Missouri</MenuItem>
                  <MenuItem value="MT">Montana</MenuItem>
                  <MenuItem value="NE">Nebraska</MenuItem>
                  <MenuItem value="NV">Nevada</MenuItem>
                  <MenuItem value="NH">New Hampshire</MenuItem>
                  <MenuItem value="NJ">New Jersey</MenuItem>
                  <MenuItem value="NM">New Mexico</MenuItem>
                  <MenuItem value="NY">New York</MenuItem>
                  <MenuItem value="NC">North Carolina</MenuItem>
                  <MenuItem value="ND">North Dakota</MenuItem>
                  <MenuItem value="OH">Ohio</MenuItem>
                  <MenuItem value="OK">Oklahoma</MenuItem>
                  <MenuItem value="OR">Oregon</MenuItem>
                  <MenuItem value="PA">Pennsylvania</MenuItem>
                  <MenuItem value="RI">Rhode Island</MenuItem>
                  <MenuItem value="SC">South Carolina</MenuItem>
                  <MenuItem value="SD">South Dakota</MenuItem>
                  <MenuItem value="TN">Tennessee</MenuItem>
                  <MenuItem value="TX">Texas</MenuItem>
                  <MenuItem value="UT">Utah</MenuItem>
                  <MenuItem value="VT">Vermont</MenuItem>
                  <MenuItem value="VA">Virginia</MenuItem>
                  <MenuItem value="WA">Washington</MenuItem>
                  <MenuItem value="WV">West Virginia</MenuItem>
                  <MenuItem value="WI">Wisconsin</MenuItem>
                  <MenuItem value="WY">Wyoming</MenuItem>
                </SelectValidator>
              </div>
              <div>
                <TextValidator
                  label="Zip Code"
                  name="zipCode"
                  value={user.zipCode}
                  onChange={handleChanges}
                  variant="outlined"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </div>
              <div>
                <TextValidator
                  label="Username"
                  name="username"
                  value={user.username}
                  onChange={handleChanges}
                  variant="outlined"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </div>
              <div>
                <TextValidator
                  label="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChanges}
                  variant="outlined"
                  type="password"
                  validators={[
                    "required",
                    "matchRegexp:^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                  ]}
                  errorMessages={[
                    "At least one upper case letter, one lower case letter, one digit, one special character, and a minimum length of 8."
                  ]}
                  // type="password"
                />
              </div>
              <div>
                <SelectValidator
                  label="User Type"
                  name="userType"
                  value={user.userType}
                  onChange={handleChanges}
                  variant="outlined"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                >
                  <MenuItem disabled value="">
                    Pick One
                  </MenuItem>
                  <MenuItem value="bidders">Bidder</MenuItem>
                  <MenuItem value="sellers">Seller</MenuItem>
                </SelectValidator>
              </div>
              <div>
                <ButtonWrapper>
                  <Button variant="outlined" color="primary" type="submit">
                    Sign Up!
                  </Button>
                </ButtonWrapper>
              </div>
            </div>
          </FormWrapper>
        </MainFormWrapper>
      )}
    </div>
  );
};

export default connect(null, { SignUp })(NewSignUp);
