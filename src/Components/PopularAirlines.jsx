import React, { useState } from "react";
// gesture packages
import { useDrag } from "@use-gesture/react";
import {
  SiAkasaair,
  SiIndigo,
  SiAirindia,
  SiAmericanairlines,
  SiEmirates,
  SiPegasusairlines,
} from "react-icons/si";

const PopularAirlines = () => {
  return (
    <div className="popularairlines">
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-4">
            Some popular domestic and international airlines
          </h2>
          <div className="RJVR">
            <div className="col-md-2 col-sm-4">
              <RotatableIcon icon={<SiAirindia className="icon" />} />
              <h6 className="text-start ms-4">Airindia</h6>
            </div>
            <div className="col-md-2 col-sm-4">
              <RotatableIcon icon={<SiAkasaair className="icon" />} />
              <h6 className="text-start ms-4">Akasaair</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon icon={<SiIndigo className="icon" />} />
              <h6 className="text-start ms-4">Indigo</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon
                icon={<SiAmericanairlines className="icon american_icon" />}
              />
              <h6 className="text-start ">American Airlines</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon icon={<SiEmirates className="icon" />} />
              <h6 className="text-start">Emirates Airlines</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon icon={<SiPegasusairlines className="icon" />} />
              <h6 className="text-start">Pegasus Airlines</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RotatableIcon = ({ icon }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const bind = useDrag((state) => {
    const { movement: [mx, my] } = state;
    const newRotation = {
      x: rotation.x + my / 4,
      y: rotation.y + mx / 4,
    };
    setRotation(newRotation);
  });

  return (
    <div
      {...bind()}
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1000px",
        cursor: "grab",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, 
        touchAction: "none", // To fix the touch action warning
      }}
    >
      {icon}
    </div>
  );
};

export default PopularAirlines;
