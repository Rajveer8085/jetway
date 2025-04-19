import React from 'react'
import Gif from "../assets/imgs/Animation - 1738608145234.gif"
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className='confirm'>
    <img src={Gif} alt="Not Found" />
    <h4 className='alert alert-success mt-5'>Your Ticket is Booked We Have Send It To your registered gmail !!</h4>
    <button className='btn btn-primary'>
        <Link to={"/"} className='text-decoration-none text-light'>Go to home</Link>
    </button>
    </div>
  )
}

export default Confirmation