import React from "react";
import "./style.css";
import icon from "../../assets/images/refer-and-earn/icon.svg";
import fb from "../../assets/images/refer-and-earn/fb.svg";
import whatsapp from "../../assets/images/refer-and-earn/whatsapp.svg";
import twitter from "../../assets/images/refer-and-earn/twitter.svg";
import linkdin from "../../assets/images/refer-and-earn/linkdin.svg";

function Refer_and_earn() {
  return (
    <>
      <section className="refer">
        <div className="header">
          <div className="mt-3">
            <h2>Get 25% Off</h2>
            <h2>Your Next Order</h2>
            <p className="py-3">Refer your friends. You both get 25% off.</p>
            <button className="mt-4">Start Earning Now</button>
          </div>
        </div>
        <div className="bodysection">
          <div className="container">
            <div className="text-center">
              <h2>2 Steps To Get 25% Off</h2>
              <p>
                Use your custom referral code to tell your friends about
                Simplifi. <br />
                When they purchase, you both get a 25% off discount.
              </p>
            </div>

            <div className="d-flex main mt-5 pt-4">
              <div className="leftside">
                <div className="circle">1</div>
                <div className="line"></div>
                <div className="circle">2</div>
                <div className="line"></div>
                <div className="circle">3</div>
              </div>
              <div className="rightside">
                <div className="w-100">
                  <p className="">Copy Your Referral Link</p>
                </div>
                <div className="field">
                  <input type="text" />
                  <button>
                    <img src={icon} alt="" /> copy link
                  </button>
                </div>
                <div className="w-100">
                  <p>Next, Share with your friends on Social...</p>
                </div>
                <div className="btngroup w-100">
                  <div className="fb btn">
                    <img src={fb} alt="" />
                    <p>facebook</p>
                  </div>
                  <div className="whatsapp btn">
                    <img src={whatsapp} alt="" />
                    <p>whatsapp</p>
                  </div>
                  <div className="linkdin btn">
                    <img src={linkdin} alt="" />
                    <p>linkdin</p>
                  </div>
                  <div className="twitter btn">
                    <img src={twitter} alt="" />
                    <p>twitter</p>
                  </div>
                </div>
                <div>
                  <p>
                    Once your friends purchase, we'll unlock a 25% off discount
                    for you both. There is no limit to how many discounts you
                    get!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footersection">
          <div className="container">
            <div className="hr"></div>
            <p className="text-center pt-3 pb-5">
              Please note that some Terms and Conditions Applied.Lorem ipsum
              dolor sit amet consectetur. At consectetur in libero ipsum proin
              eu. Purus enim eu viverra placerat morbi. Elementum at donec mi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Refer_and_earn;
