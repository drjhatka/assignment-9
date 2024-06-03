import {Link} from 'react-router-dom'
import { FaGithub, FaGoogle } from "react-icons/fa6";

function Register() {
    return (
        
        <div className="hero  bg-base-200">
            
            <div style={{height:'600px'}} className="hero-content  lg:flex-col"> 
                <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Register Now</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={(e)=>handleLogin(e)}>
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
                    <div className="flex flex-col  gap-4 mb-4 ">

                            <div className="font-bold text-center">Or Login using</div>
                            <div className="flex gap-5 justify-center">
                                <button className="border-2 px-2 py-2 rounded-lg bg-red-400 text-white font-semibold"> <FaGoogle></FaGoogle></button>
                                <button className="border-2 px-2 py-2 rounded-lg bg-blue-400 text-white font-semibold"><FaGithub></FaGithub></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Register
