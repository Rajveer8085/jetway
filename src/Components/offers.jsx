import React from 'react'
import offer1 from "../assets/imgs/offer1.webp"
import offer2 from "../assets/imgs/offer2.webp"
import offer3 from "../assets/imgs/offer3.webp"
import offer4 from "../assets/imgs/offer4.webp"
import offer5 from "../assets/imgs/offer5.webp"
import offer6 from "../assets/imgs/offer6.webp"

const Offers = () => {
  return (
    <>
    <div className="Offers">
      <div className="container">
        <div className="row">
          <h2 className='text-center'>our existing offers</h2>
          <div className="RJVR">
          <div className="col-md-4 col-sm-6">
            <div className="offer_card">
            <img src={offer1} alt="" className='offer_imgs' />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
          <div className="offer_card">
            <img src={offer2} alt="" className='offer_imgs'/>
              </div>
          </div>
          <div className="col-md-4 col-sm-6">
          <div className="offer_card">
            <img src={offer3} alt="" className='offer_imgs'/>
              </div>
          </div>
          <div className="col-md-4 col-sm-6">
          <div className="offer_card">
            <img src={offer4} alt="" className='offer_imgs'/>
              </div>
          </div>
          <div className="col-md-4 col-sm-6">
          <div className="offer_card">
            <img src={offer5} alt="" className='offer_imgs'/>
              </div>
          </div>
          <div className="col-md-4 col-sm-6">
          <div className="offer_card">
            <img src={offer6} alt="" className='offer_imgs'/>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Offers