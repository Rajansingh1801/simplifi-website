import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import get from "lodash/get";
import axios from "../../axios";
import eyes from "../../assets/images/login/eye.svg";

import CarrotInput from "../../components/CarrotInput";

import Overlay from "../../components/Overlay";
import {
  resetPasswordValidator,
  changePasswordValidator,
} from "../../utils/validators";

var CryptoJS = require("crypto-js");

const HeroSection = ({
  defaultState,
  setDefaultState,
  setUsers,
  userToken,
  userData,
}) => {
  const navigate = useNavigate();
  // console.log("sdjkfhkjs", userToken);
  // console.log("sdjkfhkjs", userData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const storedData = localStorage.getItem("UserDataEverguard");
  const parsedData = JSON.parse(storedData);

  const handleChangePassword = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "/api/change-password",

        {
          old_password: values.oldPassword,
          new_password: values.newPassword,
        }
      );

      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsLoading(false);
      localStorage.removeItem("access_token");
      localStorage.removeItem("UserDataEverguard");
      setUsers("");
      navigate("/login");
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
  const [showOldPassword, setShowOldPassword] = useState(false);
  const showoldpassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const brightness = showPassword ? 0 : 100;
  const filtercolor = {
    filter: `brightness(${brightness}%)`,
  };
  const [showConf_Password, setShowConf_Password] = useState(false);
  const togglePasswordVisibilityConf = () => {
    setShowConf_Password(!showConf_Password);
  };

  return (
    <>
      <section className="changepassword">
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
              <div className="mobilefooter">
                <h2 onClick={() => navigate("/")}>
                  Simpli<span>fi</span>
                </h2>
              </div>
              <h3>Welcome Back</h3>
              <p>change password of {parsedData?.email}</p>
              <Formik
                enableReinitialize
                initialValues={{
                  email: parsedData?.email,
                  oldPassword: "",
                  newPassword: "",
                  confirm_password: "",
                }}
                validate={(values) => changePasswordValidator(values)}
                validateOnChange
                onSubmit={(values) => handleChangePassword(values)}
              >
                {(formikBag) => {
                  return (
                    <Form className="formStyle">
                      {console.log("formic nagf", formikBag)}

                      <div className="form-field">
                        <div className="d-flex align-items-center">
                          <Field
                            type={showOldPassword ? "text" : "password"}
                            name="oldPassword"
                            placeholder="Current Password"
                            value={formikBag.values.oldPassword}
                            onChange={(e) => {
                              formikBag.setFieldValue(
                                "oldPassword",
                                e.target.value
                              );
                            }}
                          />
                          <img
                            src={eyes}
                            alt=""
                            style={filtercolor}
                            onClick={() => showoldpassword()}
                          />
                        </div>
                        <ErrorMessage
                          name="oldPassword"
                          component="div"
                          className="errormessage"
                        />
                      </div>

                      <div className="form-field">
                        <div className="d-flex align-items-center">
                          <Field
                            type={showPassword ? "text" : "password"}
                            name="newPassword"
                            placeholder="New Password"
                            value={formikBag.values.newPassword}
                            onChange={(e) => {
                              formikBag.setFieldValue(
                                "newPassword",
                                e.target.value
                              );
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
                          name="newPassword"
                          component="div"
                          className="errormessage"
                        />
                      </div>

                      <div className="form-field">
                        <div className="d-flex align-items-center">
                          <Field
                            type={showConf_Password ? "text" : "password"}
                            name="confirm_password"
                            placeholder="Confirm New Password"
                            value={formikBag.values.confirm_password}
                            onChange={(e) => {
                              formikBag.setFieldValue(
                                "confirm_password",
                                e.target.value
                              );
                            }}
                          />
                          <img
                            src={eyes}
                            alt=""
                            style={filtercolor}
                            onClick={() => togglePasswordVisibilityConf()}
                          />
                        </div>
                        <ErrorMessage
                          name="confirm_password"
                          component="div"
                          className="errormessage"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button className="button1" type="submit">
                          Done
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
    setDefaultState: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_DEFAULT,
        updateDefault: updatedValue,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
