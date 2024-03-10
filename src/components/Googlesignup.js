import React, { useRef, useState } from "react";
import google from "../assets/images/login/googlelogin.png";
import { useNavigate } from "react-router-dom";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "../axios";
import { jwtDecode } from "jwt-decode";
import Overlay from "../components/Overlay";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const Googlesignup = ({ setUsers, setUserToken }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (response) => {
    const token = response.credential;
    const data = jwtDecode(token);
    setIsLoading(true);
    console.log(data);

    console.log("google is ", data);

    const url = "/api/social-login";
    const formValues = {
      device_token: "55",
      device_type: "Web",
      email: data?.email,
      first_name: data?.given_name,
      last_name: data?.family_name,
      social_account_type: "Google",
      social_id: data?.sub,
      profile_image: data?.picture,
    };

    try {
      const { data } = await axios.post(url, formValues);
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

  const errorMessage = (error) => {
    console.error("Error:", error);
  };

  return (
    <>
      <GoogleOAuthProvider clientId="587842927467-apa2d3gnerdmg6e9f2u6av99m599vmbo.apps.googleusercontent.com">
        <GoogleLogin
          className="googlebtn"
          onSuccess={handleLogin}
          onError={errorMessage}
          type="icon"
          size="large"
          width="400px"
        ></GoogleLogin>
      </GoogleOAuthProvider>

      {isLoading && <Overlay />}
    </>
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

export default connect(null, mapDispatchToProps)(Googlesignup);
