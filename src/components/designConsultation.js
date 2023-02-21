import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import SweetAlert2 from 'react-sweetalert2'
import axios from 'axios'
import Spinner from "./spinner";

function DesignConsultation() {
  const [swalProps, setSwalProps] = useState({})
  const [res,setRes] = useState(false)
  // let navigate = useNavigate()
  // console.log("swalProps => ",swalProps)
  const sendData = (e) => {
    e.preventDefault()
    setRes(true)
    // console.log("sign up => ",e.target.password.value)
    
let data = JSON.stringify({
  "name": e.target.name.value,
  "email": e.target.email.value,
  "contactNo": e.target.contactNo.value,
  "address": e.target.address.value,
  "city": e.target.city.value
});

let config = {
  method: 'post',
  url: 'http://localhost:4500/consultant',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  setRes(false)
  setSwalProps({
    show: true,
    title: 'Success',
    text: `${response.data.msg}`,
  })
  e.target.reset()
  // navigate("/")
})
.catch(function (error) {
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
        <div className='back-img'>
          <div className='design-form'>
            <h1>Talk to designer</h1>
            <form onSubmit={sendData}>
              <input type="text" name='name' placeholder='Name' />
              <input type="email" name='email' placeholder='Email' />
              <input type="number" name='contactNo' placeholder='Contact No' />
              <input type="text" name='address' placeholder='Address' />
              <input type="text" name='city' placeholder='City' />
              <button type='submit'>Get Free Consultation</button>
            </form>
          </div>
        </div>
    </>
  );
}

export default DesignConsultation;
