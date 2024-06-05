import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root
