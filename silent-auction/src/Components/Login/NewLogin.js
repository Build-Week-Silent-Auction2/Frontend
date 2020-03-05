import React, { useState } from "react";
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

// Login Form Component //
const NewLogin = props => {
  const classes = useStyles();

  const [user, setUser] = React.useState({
    username: "",
    password: "",
    userType: ""
  });
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    //validation
    // REACT 2 STUFF BELOW
    setSpinner(true);
    props.Login(user.userType, user);
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
              Don't have an account?
              <br /> Click <Link to="/signup">here</Link>!
            </em>
          </InnerRouter>

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
      )}
    </div>
  );
};

export default connect(null, { Login })(NewLogin);
