import React from 'react'
import { Link } from 'react-router-dom'

function Slider({ estates }) {
    return (
        <>
        <div className="rounded-2xl mt-5 carousel w-full" data-bs-interval="true">
            <div id="slide1" className=" carousel-item relative w-full">
                <img src={estates[0].image} className="w-full  brightness-75 h-96"  />
                <div className='absolute bottom-10 text-white  text-center w-full flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-4xl font-bold'>{estates[0].estate_title}</h1>
                    <h1 className='w-[75%] flex text-xl items-center text-wrap text-white '>{estates[0].description}...</h1>
                    <Link className='hover:bg-green-600 text-white bg-[#FF5733] btn' to='estate-details'>View Property</Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={estates[1].image} className="w-full brightness-75 h-96"  />
                <div className='absolute bottom-10 text-white  text-center w-full flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-4xl font-bold'>{estates[1].estate_title}</h1>
                    <h1 className='w-[75%] flex text-xl items-center text-wrap text-white '>{estates[1].description}...</h1>
                    <Link className='hover:bg-green-600 text-white bg-[#FF5733] btn' to='estate-details'>View Property</Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
             <img src={estates[2].image} className="w-full h-96 brightness-75"  />
             <div className='absolute bottom-10 text-white  text-center w-full flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-4xl font-bold'>{estates[2].estate_title}</h1>
                    <h1 className='w-[75%] flex text-xl items-center text-wrap text-white '>{estates[2].description}...</h1>
                    <Link className='hover:bg-green-600 text-white bg-[#FF5733] btn' to='estate-details'>View Property</Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={estates[3].image} className="w-full h-96 brightness-75"  />
                <div className='absolute bottom-10 text-white  text-center w-full flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-4xl font-bold'>{estates[3].estate_title}</h1>
                    <h1 className='w-[75%] flex text-xl items-center text-wrap text-white '>{estates[3].description}...</h1>
                    <Link className='hover:bg-green-600 text-white bg-[#FF5733] btn' to='estate-details'>View Property</Link>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    
        {/* <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
        </div> */}
        </>
    )
}

export default Slider
