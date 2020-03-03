import React, { useEffect } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { TextField, Button, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

// End of Imports

// Custom Error Message //
const passError = `password must contain at least 
1 of each uppercase/lowercase character, number, symbol`;

// Form Validation //
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .max(20)
    .min(1),
  lastName: yup
    .string()
    .required()
    .max(20)
    .min(1),
  email: yup
    .string()
    .required()
    .max(30)
    .min(5),
  streetAddress: yup
    .string()
    .required()
    .max(30)
    .min(5),
  city: yup
    .string()
    .required()
    .max(30)
    .min(1),
  state: yup.string().required(),
  zipCode: yup
    .string()
    .required()
    .max(5)
    .min(5),
  username: yup
    .string()
    .required()
    .max(15)
    .min(5),
  password: yup
    .string()
    .required()
    .max(35)
    .min(10)
    .matches(/[0-9]/, passError)
    .matches(/[A-Z]/, passError)
    .matches(/[a-z]/, passError)
    .matches(/[-+_!@#$%^&*.,?]/, passError),
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
const AuctionSignUp = props => {
  const classes = useStyles();

  return (
    <FormMainWrapper>
      <div>
        Already have an account? Click <Link to="/login">here</Link>!
      </div>
      <br />
      <Formik
        initialValues={{
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
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          console.log(data);
          setSubmitting(true);

          props.setFormState({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            streetAddress: data.streetAddress,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
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
            <SignUpHeader>Sign Up!</SignUpHeader>
            <Form>
              <div>
                <Field
                  id=""
                  name="firstName"
                  variant="outlined"
                  label="First Name"
                  as={TextField}
                  value={values.firstName}
                />
                <ErrorMessage
                  name="firstName"
                  render={msg => (
                    <div className={classes.errorStyle}>
                      First name is required!
                    </div>
                  )}
                />
              </div>
              <br />
              <div>
                <Field
                  id=""
                  name="lastName"
                  variant="outlined"
                  label="Last Name"
                  as={TextField}
                  value={values.lastName}
                />
                <ErrorMessage
                  name="lastName"
                  render={msg => (
                    <div className={classes.errorStyle}>
                      Last name is required!
                    </div>
                  )}
                />
              </div>
              <br />
              <div>
                <Field
                  id=""
                  name="email"
                  variant="outlined"
                  label="E-mail"
                  type="email"
                  as={TextField}
                  value={values.email}
                />
                <ErrorMessage
                  name="email"
                  render={msg => (
                    <div className={classes.errorStyle}>Email is required!</div>
                  )}
                />
              </div>
              <br />
              <div>
                <Field
                  id=""
                  name="streetAddress"
                  variant="outlined"
                  label="Street Address"
                  type="text"
                  as={TextField}
                  value={values.streetAddress}
                />
                <ErrorMessage
                  name="streetAddress"
                  render={msg => (
                    <div className={classes.errorStyle}>
                      Street address is required!
                    </div>
                  )}
                />
              </div>
              <br />
              <div>
                <Field
                  id=""
                  name="city"
                  variant="outlined"
                  label="City"
                  type="text"
                  as={TextField}
                  value={values.city}
                />
                <ErrorMessage
                  name="city"
                  render={msg => (
                    <div className={classes.errorStyle}>City is required!</div>
                  )}
                />
              </div>
              <br />
              <div>
                {/* NOT DISPLAYING PLACEHOLDER (complicated issue with formik)*/}
                <Field
                  as={Select}
                  variant="outlined"
                  name="state"
                  className={classes.formControl}
                  placeholder="State"
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
                </Field>
                <ErrorMessage
                  name="state"
                  render={msg => (
                    <div className={classes.errorStyle}>State is required!</div>
                  )}
                />
              </div>
              <br />
              <div>
                <Field
                  id=""
                  name="zipCode"
                  variant="outlined"
                  label="Zip Code"
                  type="text"
                  as={TextField}
                  value={values.zipCode}
                />
                <ErrorMessage
                  name="zipCode"
                  render={msg => (
                    <div className={classes.errorStyle}>
                      Zip code is required!
                    </div>
                  )}
                />
              </div>
              <br />
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
                  variant="outlined"
                  label="Password"
                  type="password"
                  as={TextField}
                  value={values.password}
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

export default AuctionSignUp;
