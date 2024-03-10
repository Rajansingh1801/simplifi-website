import React from "react";
import "./sidebar.css";
import fb from "../../assets/icon/fb.png";
import linkdin from "../../assets/icon/linkdin.png";
import x from "../../assets/icon/x.png";
import { Link } from "react-router-dom";

export default function Sidebar({ toggle, isOpen, setIsOpen, shopnow }) {
  const btnhide = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section
        className={`sidebar ${isOpen ? "d-block" : "d-none"}`}
        onClick={() => btnhide()}
      >
        <div className={`sidebarContainer ${isOpen ? "open" : "close"}`}>
          <span className="closebtn" onClick={toggle}>
            &#x2715;
          </span>
          <nav className="text-center px-28">
            <h3 className="text-white">
              Simpli<span>fi</span>
            </h3>
            <div className="line"></div>
            <ul className="">
              <li onClick={() => shopnow()}>
                <Link>SHOP</Link>
              </li>
              <li>
                <Link to="/aboutUs">ABOUT US</Link>
              </li>
              <li>
                <Link to="/podcast">PODCAST</Link>
              </li>

              <li>
                <Link to="/ingredients&benefits" className="uppercase">
                  Ingredients & Benefits
                </Link>
              </li>
              <li>
                <Link to="/blogs">BLOGS</Link>
              </li>
              <li>
                <Link to="/review">REVIEWS</Link>
              </li>
              <li>
                <Link to="/refer-and-earn">REFER AND EARN</Link>
              </li>
              <li>
                <Link to="/faqbar">FAQS</Link>
              </li>
              <li>
                <Link to="/contact-us">CONTACT US</Link>
              </li>
            </ul>
            <div className="line"></div>
          </nav>
          <p className="follow">Follow</p>
          <div className="d-flex justify-content-center align-items-center">
            <a href="#">
              <img src={fb} alt="icon" />
            </a>
            <a href="#">
              <img src={linkdin} alt="icon" className="mx-6" />
            </a>
            <a href="#">
              <img src={x} alt="icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
