import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="w-full max-w-md m-2 border rounded p-5 bg-gray-200">
            <Formik
            initialValues={{ phone: '', name: '', email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Email is required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }

                if(!values.phone) {
                    errors.phone = 'Phone number is required'
                }

                if(!values.name) {
                    errors.name = 'Name is required'
                }

                if(!values.password) {
                    errors.password = 'Password is required'
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
                <div className="font-bold text-2xl">Create a new account</div>

                <Field className="w-full border rounded p-2 my-2 bg-green-100" type="text" name="phone" placeholder="Phone number" />
                <ErrorMessage name="phone" component="small" className="text-red-600" />

                <Field className="w-full border rounded p-2 my-2 bg-green-100" type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="small" className="text-red-600" />

                <Field className="w-full border rounded p-2 my-2 bg-green-100" type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="small" className="text-red-600" />

                <Field className="w-full border rounded p-2 my-2 bg-green-100" type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="small" className="text-red-600" />

                <button className="bg-black rounded text-blue-200 font-semibold text-lg p-2 my-2 border-2 border-yellow-600" type="submit" disabled={isSubmitting}>
                    Sign Up
                </button>
                </Form>
            )}
            </Formik>
            <Link to="/" className="font-semibold m-2">Go back to sign in</Link>
        </div>
    )
}

export default Signup
