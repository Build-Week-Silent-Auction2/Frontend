import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { TextField, InputLabel, Button } from '@material-ui/core';

const AuctionLogin = () => {
  return(
    <section className='login-wrapper'>
      <p>Log-in Page</p>
      <Formik>
        <Form >

            <Field
              id=''
              name='email'
              variant="outlined"
              label="E-mail"
              as={TextField}
            />

            <Field
              id=''
              name='password'
              variant="outlined"
              label="Password"
              as={TextField}
            />

            <Field
              id=''
              name='User Type'
              variant="outlined"
              label="Password"
              as={InputLabel}
            />

            <Button type='submit' variant="contained">
              Submit
            </Button>
        </Form>
      </Formik>
    </section>
  )
}

export default AuctionLogin;
