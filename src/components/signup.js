import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import SweetAlert2 from 'react-sweetalert2'
import axios from 'axios'
import firstImpressionLogo from '../assets/1stimpressionlogo.png'
import Spinner from "./spinner";

function Signup() {
  const [swalProps, setSwalProps] = useState({})
  const [res,setRes] = useState(false)
  let navigate = useNavigate()
  // console.log("swalProps => ",swalProps)
  const sendData = (e) => {
    e.preventDefault()
    setRes(true)
    // console.log("sign up => ",e.target.password.value)
    
let data = JSON.stringify({
  "name": e.target.username.value,
  "email": e.target.email.value,
  "password": e.target.password.value
});

let config = {
  method: 'post',
  url: 'https://1stimpressionbackend.vercel.app/api/user/auth/signup',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  // console.log("response => ",JSON.stringify(response.data));
  setRes(false)
  setSwalProps({
    show: true,
    title: 'Success',
    text: `${response.data.msg}`,
  })
  e.target.reset()
  navigate("/signin")
})
.catch(function (error) {
  // console.log("error => ",error.response.data.msg);
  setRes(false)
  setSwalProps({
    show: true,
    title: '',
    text: `${error.response.data.msg}`,
  })
});
  }
  return (
    <>
      {res?<Spinner />:<></>}
      <SweetAlert2 {...swalProps}
        didClose={()=>{setSwalProps({show: false})}}
      />
      <div className='text-center'>
        <div className='sign-in-up'>
          <img src={firstImpressionLogo} alt="logo" />
          <form onSubmit={sendData}>
            <input type="text" name='username' placeholder='Username' />
            <input type="text" name='email' placeholder='Email' />
            <input type="password" name='password' placeholder='Password' />
            <button type='submit'>Sign up</button>
          </form>
          <div className='ss-link'>
            Already have an account? <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
