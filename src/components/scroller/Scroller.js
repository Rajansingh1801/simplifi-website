import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
const Scroller = () => {
  const scoller = useRef();
  console.log(scoller?.current?.offsetTop);
  const [scrollY, setScrollY] = useState(0);
  console.log(scoller?.current?.offsetTop);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY - scoller?.current?.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("scrollY is", scrollY);

  // scrollY = scrollY - scoller.current.offsetTop;
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

  const borderstyle = {
    transform: `rotate(${rotate}deg)`,
    height: `${35 + borderScrollHeight}vh`,
    width: `${40 + borderScrollWidth}vw`,
  };

  const divStyle = {
    height: `${15 + scaleFactorHeight}vh`,
    width: `${15 + scaleFactorWidth}vw`,
    transition: "transform 0.2s ease",
  };

  return (
    <>
      <section className="scoller" ref={scoller}>
        <div className="about-container d-flex align-items-center justify-content-center">
          <div
            className="Aborder d-flex align-items-center justify-content-center"
            style={borderstyle}
          ></div>
          <div className="sleepgirl" style={divStyle} />
        </div>
        <div className="new1"></div>

        <div className="new7 d-flex align-items-center">
          <div>
            <div className="heading z-50">
              <div className="overflow-hidden">
                <Fade bottom big duration={1000}>
                  <h2>No Sleep</h2>
                </Fade>
              </div>
              <div className="overflow-hidden">
                <Fade bottom big duration={1200}>
                  <h2 className="overflow-hidden">No Energy</h2>
                </Fade>
              </div>
            </div>
            <div className="z-50 about-details pt-1">
              <div className="overflow-hidden">
                <Fade bottom big duration={1200}>
                  <p className=" pt-3">
                    While other vitamin and shake options promise to fuel you up
                    on nutrients, only <br /> SIMPLIFI gets to the root of your
                    health...
                  </p>
                  <h5 className=" mb-3">Your sleep!</h5>
                </Fade>
              </div>
              <div className="overflow-hidden">
                <Fade bottom big duration={1300}>
                  <p className=" pt-2">
                    Without a rejuvenating night's sleep, your body can't
                    rebuild and recharge. Our <br /> scientifically formulated
                    AM and PM takes give you round the clock nutrient support{" "}
                    <br /> to aid your body in a full night's sleep. Plus, it
                    tastes great and costs less than
                  </p>
                  <h5 className="text-white">$4 day.</h5>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scroller;
