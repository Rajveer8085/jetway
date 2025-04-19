import React, { useState } from "react";
// gesture packages
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import {
  SiAkasaair,
  SiIndigo,
  SiAirindia,
  SiAmericanairlines,
  SiEmirates,
  SiPegasusairlines,
} from "react-icons/si";

const PopularAirlines = () => {
  const [angles, setAngles] = useState({
    airIndia: { x: 0, y: 0 },
    akasaAir: { x: 0, y: 0 },
    indigo: { x: 0, y: 0 },
    americanAirlines: { x: 0, y: 0 },
    emirates: { x: 0, y: 0 },
    pegasus: { x: 0, y: 0 },
  });

  const createDragHandler = (iconKey) => {
    const [{ rotateX, rotateY }, api] = useSpring(() => ({
      rotateX: 0,
      rotateY: 0,
    }));

    const bind = useDrag(({ movement: [mx, my] }) => {
      const newAngles = {
        x: angles[iconKey].x - my / 4, 
        y: angles[iconKey].y + mx / 4,
      };

      setAngles((prev) => ({
        ...prev,
        [iconKey]: newAngles,
      }));

      api.start({ rotateX: newAngles.x, rotateY: newAngles.y });
    });

    return { bind, rotateX, rotateY };
  };

  return (
    <>
      <div className="popularairlines">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-4">some popular domestic And international airlines</h2>
            <div className="RJVR">

            <div className="col-md-2 col-sm-4">
              <RotatableIcon
                {...createDragHandler("airIndia")}
                icon={<SiAirindia className="icon" />
                }
              />
              <h6 className="text-start ms-4">Airindia</h6>
            </div>
            <div className="col-md-2 col-sm-4">
              <RotatableIcon
                {...createDragHandler("akasaAir")}
                icon={<SiAkasaair className="icon" />}
              />
               <h6 className="text-start ms-4">Akasaair</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon
                {...createDragHandler("indigo")}
                icon={<SiIndigo className="icon" />}
              />
               <h6 className="text-start ms-4">indigo</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon
                {...createDragHandler("americanAirlines")}
                icon={<SiAmericanairlines className="icon american_icon" />}
                />
               <h6 className="text-start ">American Airlines</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon
                {...createDragHandler("emirates")}
                icon={<SiEmirates className="icon" />}
                />
               <h6 className="text-start">Emirates Airlines</h6>
            </div>
            <div className="col-md-2">
              <RotatableIcon
                {...createDragHandler("pegasus")}
                icon={<SiPegasusairlines className="icon" />}
              />
               <h6 className="text-start">Pegasus Airlines</h6>
            </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RotatableIcon = ({ bind, rotateX, rotateY, icon }) => (
  <animated.div
    {...bind()}
    style={{
      width: "100px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      perspective: "1000px",
      cursor: "grab",
      transform: "perspective(2000px)",
      rotateX, 
      rotateY, 
    }}
  >
    {icon}
  </animated.div>
);

export default PopularAirlines;
