import React from "react";
import "./style.css";
import { Navigate } from "react-router";
import "boxicons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer>
        <div className="container text-white">
          <div className="title">
            <div className="dot"></div>
            <h2 onClick={() => Navigate("/")}>
              Simpli<span>fi</span>
            </h2>
          </div>
          <div>
            <p className="text-white pt-4">
              Dietary supplements should not be used as a replacement for a
              diverse diet and healthy way of living. Ensure these are stored in
              an area inaccessible to children. They are not appropriate for
              individuals under the age of 18.
            </p>
          </div>
          <div className="contact">
            <div className="row my-5">
              <div className="col-xl-3 col-md-4 col-sm-6 py-3 d-flex">
                <div>
                  <box-icon name="phone" color="#ffffff"></box-icon>
                </div>
                <div className="ms-3">
                  <p>Tel</p>
                  <a href="tel:310-437-2766">310-437-2766</a>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6 py-3 d-flex">
                <div>
                  <box-icon name="envelope" color="#ffffff"></box-icon>
                </div>
                <div className="ms-3">
                  <p>Mail</p>
                  <a href="mailto:support@outlook.com">support@outlook.com</a>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-sm-6 py-3 d-flex">
                <div>
                  <box-icon name="map" color="#ffffff"></box-icon>
                </div>
                <div className="ms-3">
                  <p>Address</p>
                  <p>
                    57A, 4th Floor, E Block, Sector 63, Noida, Uttar Pradesh
                    201301
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="navlist">
            <div className="row">
              <div className="col-md-3 col-6 py-3">
                <div>
                  <h6 className="bold mb-3">Shop</h6>
                </div>
                <ul>
                  <li onClick={() => navigate("/shop-now")}>The Pouch</li>
                  <li onClick={() => navigate("/shop-now")}>Travel Packs</li>
                </ul>
              </div>
              <div className="col-md-3 col-6 py-3">
                <div>
                  <h6 className="bold mb-3">Learn More</h6>
                </div>
                <ul>
                  <li onClick={() => navigate("/review")}>Reviews</li>
                  <li onClick={() => navigate("/ingredients&benefits")}>
                    Ingredients & Benefits
                  </li>
                  <li onClick={() => navigate("/faqbar")}>FAQ</li>
                </ul>
              </div>
              <div className="col-md-3 col-6 py-3">
                <div>
                  <h6 className="bold mb-3">About</h6>
                </div>
                <ul>
                  <li onClick={() => navigate("/aboutUs")}>About Us</li>
                  <li onClick={() => navigate("/blogs")}>Blog</li>
                </ul>
              </div>
              <div className="col-md-3 col-6 py-3">
                <div>
                  <h6 className="bold mb-3">Contact</h6>
                </div>
                <ul>
                  <li onClick={() => navigate("/contact-us")}>Help</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="copyright">
            <div className="d-md-flex justify-content-between align-items-center text-center">
              <div className="">
                <div>
                  <ul className="d-flex justify-content-center pb-md-0 pb-3">
                    <li>
                      <Link
                        className="text-white text-decoration-none pointer"
                        target="_blank"
                        to="https://dev.simplifiwellness.com/content/PRIVACY_POLICY"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li className="dot"></li>
                    <li>
                      <Link
                        className="text-white text-decoration-none pointer"
                        target="_blank"
                        to="https://dev.simplifiwellness.com/content/TERMS_CONDITIONS"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pb-md-0 pb-3">
                <div className="d-flex align-items-center justify-content-center ">
                  <div className="logo">
                    <box-icon type="logo" name="facebook"></box-icon>
                  </div>
                  <div className="mx-4 logo">
                    <box-icon name="linkedin" type="logo"></box-icon>
                  </div>
                  <div className="logo">
                    <box-icon name="twitter" type="logo"></box-icon>
                  </div>
                </div>
              </div>
              <div className="pb-md-0 pb-3">
                <p>
                  Copyright &nbsp; &copy; &nbsp; 2023 &nbsp;&bull; &nbsp; Simpli{" "}
                  <span>fi</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
