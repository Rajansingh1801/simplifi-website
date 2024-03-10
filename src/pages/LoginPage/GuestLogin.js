import React, { useState, useEffect } from "react";
import "./style.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import Overlay from "../../components/Overlay";
import axios from "../../axios";

const HeroSection = ({
  defaultState,
  setDefaultState,
  setUsers,
  setUserToken,
  deviceToken,
  userToken,
  setDeviceToken,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const guestlogin = async () => {
    setIsLoading(true);
    let url = "/api/login-anonymous";
    let formvalues = {
      device_token: deviceToken || "uselessToken",
      device_type: "Web",
    };
    try {
      const { data } = await axios.post(url, formvalues);
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
      setUsers(data.data);
      setUserToken(data?.data?.access_token);
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error?.response?.data?.errors) {
        toast.error(`${error.response.data.errors[0].msg}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(`${error?.response?.data?.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  useEffect(() => {
    guestlogin();
  }, []);

  return <>{isLoading && <Overlay />}</>;
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    locationData: state.locations,
    defaultState: state.defaultState,
    userToken: state.userToken,
    deviceToken: state.deviceToken,
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
    setUserToken: (updatedValue) => {
      dispatch({
        type: actionTypes.USER_TOKEN,
        updatedToken: updatedValue,
      });
    },
    setDefaultState: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_DEFAULT,
        updateDefault: updatedValue,
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
