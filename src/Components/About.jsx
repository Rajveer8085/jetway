import React from 'react'
import { FaCodeCompare } from "react-icons/fa6";
import { MdAirplaneTicket } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbClock24 } from "react-icons/tb";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="aboutContent">
                            <h2>About Us</h2>
                            <h5 className='my-2'>Welcome to Jetway Flight Booking, your one-stop destination for finding and booking the best flight deals worldwide.
                                Whether you're planning a business trip or a vacation, we make the booking process seamless and hassle-free</h5>
                        </div>
                        <div className="col-md-3">
                            <div className="about1">
                                <div className="about_img">
                                    <FaCodeCompare />
                                </div>
                                <h4>Compare flights from multiple airlines.</h4>
                                <p>Lorem, ipsum dolor sit  consect adipisicing elit. Deleniti
                                    repellat natus
                                    officiis quis eos quod dignissimos !</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="about1">
                                <div className="about_img">
                                    <MdAirplaneTicket />
                                </div>
                                <h4>Get real-time ticket availability and prices.</h4>
                                <p>Lorem, ipsum dolor sit  consect adipisicing elit. Deleniti
                                    repellat natus
                                    officiis quis eos quod dignissimos !</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="about1">
                                <div className="about_img">
                                    <RiSecurePaymentLine />
                                </div>
                                <h4>Secure and fast booking process.</h4>
                                <p>Lorem, ipsum dolor sit  consect adipisicing elit. Deleniti
                                    repellat natus
                                    officiis quis eos quod dignissimos !</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="about1">
                                <div className="about_img">
                                    <TbClock24 />
                                </div>
                                <h4>24/7 customer support.</h4>
                                <p>Lorem, ipsum dolor sit  consect adipisicing elit. Deleniti
                                    repellat natus
                                    officiis quis eos quod dignissimos !</p>
                            </div>
                        </div>
                    </div>
                    <div className="quiestions">
                        <h3 className='my-4'>FAQs: Flights on Jetway</h3>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <strong>How do you make flexible flight bookings with changeable dates?</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                    When booking your flight, please pick 'ClearChoice Plus' or 'ClearChoice Max' 
                                    before confirming the ticket. You can get flexible flight tickets and easily 
                                    change your ticket booking dates or airlines at a reasonable cost. If your 
                                    plans change, there is nothing to worry about; Jetway has you covered.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    <strong>What payment methods are accepted on Jetway for flight bookings?</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                    With Jetway it is possible to get the cheapest flight booking done 
                                    with ease. Aside from credit and debit cards, we accept payments using
                                     Internet Banking, UPI, Third Party Wallet, Pay Later, and Cardless EMI
                                         </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    <strong>What should I do if I don't receive my e-ticket?</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                    If you can't find an email in your regular inbox, check the promotions/ 
                                    updates/ spam/ trash folder. Your e-ticket may be delayed due to minor 
                                    technical issues. Meanwhile, check your email to ensure you have received 
                                    the invoice and e-ticket. Online flight ticket booking will indeed have your
                                     ticket in the mailbox.
                                       </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About