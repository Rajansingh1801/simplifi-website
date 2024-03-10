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
import costIcon from "../../images/user-plus.png";
import bikeIcon from "../../images/bicycle.png";
import clockIcon from "../../images/clock-bold.png";
import coinIcon from "../../images/coin_vertical.png";
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
import FileInputsImage from "../FileInputsImage";
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
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAddress(value);
    setCoordinates(ll);
  };

  useEffect(() => {
    dataForCuisines();
  }, []);

  const dataForCuisines = async () => {
    let { data } = await axios.get("/admin-business/get_cuisine");
    setSelectCuisines(
      data.data.map((item) => {
        return { label: item.title, value: item._id };
      })
    );
  };

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
    price_for_two: get(userData, "price_for_two", ""),
    distance_delivery: get(userData, "distance_delivery", ""),
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
    minimum_order: get(userData, "minimum_order", ""),
    start_time: get(userData, "start_time", ""),
    end_time: get(userData, "end_time", ""),
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
    lat: 41.00927389819209,
    lng: 28.975783979345692,
  });

  const handleConfirm = (async) => {
    let modal = { ...modalData };
    if (window.confirm("Are you sure you want to Logout?")) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      setUsers("");
      // setDefaultState(loginObjOne)
      navigate("/");
      // setDailogType("");
      modal.type = "success";

      // setUsers(null);
      modal.isOpen = false;
      setModalData(modal);
      navigate(0);
    } else {
    }
  };

  const handleLogin = async (values, isSocial = false) => {
    // console.log(values)
    setLoginValues(values);
    setIsLoading(true);
    // setDefaultState({
    //     isLogin: false,
    //     isSignup: false,
    //     isProfileUpdate: false,
    // });
    var url = "/auth/restaurant/login";
    var formvalues = {
      country_code: values.country_code,
      mobile_number: values.mobile_number,
      password: values.password,
    };
    // device_token:deviceToken,
    // if(isSocial){
    //   url = "/user/isSocialLogin";
    //   formvalues = {
    //     apple_social_id:values.apple_social_id,
    //     email:values.email,
    //     firstName:values.firstName,
    //     lastName:values.lastName,
    //     profile_image:values.profile_image,
    //     // device_token:deviceToken,
    //   }
    // }
    try {
      const { data } = await axios.post(url, formvalues);
      console.log(data);
      if (data.data.is_verified) {
        localStorage.setItem("accessToken", data.data.access_token);
        localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
        setUsers(data.data);
        // console.log(data);
        if (data.data.is_profile_completed) {
          if (data.data.is_approved_by_admin == "1") {
            navigate("/dashboard");
          } else if (data.data.is_approved_by_admin == "0") {
            setDefaultState(pendingApprovalObjOne);
          } else if (data.data.is_approved_by_admin == "2") {
            setDefaultState(pendingApprovalObjOne);
          }
        } else {
          setUpdateProfileValues({
            ...updateProfileValues,
            email: data.data.email || "",
            owner_name: data.data.owner_name || "",
            mobile_number: data.data.mobile_number || "",
            whole_number:
              data.data.country_code + data.data.mobile_number || "",
            country_code: data.data.country_code || "",
          });
          setDefaultState(restaurantDetailsObjOne);
        }
        // navigate(0);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // setDefaultState((prevState) => {
      //     return {
      //         ...prevState,
      //         isLogin: true,
      //     };
      // });

      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  console.log(updateProfileValues);

  const handleCompleteProfile = async (values) => {
    console.log(values);
    //setLoginValues(values);

    var fromData = {
      restaurant_name: values.restaurant_name,
      restaurant_images: values.restaurant_images,
      document_type: "aadhar",
      country_code: values.country_code,
      mobile_number: values.mobile_number,
      restaurant_location: addresses,
      email: values.email,
      // restaurant_about: "awesome restaurant",
      upload_first: values.upload_first,
      // upload_second: values.upload_second[0],
      banner_image: values.banner_image[0],
      categories: values.categories.map((item) => item.value),
      food_type: values.food_type,
      working_hours: values.working_hours,
      lat: center.lat,
      long: center.lng,
      service_type: values.service_type,
      self_pickup_time: values.self_pickup_time,
      bank_detail: {
        bank_name: values.bank_name,
        account_holder_name: values.account_holder_name,
        account_number: values.account_number,
        ifsc: values.ifsc,
      },
      restaurant_address: {
        city: values.city_address,
      },
      is_profile_completed: "1",
      price_for_two: values.price_for_two,
      restaurant_radious: values.distance_delivery,
      minimum_order: values.minimum_order,
      start_time: values.start_time,
      end_time: values.end_time,
    };
    console.log(fromData);
    // working_hours: "",
    setIsLoading(true);
    // }
    try {
      const { data } = await axios.post(
        "/auth/restaurant/updateProfile",
        fromData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      setUpdateProfileValues({
        ...updateProfileValues,
        restaurant_name: values.restaurant_name,
        restaurant_images: values.restaurant_images,
        document_type: "aadhar",
        country_code: values.country_code,
        mobile_number: values.mobile_number,
        whole_number: values.country_code + values.mobile_number,
        restaurant_location: addresses,
        email: values.email,
        upload_first: values.upload_first,
        upload_second: values.upload_second,
        banner_image: values.banner_image,
        categories: values.categories,
        food_type: values.food_type,
        working_hours: values.working_hours,
        lat: center.lat,
        long: center.lng,
        service_type: values.service_type,
        self_pickup_time: values.self_pickup_time,
        bank_name: get(values, "bank_name", ""),
        account_holder_name: get(values, "account_holder_name", ""),
        account_number: get(values, "account_number", ""),
        ifsc: get(values, "ifsc", ""),
        city_address: get(values, "city", ""),
        distance_delivery: values.distance_delivery,
        minimum_order: values.minimum_order,
        start_time: values.start_time,
        end_time: values.end_time,
      });

      setIsLoading(false);
      if (defaultState.form == "bankDetailsForm") {
        if (data.data.is_verified) {
          localStorage.setItem("accessToken", data.data.access_token);
          localStorage.setItem("userData", JSON.stringify(data.data));
          setUsers(data.data);
          // navigate('/dashboard');
        } else {
          console.log(data.data);
        }
        if (data.data.is_approved_by_admin == "1") {
          localStorage.setItem("accessToken", data.data.access_token);
          navigate("/dashboard");
        } else if (data.data.is_approved_by_admin == "0") {
          setDefaultState(pendingApprovalObjOne);
          // navigate('/pendingApproval')
          // setDefaultState({
          //   isLogin: false,
          //   isSignup: false,
          //   isApproved: true,
          // });
        } else if (data.data.is_approved_by_admin == "2") {
          setDefaultState(pendingApprovalObjOne);
          // navigate('/rejectedApproval')
          // setDefaultState({
          //   isLogin: false,
          //   isSignup: false,
          //   isApproved: false,
          //   isRejected: true,
          // });
        }
      } else {
        localStorage.setItem("accessToken", data.data.access_token);
        localStorage.setItem("userData", JSON.stringify(data.data));
        setUsers(data.data);
        setDefaultState(bankDetailsObjOne);
        // navigate('/bankDetails');
      }
      navigate("/bankfrom");
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      setIsLoading(false);
      //   setDefaultState((prevState) => {
      //     return {
      //       ...prevState,
      //       isProfileUpdate: true,
      //     };
      //   });
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleStatus = async (values) => {
    try {
      const { data } = await axios.get("/auth/restaurant/checkStatus");
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(data);
      if (data.data.is_verified) {
        localStorage.setItem("accessToken", data.data.access_token);
        localStorage.setItem("userData", JSON.stringify(data.data));
        setUsers(data.data);
        // navigate('/dashboard');
      } else {
      }
      if (data.data.is_approved_by_admin == "1") {
        localStorage.setItem("accessToken", data.data.access_token);
        navigate("/dashboard");
      } else if (data.data.is_approved_by_admin == "0") {
        setDefaultState(pendingApprovalObjOne);
        // navigate('/pendingApproval')
        // setDefaultState({
        //   isLogin: false,
        //   isSignup: false,
        //   isApproved: true,
        // });
      } else if (data.data.is_approved_by_admin == "2") {
        setDefaultState(pendingApprovalObjOne);
        // navigate('/rejectedApproval')
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const serviceValueFoodDelivery = (e) => {
    // console.log(JSON.stringify(e));
    if (e == 1 || e == 3) {
      return true;
    } else {
      return false;
    }
  };

  const serviceValueSelfPickUp = (e) => {
    if (e == 2 || e == 3) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(updateProfileValues);

  // Google map

  const mapStyles = {
    height: "30vh",
    width: "100%",
    margin: "auto",
  };

  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  // console.log(currentPosition);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  // useEffect(() => {
  //     window.navigateState(null, document.title, window.location.href);
  //     window.addEventListener('popstate', function (event) {
  //         window.navigateState(null, document.title, window.location.href);
  //     });
  // }, [])

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCenter({ lat, lng });
    Gen_Add();
  };
  const [addresses, setAddresses] = useState(
    get(userData, "restaurant_location", "")
  );

  const Gen_Add = () => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        center.lat +
        "," +
        center.lng +
        "&key=" +
        "AIzaSyAzWEYgzHRBWRwOJktxPWSJr4zTTZyxBdw&libraries"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "ADDRESS GEOCODE is BACK!! => " +
            JSON.stringify(responseJson.results[0].formatted_address).slice(
              1,
              -1
            )
        );
        setAddresses(
          JSON.stringify(responseJson.results[0].formatted_address).slice(1, -1)
        );
      });
  };

  const [zoom, setZoom] = useState(11);

  // console.log(coordinates.lat);
  // console.log(coordinates.lng);
  console.log(center);

  return (
    <div>
      <InfoContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column2>
              <ImgWrap>{/*<Img src={img.default} alt={alt} />*/}</ImgWrap>
            </Column2>
            <Column1>
              <LanguageLogout>
                <LanguageIcon>
                  <img src={languageIcon}></img>
                </LanguageIcon>
                {/* {(defaultState.form == "restaurantDetailsForm" || defaultState.form == "bankDetailsForm" || defaultState.form == "pendingApproval") ? ( */}
                <LogoutIcon>
                  <img
                    src={logoutIcon}
                    style={{ height: "35px" }}
                    onClick={handleConfirm}
                  ></img>
                </LogoutIcon>
                {/* ) : ("")} */}
              </LanguageLogout>
              <TextWrapper
                contentAlign={
                  defaultState.form == "pendingApproval" ? true : false
                }
              >
                <LoginBox>
                  <LoginHeading
                    contentAlign={
                      defaultState.form == "pendingApproval" ? true : false
                    }
                  >
                    {/* <BackIcon>
                                            {(updateProfileValues.is_profile_completed && (defaultState.form == "restaurantDetailsForm" || defaultState.form == "bankDetailsForm")) ? (
                                                <>
                                                    <HeadingButton
                                                        style={{ fontSize: "1.5rem", padding: "0.2em 0.2em", borderRadius: "32px", justifyContent: "center", marginBottom: "0.4em" }}
                                                        onClick={() => {
                                                            setDefaultState(pendingApprovalObjOne)
                                                        }}
                                                    >
                                                        <IoIcons.IoIosArrowRoundBack />
                                                    </HeadingButton>
                                                </>
                                            ) : ""}
                                        </BackIcon> */}
                    {dictionary.restaurant_details_form.restaurant_details}
                  </LoginHeading>
                  <LoginPara
                    textAlign={
                      defaultState.form == "pendingApproval" ? true : false
                    }
                  >
                    {" "}
                  </LoginPara>
                </LoginBox>
                <InputBox>
                  <Formik
                    enableReinitialize
                    initialValues={updateProfileValues}
                    validate={completeProfileValidator}
                    validateOnChange
                    onSubmit={handleCompleteProfile}
                  >
                    {(formikBag) => {
                      return (
                        <Form className={classes.formStyle}>
                          <div className="col-md-12">
                            <label>
                              {dictionary.restaurant_details_form.banner_image}
                            </label>
                            <Field name="banner_image">
                              {({ field }) => (
                                <div className="py-2">
                                  <FileInputsImage
                                    id="banner_image"
                                    limit="1"
                                    dictionary="dictionary"
                                    images={formikBag.values.banner_image}
                                    onDelete={(image) => {
                                      var images = [
                                        ...formikBag.values.banner_image,
                                      ];
                                      images.splice(images.indexOf(image), 1);
                                      formikBag.setFieldValue(
                                        "banner_image",
                                        images
                                      );
                                    }}
                                    type="text"
                                    label="upload_products_facility_photos"
                                    info="eg_img"
                                    onChange={async (e) => {
                                      const fileSize =
                                        e.target.files[0].size / 1024 / 1024; // in MiB
                                      if (fileSize > 2) {
                                        alert(
                                          "Image size should not exceed 2MB"
                                        );
                                        // $(file).val(''); //for clearing with Jquery
                                      } else {
                                        setIsLoading(true);
                                        var image = await uploadImage(
                                          e.target.files[0]
                                        );
                                        var images = [
                                          ...formikBag.values.banner_image,
                                        ];
                                        images.push(image.path);
                                        formikBag.setFieldValue(
                                          "banner_image",
                                          images
                                        );

                                        setIsLoading(false);
                                      }
                                    }}
                                    error={
                                      formikBag.touched.banner_image &&
                                      formikBag.errors.banner_image
                                        ? formikBag.errors.banner_image
                                        : null
                                    }
                                  />
                                  {formikBag.errors.banner_image && (
                                    <p
                                      style={{
                                        paddingTop: 5,
                                        fontSize: 13,
                                        color: "red",
                                      }}
                                    >
                                      {formikBag.errors.banner_image}
                                    </p>
                                  )}
                                </div>
                              )}
                            </Field>
                          </div>
                          <LabelHeading>
                            {
                              dictionary.restaurant_details_form
                                .add_restaurant_images
                            }
                          </LabelHeading>
                          <div className="col-md-12">
                            <Field name="restaurant_images">
                              {({ field }) => (
                                <div className="py-2">
                                  <FileInput
                                    id="facility_images"
                                    limit="5"
                                    dictionary="dictionary"
                                    images={formikBag.values.restaurant_images}
                                    onDelete={(image) => {
                                      var images = [
                                        ...formikBag.values.restaurant_images,
                                      ];
                                      images.splice(images.indexOf(image), 1);
                                      formikBag.setFieldValue(
                                        "restaurant_images",
                                        images
                                      );
                                    }}
                                    type="text"
                                    label="upload_products_facility_photos"
                                    info="eg_img"
                                    onChange={async (e) => {
                                      const fileSize =
                                        e.target.files[0].size / 1024 / 1024; // in MiB
                                      if (fileSize > 2) {
                                        alert(
                                          "Image size should not exceed 2MB"
                                        );
                                        // $(file).val(''); //for clearing with Jquery
                                      } else {
                                        setIsLoading(true);
                                        var image = await uploadImage(
                                          e.target.files[0]
                                        );
                                        var images = [
                                          ...formikBag.values.restaurant_images,
                                        ];
                                        images.push(image.path);
                                        formikBag.setFieldValue(
                                          "restaurant_images",
                                          images
                                        );

                                        setIsLoading(false);
                                      }
                                    }}
                                    error={
                                      formikBag.touched.restaurant_images &&
                                      formikBag.errors.restaurant_images
                                        ? formikBag.errors.restaurant_images
                                        : null
                                    }
                                  />
                                </div>
                              )}
                            </Field>
                          </div>

                          <Field name="restaurant_name">
                            {({ field }) => (
                              <div className="py-2">
                                <Input
                                  {...field}
                                  type="text"
                                  value={formikBag.values.restaurant_name}
                                  icon={RestaurantIcon}
                                  onChange={(e) => {
                                    formikBag.setFieldValue(
                                      "restaurant_name",
                                      e.target.value
                                    );
                                    console.log(formikBag.values);
                                  }}
                                  error={
                                    formikBag.touched.restaurant_name &&
                                    formikBag.errors.restaurant_name
                                      ? formikBag.errors.restaurant_name
                                      : null
                                  }
                                  className="form-control"
                                  placeholder={
                                    dictionary.restaurant_details_form
                                      .restaurant_name_ph
                                  }
                                />
                              </div>
                            )}
                          </Field>
                          <Field name="price_for_two">
                            {({ field }) => (
                              <div className="py-2">
                                <Input
                                  {...field}
                                  type="number"
                                  min="0"
                                  value={formikBag.values.price_for_two}
                                  icon={costIcon}
                                  onChange={(e) => {
                                    formikBag.setFieldValue(
                                      "price_for_two",
                                      e.target.value
                                    );
                                    console.log(formikBag.values);
                                  }}
                                  error={
                                    formikBag.touched.price_for_two &&
                                    formikBag.errors.price_for_two
                                      ? formikBag.errors.price_for_two
                                      : null
                                  }
                                  className="form-control"
                                  placeholder={
                                    dictionary.restaurant_details_form
                                      .average_cost_ph
                                  }
                                />
                              </div>
                            )}
                          </Field>
                          <Field name="minimum_order">
                            {({ field }) => (
                              <div className="py-2">
                                <Input
                                  {...field}
                                  type="number"
                                  min="0"
                                  value={formikBag.values.minimum_order}
                                  icon={coinIcon}
                                  onChange={(e) => {
                                    formikBag.setFieldValue(
                                      "minimum_order",
                                      e.target.value
                                    );
                                    console.log(formikBag.values);
                                  }}
                                  error={
                                    formikBag.touched.minimum_order &&
                                    formikBag.errors.minimum_order
                                      ? formikBag.errors.minimum_order
                                      : null
                                  }
                                  className="form-control"
                                  placeholder={
                                    dictionary.restaurant_details_form
                                      .min_amount_ph
                                  }
                                />
                              </div>
                            )}
                          </Field>
                          <Field name="distance_delivery">
                            {({ field }) => (
                              <div className="py-2">
                                <Input
                                  {...field}
                                  type="number"
                                  min="0"
                                  value={formikBag.values.distance_delivery}
                                  icon={bikeIcon}
                                  onChange={(e) => {
                                    formikBag.setFieldValue(
                                      "distance_delivery",
                                      e.target.value
                                    );
                                    console.log(formikBag.values);
                                  }}
                                  error={
                                    formikBag.touched.distance_delivery &&
                                    formikBag.errors.distance_delivery
                                      ? formikBag.errors.distance_delivery
                                      : null
                                  }
                                  className="form-control"
                                  placeholder={
                                    dictionary.restaurant_details_form
                                      .enter_delivery_distance
                                  }
                                />
                              </div>
                            )}
                          </Field>
                          <Field name="phone">
                            {({ field }) => (
                              <div className="py-2">
                                <PhoneInput
                                  style={{ cursor: "not-allowed" }}
                                  {...field}
                                  country="tr"
                                  type="phone"
                                  disabled
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

                          <Field name="restaurant_location">
                            {({ field }) => (
                              <div className="py-2">
                                <div className={`input_box borderBottom`}>
                                  <SearchIcon>
                                    <img src={LocationIcon}></img>
                                  </SearchIcon>
                                  <PlacesAutocomplete
                                    value={addresses}
                                    onChange={(e) => {
                                      // console.log(e);
                                      formikBag.setFieldValue("lat", "");
                                      formikBag.setFieldValue("long", "");
                                      formikBag.setFieldValue(
                                        "restaurant_location",
                                        e
                                      );
                                      setAddresses(e);
                                    }}
                                    onSelect={async (value) => {
                                      const results = await geocodeByAddress(
                                        value
                                      );
                                      const ll = await getLatLng(results[0]);
                                      console.log(ll);
                                      console.log(results);
                                      setCenter({ lat: ll.lat, lng: ll.lng });
                                      setAddresses(value);
                                      // formikBag.setFieldValue("restaurant_location", value);
                                      // formikBag.setFieldValue("lat", ll.lat);
                                      // formikBag.setFieldValue("long", ll.lng);
                                      // setCoordinates(ll)
                                    }}
                                  >
                                    {({
                                      getInputProps,
                                      suggestions,
                                      getSuggestionItemProps,
                                      loading,
                                    }) => (
                                      <div style={{ width: "100%" }}>
                                        <input
                                          {...getInputProps({
                                            placeholder:
                                              dictionary.restaurant_details_form
                                                .enter_restaurant_location,
                                            className: "location-search-input",
                                          })}
                                          className="form-control"
                                        />
                                        <div className="autocomplete-dropdown-container location-dropdown">
                                          {loading && <div>Loading...</div>}
                                          {suggestions.map((suggestion) => {
                                            const className = suggestion.active
                                              ? "suggestion-item--active"
                                              : "suggestion-item";
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                              ? {
                                                  backgroundColor: "#fafafa",
                                                  cursor: "pointer",
                                                }
                                              : {
                                                  backgroundColor: "#ffffff",
                                                  cursor: "pointer",
                                                };
                                            return (
                                              <div
                                                {...getSuggestionItemProps(
                                                  suggestion,
                                                  {
                                                    className,
                                                    style,
                                                  }
                                                )}
                                              >
                                                <span>
                                                  {suggestion.description}
                                                </span>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    )}
                                  </PlacesAutocomplete>
                                </div>
                                {/* {formikBag.errors.restaurant_location && (
                                                                        <p
                                                                            style={{
                                                                                paddingTop: 5,
                                                                                fontSize: 13,
                                                                                color: "red",
                                                                            }}
                                                                        >
                                                                            {formikBag.errors.restaurant_location}
                                                                        </p>
                                                                    )} */}
                                {/*<Input
                                                                        {...field}
                                                                        type="text"
                                                                        value={formikBag.values.restaurant_location}
                                                                        icon={LocationIcon}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("restaurant_location", e.target.value);
                                                                        }}
                                                                        
                                                                        placeholder=""
                                                                    />*/}
                              </div>
                            )}
                          </Field>
                          {/* <div style={{ height: '30vh', width: 'auto' }}>
                                                            <GoogleMapReact
                                                                // defaultCenter={center}
                                                                center={center}
                                                                defaultZoom={zoom}
                                                            >
                                                                <Markers
                                                                    lat={center.lat}
                                                                    lng={center.lng}
                                                                    name="My Marker"
                                                                    color="blue"
                                                                />
                                                            </GoogleMapReact>
                                                        </div> */}
                          <div style={{ height: "30vh", width: "auto" }}>
                            <GoogleMap
                              mapContainerStyle={mapStyles}
                              zoom={13}
                              center={center}
                            >
                              {center.lat ? (
                                <Marker
                                  position={center}
                                  onChange={Gen_Add}
                                  onDragEnd={(e) => onMarkerDragEnd(e)}
                                  draggable={true}
                                />
                              ) : null}
                            </GoogleMap>
                          </div>
                          <div className="col-md-12">
                            <label>
                              {dictionary.restaurant_details_form.latitude}
                            </label>
                            <Field name="lat">
                              {({ field }) => (
                                <div className="py-2">
                                  <Input
                                    style={{ cursor: "not-allowed" }}
                                    {...field}
                                    type="text"
                                    value={center.lat}
                                    // icon="Lat"
                                    disabled
                                    className="form-control"
                                  />
                                </div>
                              )}
                            </Field>
                            <label>
                              {dictionary.restaurant_details_form.longitude}
                            </label>
                            <Field name="lng">
                              {({ field }) => (
                                <div className="py-2">
                                  <Input
                                    style={{ cursor: "not-allowed" }}
                                    {...field}
                                    type="text"
                                    value={center.lng}
                                    // icon={LocationIcon}
                                    disabled
                                    className="form-control"
                                  />
                                </div>
                              )}
                            </Field>
                            {/* <label>City</label> */}
                          </div>
                          {/* <Field name="city_address">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        value={formikBag.values.city_address}
                                                                        // icon={RestaurantIcon}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("city_address", e.target.value);
                                                                            console.log(formikBag.values.city_address);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.city_address && formikBag.errors.city_address
                                                                                ? formikBag.errors.city_address
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="City"
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field> */}
                          <Field name="email">
                            {({ field }) => (
                              <div className="py-2">
                                <Input
                                  style={{ cursor: "not-allowed" }}
                                  {...field}
                                  type="text"
                                  value={formikBag.values.email}
                                  icon={EmailIcon}
                                  disabled
                                  onChange={(e) => {
                                    formikBag.setFieldValue(
                                      "email",
                                      e.target.value
                                    );
                                  }}
                                  error={
                                    formikBag.touched.email &&
                                    formikBag.errors.email
                                      ? formikBag.errors.email
                                      : null
                                  }
                                  className="form-control"
                                  placeholder="Enter E-mail ID"
                                />
                              </div>
                            )}
                          </Field>
                          <Field name="start_time">
                            {({ field }) => (
                              <div className="py-2">
                                <Input
                                  {...field}
                                  type="time"
                                  value={formikBag.values.start_time}
                                  icon={clockIcon}
                                  onChange={(e) => {
                                    formikBag.setFieldValue(
                                      "start_time",
                                      e.target.value
                                    );
                                  }}
                                  error={
                                    formikBag.touched.start_time &&
                                    formikBag.errors.start_time
                                      ? formikBag.errors.start_time
                                      : null
                                  }
                                  className="form-control"
                                  placeholder="Select opening time"
                                />
                              </div>
                            )}
                          </Field>
                          <Field name="end_time">
                            {({ field }) => (
                              <div className="py-2">
                                <Input
                                  {...field}
                                  type="time"
                                  value={formikBag.values.end_time}
                                  icon={clockIcon}
                                  onChange={(e) => {
                                    formikBag.setFieldValue(
                                      "end_time",
                                      e.target.value
                                    );
                                  }}
                                  error={
                                    formikBag.touched.end_time &&
                                    formikBag.errors.end_time
                                      ? formikBag.errors.end_time
                                      : null
                                  }
                                  className="form-control"
                                  placeholder="Select closing time"
                                />
                              </div>
                            )}
                          </Field>
                          <LabelHeading>
                            {
                              dictionary.restaurant_details_form
                                .restaurant_verification
                            }
                          </LabelHeading>
                          <div className="col-md-12">
                            <label>
                              {
                                dictionary.restaurant_details_form
                                  .upload_business_documents
                              }
                            </label>
                            <Field name="front_image">
                              {({ field }) => (
                                <div className="py-2">
                                  <FileInputs
                                    id="front_images"
                                    limit="1"
                                    dictionary="dictionary"
                                    images={formikBag.values.upload_first}
                                    onDelete={(image) => {
                                      var images = [
                                        ...formikBag.values.upload_first,
                                      ];
                                      images.splice(images.indexOf(image), 1);
                                      formikBag.setFieldValue(
                                        "upload_first",
                                        images
                                      );
                                    }}
                                    type="text"
                                    label="upload_products_facility_photos"
                                    info="eg_img"
                                    onChange={async (e) => {
                                      const fileSize =
                                        e.target.files[0].size / 1024 / 1024; // in MiB
                                      if (fileSize > 2) {
                                        alert("Max limit 2MB");
                                        // $(file).val(''); //for clearing with Jquery
                                      } else {
                                        setIsLoading(true);
                                        var image = await uploadImage(
                                          e.target.files[0]
                                        );
                                        var images = [
                                          ...formikBag.values.upload_first,
                                        ];
                                        images.push(image.path);
                                        formikBag.setFieldValue(
                                          "upload_first",
                                          images
                                        );
                                        console.log(image.path);
                                        setIsLoading(false);
                                      }
                                    }}
                                    error={
                                      formikBag.touched.upload_first &&
                                      formikBag.errors.upload_first
                                        ? formikBag.errors.upload_first
                                        : null
                                    }
                                  />
                                </div>
                              )}
                            </Field>
                          </div>
                          {/* <div className="col-md-12">
                                                            <label>Upload Picture (Proof of Business)(Back Image)</label>
                                                            <Field name="back_image">
                                                                {({ field }) => (
                                                                    <div className="py-2">

                                                                        <FileInputs
                                                                            id="back_images"
                                                                            limit="1"
                                                                            dictionary="dictionary"
                                                                            images={formikBag.values.upload_second}
                                                                            onDelete={(image) => {
                                                                                var images = [...formikBag.values.upload_second];

                                                                                images.splice(images.indexOf(image), 1);
                                                                                formikBag.setFieldValue('upload_second', images)

                                                                            }}
                                                                            type="text"
                                                                            label="upload_products_facility_photos"
                                                                            info="eg_img"
                                                                            onChange={async (e) => {
                                                                                const fileSize = e.target.files[0].size / 1024 / 1024; // in MiB
                                                                                if (fileSize > 2) {
                                                                                    alert("ex_2mb");
                                                                                    // $(file).val(''); //for clearing with Jquery
                                                                                } else {
                                                                                    setIsLoading(true);
                                                                                    var image = await uploadImage(e.target.files[0]);
                                                                                    var images = [...formikBag.values.upload_second];
                                                                                    images.push(image.path);
                                                                                    formikBag.setFieldValue('upload_second', images)

                                                                                    setIsLoading(false);
                                                                                }
                                                                            }}
                                                                            error={
                                                                                formikBag.touched.upload_second &&
                                                                                    formikBag.errors.upload_second
                                                                                    ? formikBag.errors.upload_second
                                                                                    : null
                                                                            }
                                                                        />
                                                                    </div>
                                                                )}
                                                            </Field>
                                                        </div> */}

                          <LabelHeading>
                            {
                              dictionary.restaurant_details_form
                                .cuisine_categories
                            }
                          </LabelHeading>
                          <Field name="categories">
                            {({ field }) => (
                              <div className="py-2">
                                <Select
                                  isMulti
                                  // className="cm-select"
                                  value={formikBag.values.categories}
                                  options={selectCuisines}
                                  onChange={(option) => {
                                    formikBag.setFieldValue(
                                      "categories",
                                      option
                                    );
                                    console.log(formikBag.values.categories);
                                  }}
                                  error={
                                    formikBag.touched.categories &&
                                    formikBag.errors.categories
                                      ? formikBag.errors.categories
                                      : null
                                  }
                                  // className="form-control"
                                  placeholder="Cuisines"
                                />
                              </div>
                            )}
                          </Field>

                          {/* <LabelHeading>Food Type</LabelHeading>
                                                    <SelectServiceBox>
                                                        {defaultFoodType.map((item, index) => {
                                                            // console.log(item);
                                                            return (
                                                                <>
                                                                    <Field name={item}>
                                                                        {({ field }) => (
                                                                            <div className="py-2" style={{ display: "flex", alignItems: "center" }}>
                                                                                <Input
                                                                                    {...field}
                                                                                    type="checkbox"
                                                                                    // value={true}
                                                                                    // checked={(formikBag.values.food_type) => {
                                                                                    //     console.log(formikBag.values.food_type)
                                                                                    //     // if(formikBag.values.food_type.includes())
                                                                                    // }}
                                                                                    onChange={(e) => {
                                                                                        // console.log(e)
                                                                                        // formikBag.values.food_type.push(item)
                                                                                        let presentArray = formikBag.values.food_type;
                                                                                        const lowercase = presentArray.map(name => name.toLowerCase());
                                                                                        let OriginalArray = item.toLowerCase();
                                                                                        // console.log(presentArray);
                                                                                        // console.log(lowercase);
                                                                                        // console.log(OriginalArray);
                                                                                        if (lowercase.includes(OriginalArray)) {
                                                                                            let arr = lowercase;
                                                                                            console.log(arr);
                                                                                            let newArray = arr.filter((value) => value != item.toLowerCase());
                                                                                            console.log(newArray);
                                                                                            // arr.splice(0,1)
                                                                                            formikBag.setFieldValue("food_type", newArray)
                                                                                            // console.log("element hata do");
                                                                                        } else {
                                                                                            let arr = formikBag.values.food_type;
                                                                                            console.log(arr);
                                                                                            arr.push(item)
                                                                                            formikBag.setFieldValue("food_type", arr)
                                                                                            // console.log("element add kar do")
                                                                                        }
                                                                                        // console.log(formikBag.values.food_type)
                                                                                    }}
                                                                                    checked={checkChecked(formikBag.values.food_type, item)}
                                                                                    noBorderBottom={true}
                                                                                />
                                                                                <LabelPara>
                                                                                    {item}
                                                                                </LabelPara>
                                                                            </div>
                                                                        )}
                                                                    </Field>
                                                                </>
                                                            )
                                                        })}
                                                    </SelectServiceBox>
                                                    {formikBag.errors.food_type && (
                                                        <p
                                                            style={{
                                                                paddingTop: 5,
                                                                fontSize: 13,
                                                                color: "red",
                                                            }}
                                                        >
                                                            {formikBag.errors.food_type}
                                                        </p>
                                                    )} */}
                          {/*<SelectServiceBox>
                                                            <Field name="breakfast">
                                                                {({ field }) => (
                                                                    <div className="py-2" style={{ display: "flex", alignItems: "center" }}>
                                                                        <Input
                                                                            {...field}
                                                                            type="checkbox"
                                                                            // value={formikBag.values.terms}
                                                                            onChange={(e) => {
                                                                                formikBag.setFieldValue(
                                                                                    "terms",
                                                                                    !formikBag.values.terms
                                                                                );
                                                                            }}
                                                                        />
                                                                        <LabelPara>
                                                                            Breakfast
                                                                        </LabelPara>
                                                                    </div>
                                                                )}
                                                            </Field>
                                                            <Field name="lunch">
                                                                {({ field }) => (
                                                                    <div className="py-2" style={{ display: "flex", alignItems: "center" }}>
                                                                        <Input
                                                                            {...field}
                                                                            type="checkbox"
                                                                            // value={formikBag.values.terms}
                                                                            onChange={(e) => {
                                                                                formikBag.setFieldValue(
                                                                                    "terms",
                                                                                    !formikBag.values.terms
                                                                                );
                                                                            }}
                                                                        />
                                                                        <LabelPara>
                                                                            Lunch
                                                                        </LabelPara>
                                                                    </div>
                                                                )}
                                                            </Field>
                                                            <Field name="snacks">
                                                                {({ field }) => (
                                                                    <div className="py-2" style={{ display: "flex", alignItems: "center" }}>
                                                                        <Input
                                                                            {...field}
                                                                            type="checkbox"
                                                                            // value={formikBag.values.terms}
                                                                            onChange={(e) => {
                                                                                formikBag.setFieldValue(
                                                                                    "terms",
                                                                                    !formikBag.values.terms
                                                                                );
                                                                            }}
                                                                        />
                                                                        <LabelPara>
                                                                            Snacks
                                                                        </LabelPara>
                                                                    </div>
                                                                )}
                                                            </Field>
                                                            <Field name="dinner">
                                                                {({ field }) => (
                                                                    <div className="py-2" style={{ display: "flex", alignItems: "center" }}>
                                                                        <Input
                                                                            {...field}
                                                                            type="checkbox"
                                                                            // value={formikBag.values.terms}
                                                                            onChange={(e) => {
                                                                                formikBag.setFieldValue(
                                                                                    "terms",
                                                                                    !formikBag.values.terms
                                                                                );
                                                                            }}
                                                                        />
                                                                        <LabelPara>
                                                                            Dinner
                                                                        </LabelPara>
                                                                    </div>
                                                                )}
                                                            </Field>
                                                        </SelectServiceBox>*/}
                          {/* <LabelHeading>Select Business Days & Hours</LabelHeading>
                                                        {formikBag.values.working_hours.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <ProfileDayTime
                                                                        error={
                                                                            formikBag.touched.working_hours &&
                                                                                formikBag.errors.working_hours
                                                                                ? formikBag.errors.working_hours
                                                                                : null
                                                                        }
                                                                    >
                                                                        <FormControlLabel value={item.day} control={<Radio
                                                                            onClick={() => {
                                                                                var cloneState = [...formikBag.values.working_hours];
                                                                                cloneState[index].is_holyday = !cloneState[index].is_holyday
                                                                                console.log(cloneState)
                                                                                formikBag.setFieldValue('working_hours', cloneState)
                                                                                if (updateProfileValues.working_hours[index].is_holyday == false) {
                                                                                    var cloneStateD = [...formikBag.values.working_hours];
                                                                                    console.log(cloneStateD)
                                                                                    cloneStateD[index].start_time = "";
                                                                                    cloneStateD[index].end_time = "";
                                                                                    formikBag.setFieldValue('working_hours', cloneStateD)

                                                                                    // formikBag.setFieldValue(
                                                                                    //   "working_hours",
                                                                                    //   {
                                                                                    //     day: null,
                                                                                    //     start_time: null,
                                                                                    //     end_time: null
                                                                                    //   }
                                                                                    // );
                                                                                }

                                                                            }}
                                                                            checked={updateProfileValues.working_hours[index].is_holyday || item.is_holyday}
                                                                        />}
                                                                            label={item.day}
                                                                        />
                                                                        <ProfileTime>

                                                                            <Field name="start_time">
                                                                                {({ field }) => (
                                                                                    <div className="py-2" style={{ width: "40%", marginRight: "0.5rem" }}>
                                                                                        <TimeInput
                                                                                            // selected={
                                                                                            //   // "2021-11-01T07:45:00.236Z"
                                                                                            //   // formikBag.values.working_hours[index].start_time
                                                                                            //   // formikBag.values.start_time
                                                                                            //   // defaultWorkingHours[index].start_time
                                                                                            //   // get(formikBag.values, "working_hours[index].start_time")
                                                                                            // }
                                                                                            // selected={formikBag.values.working_hours[index].start_time || null}
                                                                                            // value={"1590757517834"}
                                                                                            value={formikBag.values.working_hours[index].start_time}
                                                                                            onChange={(date) => {
                                                                                                var cloneState = [...formikBag.values.working_hours];
                                                                                                const event = new Date(date).toLocaleTimeString('en-US');
                                                                                                cloneState[index].start_time = event;
                                                                                                console.log(cloneState)
                                                                                                formikBag.setFieldValue("working_hours", cloneState)
                                                                                                console.log(formikBag.values.working_hours[index].start_time);
                                                                                            }}
                                                                                            disabled={!formikBag.values.working_hours[index].is_holyday}
                                                                                            selectsStart
                                                                                            showTimeSelect
                                                                                            showTimeSelectOnly
                                                                                            timeIntervals={15}
                                                                                            timeCaption="Time"
                                                                                            dateFormat="h:mm aa"
                                                                                            className="form-control"
                                                                                            placeholderText="Open"
                                                                                            error={
                                                                                                formikBag.touched.mondayStart &&
                                                                                                    formikBag.errors.mondayStart
                                                                                                    ? formikBag.errors.mondayStart
                                                                                                    : null
                                                                                            }
                                                                                        />

                                                                                    </div>
                                                                                )}
                                                                            </Field>

                                                                            <Field name="end_time">
                                                                                {({ field }) => (
                                                                                    <div className="py-2" style={{ width: "40%" }}>
                                                                                        <TimeInput
                                                                                            value={formikBag.values.working_hours[index].end_time}
                                                                                            onChange={(date) => {
                                                                                                var cloneState = [...formikBag.values.working_hours];
                                                                                                const event = new Date(date).toLocaleTimeString('en-US');
                                                                                                cloneState[index].end_time = event;
                                                                                                console.log(cloneState)
                                                                                                formikBag.setFieldValue("working_hours", cloneState)
                                                                                                console.log(formikBag.values.working_hours[index].end_time);
                                                                                            }}
                                                                                            disabled={!formikBag.values.working_hours[index].is_holyday}
                                                                                            selectsStart
                                                                                            showTimeSelect
                                                                                            showTimeSelectOnly
                                                                                            timeIntervals={15}
                                                                                            timeCaption="Time"
                                                                                            dateFormat="h:mm aa"
                                                                                            className="form-control"
                                                                                            placeholderText="Close"
                                                                                            error={
                                                                                                formikBag.touched.mondayEnd &&
                                                                                                    formikBag.errors.mondayEnd
                                                                                                    ? formikBag.errors.mondayEnd
                                                                                                    : null
                                                                                            }
                                                                                        />

                                                                                    </div>
                                                                                )}
                                                                            </Field>
                                                                        </ProfileTime>
                                                                    </ProfileDayTime>
                                                                </>
                                                            )
                                                        })}
                                                        {formikBag.errors.working_hours && (
                                                            <p
                                                                style={{
                                                                    paddingTop: 5,
                                                                    fontSize: 13,
                                                                    color: "red",
                                                                }}
                                                            >
                                                                {formikBag.errors.working_hours}
                                                            </p>
                                                        )} */}

                          <LabelHeading>
                            {dictionary.restaurant_details_form.select_service}
                          </LabelHeading>
                          <SelectServiceBox
                            style={{ justifyContent: "space-between" }}
                          >
                            <div style={{ display: "flex" }}>
                              <Field name="service_type_food_delivery">
                                {({ field }) => (
                                  <div
                                    className="py-2"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Input
                                      {...field}
                                      type="checkbox"
                                      // value={serviceValueFoodDelivery(formikBag.values.service_type)}
                                      onChange={(e) => {
                                        if (
                                          formikBag.values.service_type == 1
                                        ) {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            ""
                                          );
                                        } else if (
                                          formikBag.values.service_type == 2
                                        ) {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            3
                                          );
                                        } else if (
                                          formikBag.values.service_type == 3
                                        ) {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            2
                                          );
                                        } else {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            1
                                          );
                                          formikBag.setFieldValue(
                                            "self_pickup_time",
                                            ""
                                          );
                                        }
                                      }}
                                      checked={serviceValueFoodDelivery(
                                        formikBag.values.service_type
                                      )}
                                      noBorderBottom={true}
                                    />
                                    <LabelPara>
                                      {
                                        dictionary.restaurant_details_form
                                          .food_delivery
                                      }
                                    </LabelPara>
                                  </div>
                                )}
                              </Field>
                              <Field name="service_type_self_pickup">
                                {({ field }) => (
                                  <div
                                    className="py-2"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Input
                                      {...field}
                                      type="checkbox"
                                      // value={serviceValueSelfPickUp(formikBag.values.service_type)}
                                      onChange={(e) => {
                                        if (
                                          formikBag.values.service_type == 2
                                        ) {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            ""
                                          );
                                        } else if (
                                          formikBag.values.service_type == 1
                                        ) {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            3
                                          );
                                        } else if (
                                          formikBag.values.service_type == 3
                                        ) {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            1
                                          );
                                          formikBag.setFieldValue(
                                            "self_pickup_time",
                                            ""
                                          );
                                        } else {
                                          formikBag.setFieldValue(
                                            "service_type",
                                            2
                                          );
                                        }
                                      }}
                                      checked={serviceValueSelfPickUp(
                                        formikBag.values.service_type
                                      )}
                                      noBorderBottom={true}
                                    />
                                    <LabelPara>
                                      {
                                        dictionary.restaurant_details_form
                                          .self_pickUp
                                      }
                                    </LabelPara>
                                  </div>
                                )}
                              </Field>
                            </div>
                            {/* {(formikBag.values.service_type == 2 || formikBag.values.service_type == 3) ? (
                                                                <Field name="self_pickup_time">
                                                                    {({ field }) => (
                                                                        <div className="py-2" style={{ width: "25%" }}>
                                                                            <TimeInput
                                                                                value={formikBag.values.self_pickup_time}
                                                                                onChange={(date) => {
                                                                                    const event = new Date(date).toLocaleTimeString('en-US');
                                                                                    formikBag.setFieldValue("self_pickup_time", event)
                                                                                }}
                                                                                // disabled={!formikBag.values.self_pickup_time}
                                                                                selectsStart
                                                                                showTimeSelect
                                                                                showTimeSelectOnly
                                                                                timeIntervals={15}
                                                                                timeCaption="Time"
                                                                                dateFormat="h:mm aa"
                                                                                className="form-control"
                                                                                placeholderText="Select Time"
                                                                                error={
                                                                                    formikBag.touched.self_pickup_time &&
                                                                                        formikBag.errors.self_pickup_time
                                                                                        ? formikBag.errors.self_pickup_time
                                                                                        : null
                                                                                }
                                                                            />

                                                                        </div>
                                                                    )}
                                                                </Field>
                                                            ) : ("")} */}
                          </SelectServiceBox>
                          {formikBag.errors.service_type && (
                            <p
                              style={{
                                paddingTop: 5,
                                fontSize: 13,
                                color: "red",
                              }}
                            >
                              {formikBag.errors.service_type}
                            </p>
                          )}

                          <div className="text-center login_btn_group">
                            <LoginButton type="submit" primary="true">
                              {dictionary.restaurant_details_form.next}
                            </LoginButton>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </InputBox>
                {/*<LoginButtons>

                                </LoginButtons>*/}
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      {isLoading && <Overlay />}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoSection);
