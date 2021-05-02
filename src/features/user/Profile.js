import React from 'react'

const Profile = () => {
    return (
        <div className="border w-full max-w-md p-4 flex flex-row items-center justify-between bg-gray-200">
            <div className="flex flex-col font-semibold">
                Profile Component
            </div>
            <div className="flex flex-col">
                <button className="border border-red-700 border-b-2 p-2 rounded font-bold">Logout</button>
            </div>
        </div>
    )
}

export default Profile
