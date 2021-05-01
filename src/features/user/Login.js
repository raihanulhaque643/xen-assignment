import React, { useState } from 'react'
import SignInWithPasswordForm from './SignInWithPasswordForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const Login = () => {

    const [showSignInWithPassword, setShowSignInWithPassword] = useState(true)

    return (
        <div className="w-full max-w-md m-2 border rounded p-5 bg-gray-200">
            {
                showSignInWithPassword ?
                <SignInWithPasswordForm showSignInWithPassword={showSignInWithPassword} setShowSignInWithPassword={setShowSignInWithPassword} /> :
                <ForgotPasswordForm setShowSignInWithPassword={setShowSignInWithPassword} />
            }
        </div>
    )
}

export default Login
