import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SmsOTPForm = () => {
    return (
        <Formik
                initialValues={{ phone: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.phone) {
                    errors.phone = 'Phone number is required';
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

                    <Field placeholder="SMS OTP" className="w-full rounded p-2 my-2 border-b-2 border-blue-500 text-center" type="text" name="phone"/>
                    <ErrorMessage name="phone" component="small" className="text-red-600"  />

                    <button className="bg-black rounded text-blue-200 font-semibold text-lg p-2 my-2 border-2 border-yellow-600" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>

                    </Form>
                )}
                </Formik>
    )
}

export default SmsOTPForm
