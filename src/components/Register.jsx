import { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

function Register() {
    const {createUser, setUser} = useContext(AuthContext);
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
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
                setTimeout(()=>navigate('/login'),1000)
            }
         ).catch((error)=>{
            toast(error.message)
         })
         }
    }
    return (
        <>
            <Navbar></Navbar>
        <div>
            <ToastContainer />

            <div className="hero  bg-base-200">
                
                <div style={{height:'600px'}} className="hero-content  flex-col"> 
                    <div className="text-center lg:text-left">
                            <h1 className="text-2xl font-bold">Register Now</h1>
                    </div>
                    <div className="card relative shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <input type={!visible?'password':'text'} name="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                            
                        </form>
                        <div className='absolute top-[65%] left-[77%]'>
                                <button  onClick={()=>setVisible(!visible)}>{visible?<FaEye className='text-xl'></FaEye>:<FaEyeSlash className='text-xl'></FaEyeSlash>}</button>

                        </div>
                        <div className="flex gap-4 pb-6 border-b-2 border-t-2 items-center justify-center text-red-600 font-semibold text-sm ">
                            <h1>Already have an account?
                                </h1>
                            <Link to='/login' className="underline">Sign in</Link> 
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
