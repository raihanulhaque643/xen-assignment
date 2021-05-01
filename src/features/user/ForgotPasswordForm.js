import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormOrRow from './FormOrRow';

const ForgotPasswordForm = ({ setShowSignInWithPassword }) => {

    const [showEmailOTPForm, setShowEmailOTPForm] = useState(true)

    return (
        <div className="">
            {
                showEmailOTPForm ?
                <Formik
                enableReinitialize={true}
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
                :
                <Formik
                enableReinitialize={true}
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
            }

            <FormOrRow />

            {
                showEmailOTPForm ?
                <button 
                onClick={() => {setShowEmailOTPForm(false)}}
                className="w-full border-2 border-black p-2 font-semibold text-sm my-2">Send OTP to my phone</button>
                :
                <button 
                onClick={() => {setShowEmailOTPForm(true)}}
                className="w-full border-2 border-black p-2 font-semibold text-sm my-2">Send OTP to my email</button>
            }

            <button
            className="font-semibold m-2"
            onClick={() => {setShowSignInWithPassword(true)}}
            >Go back to sign in
            </button>



        </div>
    )
}

export default ForgotPasswordForm
