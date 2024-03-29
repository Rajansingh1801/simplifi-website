import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import editimg from "../../assets/images/login/edit.png";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";

import OtpInput from "../../components/OTPInput";

import CountdownTimer from "../../components/CountdownTimer";
import Overlay from "../../components/Overlay";
import { otpValidator } from "../../utils/validators";

const HeroSection = ({
  defaultState,
  setDefaultState,
  setUsers,
  setUserToken,
  deviceToken,
}) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const stateData = location.state;
  console.log(stateData);
  const [userDetails, setUserDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const email = localStorage.getItem("email");
  const [OTPFormValues, setOtpFormValues] = useState({
    email: stateData?.email,
    verificationCode: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const verifyOTP = async (values) => {
    setOtpFormValues(values);
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/verify-otp", {
        email: values.email,
        otp: values.verificationCode,
        device_type: "Web",
        device_token: deviceToken || "uselessToken",
      });
      setIsLoading(false);
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
      setUsers(data.data);
      setUserToken(data.access_token);
      navigate("/");
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
  console.log("userDeatils is ", userDetails);

  return (
    <>
      <section className="optpage">
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
              <p>Enter the passcode we just emailed to EMAIL</p>
              <div className="changeemail d-flex align-items-center justify-content-center">
                <p className="otpp">{OTPFormValues?.email}</p>

                {/* <img
                  src={editimg}
                  alt="img"
                  className="ps-4 cursor-pointer"
                  onClick={() => navigate("/signup", { state: stateData })}
                /> */}
              </div>

              <div className=" d-flex justify-content-center mt-4">
                <Formik
                  enableReinitialize
                  initialValues={OTPFormValues}
                  validate={(values) => otpValidator(values)}
                  validateOnChange
                  onSubmit={verifyOTP}
                >
                  {(formikBag) => {
                    return (
                      <Form className="formStyle fotp">
                        <OtpInput
                          isInputNum={true}
                          value={formikBag.values.verificationCode}
                          onChange={(e) =>
                            formikBag.setFieldValue("verificationCode", e)
                          }
                          numInputs={6}
                          error={
                            formikBag.touched.verificationCode &&
                            formikBag.errors.verificationCode
                              ? formikBag.errors.verificationCode
                              : null
                          }
                        />
                        <div className="mt-5 mb-3">
                          <CountdownTimer
                            totalSec={5 * 6000}
                            otpData={stateData}
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <button type="submit" className="button1">
                            Verify
                          </button>
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
