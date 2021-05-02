import React from 'react'
import {logoutAsync} from '../user/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import {userSelector} from '../user/userSlice'

const Profile = () => {

    const dispatch = useDispatch()
    const user = useSelector(userSelector);

    return (
        <div className="border w-full max-w-md p-4 flex flex-row items-center justify-between bg-gray-200">
            <div className="flex flex-col font-semibold">
                Profile Component
            </div>
            <div className="flex flex-col font-semibold">
               {
                   user.status === 'loading' &&
                   <span className="text-gray-500">Logging out...</span>
               }
            </div>
            <div className="flex flex-col">
                <button
                onClick={() => dispatch(logoutAsync())}
                className="border border-red-700 border-b-2 p-2 rounded font-bold">Logout</button>
            </div>
        </div>
    )
}

export default Profile
