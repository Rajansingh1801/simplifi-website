import React, { useEffect, useState, useRef } from "react";
import "./scrollsyle.css";
import Fade from "react-reveal/Fade";
import gluten from "../../assets/images/about/gluten.png";
import egg from "../../assets/images/about/egg.png";
import sugar from "../../assets/images/about/sugar.png";
import nut from "../../assets/images/about/nut.png";
import dairyfree from "../../assets/images/about/dairyfree.png";

const Scrollertwo = () => {
  const scoller = useRef();
  console.log(scoller?.current?.offsetTop);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY - scoller?.current?.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  let scaleFactorHeight = 0;
  let scaleFactorWidth = 0;
  scaleFactorHeight = 1 + scrollY * 0.05;
  scaleFactorWidth = 1 + scrollY * 0.052;

  // console.log(scaleFactorHeight);

  const borderScrollWidth = 1 + scrollY * 0.03;
  const borderScrollHeight = 1 + scrollY * 0.12;
  let rotate = 1 + scrollY * 0.06;

  if (window.innerWidth <= 576) {
    rotate = 1 + scrollY * 0.096;
  }
  // console.log("borderScrollWidth" + borderScrollWidth);
  // console.log("Rotate is " + rotate);
  // console.log("scale Y" + scrollY);

  const borderstyle = {
    transform: `rotate(${rotate}deg)`,
    height: `${35 + borderScrollHeight}vh`,
    width: `${30 + borderScrollWidth}vw`,
  };

  const divStyle = {
    height: `${15 + scaleFactorHeight}vh`,
    width: `${15 + scaleFactorWidth}vw`,
    transition: "transform 0.2s ease",
  };

  return (
    <section className="scrollertwocont" ref={scoller}>
      <div className="scrollertwo-container d-flex align-items-center justify-content-center">
        <div
          className="Aborder d-flex align-items-center justify-content-center"
          style={borderstyle}
        ></div>
        <div className="sleepgirl" style={divStyle} />
      </div>
      <div className="new1"></div>

      <div className="new7">
        <div className="text-center">
          <div className="heading z-50">
            <div className="overflow-hidden">
              <Fade bottom big duration={1500}>
                <h2 className="overflow-hidden">100% PURE</h2>
                <p className="text-white">
                  No GMOs, No Herbicides. No Pesticides, No Artificial Colors,
                  Flavors, Preservatives or Sweeteners.
                </p>
              </Fade>
            </div>
          </div>
          <div className="z-50 about-details pt-1">
            {[
              { image: gluten, label: "Gluten Free" },
              { image: egg, label: "No Eggs" },
              { image: sugar, label: "No Added Sugar" },
              { image: nut, label: "Nut Free" },
              { image: dairyfree, label: "Dairy Free" },
            ].map((item, index) => (
              <div className="overflow-hidden mx-3" key={index}>
                <Fade bottom big duration={2500}>
                  <img src={item.image} alt="" />
                  <h5 className="mb-3">{item.label}</h5>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scrollertwo;
