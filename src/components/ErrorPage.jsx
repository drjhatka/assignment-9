import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const errorData = useRouteError()
    const {status, statusText, data} = errorData;
    return (
        <div className='flex  gap-10 flex-col mt-10 w-3/5 mx-auto'>
            <div className='border-b-green-700 border-b-4 bg-slate-100 px-2 text-center py-5'>
                <h1 className='text-4xl text-red-500 font-bold'>Oops! Something Went Wrong!</h1>
                <img className='h-48 mx-auto' src={'../images/error.jpg'} alt="" />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-3xl bg-slate-200 px-10 py-4 rounded-lg text-red-600 font-bold'>{status} - {statusText}   </h1>
            </div>
            <div className='flex justify-center'>
                <h1 className='text-3xl text-red-600 font-bold'>{data.slice(6,-1)}   </h1>
            </div>

        </div>
    )
}

export default ErrorPage
