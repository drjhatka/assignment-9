import React from 'react'
import { BsBuilding } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { TiTickOutline } from "react-icons/ti";

function EstateCard({estate}) {
    return (
        <div className="flex flex-col gap-2  bg-slate-100 rounded-lg px-4 py-4 border-2">
            <div className='flex  max-h-[50%] justify-center flex-grow '>
                <img className='min-w-full max-h-[100%] cover ' src={estate.image} alt="" />
            </div>
            <div className='pb-2 border-b-2 font-semibold text-[#900C3F]'>
                Price: {estate.price}
            </div>
            <div className='border-b-2 pb-2 text-center'>
                <h1 className='font-semibold text-wrap'>{estate.estate_title}</h1>
            </div>
            <div className='flex justify-between font-bold text-sm'>
                <h1 className='text-red-600'>Type: {estate.segment_name}</h1>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='flex items-center gap-4 text-green-700'><BsBuilding></BsBuilding>{estate.area}</h1>
                </div>
            </div>
            <div className='border-t-2 border-b-2'>
                <h1 className='flex items-center justify-center gap-4 font-semibold text-red-500'><GrMapLocation></GrMapLocation>{estate.location}</h1>
            </div>
            <div>
                <small className='font-semibold'>{estate.description.slice(0,80)}...</small><Link className='text-sm underline text-blue-500' to="">Read More</Link>
            </div>
            <div>
                <h1 className='font-semibold border-b-2 border-t-2 border-l-2 text-green-800'>Facilites</h1>
                <ul>
                {
                    estate.facilities.map((facility)=>{
                            return <li key={Math.random()*100} className=' text-sm shadow-md mt-2 flex font-semibold gap-4 items-center'><TiTickOutline className='text-blue-900'></TiTickOutline>{facility}</li>
                        })
                    }
                    </ul>
            </div>
            <div className='flex gap-4 items-center'>
               <small className='font-semibold '>Status: </small> <h1 className='badge bg-red-500 py-3 text-white'> {estate.status}</h1>
            </div>
            <div className='flex justify-center py-2 border-t-2'>
            <Link className='hover:bg-green-600 text-white bg-[#FF5733] btn' to={'/estate-details/'+estate.id}>View Property</Link>

            </div>
        </div>

    )
}

export default EstateCard
