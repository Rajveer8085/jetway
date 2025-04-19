import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import FlightData from "./FlightData";
import { Flightcontext } from "../Store/FlightContext";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { SiFlightaware } from "react-icons/si";

const FlightSearch = () => {

  const { TakingData } = useContext(Flightcontext)

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false)
  // using Useref
  const fromEle = useRef()
  const toEle = useRef()
  const departureDateEle = useRef()

  // using for fetch perfect time durations*
  function parseISODuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match[1] ? match[1].replace("H", "") : 0;
    const minutes = match[2] ? match[2].replace("M", "") : 0;
    const seconds = match[3] ? match[3].replace("S", "") : 0;

    return `${hours > 0 ? hours + "h " : ""}${minutes > 0 ? minutes + "m " : ""}${seconds > 0 ? seconds + "s" : ""}`.trim();
  }


  const searchFlights = async () => {
    setLoading(true)
    // ref attribute values

    let from = fromEle.current.value
    let to = toEle.current.value
    let departureDate = departureDateEle.current.value

    try {
      // get access token
      const tokenResponse = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "ImJLAoNu09I5EVcD2WQTNAQJ9lkV9C6I",
          client_secret: "N4tIX1dSfL27utdg",
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      const accessToken = tokenResponse.data.access_token;
        console.log(accessToken,"this is token");

      // fetch iata normal values for user exprerience

      const originResponse = await axios.get("https://test.api.amadeus.com/v1/reference-data/locations", {
        params: { keyword: from, subType: "CITY" },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const destinationResponse = await axios.get("https://test.api.amadeus.com/v1/reference-data/locations", {
        params: { keyword: to, subType: "CITY" },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(originResponse);
      console.log(destinationResponse);
      const originCode = originResponse.data.data[0].iataCode;
      const destinationCode = destinationResponse.data.data[0].iataCode;
      console.log(originCode,"this is originCode");
      console.log(destinationCode,"this is destination code");
      // search flights
      const flightResponse = await axios.get("https://test.api.amadeus.com/v2/shopping/flight-offers", {
        params: {
          originLocationCode: originCode,
          destinationLocationCode: destinationCode,
          departureDate: departureDate,
          adults: 1,
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const flightData = flightResponse.data.data.map((flight) => ({
        ...flight,
        formattedDuration: parseISODuration(flight.itineraries[0].duration), // Format duration
      }));
      console.log(flightData);
      setFlights(flightData);
      TakingData(flightData)
    } catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false)
    }
  };


  return (
    <div className="Booking">
      <div className="Booking_Handler">
        <h2 className="text-center text-light mb-3"> <SiFlightaware className="me-1 flightSerach"/> Search Dream Flights</h2>
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
