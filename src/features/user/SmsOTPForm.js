import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SmsOTPForm = () => {

    const [sendingOTP, setSendingOTP] = useState(false)
    const [sendingOTPcompleted, setSendingOTPcompleted] = useState(false)

    return (
        <div className="">
            {
                sendingOTPcompleted &&
                <div className="w-full text-center font-semibold text-lg mb-2">OTP has been sent to your <span className="uppercase font-bold">Phone</span></div>
            }
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
                    setSendingOTP(true)
                    setSendingOTPcompleted(false)
                    setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    setSendingOTP(false)
                    setSendingOTPcompleted(true)
                    setSubmitting(false);
                    }, 3000);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col">

                    <Field placeholder="SMS OTP" className="w-full rounded p-2 my-2 border-b-2 border-blue-500 text-center" type="text" name="phone"/>
                    <ErrorMessage name="phone" component="small" className="text-red-600"  />

                    <button className="bg-black rounded text-blue-200 font-semibold text-lg p-2 my-2 border-2 border-yellow-600  flex flex-row justify-center items-center" type="submit" disabled={isSubmitting}>
                        <span>Submit</span>
                        {
                            sendingOTP &&
                            <svg className="rounded-full animate-ping duration-300 w-3 h-3 border-2 mx-2"></svg>
                        }
                    </button>

                    </Form>
                )}
                </Formik>
        </div>
    )
}

export default SmsOTPForm
