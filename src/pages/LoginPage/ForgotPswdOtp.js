import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
  Link,
} from "react-router-dom";
import editimg from "../../assets/images/login/edit.png";

import OtpInput from "../../components/OTPInput";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "../../axios";
import get from "lodash/get";
import { toast } from "react-toastify";
import "./style.css";

import Overlay from "../../components/Overlay";
import CountdownTimer from "../../components/CountdownTimer";
import { otpValidator } from "../../utils/validators";
import { replace } from "lodash";

var CryptoJS = require("crypto-js");

const HeroSection = ({
  defaultState,
  setDefaultState,
  setUsers,
  setUserToken,
  props,
  deviceToken,
}) => {
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // let searchParam = searchParams.get("id");

  let searchParamData = window.location.search;
  let newParamData = searchParamData.replace("?id=", "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  // Decrypt
  var bytes = CryptoJS.AES.decrypt(newParamData, "secret_key_123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  const verifyOTP = async (values) => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem("access_token");
      console.log("token is ", token);
      const { data } = await axios.post("/api/verify-otp", {
        email: values.email,
        otp: values.verificationCode,
        device_type: "Web",
        device_token: deviceToken || "uselessToken",
      });
      setIsLoading(false);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
      setUsers(data.data);
      setUserToken(data.access_token);
      navigate(`/resetpassword?id=${newParamData}`, { replace: true });
      // toast.success(data.message, {
      //     position: toast.POSITION.TOP_RIGHT,
      // })
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

  return (
    <>
      <section className="forgetotppage">
        <div className="d-flex">
          <div className="detailside">
            <div className="title">
              <h2 onClick={() => navigate("/")}>
                Simpli<span>fi</span>
              </h2>
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
              <div className="mobileheader">
                <h2 onClick={() => navigate("/")}>
                  Simpli<span>fi</span>
                </h2>
              </div>
              <h3>Verify Email Address</h3>
              <p>Enter the OTP we just email to</p>
              <div className="changeemail d-flex align-items-center justify-content-center">
                <p className="otpp">{originalText}</p>

                {/* <img
                  src={editimg}
                  alt="img"
                  className="ps-4 cursor-pointer"
                  onClick={() => navigate("/forgot", { state: originalText })}
                /> */}
              </div>
              <div className="my-5">
                <Formik
                  enableReinitialize
                  initialValues={{
                    email: originalText,
                    verificationCode: "",
                  }}
                  validate={(values) => otpValidator(values)}
                  validateOnChange
                  onSubmit={verifyOTP}
                >
                  {(formikBag) => {
                    return (
                      <Form className="otpclass">
                        {console.log(formikBag)}
                        <div className="d-flex justify-content-center">
                          <div>
                            <OtpInput
                              isInputNum={true}
                              name="otp"
                              value={formikBag.values.verificationCode}
                              onChange={(e) => {
                                formikBag.setFieldValue("verificationCode", e);
                              }}
                              numInputs={6}
                              error={
                                formikBag.touched.verificationCode &&
                                formikBag.errors.verificationCode
                                  ? formikBag.errors.verificationCode
                                  : null
                              }
                            />
                          </div>
                        </div>

                        <div className="mt-4 text-center">
                          <CountdownTimer
                            totalSec={5 * 6000}
                            otpData={{
                              email: originalText,
                            }}
                          />
                        </div>
                        <div className="text-center">
                          <div className="d-flex justify-content-center">
                            <button type="submit" className="mt-5 button1">
                              Verify
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
