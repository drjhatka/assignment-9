import { useContext, useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { AuthContext } from "./AuthProvider"
import DynamicTitle from "../DynamicTitle"

function EstateDetails() {
    DynamicTitle('Property Detail')
    const {id} = useParams()
    const estates = useLoaderData()
    console.log(estates)
   const estate = estates.find((estate)=>id==estate.id)
    return (
        <div>
             <Navbar></Navbar>
             <div className="flex mt-10 py-3 bg-amber-400 rounded-md w-4/5 mx-auto justify-center font-bold text-3xl border-b-2 border-green-800">
                <h1>Property Detail</h1>
             </div>
            <div className="flex bg-amber-100 gap-5 flex-row mt-5 border-2 rounded-lg py-4 px-4 w-4/5 mx-auto">
                <div className="border-2 rounded-lg ">
                    <img className="w-full min-h-full cover" src={"../"+estate.image} alt="Image" />
                </div>
                <div>
                    <div className="flex flex-col border-2 px-4 rounded-lg ">
                        <div className="border-b-2 py-2 ">
                            <h1 className="text-3xl font-semibold">{estate.estate_title+" for "+estate.status}</h1>
                        </div>
                        <div className="py-4">
                            <p className="text-wrap font-semibold">{estate.description}</p>
                        </div>
                        <div className="flex justify-between text-sm font-bold">
                            <div className="flex gap-5 text-sm font-bold">
                                <h1>Total Area</h1>
                                <h1>{estate.area}</h1>
                            </div>
                            <div>
                                Residence Type: {estate.segment_name}
                            </div>
                        </div>
                        <div className="py-4 flex justify-between ">
                            <p className="text-red-600 font-bold">Price: {estate.price}</p>
                            <p className="font-semibold">Located In: {estate.location}</p>

                        </div>
                        <div>
                            <h1 className="text-red-700 font-semibold border-b-2 border-green-700">This Residential Home comes with the following features...</h1>
                            <ol className="py-2 flex flex-col gap-5 ">{estate.facilities.map((facility)=>{
                                return <li className="px-5 text-lg font-semibold text-green-800 shadow-md border-2" key={Math.random()*100}>{facility}</li>
                            })}
                            </ol>
                        </div>
                            <div className="text-center">
                                <button className="btn btn-success rounded-xl text-white">Buy Now</button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstateDetails
