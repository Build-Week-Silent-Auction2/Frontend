import React from 'react';
import {withFormik, Form, Field} from 'formik';

const AuctionLogin = () => {
  return(
    <section className='login-wrapper'>
      <p>Login Page Here</p>
      <Form>
        <label>
          Name:
          <Field
            id='name'
            name='name'
            placeholder='Enter Name Here'
          />
        </label>
        <label>
          E-mail:
          <Field
            id='email'
            name='email'
            placeholder='Enter E-mail Here'
          />
        </label>
        <label>
          Password:
          <Field
            id='password'
            name='password'
            placeholder='Enter Password Here'
          />
        </label>
      </Form>
    </section>
  )
}

const FormikAuctionLogin = withFormik({
  mapPropsToValues({name}){
    return {
      name: name || ''
    }
  }
})(AuctionLogin);

export default FormikAuctionLogin;