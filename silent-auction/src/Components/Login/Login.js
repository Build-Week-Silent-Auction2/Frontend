import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { TextField, Button, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Form Validation //
const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  userType: yup.string().required()
});

// Form Styling //
const FormMainWrapper = styled.section`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignUpHeader = styled.h1`
  text-align: center;
  color: gray;
  border-bottom: 0px;
  width: 75%;
  padding: 1%;
  margin-bottom: 5%;
`;
const FormInsideWrapper = styled.section`
  width: 50%;
  padding: 2%;
  border: 2px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, floralwhite 0%, #d9e7ff 100%);
  box-shadow: 0px 0px 20px 10px lightgray;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
// Required for styling State and User Type Fields //
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 225
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  errorStyle: {
    color: "red",
    textAlign: "center",
    fontStyle: "italic"
  }
}));

// Form Component //
const AuctionLogin = props => {
  const classes = useStyles();

  return (
    <FormMainWrapper>
      <div>
        Don't have an account? Click <Link to="/signup">here</Link>!
      </div>
      <br />
      <Formik
        initialValues={{ username: "", password: "", userType: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          props.setFormState({
            username: data.username,
            password: data.password,
            userType: data.userType
          });

          setSubmitting(false);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, isSubmitting, isValid, values }) => (
          <FormInsideWrapper>
            <SignUpHeader>Log-in</SignUpHeader>
            <Form>
              <div>
                <Field
                  id=""
                  name="username"
                  variant="outlined"
                  label="Username"
                  type="text"
                  as={TextField}
                  value={values.username}
                />
                <ErrorMessage
                  name="username"
                  render={msg => (
                    <div className={classes.errorStyle}>
                      Username is required!
                    </div>
                  )}
                />
              </div>
              <br />
              <div>
                <Field
                  id=""
                  name="password"
                  type="password"
                  variant="outlined"
                  label="Password"
                  as={TextField}
                />
                <ErrorMessage
                  name="password"
                  render={msg => (
                    <div className={classes.errorStyle}>
                      Password is required!
                    </div>
                  )}
                />
              </div>
              <br />
              <div>
                {/* NOT DISPLAYING PLACEHOLDER (complicated issue with formik)*/}
                <Field
                  as={Select}
                  variant="outlined"
                  name="userType"
                  placeholder="User"
                  label="User"
                  className={classes.formControl}
                  value={values.userType}
                >
                  <MenuItem value="bidders">Bidders</MenuItem>
                  <MenuItem value="sellers">Sellers</MenuItem>
                </Field>
                <ErrorMessage
                  name="userType"
                  render={msg => (
                    <div className={classes.errorStyle}>
                      User type is required!
                    </div>
                  )}
                />
              </div>

              <ButtonContainer>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!isValid || isSubmitting || false}
                >
                  Submit
                </Button>
              </ButtonContainer>

              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          </FormInsideWrapper>
        )}
      </Formik>
    </FormMainWrapper>
  );
};

export default AuctionLogin;
