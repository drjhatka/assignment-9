import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from './AuthProvidex'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const {createUser, setUser} = useContext(AuthContext);
    const handleRegister = (e)=>{
        e.preventDefault();
        const fields = [e.target.name.value,
                        e.target.photo_url.value,
                        e.target.email.value,
                        e.target.password.value 
                    ]
        //validate password  
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(fields[3])){
            toast('Password must be more than 6 characters long & Must have uppercase and lowercase letter! ')
         }
         
         else{createUser(fields[2],fields[3]).then((user)=>
            {
                setUser(user)
                toast('User Created Successfully')
            }
         ).catch((error)=>{
            toast(error.message)
         })
         }
    }
    return (
        <div>
            <ToastContainer />

            <div className="hero  bg-base-200">
                
                <div style={{height:'800px'}} className="hero-content  flex-col"> 
                    <div className="text-center lg:text-left">
                            <h1 className="text-2xl font-bold">Register Now</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={(e)=>handleRegister(e)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name="photo_url" placeholder="PhotoUrl" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            
                        </form>
                        <div className="flex gap-4 pb-6 border-b-2 border-t-2 items-center justify-center text-red-600 font-semibold text-sm ">
                            <h1>Already have an account?
                                </h1>
                            <Link to='/login' className="underline">Sign in</Link> 
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
