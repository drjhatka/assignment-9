import Slider from './Slider'
import Navbar from './Navbar'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
function Home() {
  
    return (
        <div className="border-2">
            <Navbar></Navbar>
            <Slider></Slider>
            <h1 className="text5xl text-center w-full px-5 py-5 border-2 rounded-full">HOME</h1>
        </div>
    )
}

export default Home
