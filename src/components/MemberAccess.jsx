import React from 'react'
import Navbar from './Navbar'

function MemberAccess() {
    return (

        <div className='flex flex-col'>
            <Navbar></Navbar>
            <div className="flex flex-col w-4/5 mx-auto  text-center mt-2 border-b-red-500 border-b-2 py-4">
                <h1 className='text-3xl text-red-500'>This is the member area</h1>
                <h1 className='text-3xl text-red-500'>You Get Exclusive Offers Here</h1>

            </div>
            <div className='flex justify-center'>
                <img src='../images/member.jpeg' alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='flex items-center mb-4 gap-10 justify-center'>
                    <label className='font-semibold' htmlFor="access_code">Provide Access code</label>    
                    <input type="text" className='border-2 px-4 py-3 rounded-xl bg-gray-50' placeholder='Input Access Code' />
                </div>
                <div className=' flex justify-center'>
                    <button className='btn btn-primary'>Access Privilage Here</button>
                </div>
            </div>
        </div>
    )
}

export default MemberAccess
