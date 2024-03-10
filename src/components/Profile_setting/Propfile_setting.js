import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import email from "../../assets/images/login/email.png";
import prfile from "../../assets/images/login/propfile.png";
import editi from "../../assets/images/login/editicon.png";
import Box from "@mui/material/Box";
import eyes from "../../assets/images/login/eye.svg";
import close from "../../assets/images/login/closebtn.png";
import Modal from "@mui/material/Modal";
import user from "../../assets/images/img/user.png";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Overlay from "../Overlay";
import editimg from "../../assets/images/img/edit.png";
import removeimg from "../../assets/images/img/1828843.png";

import axios from "../../axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  editProfileValidation,
  changePasswordValidator,
} from "../../utils/validators";
var CryptoJS = require("crypto-js");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
  boxShadow: 24,
  p: 4,
  backgroundColor: "#FFFAF7",
  borderRadius: "14px",
};
const Propfile_setting = ({
  defaultState,
  setDefaultState,
  setUsers,
  userToken,
  userData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    navigate("/profileSetting#editprofile");
  };
  const handleClose1 = () => {
    navigate("/ProfileSetting");
    setOpen1(false);
  };
  const navigate = useNavigate();
  // console.log(localStorage);
  const storedData = localStorage.getItem("UserDataEverguard");
  const parsedData = JSON.parse(storedData);
  console.log(parsedData);
  const [name, setName] = useState(parsedData?.first_name);
  const [lastName, setLastName] = useState(parsedData?.last_name);

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
  const [showConf_Password, setShowConf_Password] = useState(false);
  const togglePasswordVisibilityConf = () => {
    setShowConf_Password(!showConf_Password);
  };

  //new password
  const brightness = showPassword ? 0 : 100;
  const filtercolor = {
    filter: `brightness(${brightness}%)`,
  };

  // for confirm password
  const brightness2 = showConf_Password ? 0 : 100;
  const filtercolor2 = {
    filter: `brightness(${brightness2}%)`,
  };

  // for old password
  const brightness3 = showOldPassword ? 0 : 100;
  const filtercolor3 = {
    filter: `brightness(${brightness3}%)`,
  };
  //profile image

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(parsedData?.profile_image);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  console.log("img", selectedImage);
  // for edit profile
  const [editProfile, setEditProfile] = useState({
    firstName: name,
    lastName: lastName,
    profile_image: parsedData?.profile_image,
  });

  const changeprofile = async (values) => {
    setIsLoading(true);
    const formValues = {
      first_name: values.firstName,
      last_name: values.lastName,
      country_code: "+91",
      profile_image: values?.profile_image,
    };

    console.log(formValues);

    try {
      const { data } = await axios.put("/api/edit-profile", formValues);
      setIsLoading(false);
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
      setName(formValues.first_name);
      setLastName(formValues.last_name);
      setOpen1(false);
      handleClose(false);
      navigate("/");
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
      <section className="profile">
        <div className="text-center">
          <h2>Profile Settings</h2>
        </div>
        <div className="cont px-5 py-4">
          <div className="head d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <img src={email} alt="photo" />
              </div>
              <h6 className="ps-4">Email id and Password</h6>
            </div>
            <div
              className="d-flex align-items-center"
              // onClick={() => navigate("/change-password")}
              onClick={handleOpen}
            >
              <div className="pe-3">
                <img src={editi} alt="img" />
              </div>
              <p className="d-md-flex d-none">Change Password</p>
            </div>
          </div>
          <div className="line"></div>
          <div>
            <p className="email">{parsedData?.email}</p>
          </div>
        </div>
        <div className="cont px-5 py-4">
          <div className="head d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <img src={prfile} alt="photo" />
              </div>
              <h6 className="ps-4">Edit Profile</h6>
            </div>
            <div
              className="d-flex align-items-center"
              onClick={() => handleOpen1()}
            >
              <div className="pe-3">
                <img src={editi} alt="img" />
              </div>
              <p className="d-md-flex d-none">Edit</p>
            </div>
          </div>
          <div className="line"></div>
          <div>
            <p className="email text-capitalize">
              {name} {lastName}
            </p>
          </div>
        </div>
      </section>

      <div className="modal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="changepass">
              <div className="closebtn text-end" onClick={() => handleClose()}>
                <img src={close} alt="img" />
              </div>
              <h4>Change Password</h4>
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
                            style={filtercolor3}
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
                            style={filtercolor2}
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
                        <button
                          className="canclebtn"
                          onClick={() => handleClose()}
                        >
                          Cancel
                        </button>
                        <div className="mx-3"></div>
                        <button type="submit">Done</button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Box>
        </Modal>

        <Modal
          open={open1}
          // onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="changepass">
              {/* <div className="closebtn text-end" onClick={() => handleOpen1()}>
                <img src={close} alt="img" />
              </div> */}
              <h4>Edit Profile</h4>

              {/* ---------------------- */}

              <Formik
                enableReinitialize
                initialValues={editProfile}
                validate={(values) => editProfileValidation(values)}
                validateOnChange
                onSubmit={(values) => changeprofile(values)}
              >
                {(formikBag) => {
                  return (
                    <Form className="formStyle">
                      {console.log("formic nagf", formikBag)}
                      {/* --------------------------------------------------------------------------------------------------------------- */}

                      <div className="text-center mb-3">
                        <div className="profileimg">
                          <img
                            src={selectedImage || user}
                            alt="Profile"
                            style={{
                              cursor: "pointer",
                              height: "150px",
                              width: "150px",
                              borderRadius: "50%",
                            }}
                            onClick={handleImageClick}
                            type="button"
                          />
                          <div className="editimg">
                            <div className="d-flex">
                              <img src={editimg} onClick={handleImageClick} />
                            </div>
                          </div>
                          <img
                            src={removeimg}
                            className="ms-4 removebtn"
                            onClick={() => {
                              setSelectedImage("");
                              formikBag.setFieldValue("profile_image", "");
                            }}
                          />
                        </div>

                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          accept=".img,.jpg,.jpeg,.png"
                          onChange={async (e) => {
                            setIsLoading(true);
                            var image = await uploadImage(e.target.files[0]);
                            console.log(image);
                            setSelectedImage(image?.url);
                            formikBag.setFieldValue(
                              "profile_image",
                              image?.url
                            );
                            setIsLoading(false);
                          }}
                        />
                      </div>

                      <div className="form-field">
                        <Field
                          type="text"
                          className="text-capitalize"
                          name="firstName"
                          placeholder="First Name"
                          maxLength={15}
                          value={formikBag.values.firstName}
                          onChange={(e) => {
                            formikBag.setFieldValue(
                              "firstName",
                              e.target.value
                            );
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
                          name="lastName"
                          placeholder="Last Name"
                          className="text-capitalize"
                          value={formikBag.values.lastName}
                          maxLength={15}
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

                      <div className="d-flex justify-content-center">
                        <button
                          className="canclebtn"
                          onClick={() => {
                            setSelectedImage(parsedData?.profile_image);
                            formikBag.setFieldValue(
                              "profile_image",
                              parsedData?.profile_image
                            );
                            handleClose1();
                          }}
                        >
                          Cancel
                        </button>
                        <div className="mx-3"></div>
                        <button type="submit">Done</button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Box>
        </Modal>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Propfile_setting);

const uploadImage = async (file) => {
  console.log(file, "fileeee");
  var formData = new FormData();
  formData.append("file", file);
  formData.append("type", "1");
  try {
    const { data } = await axios.post("/api/upload-file", formData);
    console.log(data);

    return data;
  } catch (error) {}
};
