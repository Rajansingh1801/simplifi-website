import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import img from "../../assets/images/img/img.png";
import applestore from "../../assets/images/img/applestore.png";
import googlestore from "../../assets/images/img/googlestore.png";
import "./style.css";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import close from "../../assets/images/login/closebtn.png";
import * as actionTypes from "../../store/actions";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";

import {
  NavLink,
  useNavigate,
  useParams,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import get from "lodash/get";
import axios from "../../axios";
import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { orderDeatilsvalidation } from "../../utils/validators";
import Overlay from "../Overlay";
const libraries = ["places"];

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
const Shipping = ({
  defaultState,
  setDefaultState,
  setUsers,
  userToken,
  userData,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const stateData = location.state;
  console.log("state data is ", stateData);
  const [getproduct, setGetProduct] = useState();

  const [addstate, setState] = useState();
  const [addcity, setCity] = useState();
  const [addzipCode, setZipCode] = useState();
  const [address, setAddress] = useState();

  //google address

  const getdata = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("/api/product");
      setGetProduct(data.data);
      setIsLoading(false);
    } catch (error) {
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
  useEffect(() => {
    getdata();
  }, []);

  const productData = getproduct?.data;

  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    mobileNumber: "",
    countryCode: "",
    email: "",
    conf_email: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryDirection: "",
  });

  console.log(orderDetails?.city);
  const handleOrder = async (values) => {
    setIsLoading(true);

    const callingCode = parsePhoneNumber(values.mobileNumber);
    let countrycodeis = callingCode.countryCallingCode;
    const newphoneNumber = values.mobileNumber
      .replace(countrycodeis, "")
      .trim();
    const formValues = {
      shippingDetails: {
        fullName: values.fullName,
        emailId: values.email,
        streetAddress: values.streetAddress,
        apartment: values.apartment,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
        mobileNumber: `${newphoneNumber}`,
        countryCode: `+${countrycodeis}`,
        deliveryDirection: "left",
      },
      productId: productData.id,
      membershipId: param.id,
      amount: totalprice,
    };

    try {
      const { data } = await axios.post("/api/order", formValues);
      setOrderDetails({
        fullName: "",
        email: "",
        streetAddress: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
        deliveryDirection: "",
        mobileNumber: "",
      });
      setIsLoading(false);
      setOpen(true);
    } catch (error) {
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
  let totalprice =
    +stateData.discountPrice + +productData?.shipping + +productData?.tax;
  const isverify = userData?.is_verified;
  console.log(isverify);

  //autofill

  const inputRef = useRef();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBx3OPJyqnmOmWF0vmDyORVp9Wvet1Z1B8",
    libraries,
  });

  const handlePlaceChanged = (formikBag) => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place);
      const addressComponents = place.address_components;
      setAddress(place.formatted_address);
      const address = place.formatted_address;
      //for zip code
      const zipCode =
        addressComponents.find((component) =>
          component.types.includes("postal_code")
        )?.long_name || "";

      const state =
        addressComponents.find((component) =>
          component.types.includes("administrative_area_level_1")
        )?.long_name || "";

      const city =
        addressComponents.find((component) =>
          component.types.includes("locality")
        )?.long_name || "";

      formikBag.setFieldValue("streetAddress", address);
      formikBag.setFieldValue("zipCode", zipCode);
      formikBag.setFieldValue("state", state);
      formikBag.setFieldValue("city", city);

      console.log(formikBag);

      console.log(city);
      console.log(zipCode);
      console.log(state);
    }
  };

  // console.log("Zipcode:", addzipCode);
  // console.log("State:", addstate);
  // console.log("City:", addcity);

  return (
    <>
      <section className="shipping">
        <div className="row">
          <div className="col-lg-6 col-md-8 formside">
            <div className="">
              <div className="head">
                <Svg />
                <h5 className="mb-0 ps-2">Shipping</h5>
                <p className="ps-5">
                  (Your order will arrive in 3-5 business days.)
                </p>
              </div>
              <Formik
                enableReinitialize
                initialValues={orderDetails}
                validate={(values) => orderDeatilsvalidation(values, isverify)}
                validateOnChange
                onSubmit={(values) => {
                  handleOrder(values);
                }}
              >
                {(formikBag) => (
                  <Form>
                    {console.log(formikBag)}
                    <div className="form-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
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
                    {isverify !== true ? (
                      <div>
                        <div className="form-field">
                          <input
                            type="email"
                            name="conf_email"
                            placeholder="Confirm Email Address*"
                            value={formikBag.values.conf_email}
                            onChange={(e) => {
                              formikBag.setFieldValue(
                                "conf_email",
                                e.target.value
                              );
                            }}
                          />
                          <ErrorMessage
                            name="conf_email"
                            component="div"
                            className="errormessage"
                          />
                        </div>
                      </div>
                    ) : null}
                    <div className="form-field">
                      <input
                        type="text"
                        name="fullName"
                        className="text-capitalize"
                        placeholder="Full Name*"
                        value={formikBag.values.fullName}
                        onChange={(e) => {
                          formikBag.setFieldValue("fullName", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    <div className="form-field">
                      <StandaloneSearchBox
                        onLoad={(ref) => (inputRef.current = ref)}
                        onPlacesChanged={() => {
                          handlePlaceChanged(formikBag);
                        }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Location"
                          name="streetAddress"
                          value={formikBag.values.streetAddress || ""}
                          onChange={(e) => {
                            formikBag.handleChange(e); // Use Formik's handleChange directly
                            formikBag.setFieldValue(
                              "streetAddress",
                              e.target.value
                            );
                          }}
                        />
                      </StandaloneSearchBox>
                      <ErrorMessage
                        name="streetAddress"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    {/* <div className="form-field">
                      <input
                        type="text"
                        name="streetAddress"
                        placeholder="StreetAddress*"
                        value={formikBag.values.streetAddress}
                        onChange={(e) => {
                          formikBag.setFieldValue(
                            "streetAddress",
                            e.target.value
                          );
                        }}
                      />
                      <ErrorMessage
                        name="streetAddress"
                        component="div"
                        className="errormessage"
                      />
                    </div> */}
                    <div className="form-field">
                      <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment*"
                        value={formikBag.values.apartment}
                        onChange={(e) => {
                          formikBag.setFieldValue("apartment", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        name="apartment"
                        component="div"
                        className="errormessage"
                      />
                    </div>

                    <div className="form-field">
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code*"
                        value={formikBag.values.zipCode}
                        onChange={(e) => {
                          formikBag.setFieldValue("zipCode", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        name="zipCode"
                        component="div"
                        className="errormessage"
                      />
                    </div>
                    <div className="d-xl-flex justify-content-between">
                      <div className="form-field">
                        <input
                          type="text"
                          name="city"
                          placeholder="City*"
                          value={formikBag.values.city}
                          onChange={(e) => {
                            formikBag.setFieldValue("city", e.target.value);
                          }}
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="errormessage"
                        />
                      </div>
                      <div className="form-field">
                        <input
                          type="text"
                          name="state"
                          placeholder="State*"
                          value={formikBag.values.state}
                          onChange={(e) => {
                            formikBag.setFieldValue("state", e.target.value);
                          }}
                        />
                        <ErrorMessage
                          name="state"
                          component="div"
                          className="errormessage"
                        />
                      </div>
                    </div>
                    <div className="form-field form-fieldphone">
                      <PhoneInput
                        defaultCountry="US"
                        name="mobileNumber"
                        className="w-100"
                        placeholder="Enter phone number"
                        value={formikBag?.values?.mobileNumber}
                        onChange={(value) => {
                          formikBag.setFieldValue("mobileNumber", value);
                        }}
                        error={
                          formikBag.touched.mobileNumber &&
                          formikBag.errors.mobileNumber
                            ? formikBag.errors.mobileNumber
                            : null
                        }
                      />
                      <p className="errormessage">
                        {formikBag.errors.mobileNumber}
                      </p>
                      {/* <ErrorMessage
                        name="mobileNumber"
                        component="div"
                        className="errormessage"
                      /> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="button1" type="submit">
                        Continue to pay
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 order-side">
            <div>
              <div className="d-flex">
                <Orderimg /> <h4 className="ps-2">Order Summary</h4>
              </div>
              <div className="hr"></div>
              <div className="list">
                <div className="d-flex justify-content-between align-items-center my-3">
                  <div className="d-lg-flex align-items-center">
                    <div>
                      <img
                        src={productData?.image}
                        alt=""
                        className="product-image"
                      />
                    </div>
                    <div className="pe-lg-5 pe-1 ps-lg-3 ps-1">
                      <h5>{productData?.name}</h5>
                      <p className="description">{productData?.description}</p>
                    </div>
                  </div>
                  <div className="">
                    <h4>${stateData?.discountPrice}</h4>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="price-list">
                <div className="d-flex justify-content-between">
                  <h5>Subtotal</h5>
                  <h4>${stateData?.discountPrice}</h4>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <h5>Tax(15%)</h5>
                  <h4>${productData?.tax}</h4>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>Shipping</h5>
                  <h4>${productData?.shipping}</h4>
                </div>
              </div>
              <div className="hr"></div>
              <div className="total d-flex justify-content-between">
                <h2>Total</h2>
                <h3>${totalprice}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="welcomemodal">
          <Modal
            open={open}
            onClose={() => navigate("/")}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="modalwelcome text-center">
                <h4>Congratulations!</h4>
                <p>
                  Your order has been placed. <br /> You're one step closer to
                  amazing health.
                </p>
                <div className="tri">
                  <h5 className="mb-0">Check your Inbox to track your order</h5>
                </div>
                <p className="pt-3">
                  Want free health advice, tips and discounts? <br /> Download
                  The FREE App:
                </p>
                <div className="d-sm-flex py-3 imgcont justify-content-evenly">
                  <img src={applestore} alt="" />
                  <img src={googlestore} alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <button className="button1" onClick={() => navigate("/")}>
                    Back To Home
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
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
export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19C8 18.4696 7.78929 17.9609 7.41421 17.5858C7.03914 17.2107 6.53043 17 6 17C5.46957 17 4.96086 17.2107 4.58579 17.5858C4.21071 17.9609 4 18.4696 4 19ZM15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 17H6V3H4"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 5L20 6L19 13H6"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Orderimg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.5 4H5.5C4.94772 4 4.5 4.44772 4.5 5V21C4.5 21.5523 4.94772 22 5.5 22H18.5C19.0523 22 19.5 21.5523 19.5 21V5C19.5 4.44772 19.0523 4 18.5 4Z"
        stroke="black"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M9 2V5M15 2V5M8 9.5H16M8 13.5H14M8 17.5H12"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
