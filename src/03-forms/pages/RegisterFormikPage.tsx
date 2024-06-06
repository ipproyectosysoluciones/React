import { Form, Formik } from 'formik';
import  * as Yup  from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {


  return (
    <div>

      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .min(2, "The name must be 3 characters or more")
            .max(15, "Must be 15 characters or less"),
          email: Yup.string().required("Required").email("Check email format"),
          password1: Yup.string()
            .required("Required")
            .min(6, "Must be 6 characters or more"),
          password2: Yup.string()
            .required("Required")
            .oneOf(
              [ Yup.ref( "password1" ) ], "Passwords must match"
            ),
        })}
      >
        {
          ( { handleReset } ) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                placeholder='Name'
              />

              <MyTextInput
                label="Email"
                name="email"
                type='email'
                placeholder='Email'
              />

              <MyTextInput
                label="Password"
                name="password1"
                type='password'
                placeholder='Password'
              />

              <MyTextInput
                label="Repeat Password"
                name="password2"
                type='password'
                placeholder='Repeat Password'
              />


              <button type="submit">Create</button>

              <button type="button" onClick={ handleReset }>
                Reset Form
              </button>
            </Form>
          )
        }

      </Formik>

    </div>
  );
}
