import React, { useContext, useEffect, useState } from 'react'
import loader from "../assets/imgs/loading_animation.gif"
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { Flightcontext } from '../Store/FlightContext';
import { Link } from 'react-router-dom';
import { GiDuration } from "react-icons/gi";

const FlightData = ({ loading }) => {
  const { FlightNewData, FlightMoreInfo } = useContext(Flightcontext)
  const [FormatDuration, setFormatDuration] = useState();



  // for forated duration
  useEffect(() => {
    if (FlightNewData.length > 0) {
      const durations = FlightNewData.map((e) => {
        const depTime = new Date(e.departure.scheduled).getTime(); // UTC milliseconds
        const arrTime = new Date(e.arrival.scheduled).getTime();   // UTC milliseconds
        const diffMs = arrTime - depTime;

        if (diffMs <= 0) return "N/A";

        const diffMin = Math.floor(diffMs / (1000 * 60));
        const hours = Math.floor(diffMin / 60);
        const minutes = diffMin % 60;

        return `${hours}h ${minutes}m`;
      });

      setFormatDuration(durations);
    }
  }, [FlightNewData]);

  // pagination logic here 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FlightNewData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(FlightNewData.length / itemsPerPage);

  return (
    <>
      <div className="Data">
        {loading ? <img src={loader} height={"250px"} /> : null}
        <h4 className="text-white mb-4">{FlightNewData.length} Flights Available </h4>
        {currentItems.map((flight, index) => (

          <div key={index} className="flight_list">
            <div className="flights">
              <div className="departure mx-2">
                <h4><FaPlaneDeparture cl="true" className="me-2" />Departure From :{flight.departure
                  .iata} </h4>
                <p>At :{new Date(flight.departure.scheduled).toLocaleDateString()}-{new Date(flight.departure.scheduled).toLocaleTimeString()}</p>
              </div>
              <div className="price_t mx-2">
                <h5><GiDuration cl="true" className='me-1 mb-1' /> Duration :{FormatDuration?.[index] || "Calculating..."}</h5>
                <p>price :{Math.floor(Math.random() * 3000) + 2500}&#8377;</p>
              </div>
              <div className="arrival mx-2">
                <h4><FaPlaneArrival className="me-2 " />Arrival At:{flight.arrival.iata}:{flight.arrival.terminal}</h4>
                <p>At : {new Date(flight.arrival.scheduled).toLocaleDateString()}-{new Date(flight.arrival.scheduled).toLocaleTimeString()}</p>
                <button className='btn btn-primary' onClick={() => FlightMoreInfo(flight)}><Link className="text-decoration-none text-light" to={"/Flightinfo"}>More Detailes</Link></button>
              </div>
            </div>
          </div>

        ))}
        <p className="text-danger">*for more information Click on flights </p>
        {/* Pagination */}
        <div className="pagination-container d-flex justify-content-center mt-4 flex-wrap">
          <button
            className="btn btn-outline-primary mx-1 mb-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => {
              return (
                page === 1 || // always show first
                page === totalPages || // always show last
                (page >= currentPage - 2 && page <= currentPage + 2)
              );
            })
            .map((page, i, arr) => {
              const prevPage = arr[i - 1];

              // Show ... between non-consecutive pages
              if (prevPage && page - prevPage > 1) {
                return (
                  <React.Fragment key={page}>
                    <span className="mx-1 text-light">...</span>
                    <button
                      className={`btn mx-1 mb-2 ${currentPage === page ? "btn-primary" : "btn-outline-light"}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                );
              }

              return (
                <button
                  key={page}
                  className={`btn mx-1 mb-2 ${currentPage === page ? "btn-primary" : "btn-outline-light"}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}

          <button
            className="btn btn-outline-primary mx-1 mb-2"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

      </div>
    </>
  )
}

export default FlightData