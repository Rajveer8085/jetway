import React, { useRef, useState } from 'react'
import contact from "../assets/imgs/4220713.jpg"
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import axios from "axios"

const Contact = () => {
    const email = useRef()
    const text = useRef()
    const [error,setError] = useState()
    const [newclass,setnewClass] = useState()

    const handler = (e) =>{
        e.preventDefault()
        let emailEle = email.current.value
        let message = text.current.value
        if(email.current.value === "" && text.current.value === ""){
            setError("All fiels Are Madantory*")
           setnewClass("alert alert-danger")
        }
        else if(email.current.value != "" && text.current.value != ""){
            setError(" Thank-You our team will reach out to you shortly!...")
           setnewClass("alert alert-success")
           axios.post("https:/-server.onrender.com/confirmation-mail",{emailEle,message})
           email.current.value = ""
           text.current.value =""
        }
        else{

        }
    }
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-sm-6">
                            <img src={contact} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-7 col-sm-6">
                            <div className="contact_form">
                                <div className={newclass} role="alert">
                                     {error}
                                </div>
                                <h3 className='my-3 mb-4'>Contact Us</h3>
                                <form onSubmit={handler}>
                                    <div className="mb-3">
                                        <input type="email" name='email' ref={email} className='form-control' placeholder='Enter Your Email-Id' />
                                    </div>
                                    <div className="mb-3">
                                        <textarea placeholder='Enter Message' ref={text} className='form-control'></textarea>
                                    </div>
                                    <button className='contat_btn'>
                                        <div className="svg-wrapper-1">
                                            <div className="svg-wrapper">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path
                                                        fill="currentColor"
                                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Send</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="extra_contact opacity-75">
                    <h4>For Fast Contact you can  use this  </h4>
                    <h5><MdEmail className='mb-1' /> : Jetway420@Gmail.com</h5>
                    <h5><FaPhoneSquareAlt className='mb-1' /> : 0101010100</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact