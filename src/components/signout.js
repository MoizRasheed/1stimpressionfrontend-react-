import React,{ useEffect } from 'react'
// import { useNavigate } from "react-router"
import { useNavigate } from "react-router-dom"

function Signout() {
    let navigate = useNavigate()
    // console.log("navigate => ",navigate)
    useEffect(()=>{
      navigate("/signin",{replace:true})
      window.location.reload()
    },[navigate])
    localStorage.removeItem("isLogged")
    // navigate("/signin")
  return (
    <></>
    // <Navigate to="/signin" replace />
  );
}

export default Signout;