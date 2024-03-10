import React from "react";
import "./style.css";
import arrow from "../../assets/images/banner/arrow.png";
import Zoom from "react-reveal/Zoom";

const Purchase_step = ({ shopnow }) => {
  return (
    <>
      <section className="Purchase_step">
        <div className="text-center heading">
          <h2>$500 of Nutrients packed into every Scoop</h2>
          <p>
            SIMPLFI AM/PM Shakes give your body full doses of all the nutrients
            and probiotics you need.
          </p>
        </div>
        <div className="cardcont d-flex">
          <Zoom duration={1500}>
            <div>
              <div className="cont">
                <div className="round">
                  <h4>1</h4>
                </div>
                <p>Start Your Day With our AM Shake.</p>
              </div>
            </div>
          </Zoom>
          <Zoom duration={3500}>
            <div>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </Zoom>
          <Zoom duration={4000}>
            <div>
              <div className="cont">
                <div className="round">
                  <h4>2</h4>
                </div>
                <p>Experience enhanced energy, focus and wellness.</p>
              </div>
            </div>
          </Zoom>
          <Zoom duration={5000}>
            <div>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </Zoom>
          <Zoom duration={6000}>
            <div>
              <div className="cont">
                <div className="round">
                  <h4>3</h4>
                </div>
                <p>End your Day with our PM Shake.</p>
              </div>
            </div>
          </Zoom>
          <Zoom duration={7000}>
            <div>
              <img src={arrow} alt="" className="arrow" />
            </div>
          </Zoom>
          <Zoom duration={8000}>
            <div>
              <div className="cont">
                <div className="round">
                  <h4>4</h4>
                </div>
                <p>Experience deep sleep and rejuvenation.</p>
              </div>
            </div>
          </Zoom>
        </div>
        <div>
          <div className="w-fit-content">
            <button className="button1" onClick={() => shopnow()}>
              Purchase Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase_step;
