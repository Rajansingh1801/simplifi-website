import React, { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
// import { Button } from '../ButtonElements'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  Img,
  LoginBox,
  LoginHeading,
  LoginPara,
  InputBox,
  LoginButtons,
  LoginButton,
  LabelHeading,
  LabelPara,
  SelectServiceBox,
  LanguageLogout,
  LanguageIcon,
  LogoutIcon,
  SearchIcon,
} from "./LoginElements";
import { Formik, Field, Form } from "formik";
import Input from "../Input";
// import { IconUser, IconEmail } from '../SvgElements'
import PassIcon from "../../images/password.png";
import NameIcon from "../../images/name.png";
import EmailIcon from "../../images/email.png";
import LocationIcon from "../../images/address.png";
import RestaurantIcon from "../../images/restaurant.png";
import languageIcon from "../../images/languageBlack.png";
import logoutIcon from "../../images/logout.png";
import PhoneInput from "react-phone-input-2";
import Overlay from "../Overlay";
import axios from "../../axios";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { get } from "lodash";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ProfileTime, ProfileDayTime } from "./LoginElements";
import Radio from "@mui/material/Radio";
import TimeInput from "../TimeInput";
import FileInput from "../FileInput";
import FileInputs from "../FileInputs";
import { uploadImage } from "../../utils/functions";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import Select from "../Select";
import * as IoIcons from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";

import {
  signUpValidator,
  loginValidator,
  forgetValidator,
  otpValidator,
  resetOutValidator,
  completeProfileValidator,
  bankDetailsValidator,
} from "../../utils/validators";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  loginObjOne,
  signUpObjOne,
  forgotObjOne,
  resetObjOne,
  restaurantDetailsObjOne,
  bankDetailsObjOne,
  verifyOtpObjOne,
  pendingApprovalObjOne,
} from "./Data";

import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import "./locationdropdown.css";

import Markers from "./Marker";
import GoogleMapReact from "google-map-react";
import { LanguageContext } from "../../utils/language/Language";
import SignupPage from "../../pages/LoginPage/SignupPage";

const useStyles = makeStyles((theme) => ({
  formStyle: {
    width: "100%",
    padding: "2rem",
    height: "80vh",
    overflow: "scroll",
  },
  "@media (max-width: 780px)": {
    formStyle: {
      padding: "1.8rem",
    },
    formStyleOnly: {
      padding: "1.8rem",
      lineHeight: "3rem",
    },
  },
  "@media (max-width: 480px)": {
    formStyle: {
      padding: "1.3rem",
    },
    formStyleOnly: {
      padding: "1.3rem",
    },
  },

  formStyleOnly: {
    width: "100%",
    padding: "2rem",
    height: "80vh",
    overflow: "scroll",
  },
}));

const InfoSection = ({
  lightBg,
  imgStart,
  img,
  pageHeading,
  pagePara,
  form,
  history,
  setUsers,
  setUserToken,
  userData,
  defaultState,
  setDefaultState,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // ******Localization****
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (value) => userLanguageChange(value);
  const defaultLanguage = window.localStorage.getItem("rcml-lang") || "en";
  const { dictionary } = useContext(LanguageContext);

  // const getMapOptions = (maps) => {
  //     return {
  //         disableDefaultUI: true,
  //         mapTypeControl: true,
  //         streetViewControl: true,
  //         styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  //     };
  // };

  const [isLoading, setIsLoading] = useState(false);
  const [OTPSend, setOtpSend] = useState(false);
  const [otpPhone, setOtpPhone] = useState("");
  const [isForgetiing, setIsForgetting] = useState(false);
  const [selectCuisines, setSelectCuisines] = useState();
  const [modalData, setModalData] = useState({
    isOpen: false,
    header: "success_message",
    message: "Your add will post Shortly",
  });
  const [address, setAddress] = useState("");

  const [signUpformValues, setSignUpformValues] = useState({
    owner_name: "",
    email: "",
    whole_number: "",
    country_code: "",
    mobile_number: "",
    password: "",
    confirm_password: "",
    terms: false,
  });

  const [OTPFormValues, setOtpFormValues] = useState({
    country_code: "",
    mobile_number: "",
    verification_code: "",
  });

  const [loginValues, setLoginValues] = useState({
    country_code: "",
    mobile_number: "",
    whole_number: "",
    password: "",
  });

  const defaultWorkingHours = [
    { day: "Monday", start_time: "", end_time: "", is_holyday: false },
    { day: "Tuesday", start_time: "", end_time: "", is_holyday: false },
    { day: "WednesDay", start_time: "", end_time: "", is_holyday: false },
    { day: "Thursday", start_time: "", end_time: "", is_holyday: false },
    { day: "Friday", start_time: "", end_time: "", is_holyday: false },
    { day: "Saturday", start_time: "", end_time: "", is_holyday: false },
    { day: "Sunday", start_time: "", end_time: "", is_holyday: false },
  ];
  const defaultFoodType = ["Breakfast", "Lunch", "Snacks", "Dinner"];

  const [updateProfileValues, setUpdateProfileValues] = useState({
    whole_number:
      get(userData, "country_code", "") + get(userData, "mobile_number", ""),
    country_code: get(userData, "country_code", ""),
    restaurant_images: get(userData, "restaurant_images", []),
    restaurant_name: get(userData, "restaurant_name", ""),
    mobile_number: get(userData, "mobile_number", ""),
    restaurant_location: address
      ? address
      : get(userData, "restaurant_location", ""),
    email: get(userData, "email", ""),
    restaurant_about: get(userData, "restaurant_about", ""),
    document_type: get(userData, "document_type", ""),
    upload_first: get(userData, "upload_first", []),
    // upload_second: get(userData, 'upload_second', "") ? [get(userData, 'upload_second', "")] : [],
    banner_image: get(userData, "banner_image", "")
      ? [get(userData, "banner_image", "")]
      : [],
    categories: get(userData, "categories", []).map((item) => {
      return { label: get(item, "title", ""), value: get(item, "_id", "") };
    }),
    food_type: get(userData, "food_type", []),
    // food_type: get(userData, 'food_type', []).length > 0 ? get(userData, 'food_type', []) : defaultFoodType,
    lat: get(userData, "lat", ""),
    long: get(userData, "long", ""),
    working_hours:
      get(userData, "working_hours", []).length > 0
        ? get(userData, "working_hours", [])
        : defaultWorkingHours,
    service_type: get(userData, "service_type", ""),
    self_pickup_time: get(userData, "self_pickup_time", ""),
    bank_name: get(userData, "bank_detail.bank_name", ""),
    account_holder_name: get(userData, "bank_detail.account_holder_name", ""),
    account_number: get(userData, "bank_detail.account_number", ""),
    re_account_number: get(userData, "bank_detail.account_number", ""),
    ifsc: get(userData, "bank_detail.ifsc", ""),
    is_profile_completed: get(userData, "is_profile_completed", ""),
    city_address: get(userData, "restaurant_address.city", ""),
    // working_hours: get(userData, "working_hours", []) !== []
    //   ? get(userData, "working_hours", []).map((item) => item)
    //   : "",
  });

  // const [center, setCenter] = useState(
  //     {
  //         lat: updateProfileValues.lat,
  //         long: updateProfileValues.long,
  //     }
  // );

  // console.log(updateProfileValues.categories)
  // console.log(selectCuisines)
  // console.log(center);

  const [center, setCenter] = useState({
    lat: 28.699735333299,
    lng: 77.066645622253,
  });

  const handleConfirm = (async) => {
    let modal = { ...modalData };

    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    setUsers("");
    setDefaultState(loginObjOne);
    // setDailogType("");
    modal.type = "success";

    // setUsers(null);
    modal.isOpen = false;
    setModalData(modal);
    navigate(0);
  };

  const handleSignUP = async (values) => {
    var formvalues = {
      owner_name: values.owner_name,
      email: values.email,
      country_code: values.country_code,
      mobile_number: values.mobile_number,
      password: values.password,
    };
    // console.log(formvalues);

    setSignUpformValues({
      ...formvalues,
      confirm_password: values.confirm_password,
    });
    setIsLoading(true);
    // setDefaultState((prevState) => {
    //   return {
    //     ...prevState,
    //     isSignup: false,
    //   };
    // });
    try {
      const { data } = await axios.post("/auth/restaurant/signup", formvalues);
      console.log(data);
      setOtpFormValues({
        country_code: values.country_code,
        mobile_number: values.mobile_number,
      });

      setUpdateProfileValues({
        ...updateProfileValues,
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        country_code: values.country_code,
        mobile_number: values.mobile_number,
        whole_number: values.country_code + values.mobile_number,
      });
      localStorage.setItem(
        "accessToken",
        data.data.accessToken || data.data.access_token
      );
      localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
      setUsers(data.data);
      setUserToken(data.access_token);
      setOtpPhone({
        country_code: values.country_code,
        mobile_number: values.mobile_number,
      });
      setIsLoading(false);
      toast.success(`OTP send to the Registered Mobile Number sucessfully.`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      // setOtpSend(true);
      // setDefaultState(verifyOtpObjOne)
      navigate("/otp");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      //   setDefaultState({
      //     isSignup: true,
      //     isLogin: false,
      //   });
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  console.log(updateProfileValues);

  // console.log(coordinates.lat);
  // console.log(coordinates.lng);
  // console.log(address);

  return (
    <>
      <SignupPage />
      {/*<InfoContainer lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column2>
                            <ImgWrap>
                            </ImgWrap>
                        </Column2>
                        <Column1>
                            <LanguageLogout>
                                <LanguageIcon>
                                    <img src={languageIcon}></img>
                                </LanguageIcon>
                                {(defaultState.form == "restaurantDetailsForm" || defaultState.form == "bankDetailsForm" || defaultState.form == "pendingApproval") ? (
                                    <LogoutIcon>
                                        <img src={logoutIcon} style={{ height: "35px" }} onClick={handleConfirm}></img>
                                    </LogoutIcon>
                                ) : ("")}
                            </LanguageLogout>
                            <TextWrapper
                                contentAlign={defaultState.form == "pendingApproval" ? true : false}
                            >
                                <LoginBox>

                                    <LoginHeading
                                        // contentAlign={defaultState.form == "pendingApproval" ? true : false}
                                    >
                                       
                                        {dictionary.authentication.sign_up}
                                    </LoginHeading>
                                    <LoginPara
                                        textAlign={defaultState.form == "pendingApproval" ? true : false}
                                    >{dictionary.authentication.or_create}  </LoginPara>
                                </LoginBox>
                                <InputBox>
                                        <Formik
                                            enableReinitialize
                                            initialValues={signUpformValues}
                                            validate={signUpValidator}
                                            validateOnChange
                                            onSubmit={handleSignUP}
                                        >
                                            {(formikBag) => {
                                                return (
                                                    <Form className={classes.formStyleOnly}>
                                                        <Field name="owner_name">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        value={formikBag.values.owner_name}
                                                                        icon={NameIcon}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("owner_name", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.owner_name &&
                                                                                formikBag.errors.owner_name
                                                                                ? formikBag.errors.owner_name
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.authentication.full_name_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="phone">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <PhoneInput
                                                                    inputProps={{
                                                                 tabindex:"0"
                                                                }}
                                                                        {...field}
                                                                        country="tr"
                                                                        type="phone"
                                                                        countryCodeEditable={false}
                                                                        value={formikBag.values.whole_number}
                                                                        onChange={(phone, data) => {
                                                                            formikBag.setFieldValue(
                                                                                "country_code",
                                                                                data.format.slice(0, 1) + data.dialCode
                                                                            );
                                                                            formikBag.setFieldValue(
                                                                                "mobile_number",
                                                                                phone.slice(data.dialCode.length)
                                                                            );
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.mobile_number &&
                                                                                formikBag.errors.mobile_number
                                                                                ? formikBag.errors.mobile_number
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="Enter Mobile Number"
                                                                    />
                                                                    {formikBag.errors.mobile_number && (
                                                                        <p
                                                                            style={{
                                                                                paddingTop: 5,
                                                                                fontSize: 13,
                                                                                color: "red",
                                                                            }}
                                                                        >
                                                                            {formikBag.errors.mobile_number}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="email">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        value={formikBag.values.email}
                                                                        icon={EmailIcon}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("email", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.email && formikBag.errors.email
                                                                                ? formikBag.errors.email
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.authentication.email_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="password">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="password"
                                                                        icon={PassIcon}
                                                                        value={formikBag.values.password}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("password", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.password &&
                                                                                formikBag.errors.password
                                                                                ? formikBag.errors.password
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.authentication.password_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="confirm_password">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="password"
                                                                        icon={PassIcon}
                                                                        value={formikBag.values.confirm_password}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("confirm_password", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.confirm_password &&
                                                                                formikBag.errors.confirm_password
                                                                                ? formikBag.errors.confirm_password
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.authentication.confirm_password_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>



                                                        <div className="text-center login_btn_group">
                                                            <LoginButton
                                                                type="submit"
                                                            >
                                                               {dictionary.authentication.sign_up}
                                                            </LoginButton>
                                                        </div>
                                                        <p className="text-center" style={{ padding: "0.3rem" }}>
                                                            <a href="javascript:void()"
                                                                style={{ color: "#777777" }}
                                                                onClick={() => {
                                                                    setDefaultState(loginObjOne)
                                                                }}
                                                            >
                                                                {dictionary.authentication.already_have}?
                                                            </a>
                                                        </p>
                                                        <div className="text-center login_btn_group">
                                                            <LoginButtons
                                                                // type="button"
                                                                // onClick={() => {
                                                                //     setDefaultState(loginObjOne)
                                                                // }}
                                                                primary="true"
                                                                to="/"
                                                            >
                                                                Login
                                                            </LoginButtons>
                                                        </div>
                                                    </Form>
                                                );
                                            }}
                                        </Formik>
                                </InputBox>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
                </InfoContainer>*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoSection);
