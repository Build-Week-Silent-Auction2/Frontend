import React from 'react';
import { 
  Form, 
  Field, 
  ErrorMessage,
  Formik, 
  useField 
} from 'formik';
import * as yup from 'yup';
import { 
  TextField, 
  Button, 
  FormControl,
  InputLabel, 
  MenuItem, 
  FormHelperText, 
  Select 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const MyDropDown = (props) => {

  const classes = useStyles();
  const [userType, setUserType] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setUserType(event.target.value);
  };

  return(
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          User Type
        </InputLabel>
        <Select
          labelId="userType"
          id="userType"
          value={userType}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'buyer'}>Buyer</MenuItem>
          <MenuItem value={'seller'}>Seller</MenuItem>
          <MenuItem value={'both'}>Both</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}


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
      <Formik initialValues={{firstName: '', lastName: '', email: '', password: '', userType: '' }}
        onSubmit={(data, {setSubmitting}) => {
          console.log(data)
          setSubmitting(true);

          props.setFormState({
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              password: data.password,
              userType: data.userType
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
                type='email'
                as={TextField}
                value={values.email}
              />

              <Field
                id=''
                name='password'
                variant="outlined"
                label="Password"
                type='password'
                as={TextField}
                value={values.password}
              />

              <Field
                id=''
                name='userType'
                variant="outlined"
                label="User"
                as={MyDropDown}
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