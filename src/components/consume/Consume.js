import React from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import albino from "../../assets/images/consumer/albino.png";
import Quercetin from "../../assets/images/consumer/Quercetin.png";
import bioticfiber from "../../assets/images/consumer/bioticfiber.png";
import coquitn from "../../assets/images/consumer/coquitn.png";
import curcumin from "../../assets/images/consumer/curcumin.png";
import ginger from "../../assets/images/consumer/ginger.png";
import green from "../../assets/images/consumer/green.png";
import htf from "../../assets/images/consumer/htf.png";
import ksm from "../../assets/images/consumer/ksm.png";
import lutmex from "../../assets/images/consumer/lutmex.png";
import methylecobalmin from "../../assets/images/consumer/methylecobalmin.png";
import nacetyl from "../../assets/images/consumer/nacetyl.png";
import relora from "../../assets/images/consumer/relora.png";
import teaCrine from "../../assets/images/consumer/teaCrine.png";

const Consume = () => {
  return (
    <>
      <section className="consume">
        <div className="container">
          <div className="text-center heading">
            <h2>Know What You Consume</h2>
            <p className="pt-3">
              SIMPLIFI is packed with the best-absorbed forms of essential
              nutrients, all 3rd <br /> party tested. In fact, we have the
              highest level of testing in the industry.
            </p>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="d-flex align-items-center">
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={teaCrine} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>TeaCrine®</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Lutemax®</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Enhances eye health, ideal for screen users.</p>
                    </Fade>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={lutmex} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="card">
              <div className="d-flex align-items-center">
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={relora} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Relora®</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>5-HTF</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Supports optimal folate levels safely.</p>
                    </Fade>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={htf} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div className="d-flex align-items-center">
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img
                        src={methylecobalmin}
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </Zoom>
                </div>
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Methylcobalamin</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Albion™ TRAACS</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>High-absorption essential minerals.</p>
                    </Fade>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={albino} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="card">
              <div className="d-flex align-items-center">
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={ksm} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>KSM-66 Ashwagandha</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Curcumin</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={curcumin} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div className="d-flex align-items-center">
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={nacetyl} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>N-Acetyl Cysteine</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Quercetin Dihydrate</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>
                        Promotes immune system function, cardiovascular
                        wellness.
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={Quercetin} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="d-flex align-items-center">
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={bioticfiber} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Organic Pre-biotic Fiber</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Co-Q10</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Fosters heart health, energy production. </p>
                    </Fade>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={coquitn} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="card">
              <div className="d-flex align-items-center">
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={ginger} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Organic Ginger</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Lorem ipsum dolor sit amet consectetur. </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mx-sm-5 mx-2">
                  <div className="overflow-hidden">
                    <Fade top big duration={1500}>
                      <h5>Organic Super Greens</h5>
                    </Fade>
                  </div>
                  <div className="overflow-hidden">
                    <Fade top big duration={1700}>
                      <p>Promotes energy, detoxification, immunity. </p>
                    </Fade>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Zoom duration={1500}>
                    <div>
                      <img src={green} alt="img" className="img-fluid" />
                    </div>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
          <div className="footer text-center">
            <p>
              Unlike the other leading brands, only SIMPLIFI gives you a full
              dose of all the necessary nutrients your body requires. <br /> And
              unlike most of the other options, it's 3rd party tested so you
              know there's no harmful pesticides or heavy metals.
            </p>
            <div className="mt-5 d-flex justify-content-center">
              <button className="button1">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consume;
