import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import visa_img from "../assets/imgs/visa_img.png"
import { Flightcontext } from '../Store/FlightContext';
import master_img from "../assets/imgs/mastercard_img.png"
import userProfile from "../assets/imgs/user_profile.avif"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";

const User = () => {
  const { logoutUser, userId } = useContext(Flightcontext)
  const [userInfo, setuserInfo] = useState({})
  const [isLoading, setIsloading] = useState(false)
  const [ticketInfo, setTicketInfo] = useState([]);
  useEffect(() => {
    const userFetcher = async () => {
      try {
        const response = await axios.post("https:/-server.onrender.com/userInfo", { userId })
        setuserInfo(response.data.data)
        if (userInfo == null) {
          console.log("this condition is oky");
          setIsloading(true)
        }
        // else{
        //     setIsloading(false)
        // }
      } catch (error) {
        console.log(error);
      }
    }
    userFetcher()
  }, [userId])
  const navigate = useNavigate()
  const logoutHandler = () => {
    logoutUser()
    navigate("/login")
  }
  console.log(userInfo);

  useEffect(() => {
    const ticketFetch = async () => {
      try {
        console.log(userId);
        const response = await axios.post("https:/-server.onrender.com/fetchtickets", { userId })
        console.log(response.data, "this is response data");
        setTicketInfo(response.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    ticketFetch()
  }, [userInfo])

  const [FullTicket, setFullTic0ket] = useState(false)
  // for modal handler
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // for clean ui
  const [visibleTickets, setVisibleTickets] = useState(3);

  const handleModal = (booking) => {
    setSelectedBooking(booking)
    setIsModalOpen(true)
  }

  const cancelticket = async (id) => {
    try {

      const Filterticket = ticketInfo.filter((el) => (el._id != id))
      console.log(Filterticket);
      setTicketInfo(Filterticket)
      const response = await axios.post("https:/-server.onrender.com/cancelticket", { id })

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {userInfo != null ?
        <div className="container mt-4 p-4 bg-white shadow rounded">
          <div className="d-flex align-items-center mb-3">
            <img
              className="rounded-circle me-3"
              src={userProfile}
              width={"100px"}
              alt="User Profile"
            />
            <div>
              <h2 className="h5 mb-1">{userInfo.name}</h2>
              <p className="text-muted">{userId}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h3 className="h6">BOOKING HISTORY</h3>
              <p className="text-muted mt-2">UPCOMING BOOKING</p>

              {ticketInfo.length === 0 ? (
                <h6>There are no tickets. <Link to={"/booking"}>Book tickets</Link></h6>
              ) : (
                <>
                  {ticketInfo.slice(0, visibleTickets).map((el) => (
                    <div className="booked_ticket" onClick={() => handleModal(el)} key={el._id}>
                      <h5>{el.origin} → {el.destination}</h5>
                      <p>{new Date(el.date).toLocaleDateString("en-us", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}</p>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        More Info..
                      </button>
                    </div>
                  ))}
                  {ticketInfo.length > visibleTickets && (
                    <button className="btn btn-primary mt-2" onClick={() => setVisibleTickets(ticketInfo.length)}>
                      View More
                    </button>
                  )}
                  {visibleTickets > 3 && (
                    <button className="btn btn-danger text-white" onClick={() => setVisibleTickets(3)}>
                      View Less
                    </button>
                  )}
                </>
              )}

              {

              }

              {/* modal */}
              {isModalOpen && selectedBooking && (
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Flight Info</h1>
                        <button type="button" className="btn-close tbtn btn-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        {selectedBooking && (
                          <>
                            <p><strong>Passenge Name:</strong> {selectedBooking.name}</p>
                            <p><strong>From:</strong> {selectedBooking.origin}</p>
                            <p><strong>To:</strong> {selectedBooking.destination}</p>
                            <p><strong>Date:</strong> {new Date(selectedBooking.date).toDateString()}</p>
                            <p><strong>Flight No:</strong> {selectedBooking._id || "N/A"}</p>
                            <p><strong>Seat No:</strong> {selectedBooking.seats || "Will be assigned"}</p>
                            <p><strong>Special Request:</strong> {selectedBooking.request || "Will be assigned"}</p>
                          </>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={() => cancelticket(selectedBooking._id)} data-bs-dismiss="modal">cancel Booking</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}


            </div>
            <div className="col-md-6">
              <h3 className="h6">PAYMENT METHODS</h3>
              <div className="bg-light p-2 rounded d-flex align-items-center mt-2">
                <img
                  src={visa_img}
                  alt="Visa Card"
                  width={"50px"}
                  className="me-2"
                />
                <p className="mb-0">•••• •••• •••• 1234</p>
              </div>
              <div className="bg-light p-2 rounded d-flex align-items-center mt-2">
                <img
                  src={master_img}
                  alt="MasterCard"
                  width={"50px"}
                  className="me-2"
                />
                <p className="mb-0">•••• •••• •••• 5678</p>
              </div>
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-between">
            {/* <button className="btn btn-outline-secondary">Edit Profile</button> */}
            <button className="btn btn-outline-danger" onClick={logoutHandler}>Log Out</button>
          </div>
        </div>
        :
        // this is skeleton for create better user Experience
        <div className="container mt-4 p-4 bg-white shadow rounded">
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-secondary" style={{ width: "64px", height: "64px" }}></div>
            <div className="ms-3">
              <div className="bg-secondary rounded" style={{ width: "150px", height: "20px" }}></div>
              <div className="bg-secondary rounded mt-2" style={{ width: "200px", height: "16px" }}></div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="bg-secondary rounded" style={{ width: "120px", height: "18px" }}></div>
              <div className="bg-secondary rounded mt-2" style={{ width: "180px", height: "16px" }}></div>
              <div className="bg-secondary rounded mt-2" style={{ width: "140px", height: "16px" }}></div>
              <div className="bg-secondary rounded mt-2" style={{ width: "180px", height: "16px" }}></div>
            </div>
            <div className="col-md-6">
              <div className="bg-secondary rounded" style={{ width: "140px", height: "18px" }}></div>
              <div className="bg-secondary rounded mt-2" style={{ width: "220px", height: "40px" }}></div>
              <div className="bg-secondary rounded mt-2" style={{ width: "220px", height: "40px" }}></div>
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-between">
            <div className="bg-secondary rounded" style={{ width: "100px", height: "36px" }}></div>
            <div className="bg-secondary rounded" style={{ width: "100px", height: "36px" }}></div>
          </div>
        </div>}
    </>
  );
};

export default User;
