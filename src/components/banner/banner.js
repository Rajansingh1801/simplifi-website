import React, { useEffect } from "react";
import "./banner.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import sandclock from "../../assets/images/banner/clock.png";
import sandclock1 from "../../assets/images/banner/clock1.png";
import bg1 from "../../assets/images/banner/bg.png";
import bg2 from "../../assets/images/about/aboutbg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Banner = ({ userToken, shopnow }) => {
  const naviagte = useNavigate();
  const [bg, setBg] = useState(bg1);
  const [btnBg, setBtnbg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setBg(bg2);
        setBtnbg(false);
      } else {
        setBg(bg1);
        setBtnbg(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const shopnow = () => {
  //   if (userToken != null) {
  //     naviagte("/shop-now");
  //   } else {
  //     naviagte("/login");
  //   }
  // };

  return (
    <>
      <section
        className="banner d-flex align-items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="d-flex align-items-center justify-content-between w-full h-screen">
          <div className="details">
            <h1> Nutrition That Never Sleeps</h1>
            <h1>24 Hour Nutrition</h1>
            <p>Better Sleep - Boundless Energy - Mental Clarity</p>
            <div className="w-fit-content">
              <button
                onClick={() => shopnow()}
                className={btnBg ? "bluebtn" : "yellowbtn"}
              >
                Purchase Now
              </button>
            </div>
          </div>
          <div className="sandclock">
            <img src={sandclock} alt="" className="sandclockimg" />
            <img src={sandclock1} alt="" className="sandclockimg1 d-none" />
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    locationData: state.locations,
    defaultState: state.defaultState,
    userData: state.userData,
    deviceToken: state.deviceToken,
    userToken: state.userToken,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        updatedUser: updatedValue,
      });
    },
    setLocations: (updatedValue) => {
      dispatch({
        type: actionTypes.GET_LOCATIONS,
        locationData: updatedValue,
      });
    },
    setDeviceToken: (updatedValue) => {
      dispatch({
        type: actionTypes.DEVICE_TOKEN,
        updateDeviceToken: updatedValue,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
