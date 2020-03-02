import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { TextField, InputLabel, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const passwordErrorText = `password must contain at least 
1 of each uppercase/lowercase character, number, symbol`

const validationSchema = yup.object().shape({
  
  firstName:
    yup
    .string()
    .required()
    .max(20)
    .min(1),
  lastName:
    yup
    .string()
    .required()
    .max(20)
    .min(1),
  email:
    yup
    .string()
    .required()
    .max(30)
    .min(5),
  password:
    yup
    .string()
    .required()
    .max(35)
    .min(10)
    .matches(/[0-9]/, passwordErrorText)
    .matches(/[A-Z]/, passwordErrorText)
    .matches(/[a-z]/, passwordErrorText)
    .matches(/[-+_!@#$%^&*.,?]/, passwordErrorText),
})

const AuctionSignUp = (props) => {
  const history = useHistory();

  return(
    <section className='signup-wrapper'>
      <p>Sign-up Page</p>
      <Formik initialValues={{firstName: '', lastName: '', email: '', password: ''}}
        onSubmit={(data, {setSubmitting}) => {
          console.log(data)
          setSubmitting(true);

          props.setFormState({
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              password: data.password
          })

          setSubmitting(false);
          history.push('/')
      }}
      validationSchema={validationSchema}
      >
      {({errors, isSubmitting, isValid, values, resetForm}) => (
          <Form >

              <Field
                id=''
                name='firstName'
                variant="outlined"
                label="First Name"
                as={TextField}
                value={values.firstName}
              />

              <Field
                id=''
                name='lastName'
                variant="outlined"
                label="Last Name"
                as={TextField}
                value={values.lastName}
              />

              <Field
                id=''
                name='email'
                variant="outlined"
                label="E-mail"
                as={TextField}
                value={values.email}
              />

              <Field
                id=''
                name='password'
                variant="outlined"
                label="Password"
                as={TextField}
                value={values.password}
              />

              <Field
                id=''
                name='User Type'
                variant="outlined"
                label="Password"
                as={InputLabel}
              />
              <Button type='submit' variant="contained" disabled={ !isValid || isSubmitting || false}>
                Submit
              </Button>

              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </section>
  )
}



export default AuctionSignUp;