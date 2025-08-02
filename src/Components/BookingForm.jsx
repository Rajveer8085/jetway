import React, { useContext, useRef, useState } from 'react'
import { Flightcontext } from '../Store/FlightContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
        const {userId, moreInfo } = useContext(Flightcontext)

        const [nameError,setnameError] = useState()
        const [phoneError,setphoneError] = useState()
        const [passengerError,setpassengerError] = useState()
        

        const navigate = useNavigate()
        const nameEle = useRef()
        const phoneEle = useRef()
        const passengerEle = useRef()
        const originEle  = useRef()
        const destinationEle  = useRef()
        const emailEle = useRef()
        const dateEle = useRef()
        const requestEle = useRef()

        const handler = async(e) =>{
            e.preventDefault()
            let name = nameEle.current.value;
            let email = emailEle.current.value;
            let origin = originEle.current.value;
            let destination = destinationEle.current.value;
            let date = dateEle.current.value;
            let seats = passengerEle.current.value;
            let request = requestEle.current.value

            if(nameEle.current.value == ""){
                setnameError("Please Fill the name")
            }
            if(phoneEle.current.value == ""){
                setphoneError("Fill The Number")
            }
            if(passengerEle.current.value == ""){
            setpassengerError("Fill The Passenger count")
            }
            else {
                navigate("/confirmed")
                // console.log(name,email,date,origin,destination,seats,request);
                try {
                    await axios.post("https://jetway-server.onrender.com/booktickets",{name,email,date,origin,destination,seats,request})
                } catch (error) {
                    console.log(error);
                }
            }
        } 

  return (
    <>
    <div className="booking-form">
    <form className='book-tickets form' onSubmit={handler}>
    <h2 className='text-center my-3 text-white'>Enter Details For Booking Tickets..</h2>
    <div className="mb-3">
        <input type="text" name='name' className='form-control' ref={nameEle} placeholder='Enter Your Full NAME...' />
        <h6 className='text-danger'>{nameError}</h6>
    </div>
    <div className="mb-3 d-flex justify-content-evenly">
        <input type="email" readOnly value={userId} ref={emailEle} name='email' className='form-control me-1' placeholder='Enter Your Email...' />
        <input type="number" name='number' ref={phoneEle} className='form-control ms-1' placeholder='Enter Your Mobile No.' />
    </div>
        <h6 className='text-danger'>{phoneError}</h6>
    <div className="mb-3 d-flex justify-content-evenly">
        <input type="text" name='departurecity' ref={originEle} className='form-control me-1' readOnly value={moreInfo.departure.iata} placeholder='Enter Departure City..' />
        <input type="text" name='destinationcity' ref={destinationEle} className='form-control ms-1' readOnly value={moreInfo.arrival.iata} placeholder='Enter Your Destination City..' />
    </div>

    <div className="mb-3">
        <input type="text" name='Departure_Date' ref={dateEle} readOnly value={new Date(moreInfo.departure.scheduled).toLocaleDateString()} className='form-control'  />
    </div>
    <div className="mb-3">
        <h5>Numbers Of Passengers</h5>
    <select  ref={passengerEle} required className='form-control'>
        <option value="select">--Select--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
    </select>
    <h6 className='text-danger'>{passengerError}</h6>
    </div>
    <div className="mb-3">
        {/* <input type="date" name='Departure_Date' className='form-control' /> */}
    </div>
    <div className="mb-3">
        <textarea name="" ref={requestEle} placeholder='Enter Your Special Request...' className='form-control'></textarea>
    </div>
    <button className='btn py-2 px-4 btn-primary'>Submit</button>
        <h6 className='text-center mt-3 text-danger'>*once you book ticket Can not be edited</h6>
    
    </form>
    </div>
    </>
  )
}

export default BookingForm
