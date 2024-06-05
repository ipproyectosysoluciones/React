import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Required")
            .max(15, "Must be 15 characters or less"),
          lastName: Yup.string()
            .required("Required")
            .max(10, "Must be 10 characters or less"),
          email: Yup.string().required("Required").email("Invalid email address"),
          terms: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
          ),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "This option is not allowed")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="Fisrt Name"
              name="firstName"
              placeholder='First Name'
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder='Last Name'
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder='Email Address'
              type='email'
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
