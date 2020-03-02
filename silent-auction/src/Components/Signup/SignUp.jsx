import React, { useEffect } from "react";
import {
  Form,
  Field,
  ErrorMessage,
  Formik,
  useField,
  FieldArray
} from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// End of Imports

const passError = `password must contain at least 
1 of each uppercase/lowercase character, number, symbol`;

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

const AuctionSignUp = props => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <section className="signup-wrapper">
      <p>Sign-up Page</p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          userType: ""
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          console.log(data);
          setSubmitting(true);
          //make async call

          props.setFormState({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            userType: data.userType
          });

          setSubmitting(false);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, isSubmitting, isValid, values, resetForm }) => (
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
            </div>
            <div>
              <Field
                id=""
                name="lastName"
                variant="outlined"
                label="Last Name"
                as={TextField}
                value={values.lastName}
              />
            </div>
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
            </div>
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
            </div>
            <div>
              <Field
                as={Select}
                variant="outlined"
                name="userType"
                className={classes.formControl}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Buyer">Buyer</MenuItem>
                <MenuItem value="Seller">Seller</MenuItem>
                <MenuItem value="Both">Both</MenuItem>
              </Field>
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                disabled={!isValid || isSubmitting || false}
              >
                Submit
              </Button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AuctionSignUp;