import React, { useContext, useEffect } from 'react'
import { BsBuildings } from "react-icons/bs";
import { AuthContext } from './AuthProvider';
import { NavLink,Link, Navigate, useNavigate } from 'react-router-dom';

function Navbar() {
  
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogout= ()=>{
        //logout redirect to login page
        logOut()
        navigate('/login')  
      
    }
    return (
        <div className=' bg-base-200 shadow-md'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            
                            <li><Link>Update Profile</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <BsBuildings className='text-red-700 text-3xl' />
                         <Link to="/" className="btn btn-ghost text-xl">Wuthering Heights</Link>

                    </div>
                </div>
                { user &&
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold gap-5 ">
                        <li><NavLink to="/">Home</NavLink></li>

                        <li><NavLink to="/update-user" > Update Profile</NavLink></li>
                        
                    </ul>
                </div>
                    
                }
                
                <div className="navbar-end">
                    {
                        user &&
                        <div  className='hidden md:flex flex-col font-semibold  mr-4 border-r-2 border-l-2 text-lg   bg-[#FF5733] justify-center text-center text-white border-t-2 border-b-2 px-10 rounded border-b-blue-400'><h1>Hello {user?.displayName? user?.displayName : user?.email}! </h1> <small className='text-xs'>Click the image to update profile or signout</small></div> 
                    }
                    <div className="dropdown dropdown-end">
                        {user &&
                        <div tabIndex={0} role="button" className="  btn btn-ghost btn-circle avatar">
                            {
                                user?.photoURL ?  
                                <div className=" w-30 border-2 border-green-800 rounded-full">
                                    <img title={user?.displayName} alt="Photo" src={user?.photoURL} />
                                </div>:<h1>{user.email}</h1>  

                            }
                        </div>
                        }
                        {   user ?
                        <ul tabIndex={0} className="menu gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                            <li>
                                {
                                    user && <Link to="/update-user" className="justify-between hover:bg-red-400 bg-green-800 text-white">
                                        Edit Profile
                                        <span className="badge bg-red-400 text-white px-2">Edit</span>
                                    </Link>
                                }
                                
                            </li>
                            <li><button onClick={()=>handleLogout()} className='bg-green-600 text-white hover:bg-red-500'>Logout </button></li>
                        </ul>:
                        <div >
                            <Link className='flex border-2 items-center  justify-center font-semibold bg-green-400 w-30 px-10 me-10 text-white py-3 rounded-full' to='/login'>Login</Link>
                        </div>
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
