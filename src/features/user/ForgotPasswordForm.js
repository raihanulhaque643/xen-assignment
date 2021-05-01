import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormOrRow from './FormOrRow';
import EmailOTPForm from './EmailOTPForm';
import SmsOTPForm from './SmsOTPForm';

const ForgotPasswordForm = ({ setShowSignInWithPassword }) => {

    const [showEmailOTPForm, setShowEmailOTPForm] = useState(true)

    return (
        <div className="">
            {
                showEmailOTPForm ?
                <EmailOTPForm />
                :
                <SmsOTPForm />
                
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
