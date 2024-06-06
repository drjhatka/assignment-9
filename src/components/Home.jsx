import Slider from './Slider'
import Navbar from './Navbar'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Outlet, useLoaderData } from 'react-router-dom'
import EstateCard from './EstateCard'
function Home() {
    const estates = useLoaderData();
    
    //console.log(estates)
    return (
        <div className="border-2">
                <Navbar></Navbar>
            <div className='w-4/5 flex flex-col mx-auto'>
                <Slider estates={estates.slice(0,4)}></Slider>
                <div className='grid md:grid-cols-3 gap-3 mt-4'>
                    {
                    estates.map((estate)=>{
                        return <EstateCard key={estate.id} estate={estate}></EstateCard>
                    })
                    }

                </div>
            </div>
        </div>
    )
}

export default Home
