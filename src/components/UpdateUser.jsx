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
        <div className='flex flex-col gap-5 w-2/5 mx-auto'>
            <form className='flex flex-col gap-4' onSubmit={(e)=>handleProfileUpdate(e)}>
                  {user?.email &&
                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
                            <input name='email' type="email"  className="grow" readOnly disabled value={user?.email} required />
                    </label>
                    </div>
                }
                {!user?.displayName ?
                <div className="form-control">
                    <label className="input input-bordered flex items-center gap-2">
                        <input name='displayName' type="text" className="grow" placeholder="Set Display Name" required />
                   </label>
                </div>
                    :
                <label className="input input-bordered flex items-center gap-2">
                   <input name='displayName' type="text"  className="grow"  defaultValue={user.displayName} required />
                </label>
                }
                 {!user?.photoURL ?
                 <>
                <label className="input input-bordered flex items-center gap-2">
                    <input name='photoUrl' type="text" className="grow" placeholder="Set Photo Link" required />
                   </label>
                 
                 </>
                   :
                 <label className="input input-bordered flex items-center gap-2">
                    <input name='photoUrl' type="text"  className="grow" defaultValue={user.photoURL} required />
                </label>  
                }
                <div className='w-full flex justify-center'>
                    <input type="submit" className="btn btn-primary" />
                </div>


            </form>
        </div>
        </>
    )
}

export default UpdateUser
