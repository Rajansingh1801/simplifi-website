import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import get from "lodash/get";
import axios from "../../axios";
import fb from "../../assets/images/login/loginfb.png";
import google from "../../assets/images/login/googlelogin.png";
import apple from "../../assets/images/login/applelogin.png";
import eye from "../../assets/images/login/Eye.png";
import "./style.css";

import Overlay from "../../components/Overlay";
import { resetPasswordValidator } from "../../utils/validators";

var CryptoJS = require("crypto-js");

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // navigate("/forgot", { replace: true });
  }, []);

  let searchParamData = window.location.search;
  let newParamData = searchParamData.replace("?id=", "");

  const [isLoading, setIsLoading] = useState(false);

  // Decrypt
  var bytes = CryptoJS.AES.decrypt(newParamData, "secret_key_123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  console.log(originalText);

  const handleReset = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/reset-password", {
        email: values.email,
        password: values.password,
      });
      console.log(data);
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });

      navigate("/login", { replace: true });
      setIsLoading(false);
      localStorage.removeItem("access_token");
      localStorage.removeItem("UserDataEverguard");
      setUsers("");
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
  // toggle passowrd
  const [showConf_Password, setShowConf_Password] = useState(false);
  const togglePasswordVisibilityConf = () => {
    setShowConf_Password(!showConf_Password);
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // -----

  return (
    <>
      <section className="forgotpassword">
        <div className="d-flex">
          <div className="detailside">
            <div className="title">
              <h2 onClick={() => navigate("/")}>
                Simpli<span>fi</span>
              </h2>
              <p>
                "Take care of your body. <br /> It's the only place you have to
                live." - Jim Rohn
              </p>
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
              <h3>Reset Password</h3>
              <p>Create your New Password</p>
              <Formik
                enableReinitialize
                initialValues={{
                  email: originalText,
                  password: "",
                  confirm_password: "",
                }}
                validate={(values) => resetPasswordValidator(values)}
                validateOnChange
                onSubmit={(values) => {
                  // console.log("valuesi is", values);
                  handleReset(values);
                }}
              >
                {(formikBag) => {
                  return (
                    <Form className="formStyle">
                      <div className="form-field">
                        <div className="d-flex align-items-center">
                          <Field
                            placeholder="Enter Password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formikBag.values.password}
                            onChange={(e) => {
                              formikBag.setFieldValue(
                                "password",
                                e.target.value
                              );
                            }}
                          />
                          <img
                            src={eye}
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
                            onClick={togglePasswordVisibilityConf}
                          />
                        </div>
                        <ErrorMessage
                          name="confirm_password"
                          component="div"
                          className="errormessage"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="button1">
                          Reset Password
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
