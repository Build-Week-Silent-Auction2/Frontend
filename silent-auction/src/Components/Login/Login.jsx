import React from 'react';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { TextField, InputLabel, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

const validationSchema = yup.object().shape({

})

const AuctionLogin = (props) => {
  const history = useHistory();

  return(
    <section className='login-wrapper'>
      <p>Log-in Page</p>
      <Formik initialValues={{}}
        onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);

                props.setFormState({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: data.password,
                    email: data.email,
                })

                setSubmitting(false);
                history.push('/')
            }}
      >
      {({errors, isSubmitting, isValid, values}) => (
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

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
      </Formik>
    </section>
  )
}

export default AuctionLogin;
