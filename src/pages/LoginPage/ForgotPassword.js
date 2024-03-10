import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "../../axios";
import get from "lodash/get";
import "./style.css";
import { toast } from "react-toastify";
import fb from "../../assets/images/login/loginfb.png";
import google from "../../assets/images/login/googlelogin.png";
import apple from "../../assets/images/login/applelogin.png";
import eye from "../../assets/images/login/Eye.png";
import Overlay from "../../components/Overlay";
import { forgetValidator } from "../../utils/validators";
var CryptoJS = require("crypto-js");

const HeroSection = ({ defaultState, setDefaultState, props }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  console.log(props);
  const location = useLocation();
  const stateData = location.state;
  console.log(stateData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendOTP = async (values) => {
    // console.log(values);
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/send-otp", {
        email: values.email,
      });

      // toast.success(`${data.message}`, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      // Encrypt
      var ciphertext = CryptoJS.AES.encrypt(
        values.email,
        "secret_key_123"
      ).toString();
      console.log(ciphertext);

      navigate(`/forgototp?id=${ciphertext}`);
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

  return (
    <>
      <section className="forgotpage">
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
              <p>Enter your registered email address.</p>
              <Formik
                enableReinitialize
                initialValues={{
                  email: stateData,
                }}
                validate={(values) => forgetValidator(values)}
                validateOnChange
                onSubmit={(values) => sendOTP(values)}
              >
                {(formikBag) => {
                  return (
                    <Form className="formStyle ">
                      <div className="form-field m-auto">
                        <Field
                          type="email"
                          name="email"
                          value={formikBag.values.email}
                          onChange={(e) => {
                            formikBag.setFieldValue("email", e.target.value);
                          }}
                          placeholder="Email Address"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="errormessage"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="mt-5 button1"
                          disabled={sendOTP}
                        >
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
