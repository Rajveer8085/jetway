import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import FlightData from "./FlightData";
import { Flightcontext } from "../Store/FlightContext";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { SiFlightaware } from "react-icons/si";
import IataCode from "../Data/Iata-code";
import { Toaster, toast } from 'react-hot-toast';

const FlightSearch = () => {

  const { TakingData } = useContext(Flightcontext)

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false)
  // using Useref
  const fromEle = useRef()
  const toEle = useRef()
  const departureDateEle = useRef()

  // for iata code fetch
  const GetIataCode = (cityname) => {
    const cityIata = IataCode.find((airport) => airport.city.toLowerCase() == cityname.toLowerCase())
    return cityIata ? cityIata.iata : null;
  }


  const searchFlights = async () => {
    try {
      const from = GetIataCode(fromEle.current.value);
      const to = GetIataCode(toEle.current.value);
      const DepartureDate = departureDateEle.current.value;
      if (from == null) {
        toast.error("not found", {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#333',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: '6px',
          },
        })
        return;
      }
      if (to == null) return;

      const FlightData = await axios.post("https://jetway-server.onrender.com/fetch-flights", { from, to })
      console.log(FlightData.data.data)
      TakingData(FlightData.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="Booking">
      <div className="Booking_Handler">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              transition: 'all 0.5s ease-in-out', // smooth animation
            },
          }} />
        <h2 className="text-center text-light mb-3"> <SiFlightaware className="me-1 flightSerach" /> Search Dream Flights</h2>
        <div className="inputs">

          <div className="mb-3">
            <input type="text" ref={fromEle} placeholder="Enter Origin..." />
          </div>
          <div className="mb-3">
            <input type="text" ref={toEle} placeholder="Enter Destination..." />
          </div>
          <div className="mb-3">
            <input type="date" ref={departureDateEle} />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary mt-1" onClick={searchFlights}>
              <TbDeviceIpadHorizontalSearch className="mb-1" />
            </button>
          </div>
        </div>
        <FlightData flights={flights} loading={loading} />
      </div>
    </div>
  );
};

export default FlightSearch;
