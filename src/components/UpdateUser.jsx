import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { AuthContext } from './AuthProvider'
import { ToastContainer, toast } from 'react-toastify'

function UpdateUser() {
    const {user, profileUpdate} = useContext(AuthContext)
    
    const handleProfileUpdate = (e)=>{
        e.preventDefault()
        const data = new FormData(e.target)
        profileUpdate(data.get('displayName'),data.get('photoUrl')).then(()=>{
        toast('Profile Updated Successfully!')
        }).catch(error=>{
            toast(error.message)
        })
    }
    return (

        <>
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <div className='flex mt-10 flex-col gap-5 w-2/5 mx-auto'>
            <div className='py-3 border-b-4 border-green-600'>
                <h1 className='text-3xl'>Update your prfile</h1>
            </div>
            <form className='flex flex-col gap-4' onSubmit={(e)=>handleProfileUpdate(e)}>
                  {user?.email &&
                    <div className="form-control">
                        <label htmlFor="email" className='text-xl font-semibold text-[#FF5733] border-b-2 mb-2 border-[#FF5733]  px-2'>Email</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input name='email' type="email"  className="grow" readOnly disabled value={user?.email} required />
                    </label>
                    </div>
                }
                {!user?.displayName ?
                <div className="form-control">
                        <label htmlFor="email" className='text-xl font-semibold text-[#FF5733] border-b-2 border-[#FF5733]  px-2'>Email</label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input name='displayName' type="text" className="grow" placeholder="Set Display Name" required />
                   </label>
                </div>
                    :
                    <>
                        <label htmlFor="email" className='text-xl font-semibold text-[#FF5733] border-b-2  border-[#FF5733]  px-2'>Display Name</label>

                <label className="input input-bordered flex items-center gap-2">
                   <input name='displayName' type="text"  className="grow"  defaultValue={user.displayName} required />
                </label>
                    </>
                }
                 {!user?.photoURL ?
                 <>
                        <label htmlFor="email" className='text-xl font-semibold text-[#FF5733] border-b-2 mb-2 border-[#FF5733]  px-2'>Photo Url</label>

                <label className="input input-bordered flex items-center gap-2">
                    <input name='photoUrl' type="text" className="grow" placeholder="Set Photo Link" required />
                   </label>
                 
                 </>
                   :<>
                        <label htmlFor="email" className='text-xl font-semibold text-[#FF5733] border-b-2 mb-2 border-[#FF5733]  px-2'>Photo URL</label>
                 <label className="input input-bordered flex items-center gap-2">
                    <input name='photoUrl' type="text"  className="grow" defaultValue={user.photoURL} required />
                </label>  
                   </>
                }
                <div className='w-full flex justify-center'>
                    <input type="submit" className="btn btn-primary bg-[#FF5733] text-white" />
                </div>


            </form>
        </div>
        </>
    )
}

export default UpdateUser
