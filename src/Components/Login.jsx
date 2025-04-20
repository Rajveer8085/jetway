import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Flightcontext } from '../Store/FlightContext'

const Login = () => {
    const {loginUser} = useContext(Flightcontext)
  // errors
  const [emailError,setemailError] = useState()
  const [passError,setpassError] = useState()

  // use navigator
  const navigate = useNavigate()

    // useref elements
    const emailEle = useRef();
    const passwordEle = useRef();

// loginhandler 
    const loginHandler = async(e) =>{
      e.preventDefault()
      const email = emailEle.current.value
      const password = passwordEle.current.value
      // data  fetchinng when all fields are not mandatory*
      if(email != "" && password != ""){
        setemailError("")
        setpassError("")
        try {
      
          const response = await axios.post("https://jetway-server.onrender.com/verify",{email,password})
          // when data matched
          console.log(response,"this is a response");
          if(response.data.message === "success"){
           navigate("/")
          loginUser(response.data.id)
          }
         else{
           alert("login Failed")
         }
         }
         catch (error) {
          // when email not match then pass in signup page
          if(error.response.status == 404){

            alert("user not found please signup")
            navigate("/signup")
          }
          // thenn password not match then show error
          else if(error.response.status == 403){
            setpassError("password does not match")
          }
      }
    }
    // when fields are madantaory then show fill error
    else if(email == ""){
      setemailError("fill email")
    }
    else if(password == ""){
      setpassError("fill password")
    }
    
    } 

  return (
    <div className='LoginForm'>
    <form method='post' onSubmit={loginHandler}>
        <h2 className='text-center text-white my-4'>Login Form</h2>
        <div className="mb-3">
            <input type="email" name='Email' ref={emailEle} placeholder='Enter Your Email' className='form-control' />
        <h6 className='text-danger ms-3'>{emailError}</h6>
        </div>
        <div className="mb-3">
            <input type="password" name='password' ref={passwordEle} placeholder='Enter Your password'className='form-control' />
            <h6 className='text-danger ms-3'>{passError}</h6>
        </div>
        <p>not remember your password ? <Link to={"/forgot"}>Forgot your password</Link></p>
        <div className="text-end mt-5">
            <button type='submit' className='btn btn-primary py-2 px-4' >
              login
              </button>
        </div>
        <h6 className='text-center mt-3'>you dont'have Register <Link to={"/signup"}>Signup</Link></h6>
        
    </form>
  
    </div>
  )
}

export default Login