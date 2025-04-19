import React, { useContext } from 'react'
import loader from "../assets/imgs/loading_animation.gif"
import { FaPlaneDeparture,FaPlaneArrival } from "react-icons/fa";
import { Flightcontext } from '../Store/FlightContext';
import { Link } from 'react-router-dom';
import { GiDuration } from "react-icons/gi";

const FlightData = ({loading}) => {
  const {FlightNewData,FlightMoreInfo} = useContext(Flightcontext)
  return (
    <>
    <div className="Data">
        {loading ? <img src={loader} height={"250px"}/> :null}
        <h4 className="text-white mb-4">{FlightNewData.length} Flights Available </h4>
        {FlightNewData.map((flight)=>(
            
            <div  key={flight.id} className="flight_list">
            <div className="flights">
              <div className="departure mx-2">
              <h4><FaPlaneDeparture  cl="true" className="me-2" />Departure From :{flight.itineraries[0].segments[0].departure.iataCode} </h4>
              <p>At :{new Date(flight.itineraries[0].segments[0].departure.at).toLocaleDateString()}-{new Date(flight.itineraries[0].segments[0].departure.at).toLocaleTimeString()}</p>
              </div>
              <div className="price_t mx-2">
                <h5><GiDuration cl="true" className='me-1 mb-1' /> Duration :{flight.formattedDuration}</h5>
                <p>price :{Math.round(flight.price.total*90)}&#8377;</p>
              </div>
              <div className="arrival mx-2">
                <h4><FaPlaneArrival  className="me-2 "/>Arrival At:{flight.itineraries[0].segments[0].arrival.iataCode}:{flight.itineraries[0].segments[0].arrival.terminal}</h4>
                <p>At : {new Date(flight.itineraries[0].segments[0].arrival.at).toLocaleDateString()}-{new Date(flight.itineraries[0].segments[0].arrival.at).toLocaleTimeString()}</p>
              <button className='btn btn-primary'onClick={()=>FlightMoreInfo(flight)}><Link className="text-decoration-none text-light" to={"/Flightinfo"}>More Detailes</Link></button>
              </div>
            </div>
          </div>

        ))}
        <p className="text-danger">*for more information Click on flights </p>
        </div>
    </>
  )
}

export default FlightData