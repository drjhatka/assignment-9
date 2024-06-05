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
            <Slider></Slider>
            <Outlet></Outlet>
        </div>
    )
}

export default Home
