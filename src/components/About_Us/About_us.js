import React, { useEffect } from "react";
import "./style.css";
import img1 from "../../assets/images/about-page/about1.png";
import img2 from "../../assets/images/about-page/about21.png";
import img3 from "../../assets/images/about-page/about22.png";
import img4 from "../../assets/images/about-page/about3.png";

const About_Us = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="aboutus aboutuscont">
        <div className="container">
          <div className="text-center heading">
            <h2>About Us</h2>
          </div>
          <div className="cont">
            <div className="row align-items-center flex-md-row-reverse flex-row">
              <div className="col-md-6">
                <p>Dear friend,</p>
                <p className="py-4">
                  When I was a young mom, I got a sickness that drained my
                  energy. It was so exhausting that just getting my son ready
                  for bed felt like dragging a heavy boulder up a steep hill.
                </p>
                <p>
                  But I didn't want to just "live with it," like the doctors
                  said. I started searching for the right mix of vitamins and
                  minerals to help me sleep well and have energy the next day. I
                  tried so many things, from shakes to vitamins. Nothing worked
                  right, and they were missing important nutrients. The worst
                  part was they cost a lot of money. I knew there must be a
                  better way.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="text-end">
                  After lots of trying, I found a mix that really worked! I felt
                  full of life again. I showed my mix to two smart friends of
                  mine, Dr. Michael Fenster and Navin Kahn. They know a lot
                  about medicine and food. They helped make my mix even better.
                </p>
                <p className="my-3 text-end">
                  We are now super excited to share SIMPLIFI with you. It's our
                  special 'Energy Enhancer'. It's like getting $500 worth of
                  nutrients in one bottle. Our goal is to make people's lives
                  better, not just make money. So, why not try SIMPLIFI instead
                  of your regular vitamins?
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center m-auto text-center img-section">
                  <div className="px-3 text-center">
                    <img src={img2} alt="" />
                    <h5>Navin Kahn</h5>
                  </div>
                  <div className="text-center">
                    <img src={img3} alt="" />
                    <h5>Dr. Michael Fenster</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center flex-row-reverse">
              <div className="col-md-6">
                <h4>Our Promise:</h4>
                <p>
                  We pledged to rigorously test and sustainably source each
                  ingredient, and to never compromise between quality and
                  affordability.
                </p>
                <h4 className="mt-5">Our Mission:</h4>
                <p>
                  We aim to empower individuals to take control of their health
                  by providing superior nutrition, knowledge, and necessary
                  tools.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_Us;
