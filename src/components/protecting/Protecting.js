import React from "react";
import "./style.css";
import p1 from "../../assets/images/protecting/p1.png";
import p2 from "../../assets/images/protecting/p2.png";
import p3 from "../../assets/images/protecting/p3.png";
import { Link } from "react-router-dom";

const Protecting = ({ shopnow }) => {
  return (
    <>
      <section className="protecting relative text-center">
        <div>
          <h3>
            Protecting You <br /> Morning, Noon and Night
          </h3>
          <div className="d-md-flex align-items-center justify-content-center w-full">
            <div className="pbody">
              <div className="pcont">
                <div className="imgCont">
                  <img src={p1} alt="img" />
                </div>
                <h5>Round the Clock Nutrition</h5>
                <p>
                  Our AM/PM formula syncs with your body to provide targeted
                  nutrition, enhancing energy and sleep.
                </p>
              </div>
            </div>
            <div className="pbody">
              <div className="pcont">
                <div className="imgCont">
                  <img src={p2} alt="img" />
                </div>
                <h5>24 Hours Health Coaching</h5>
                <p>
                  Our nutrition app with an AI coach offers personalized
                  guidance for optimal supplement use.
                </p>
                <div className="d-flex justify-content-center my-5">
                  <button onClick={() => shopnow()}>Purchase Now</button>
                </div>
              </div>
            </div>
            <div className="pbody">
              <div className="pcont">
                <div className="imgCont">
                  <img src={p3} alt="img" />
                </div>
                <h5>100% Transparency</h5>
                <p>
                  Our supplement's ingredients come from trusted sources, so you
                  know exactly what is fueling your life.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex  h-screen w-full">
          <div className="side1"></div>
          <div className="side2"></div>
        </div> */}
      </section>
    </>
  );
};

export default Protecting;
