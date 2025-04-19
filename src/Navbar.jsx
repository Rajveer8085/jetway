import React, { useContext, useRef } from 'react'
import logo from "./assets/imgs/Logo.png"
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { Flightcontext } from './Store/FlightContext'
import { CgProfile } from "react-icons/cg";
import { FaBarsProgress } from "react-icons/fa6";

const Navbar = () => {
  const {userBtn} = useContext(Flightcontext)

  const nav = useRef()
  const location = useLocation()
  console.log(location);

  const navResponsive = () =>{
   const navs = nav.current;
   navs.classList.toggle("new_nav_ul")
  }

  const navigate = useNavigate()
  
  const profileHandler = ()=>{
    if(userBtn){
      navigate("/profile")
    }
    else{
      navigate("/login")
    }
  }
  
  return (
    <>
        
    <header>
        <nav >
            <img  src={logo} alt="img not found" />
            <ul className='Nav_ul' ref={nav}>
                <li className='nav-link'>
                  <Link className={`text-decoration-none text-white ${location.pathname === "/" ? "navActive" : null}`} to={"/"}>Home</Link>
                  </li>
                <li className='nav-link'>
                <Link className={`text-decoration-none text-white ${location.pathname === "/about" ? "navActive" : null}`} to={"/about"}>About</Link>
                </li>
                <li className='nav-link'>
                  <Link className={`text-decoration-none text-white ${location.pathname === "/booking" ? "navActive" : null}`} to={"/booking"}>Book</Link>
                   </li>
                <li className='nav-link'>
                <Link className={`text-decoration-none text-white ${location.pathname === "/contact" ? "navActive" : null}`} to={"/contact"}>contact Us</Link>
                </li>
            <div className='nav_Login mb-1'> 
                <button onClick={profileHandler}>
                  {userBtn ? <CgProfile className='fs-3'/> :"login"}
                  </button>
            </div>
            </ul>
            <div className="toggle me-4" onClick={navResponsive}>
            <FaBarsProgress />
            </div>
        </nav>
        
    </header>
    </>
  )
}

export default Navbar