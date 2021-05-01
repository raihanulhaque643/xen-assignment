import React from 'react'

const FormOrRow = () => {
    return (
        <div className="flex flex-row w-full my-2">
            <div className="flex flex-col w-full justify-center">
                <div className="border-t-2 border-black"></div>
            </div>
            <div className="flex flex-col px-2">or</div>
            <div className="flex flex-col w-full justify-center">
                <div className="border-t-2 border-black"></div>
            </div>
        </div>
    )
}

export default FormOrRow
