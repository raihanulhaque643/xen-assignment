import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import FormOrRow from './FormOrRow';

const Login = () => {
    return (
        <div className="w-full max-w-md m-2 border rounded p-5 bg-gray-200">
            <Formik
            initialValues={{ phone: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.phone) {
                errors.phone = 'Phone number is required';
                }
                if (!values.password) {
                    errors.password = 'Password is required';
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
                <div className="font-bold text-2xl">Log in</div>

                <Field placeholder="Enter your phone number" className="w-full border rounded p-2 my-2 bg-green-100" type="text" name="phone" />
                <ErrorMessage name="phone" component="small" className="text-red-600"  />

                <Field placeholder="Password" className="w-full border rounded p-2 my-2 bg-green-100" type="password" name="password" />
                <ErrorMessage name="password" component="small" className="text-red-600"  />

                <button className="bg-black rounded text-blue-200 font-semibold text-lg p-2 my-2 border-2 border-yellow-600" type="submit" disabled={isSubmitting}>
                    Sign in with password
                </button>

                </Form>
            )}
     </Formik>

            <FormOrRow />

            <button className="w-full border-2 p-2 my-4 font-semibold border-black">Forgot Password? Sign in via other means instead!</button>

            <Link to="/signup" className="flex flex-col items-center font-semibold text-sm mb-4">Dont have an account? Sign up</Link>

            <FormOrRow />

            <div className="flex flex-row w-full">
                    <button className="flex flex-col w-full text-center text-white bg-blue-400 h-10 justify-center items-center mr-1 font-semibold text-sm">
                        Sign in with Facebook
                    </button>
                    <button className="flex flex-col w-full text-center text-white bg-red-600 h-10 justify-center items-center ml-1 font-semibold text-sm">
                        Sign in with Google
                    </button>
            </div>

        </div>
    )
}

export default Login
