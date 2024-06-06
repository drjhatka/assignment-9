import React, { useEffect } from 'react'

    const DynamicTitle = (title)=>{
        useEffect(()=>{
            document.title =`WH | ${title}`
        },[])
    }
    


export default DynamicTitle
