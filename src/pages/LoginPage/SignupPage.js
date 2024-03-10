import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "../../axios";
import { toast } from "react-toastify";
import get from "lodash/get";
import fb from "../../assets/images/login/loginfb.png";
import google from "../../assets/images/login/googlelogin.png";
import apple from "../../assets/images/login/applelogin.png";
import eye from "../../assets/images/login/Eye.png";
import "./style.css";
import Overlay from "../../components/Overlay";

import { signUPValidator } from "../../utils/validators";
import Googlesignup from "../../components/Googlesignup";
import Facebooklogin from "../../components/Facebooklogin";

const HeroSection = ({ deviceToken }) => {
  const [searchParams] = useSearchParams();
  const referralId = searchParams.get("referral");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // toggle passowrd
  const [showConf_Password, setShowConf_Password] = useState(false);
  const togglePasswordVisibilityConf = () => {
    setShowConf_Password(!showConf_Password);
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const brightness = showPassword ? 0 : 100;
  const filtercolor = {
    filter: `brightness(${brightness}%)`,
  };
  const brightness1 = showConf_Password ? 0 : 100;
  const filtercolor1 = {
    filter: `brightness(${brightness1}%)`,
  };
  // -----
  const location = useLocation();
  const stateData = location.state;
  console.log(stateData);

  const navigate = useNavigate();

  const [signUpformValues, setSignUpformValues] = useState({
    firstName: stateData?.first_name,
    lastName: stateData?.last_name,
    email: stateData?.email,
    password: stateData?.password,
    confirm_password: "",
    terms: true,
  });

  const handleSignUp = async (values) => {
    setIsLoading(true);
    const formValues = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
      terms: values.terms,
      // is_referred: referralId ? true : false,
      // referral_link: `/signup?referral=${referralId}`,
      device_type: "Web",
      device_token: deviceToken || "uselessToken",
    };

    try {
      const { data } = await axios.post("/api/signup", formValues);
      console.log(data);
      console.log(data.data.email);
      localStorage.setItem("email", data.data.email);
      setSignUpformValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: "",
        terms: false,
      });
      setIsLoading(false);
      // toast.success(data.message, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });

      navigate(`/verifyOtp`, { state: formValues });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
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

  return (
    <>
      <section className="pagesignup">
        <div className="d-flex">
          <div className="detailside">
            <div className="title">
              <h2 onClick={() => navigate("/")}>
                Simpli<span>fi</span>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="logo">
              <p>Sign Up With:</p>
              <div className="d-flex align-items-center justify-content-center pointer">
                <div>
                  <Googlesignup />
                </div>
                <div className="mx-3">
                  <Facebooklogin />
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
              <div className="mobilefooter pt-3">
                <h2 onClick={() => navigate("/")}>
                  Simpli<span>fi</span>
                </h2>
              </div>
              <h3>
                Welcome To Simpli<span>fi</span>
              </h3>
              <p>Enter your details to create your FREE account...</p>
              <Formik
                enableReinitialize
                initialValues={signUpformValues}
                validate={(values) => signUPValidator(values)}
                validateOnChange
                onSubmit={(values) => {
                  // console.log(values);
                  handleSignUp(values);
                }}
              >
                {(formikBag) => (
                  <Form className="d-flex flex-column align-items-center justify-content-center">
                    <div className="form-field">
                      <Field
                        type="text"
                        name="firstName"
                        maxLength={15}
                        className="text-capitalize"
                        placeholder="First Name"
                        value={formikBag.values.firstName}
                        onChange={(e) => {
                          formikBag.setFieldValue("firstName", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    <div className="form-field">
                      <Field
                        type="text"
                        maxLength={15}
                        name="lastName"
                        className="text-capitalize"
                        placeholder="Last Name"
                        value={formikBag.values.lastName}
                        onChange={(e) => {
                          formikBag.setFieldValue("lastName", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    <div className="form-field">
                      <Field
                        type="email"
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
                    <div className="form-field">
                      <div className="d-flex align-items-center">
                        <Field
                          placeholder="Enter Password"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formikBag.values.password}
                          onChange={(e) => {
                            formikBag.setFieldValue("password", e.target.value);
                          }}
                        />
                        <img
                          src={eye}
                          style={filtercolor}
                          alt=""
                          onClick={togglePasswordVisibility}
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    {/* {console.log(formikBag, "formikBag")} */}
                    <div className="form-field">
                      <div className="d-flex align-items-center">
                        <Field
                          placeholder="Please Re-enter Password"
                          type={showConf_Password ? "text" : "password"}
                          name="confirm_password"
                          onChange={(e) => {
                            formikBag.setFieldValue(
                              "confirm_password",
                              e.target.value
                            );
                          }}
                          value={formikBag.values.confirm_password}
                        />
                        <img
                          src={eye}
                          alt=""
                          style={filtercolor1}
                          onClick={togglePasswordVisibilityConf}
                        />
                      </div>
                      <ErrorMessage
                        name="confirm_password"
                        component="div"
                        className="errormessage"
                      />
                    </div>

                    <div className="d-flex align-items-center px-3">
                      <div for="myCheckbox01" className="checkbox relative">
                        <input
                          className="checkbox__input"
                          type="checkbox"
                          id="myCheckbox01"
                          name="terms"
                          checked={formikBag.values.terms}
                          onChange={(e) => {
                            formikBag.setFieldValue(
                              "terms",
                              !formikBag.values.terms
                            );
                          }}
                        />

                        <svg
                          className="checkbox__icon"
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
                            className="tick"
                            stroke="#000"
                            fill="none"
                            strokeLinecap="round"
                            strokeWidth="4"
                            d="M4 10l5 5 9-9"
                          />
                        </svg>
                      </div>

                      <p className="ps-3">
                        By continuing, you agree to&nbsp;
                        <Link
                          target="_blank"
                          to="https://dev.simplifiwellness.com/content/TERMS_CONDITIONS"
                          className="fw-400 text-black text-decoration-none pointer"
                        >
                          Terms of Use
                        </Link>
                        &nbsp;and&nbsp;
                        <Link
                          target="_blank"
                          to="https://dev.simplifiwellness.com/content/PRIVACY_POLICY"
                          className="fw-400 text-black text-decoration-none pointer"
                        >
                          Privacy Policy.
                        </Link>
                      </p>
                    </div>
                    <ErrorMessage
                      name="terms"
                      component="div"
                      className="errormessage"
                    />
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="button1">
                        Sign Up
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="singup mb-5">
                <p>
                  Existing User?
                  <span
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    &nbsp;Sign In
                  </span>
                </p>
              </div>
              <div className="mobilefooter">
                <div className="logo">
                  <p>Sign In With</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <div>
                      <Googlesignup />
                    </div>
                    <div className="mx-3">
                      <Facebooklogin />
                    </div>

                    <div className="loginiconsocial">
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
