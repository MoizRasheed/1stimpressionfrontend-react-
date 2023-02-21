import React, { useState } from 'react'
import { Link,
  useNavigate
} from "react-router-dom";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2'
import firstImpressionLogo from '../assets/1stimpressionlogo.png'
import Spinner from "./spinner"

function Signin() {
  const [swalProps, setSwalProps] = useState({})
  const [res,setRes] = useState(false)
  let navigate = useNavigate()
  // console.log("res => ",res)
  const sendData = (e) => {
    // console.log("e.target.email.value => ",e.target.email.value)
    setRes(true)
    e.preventDefault()
    let data = JSON.stringify({
      "email": e.target.email.value,
      "password": e.target.password.value
    });
    
    let config = {
      method: 'post',
      url: 'https://1stimpressionbackend.vercel.app/api/user/auth/signin',
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
      localStorage.setItem("isLogged",true)
      navigate("/")
      window.location.reload()
    })
    .catch(function (error) {
      // console.log("error => ",error);
      setRes(false)
      setSwalProps({
        show: true,
        title: '',
        text: `${error.response.data.msg}`,
      })
    })
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
            <input type="text" name="email" placeholder='Email' />
            <input type="password" name="password" placeholder='Password' />
            <button type='submit'>Sign in</button>
          </form>
          <div className='ss-link'>
            No account yet? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
