import React, { useState, useEffect } from "react";
import "./style.css";
import { GoogleLogin } from "@react-oauth/google";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import get from "lodash/get";
import fb from "../../assets/images/login/loginfb.png";
import google from "../../assets/images/login/googlelogin.png";
import apple from "../../assets/images/login/applelogin.png";
import eyes from "../../assets/images/login/eye.svg";
import FacebookLogin from "react-facebook-login";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

import Overlay from "../../components/Overlay";
import axios from "../../axios";

import { loginValidator } from "../../utils/validators";
import Facebooksingup from "../../components/Facebooklogin";
import Googlesignup from "../../components/Googlesignup";

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

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (values, isSocial = false) => {
    setLoginValues(values);
    setIsLoading(true);
    let url = "/api/login";
    let formvalues = {
      email: values.email,
      password: values.password,
      device_token: deviceToken || "uselessToken",
      device_type: "Web",
    };
    try {
      const { data } = await axios.post(url, formvalues);
      console.log("Data is", data.data);
      if (data?.data?.is_blocked == true) {
        navigate("/login");
        toast.error(
          "It looks like your account has been blocked, Please contact your admin to unblock it. "
        );
      } else if (data.data.is_verified) {
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
        setUsers(data.data);
        setUserToken(data.data.access_token);
        navigate("/");
      } else {
        sendOTP({
          email: values.email,
          id: get(data, "data.id"),
        });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error?.response?.status === 901) {
        setTimeout(() => {
          navigate(`/verifyOtp`, { state: formvalues });
        }, 1500);
      } else if (error?.response?.data?.errors) {
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

  const sendOTP = async (values, forget = false) => {
    console.log(values);
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/send-otp", {
        email: values.email,
      });
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(`/verifyOtp/${values._id}`);
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

  const [showPassword, setShowPassword] = useState(false);
  const showpassword = () => {
    setShowPassword(!showPassword);
  };
  const brightness = showPassword ? 0 : 100;
  const filtercolor = {
    filter: `brightness(${brightness}%)`,
  };

  // handle guest login

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
      // navigate("/");
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

  //userblocked

  // console.log("users=>>", userData)

  return (
    <>
      <section className="login">
        <div className="d-flex">
          <div className="detailside">
            <div className="title">
              <h2 onClick={() => navigate("/")}>
                Simpli<span>fi</span>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="logo">
              <p>Sign In With</p>
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <Googlesignup />
                </div>
                <div className="mx-3">
                  <Facebooksingup />
                </div>

                <div className="loginiconsocial">
                  <img src={apple} alt="" />
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="d-flex justify-content-between w-100">
                <p>version 1.0</p>
                <p>
                  Copyright &nbsp; &copy; &nbsp; 2023 &nbsp;&bull; &nbsp; Simpli{" "}
                  <span>fi</span>
                </p>
              </div>
            </div>
          </div>
          <div className="formside">
            <div className="text-center">
              <div className="mobilefooter">
                <h2 onClick={() => navigate("/")}>
                  Simpli<span>fi</span>
                </h2>
              </div>
              <h3>Welcome Back</h3>
              <Formik
                enableReinitialize
                initialValues={loginValues}
                validate={(values) => loginValidator(values)}
                validateOnChange
                onSubmit={(values) => {
                  console.log(values);
                  handleLogin(values);
                }}
              >
                {(formikBag) => (
                  <Form>
                    <div className="form-field">
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={formikBag.values.email}
                        onChange={(e) => {
                          formikBag.setFieldValue("email", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    <div className="form-field ">
                      <div
                        className="d-flex align-items-center"
                        style={{ paddingBottom: "-2px" }}
                      >
                        <Field
                          placeholder="Enter Password"
                          type={showPassword ? "text" : "password"}
                          value={formikBag.values.password}
                          onChange={(e) => {
                            formikBag.setFieldValue("password", e.target.value);
                          }}
                        />
                        <img
                          src={eyes}
                          alt=""
                          style={filtercolor}
                          onClick={() => showpassword()}
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    <div className="d-md-flex align-items-center justify-content-between py-3">
                      <div className="d-flex align-items-center ">
                        <div for="myCheckbox01" class="checkbox">
                          <input
                            class="checkbox__input"
                            type="checkbox"
                            id="myCheckbox01"
                          />
                          <svg
                            class="checkbox__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                          >
                            <rect
                              width="21"
                              height="21"
                              x=".5"
                              y=".5"
                              fill="#FFF"
                              stroke="#F37335"
                              rx="3"
                            />
                            <path
                              class="tick"
                              stroke="#000"
                              fill="none"
                              stroke-linecap="round"
                              stroke-width="4"
                              d="M4 10l5 5 9-9"
                            />
                          </svg>
                        </div>
                        <p className="ps-4">Keep me signed in</p>
                      </div>
                      <div className="text-end">
                        <Link to="/forgot" className="forget">
                          Forgot Password ?
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="button1" type="submit">
                        Sign In
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="singup">
                <p>
                  Don’t have an account?
                  <span
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    &nbsp;Create Account
                  </span>
                </p>
              </div>
              {/* <div className="guest" onClick={() => guestlogin()}>
                <p>
                  <span>
                    Or <br /> Skip
                  </span>
                </p>
              </div> */}
              <div className="mobilefooter">
                <div className="logo">
                  <p>Sign In With</p>
                  <div className="d-flex align-items-center justify-content-center pointer">
                    <div>
                      <Googlesignup />
                    </div>
                    <div className="mx-3 pointer">
                      <Facebooksingup />
                    </div>

                    <div className="loginiconsocial pointer">
                      <img src={apple} alt="" />
                    </div>
                  </div>
                </div>
                <div className="footer mt-3">
                  <div className="d-flex justify-content-between w-100">
                    <p>version 1.0</p>
                    <p>
                      Copyright &nbsp; &copy; &nbsp; 2023 &nbsp;&bull; &nbsp;
                      Simpli <span>fi</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <Overlay />}
    </>
  );
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
