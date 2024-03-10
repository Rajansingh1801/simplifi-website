import React, { useState } from "react";
import { connect } from "react-redux";
import { LoginSocialFacebook } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import axios from "../axios";
import * as actionTypes from "../store/actions";
import fb from "../assets/images/login/loginfb.png";

import Overlay from "../components/Overlay";

const FacebookSignUp = ({ setUsers, setUserToken }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const responseFacebook = async (response) => {
    setIsLoading(true);
    console.log(response?.data);
    const url = "/api/social-login";
    const formValues = {
      device_token: "55",
      device_type: "Web",
      email: response?.data?.email,
      first_name: response?.data?.first_name,
      last_name: response?.data?.last_name,
      social_account_type: "Facebook",
      social_id: response?.data?.id,
      profile_image: response?.data?.picture?.data?.url,
    };

    try {
      const { data } = await axios.post(url, formValues);
      // console.log("API Response:", data);
      localStorage.setItem("access_token", data?.data?.access_token);
      localStorage.setItem("UserDataEverguard", JSON.stringify(data?.data));
      setUsers(data?.data);
      setUserToken(data?.data?.access_token);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error("Error during login:", error);
      console.error("API Response:", error.response); // Log the server response for debugging
    }
  };

  return (
    <div className="loginiconsocial">
      <LoginSocialFacebook
        appId="703561778360224"
        onResolve={(response) => {
          responseFacebook(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <img src={fb} />
      </LoginSocialFacebook>
      {isLoading && <Overlay />}
    </div>
  );
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

export default connect(null, mapDispatchToProps)(FacebookSignUp);
