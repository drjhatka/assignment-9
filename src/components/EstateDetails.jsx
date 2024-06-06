import { useContext, useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { AuthContext } from "./AuthProvider"

function EstateDetails() {
    const {id} = useParams()
    //const [estates, setEstates] = useState([])
    //const { jsonData}= useContext(AuthContext)
    
    //console.log(data)
   // const estate = estates.find((estate)=>id==estate.id)
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {/* <h1>{estate.estate_title}</h1> */}
            </div>
        </div>
    )
}

export default EstateDetails
