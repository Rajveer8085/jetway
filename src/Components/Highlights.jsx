import React from 'react'
// tilt effect
import Tilt from "react-parallax-tilt"

import firsthighlight from "../assets/imgs/travelprop1.png"
import secondhighlight from "../assets/imgs/travelprop2.png"
import thirdhighlight from "../assets/imgs/travelprop3.png"
import fourthhighlight from "../assets/imgs/travelprop4.png"

const Highlights = () => {
    return (
        <>
            <div className="highlight">
                <div className="container">
                    <div className="row">
                        <h2 className='text-center'>for travel pros</h2>
                        <div className="col-12 col-sm-6 col-md-3 ">
                        <Tilt 
                        glareBorderRadius='15px'
                         glareEnable={true}  
                         glareMaxOpacity={0.8} 
                         glareColor="cornflowerblue"  
                         glarePosition="all" 
                          
                         >
                            <div className="prop">
                                <h5>best time to travel</h5>
                                <p>know when to save</p>
                                <img src={firsthighlight} alt="" />
                            </div>
                        </Tilt>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 ">
                        <Tilt 
                        glareBorderRadius='15px'
                         glareEnable={true}  
                         glareMaxOpacity={0.8} 
                         glareColor="cornflowerblue"  
                         glarePosition="all"  
                         >
                            <div className="prop">
                                <h5>explore</h5>
                                <p>see destination on your budget</p>
                                <img src={secondhighlight} alt="" />
                            </div>
                            </Tilt>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <Tilt 
                        glareBorderRadius='15px'
                         glareEnable={true}  
                         glareMaxOpacity={0.8} 
                         glareColor="cornflowerblue"  
                         glarePosition="all" 
                         >
                            <div className="prop">
                                <h5>trips</h5>
                                <p>keep all your plan in one place</p>
                                <img src={thirdhighlight} alt="" />
                            </div>
                            </Tilt>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <Tilt 
                        glareBorderRadius='15px'
                         glareEnable={true} 
                         glareMaxOpacity={0.8}  
                         glareColor="cornflowerblue"  
                         glarePosition="all" 
                         >
                            <div className="prop">
                                <h5>price alerts</h5>
                                <p>know when price change</p>
                                <img src={fourthhighlight} alt="" />
                            </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Highlights