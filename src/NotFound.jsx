import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound()
 {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home")
        },5000)
    },[])
  return (
    <>
    <h1>404 Page Not Found</h1>
    <img src='image.png'></img>
    </>
  )
}

export default NotFound;
