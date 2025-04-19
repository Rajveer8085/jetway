import React, { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const SignUp = () => {
    const nameEle = useRef()
    const emailEle = useRef()
    const passwordEle = useRef()
    const dblpassEle = useRef()

    const [signUpError,setSignupError] = useState()
    const [nameError,setNameError] = useState()
    const [emailError,setemailError] = useState()
    const [passwordError,setpasswordError] = useState()
   
    const RouteHandler = () =>{
        if(nameEle.current.value == ""){
            setSignupError(false)
            setNameError("please fill the name")
        }
        if(emailEle.current.value == ""){
            setSignupError(false)
            setemailError("Fill The Email ")
        }
        if(passwordEle.current.value == ""){
            setSignupError(false)
            setpasswordError("fill passcode")
        }
        if(dblpassEle.current.value !== passwordEle.current.value){
            setpasswordError("password does not match")
        }

        else{
            setSignupError(true)
        }
    }
    const SignUpHandler = async(e) =>{
        e.preventDefault()
        const name = nameEle.current.value;
        const email = emailEle.current.value;
        const password = passwordEle.current.value;
        
        try {
           
           if(signUpError){
            await axios.post("https:/-server.onrender.com/createuser",{name,email,password}).
            then((result) => console.log(result)).
            catch((err)=>console.log(err))
            console.log("submitted");
           }
        } catch (error) {
            console.log(error);
        } 


    }

    return (
        <>
            <div className='LoginForm'>
                <form method='post' onSubmit={SignUpHandler}>
                    <h2 className='text-center text-white mb-4'>Register Now !!</h2>
                    <div className="mb-3">
                        <input type="text" placeholder='Enter Your Full Name...' ref={nameEle} name='name' className='form-control' />
                        <h6 className='text-danger ms-3'>{nameError}</h6>
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder='Enter Your Email Address...' ref={emailEle} name='email' className='form-control' />
                        <h6 className='text-danger ms-3'>{emailError}</h6>
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Enter Your Password...' ref={passwordEle} name='password' className='form-control' />
                            <h6 className='text-danger ms-3'>{passwordError}</h6>
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder='Confirm Your Password...' ref={dblpassEle} className='form-control' />
                    </div>
                    <div className="mb-3">
                        <button  className="btn btn-primary" type='submit' onClick={RouteHandler}>
                            <Link className='text-decoration-none text-white' to={signUpError ? "/login": null}>Register</Link>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp