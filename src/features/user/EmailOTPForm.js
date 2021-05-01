import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EmailOTPForm = () => {
    return (
            <Formik
                initialValues={{ email: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Email is required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col">

                    <Field placeholder="Email OTP" className="w-full rounded p-2 my-2 border-b-2 border-blue-500 text-center" type="text" name="email"/>
                    <ErrorMessage name="email" component="small" className="text-red-600"  />

                    <button className="bg-black rounded text-blue-200 font-semibold text-lg p-2 my-2 border-2 border-yellow-600" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>

                    </Form>
                )}
                </Formik>
    )
}

export default EmailOTPForm