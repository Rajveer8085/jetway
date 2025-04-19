import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Flightcontext } from '../Store/FlightContext'

const Login = () => {
    const {loginUser} = useContext(Flightcontext)
  // errors
  const [emailError,setemailError] = useState()
  const [passError,setpassError] = useState()
  const [otpfield,setotpfield] =  useState(false)

  // use navigator
  const navigate = useNavigate()

    // useref elements
    const emailEle = useRef();
    const passwordEle = useRef();
  const [isdissabled,setisDisabled] = useState(false)
// loginhandler 
    const loginHandler = async(e) =>{
      e.preventDefault()
      const email = emailEle.current.value
      // data  fetchinng when all fields are not mandatory*
      if(email != ""){
        setemailError("")
        setpassError("")
        setotpfield(true)
     const response =  await axios.post("https:/-server.onrender.com/forgotPass",{email})
          // thenn password not match then show error
         if(response.data.message === "Email sent successfully"){
          setisDisabled(true)
         }
      }
    
    // when fields are madantaory then show fill error
    else if(email == ""){
      setemailError("please enter your email")
    }
    
} 

  return (
    <div className='LoginForm'>
    <form method='post' onSubmit={loginHandler}>
        <h2 className='text-center text-white my-4'>Forgot Your Password</h2>
        <div className="mb-3">
            <input type="email" name='Email' ref={emailEle} placeholder='Enter Your Email' className='form-control' />
        <h6 className='text-danger ms-3 mt-1 '>{emailError}</h6>
        </div>
        {
            otpfield ?
            <div className="mb-3">
            <input type="password" name='otp'  placeholder='Enter otp'className='form-control' />
            <h6 className='text-danger ms-3'>{passError}</h6>
        </div> 
         : 
         null
        }
        {/* <p>not remember your password ? <Link>Forgot your password</Link></p> */}
        <div className="text-end mt-5">
            <button type='submit' disabled={isdissabled} className='btn btn-primary py-2 px-4' >
              Send Otp
              </button>
        </div>
        {/* <h6 className='text-center mt-3'> <Link to={"/signup"}>Back</Link></h6> */}
        
    </form>
  
    </div>
  )
}

export default Login