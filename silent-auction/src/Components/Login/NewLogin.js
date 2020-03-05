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

// Styled Components Styles //
const MainFormWrapper = styled.div`
  margin: 10% 40% 10% 40%;
  border: 30px outset turquoise;
  border-radius: 10px;
  box-shadow: 0 0 60px 15px gray;
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

// Material UI Styles Here //
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

// Login Form Component //
const NewLogin = props => {
  const classes = useStyles();

  const [user, setUser] = React.useState({
    username: "",
    password: "",
    userType: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    //validation
    // REACT 2 STUFF BELOW
    props.Login(user.userType, user);
    setTimeout(() => {
      props.history.push(`/${user.userType}/dash/${user.username}`);
    }, 2000);
  };

  const handleChanges = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  return (
    <MainFormWrapper>
      <FormWrapper
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <h2>Login</h2>
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
    </MainFormWrapper>
  );
};

export default connect(null, { Login })(NewLogin);
