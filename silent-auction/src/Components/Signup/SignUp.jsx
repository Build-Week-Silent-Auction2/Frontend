import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { TextField, InputLabel, Button } from '@material-ui/core';

const AuctionSignUp = () => {
  return(
    <section className='login-wrapper'>
      <p>Sign-up Page</p>
      <Formik>
        <Form >

            <Field
              id=''
              name='name'
              variant="outlined"
              label="Name"
              as={TextField}
            />

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

// const FormikAuctionLogin = withFormik({
//   mapPropsToValues({name, email, password}){
//     return {
//       name: name || '',
//       email: email || '',
//       password: password || ''
//     }
//   }
// })(AuctionLogin);

export default AuctionSignUp;