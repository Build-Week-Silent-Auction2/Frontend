import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Login } from "../../actions/index";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";
import styled from "styled-components";

// Material UI Styles Here //
const FormWrapper = styled(ValidatorForm)`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  h2 {
    text-align: center;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

// Form Component //
const NewLogin = (props) => {
  const classes = useStyles();

  const [user, setUser] = React.useState({
    username: "",
    password: "",
    userType: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //validation
    // REACT 2 STUFF BELOW
    props.Login(user.userType, user);
    setTimeout(() => {
      props.history.push(`/${user.userType}/dash/${user.username}`);
    }, 2000);
  };

  const handleChanges = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  return (
    <FormWrapper
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <h2>Login Form</h2>
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
            validators={["required"]}
            errorMessages={["this field is required"]}
            type="password"
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
        <ButtonWrapper>
          <Button variant="outlined" color="primary" type="submit">
            Log-In
          </Button>
        </ButtonWrapper>
      </div>
    </FormWrapper>
  );
};

export default connect(null, { Login })(NewLogin);
