import { createContext, useState,useEffect } from "react";
import React from "react";

export const Flightcontext = createContext({
    TakingData:()=>{},
    FlightNewData:[],
    FlightMoreInfo:() =>{},
    moreInfo:[],
    userBtn:[],
    loginUser:()=>{},
    logoutUser:()=>{},
    userId:""
})


const FlightContextProvider = ({children}) => {
  // login changer
  const [userBtn,setuserbtn] = useState()

  // for fetching book tickets  
  const [userId ,setUserId] = useState()


  // Check if user is already logged in on page load
  useEffect(() => {
    const userData = localStorage.getItem("userLoggedIn");
    if (userData) {
      setuserbtn(true)
    }
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      setuserbtn(true); // Ensure login state is maintained
    }
  }, []);

  const loginUser = (id) => {
    setuserbtn(true)
    setUserId(id)
    localStorage.setItem("userLoggedIn", true);
    localStorage.setItem("userId", id);
  };

  const logoutUser = () => {
    setuserbtn(false);
    setUserId(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("userLoggedIn");
  };
  console.log(userBtn);
    // let FlightNewData = []
    const [FlightNewData,setFlightNewData] = useState([])
    const TakingData = (flight) =>{
        setFlightNewData(flight)
    }
    const [moreInfo,setMoreinfo] = useState()
    const FlightMoreInfo = (infos)  =>{
        setMoreinfo(infos)
    }
  return (
    <Flightcontext.Provider value={{TakingData,FlightNewData,FlightMoreInfo,moreInfo,userBtn,loginUser,logoutUser,userId}}>
    {children}
    </Flightcontext.Provider>
  )
}

export default FlightContextProvider