import React from "react";
import { Form, withFormik, FastField, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import { ButtonStyleTwo, Input } from "Common";
import { recaptcha_key } from "Data";
import { Error, Center, InputField } from "./styles";

const ContactForm = ({
  setFieldValue,
  isSubmitting,
  values,
  errors,
  touched
}) => (
  <Form
    name="portfolio-dev"
    method="post"
    data-netlify="true"
    data-netlify-recaptcha="true"
    data-netlify-honeypot="bot-field"
  >
    <InputField>
      <Input
        as={FastField}
        type="text"
        name="name"
        component="input"
        aria-label="name"
        placeholder="Full name*"
        error={touched.name && errors.name}
      />
      <ErrorMessage component={Error} name="name" />
    </InputField>
    <InputField>
      <Input
        id="email"
        aria-label="email"
        component="input"
        as={FastField}
        type="email"
        name="email"
        placeholder="Email*"
        error={touched.email && errors.email}
      />
      <ErrorMessage component={Error} name="email" />
    </InputField>
    <InputField>
      <Input
        as={FastField}
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        type="text"
        name="message"
        placeholder="Message*"
        error={touched.message && errors.message}
      />
      <ErrorMessage component={Error} name="message" />
    </InputField>
    {values.name && values.email && values.message && (
      <InputField>
        <FastField
          component={Recaptcha}
          sitekey={recaptcha_key}
          name="recaptcha"
          onChange={value => setFieldValue("recaptcha", value)}
        />
        <ErrorMessage component={Error} name="recaptcha" />
      </InputField>
    )}
    {values.success && (
      <InputField>
        <Center>
          <h3>
            Thanks for getting in touch {values.name}! I'll get
            back to you as soon as possible!
          </h3>
        </Center>
      </InputField>
    )}
    <Center>
      <ButtonStyleTwo secondary type="submit" disabled={isSubmitting}>
        Submit
      </ButtonStyleTwo>
    </Center>
  </Form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    message: "",
    recaptcha: "",
    success: false
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required("Full name field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email field is required"),
      message: Yup.string().required("Message field is required"),
      recaptcha: Yup.string().required("Robots are not welcome yet!")
    }),
  handleSubmit: async (
    { name, email, message },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      };
    var dataObject = { name: name, email: email, message: message };
      sendEmail(dataObject);
      await setSubmitting(false);
      await setFieldValue("success", true);
      setTimeout(() => resetForm(), 10000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue("success", false);
      alert("Something went wrong, please try again!"); // eslint-disable-line
    }
  }
})(ContactForm);
export function sendEmail(body) {
  return fetch(
    `${process.env.GATSBY_CONTACT_FORM_API}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ body })
    }
  );
}
