import React from 'react'
import "./App.css"
import Navbar from './Navbar'
import Footer from './Components/Footer'
import BookingPage from './Components/Bookingpage'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import FlightContextProvider from './Store/FlightContext'
import FlightInfo from './Components/FlightInfo'
import BookingForm from './Components/BookingForm'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import User from './Components/User'
import About from './Components/About'
import Contact from './Components/Contact'
import Confirmation from './Components/Confirmation'
import ScrollToTop from './Components/ScrollTop'
import ForgotPass from "./Components/ForgotPass"

const App = () => {
  return (
    <FlightContextProvider>
    <BrowserRouter>
      <ScrollToTop />
    <Navbar />
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/booking' element={<BookingPage />} />
    <Route path='/Flightinfo' element={<FlightInfo />} />
    <Route path='/BookTickets' element={<BookingForm />} />
    <Route path='/profile' element={<User />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/confirmed" element={<Confirmation />} />
    <Route path="/forgot" element={<ForgotPass />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </FlightContextProvider>
  )
}

export default App