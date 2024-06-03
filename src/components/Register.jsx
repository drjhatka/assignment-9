import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from './AuthProvidex'

const handleRegister = (e)=>{
    
}

function Register() {
    const test = useContext(AuthContext)
    console.log(test)
    return (
        <div>
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
                                <input type="text" name="photo_url" placeholder="PhotoUrl" className="input input-bordered" required />
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
                                <button className="btn btn-primary">Login</button>
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
