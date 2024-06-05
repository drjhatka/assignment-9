import Slider from './Slider'
import Navbar from './Navbar'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Outlet, useLoaderData } from 'react-router-dom'
function Home() {
    const estates = useLoaderData();
    console.log(estates)
    return (
        <div className="border-2">
            <Navbar></Navbar>
            <div className='w-4/5 mx-auto'>
                <Slider estates={estates.slice(0,4)}></Slider>
                <Outlet ></Outlet>

            </div>
        </div>
    )
}

export default Home
