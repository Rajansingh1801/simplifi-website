import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';


// import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, ImgWrap, Img, LoginBox, LoginHeading, LoginPara, InputBox, LoginButtons, LoginButton, LabelHeading, LabelPara, SelectServiceBox, LanguageLogout, LanguageIcon, LogoutIcon, SearchIcon } from './LoginElements'
import { Formik, Field, Form } from "formik";
import Input from "../Input";
// import { IconUser, IconEmail } from '../SvgElements'
import PassIcon from '../../images/password.png'
import NameIcon from '../../images/name.png'
import EmailIcon from '../../images/email.png'
import LocationIcon from '../../images/address.png'
import RestaurantIcon from '../../images/restaurant.png'
import languageIcon from '../../images/languageBlack.png'
import logoutIcon from '../../images/logout.png'
import PhoneInput from "react-phone-input-2";
import Overlay from '../Overlay'
import axios from "../../axios";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { get } from "lodash";
import FormControlLabel from '@mui/material/FormControlLabel';
import { ProfileTime, ProfileDayTime } from './LoginElements'
import Radio from '@mui/material/Radio';
import TimeInput from '../TimeInput';
import FileInput from "../FileInput";
import FileInputs from "../FileInputs";
import { uploadImage } from "../../utils/functions";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import Select from "../Select";
import * as IoIcons from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';

import {
    signUpValidator,
    loginValidator,
    forgetValidator,
    otpValidator,
    resetOutValidator,
    completeProfileValidator,
    bankDetailsValidator
} from "../../utils/validators";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { loginObjOne, signUpObjOne, forgotObjOne, resetObjOne, restaurantDetailsObjOne, bankDetailsObjOne, verifyOtpObjOne, pendingApprovalObjOne } from './Data'

import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import './locationdropdown.css';

import Markers from './Marker';
import GoogleMapReact from 'google-map-react';
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
        }
    },
    "@media (max-width: 480px)": {
        formStyle: {
            padding: "1.3rem",
        },
        formStyleOnly: {
            padding: "1.3rem",
        }
    },

    formStyleOnly: {
        width: "100%",
        padding: "2rem",
        height: "80vh",
        overflow: "scroll",
    },

}));



const InfoSection = ({ lightBg, imgStart, img, pageHeading, pagePara, form, history, setUsers, userData, defaultState, setDefaultState, }) => {
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
    const [selectCuisines, setSelectCuisines] = useState()
    const [modalData, setModalData] = useState({
        isOpen: false,
        header: "success_message",
        message: "Your add will post Shortly",
    });
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const ll = await getLatLng(results[0]);
        console.log(ll);
        setAddress(value);
        setCoordinates(ll)
    }

    useEffect(() => {
        dataForCuisines();
    }, [])



    const dataForCuisines = async () => {
        let { data } = await axios.get("/admin-business/get_cuisine");
        setSelectCuisines(
            data.data.map((item) => {
                return { label: item.title, value: item._id };
            })
        )
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
        { "day": "Monday", "start_time": "", "end_time": "", "is_holyday": false },
        { "day": "Tuesday", "start_time": "", "end_time": "", "is_holyday": false },
        { "day": "WednesDay", "start_time": "", "end_time": "", "is_holyday": false },
        { "day": "Thursday", "start_time": "", "end_time": "", "is_holyday": false },
        { "day": "Friday", "start_time": "", "end_time": "", "is_holyday": false },
        { "day": "Saturday", "start_time": "", "end_time": "", "is_holyday": false },
        { "day": "Sunday", "start_time": "", "end_time": "", "is_holyday": false }
    ]
    const defaultFoodType = ["Breakfast", "Lunch", "Snacks", "Dinner"]


    const [updateProfileValues, setUpdateProfileValues] = useState({
        whole_number: get(userData, 'country_code', '') + get(userData, 'mobile_number', ''),
        country_code: get(userData, "country_code", ""),
        restaurant_images: get(userData, "restaurant_images", []),
        restaurant_name: get(userData, 'restaurant_name', ''),
        mobile_number: get(userData, 'mobile_number', ''),
        restaurant_location: get(userData, 'restaurant_location', ''),
        email: get(userData, 'email', ''),
        restaurant_about: get(userData, 'restaurant_about', ''),
        document_type: get(userData, 'document_type', ''),
        upload_first: get(userData, "upload_first", []),
        // upload_second: get(userData, 'upload_second', "") ? [get(userData, 'upload_second', "")] : [],
        banner_image: get(userData, 'banner_image', "") ? [get(userData, 'banner_image', "")] : [],
        categories: get(userData, "categories", []).map(item => {
            return { label: get(item, "title", ""), value: get(item, "_id", "") };
        }),
        food_type: get(userData, 'food_type', []),
        // food_type: get(userData, 'food_type', []).length > 0 ? get(userData, 'food_type', []) : defaultFoodType,
        lat: get(userData, 'lat', ''),
        long: get(userData, 'long', ''),
        working_hours: get(userData, 'working_hours', []).length > 0 ? get(userData, 'working_hours', []) : defaultWorkingHours,
        service_type: get(userData, 'service_type', ''),
        self_pickup_time: get(userData, 'self_pickup_time', ''),
        bank_name: get(userData, 'bank_detail.bank_name', ''),
        account_holder_name: get(userData, 'bank_detail.account_holder_name', ''),
        account_number: get(userData, 'bank_detail.account_number', ''),
        re_account_number: get(userData, 'bank_detail.account_number', ''),
        ifsc: get(userData, 'bank_detail.ifsc', ''),
        is_profile_completed: get(userData, 'is_profile_completed', ''),
        city_address: get(userData, 'restaurant_address.city', ''),
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



    const handleConfirm = (async) => {
        let modal = { ...modalData };

        localStorage.removeItem("accessToken");
        localStorage.removeItem("userData");
        setUsers("");
        setDefaultState(loginObjOne)
        // setDailogType("");
        modal.type = "success";

        // setUsers(null);
        modal.isOpen = false;
        setModalData(modal);
        navigate(0);
    };




    const sendOTP = async (values, forget = false) => {
        console.log(values);
        setIsLoading(true);
        // setDefaultState({
        //   isSignup: false,
        //   isLogin: false,
        // });
        try {
            const { data } = await axios.post("/auth/restaurant/sendOtp", {
                country_code: values.country_code,
                mobile_number: values.mobile_number,
            });
            // console.log(data);
            setOtpPhone({
                country_code: values.country_code,
                mobile_number: values.mobile_number,
            });
            toast.success(`${data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setOtpSend(true);
            //   setDefaultState({
            //     isSignup: true,
            //     isLogin: false,
            //   });
            setDefaultState(verifyOtpObjOne)
            // navigate("/verifyOtp");
            if (forget) {
                setIsForgetting(true);
            }

            setOtpFormValues({
                country_code: values.country_code,
                mobile_number: values.mobile_number,
                verification_code: "",
            });

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (forget) {
                // setDefaultState({
                //   isSignup: false,
                //   isLogin: false,
                //   isForget: true,
                // });
                setDefaultState(forgotObjOne)
                // navigate("/forgot");
            } else {
                setDefaultState(signUpObjOne)
                // navigate("/signup");
                // setDefaultState({
                //   isSignup: true,
                //   isLogin: false,
                // });
            }
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
            restaurant_location: values.restaurant_location,
            email: values.email,
            // restaurant_about: "awesome restaurant",
            upload_first: values.upload_first,
            // upload_second: values.upload_second[0],
            banner_image: values.banner_image[0],
            categories: values.categories.map(item => item.value),
            food_type: values.food_type,
            working_hours: values.working_hours,
            lat: values.lat,
            long: values.long,
            service_type: values.service_type,
            self_pickup_time: values.self_pickup_time,
            bank_detail: {
                bank_name: values.bank_name,
                account_holder_name: values.account_holder_name,
                account_number: values.account_number,
                ifsc: values.ifsc
            },
            restaurant_address: {
                city: values.city_address
            },
            is_profile_completed: "3"
        };
        console.log(fromData);
        // working_hours: "",
        setIsLoading(true);
        try {
            const { data } = await axios.post("/auth/restaurant/updateProfile", fromData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
           console.log(data);
            navigate("/checkstatus");
            // console.log(values.categories);


            setUpdateProfileValues({
                ...updateProfileValues,
                restaurant_name: values.restaurant_name,
                restaurant_images: values.restaurant_images,
                document_type: "aadhar",
                country_code: values.country_code,
                mobile_number: values.mobile_number,
                whole_number: values.country_code + values.mobile_number,
                restaurant_location: values.restaurant_address,
                email: values.email,
                upload_first: values.upload_first,
                upload_second: values.upload_second,
                banner_image: values.banner_image,
                categories: values.categories,
                food_type: values.food_type,
                working_hours: values.working_hours,
                lat: values.lat,
                long: values.long,
                service_type: values.service_type,
                self_pickup_time: values.self_pickup_time,
                bank_name: get(values, 'bank_name', ''),
                account_holder_name: get(values, 'account_holder_name', ''),
                account_number: get(values, 'account_number', ''),
                ifsc: get(values, 'ifsc', ''),
                city_address: get(values, 'city', ''),
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
                    setOtpFormValues({
                        country_code: data.data.country_code,
                        mobile_number: data.data.mobile_number,
                    });
                    sendOTP({
                        country_code: data.data.country_code,
                        mobile_number: data.data.mobile_number
                    });
                }
                if (data.data.is_approved_by_admin == "1") {
                    localStorage.setItem("accessToken", data.data.access_token);
                    navigate('/dashboard')
                } else if (data.data.is_approved_by_admin == "0") {
                    setDefaultState(pendingApprovalObjOne)
                    // navigate('/pendingApproval')
                    // setDefaultState({
                    //   isLogin: false,
                    //   isSignup: false,
                    //   isApproved: true,
                    // });
                } else if (data.data.is_approved_by_admin == "2") {
                    setDefaultState(pendingApprovalObjOne)
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
                setDefaultState(bankDetailsObjOne)
                // navigate('/bankDetails');

            }
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
            const { data } = await axios.get("/auth/restaurant/checkStatus",
            );
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
                setOtpFormValues({
                    country_code: data.data.country_code,
                    mobile_number: data.data.mobile_number,
                });
                sendOTP({
                    country_code: data.data.country_code,
                    mobile_number: data.data.mobile_number
                });
            }
            if (data.data.is_approved_by_admin == "1") {
                localStorage.setItem("accessToken", data.data.access_token);
                navigate('/dashboard')
            } else if (data.data.is_approved_by_admin == "0") {
                setDefaultState(pendingApprovalObjOne)
                // navigate('/pendingApproval')
                // setDefaultState({
                //   isLogin: false,
                //   isSignup: false,
                //   isApproved: true,
                // });
            } else if (data.data.is_approved_by_admin == "2") {
                setDefaultState(pendingApprovalObjOne)
                // navigate('/rejectedApproval')
            }


            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);

            toast.error(`${error.response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    }



    const serviceValueFoodDelivery = (e) => {
        // console.log(JSON.stringify(e));
        if (e == 1 || e == 3) {
            return true
        } else {
            return false
        }
    }

    const serviceValueSelfPickUp = (e) => {
        if (e == 2 || e == 3) {
            return true
        } else {
            return false
        }
    }


    // console.log(updateProfileValues);

    const checkChecked = (e, s) => {
        console.log(e);
        // console.log(s);
        const lowercase = e.map(name => name.toLowerCase());
        if (lowercase.includes(s.toLowerCase())) {
            return true
        } else {
            return false
        }
    }


    // Google map

    const mapStyles = {
        height: "30vh",
        width: "100%",
        margin: "auto"
    };


    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    // console.log(currentPosition);


    const [zoom, setZoom] = useState(11);

    // console.log(coordinates.lat);
    // console.log(coordinates.lng);
    // console.log(address);


    return (
        <div>
            <InfoContainer lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column2>
                            <ImgWrap>
                                {/*<Img src={img.default} alt={alt} />*/}
                            </ImgWrap>
                        </Column2>
                        <Column1>
                            <LanguageLogout>
                                <LanguageIcon>
                                    <img src={languageIcon}></img>
                                </LanguageIcon>
                                {/* {(defaultState.form == "restaurantDetailsForm" || defaultState.form == "bankDetailsForm" || defaultState.form == "pendingApproval") ? (
                                    <LogoutIcon>
                                        <img src={logoutIcon} style={{ height: "35px" }} onClick={handleConfirm}></img>
                                    </LogoutIcon>
                                ) : ("")} */}
                            </LanguageLogout>
                            <TextWrapper
                                contentAlign={defaultState.form == "pendingApproval" ? true : false}
                            >
                                <LoginBox>

                                    <LoginHeading
                                        contentAlign={defaultState.form == "pendingApproval" ? true : false}
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
                                        {dictionary.bank_details.bank_details}
                                    </LoginHeading>
                                    <LoginPara
                                        textAlign={defaultState.form == "pendingApproval" ? true : false}
                                    >  </LoginPara>
                                </LoginBox>
                                <InputBox>
                                        <Formik
                                            enableReinitialize
                                            initialValues={updateProfileValues}
                                            validate={bankDetailsValidator}
                                            validateOnChange
                                            onSubmit={handleCompleteProfile}
                                        >
                                            {(formikBag) => {
                                                return (
                                                    <Form className={classes.formStyleOnly}>
                                                        <Field name="account_holder_name">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        // type="text"
                                                                        value={formikBag.values.account_holder_name}
                                                                        onChange={(e) => {
                                                                            console.log(formikBag)
                                                                            formikBag.setFieldValue("account_holder_name", e.target.value);
                                                                        }}
                                                                        onkeydown="return /[a-z]/i.test(event.key)"
                                                                        error={
                                                                            formikBag.touched.account_holder_name && formikBag.errors.account_holder_name
                                                                                ? formikBag.errors.account_holder_name
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.bank_details.account_holder_name_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="account_number">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        // min="0"
                                                                        value={formikBag.values.account_number}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("account_number", e.target.value);
                                                                        }}
                                                                        onPaste={(e)=>{
                                                                            e.preventDefault()
                                                                            return false;
                                                                          }} onCopy={(e)=>{
                                                                            e.preventDefault()
                                                                            return false;
                                                                          }}
                                                                        error={
                                                                            formikBag.touched.account_number && formikBag.errors.account_number
                                                                                ? formikBag.errors.account_number
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.bank_details.account_number_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="re_account_number">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        // min="0"
                                                                        value={formikBag.values.re_account_number}
                                                                        onPaste={(e)=>{
                                                                            e.preventDefault()
                                                                            return false;
                                                                          }} onCopy={(e)=>{
                                                                            e.preventDefault()
                                                                            return false;
                                                                          }}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("re_account_number", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.re_account_number && formikBag.errors.re_account_number
                                                                                ? formikBag.errors.re_account_number
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.bank_details.re_account_number_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="ifsc">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        value={formikBag.values.ifsc}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("ifsc", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.ifsc && formikBag.errors.ifsc
                                                                                ? formikBag.errors.ifsc
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.bank_details.bank_ifsc_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="bank_name">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        value={formikBag.values.bank_name}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("bank_name", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.bank_name && formikBag.errors.bank_name
                                                                                ? formikBag.errors.bank_name
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder={dictionary.bank_details.bankname_ph}
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        {/*<Field name="bank_name">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        // value={formikBag.values.owner_name}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("owner_name", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.owner_name && formikBag.errors.owner_name
                                                                                ? formikBag.errors.owner_name
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="Select City"
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                        <Field name="bank_name">
                                                            {({ field }) => (
                                                                <div className="py-2">
                                                                    <Input
                                                                        {...field}
                                                                        type="text"
                                                                        // value={formikBag.values.owner_name}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue("owner_name", e.target.value);
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.owner_name && formikBag.errors.owner_name
                                                                                ? formikBag.errors.owner_name
                                                                                : null
                                                                        }
                                                                        className="form-control"
                                                                        placeholder="Select State"
                                                                    />
                                                                </div>
                                                            )}
                                                                    </Field>*/}


                                                        <div className="text-center login_btn_group">
                                                            <LoginButton
                                                                type="submit"
                                                            >
                                                                {dictionary.bank_details.save}
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
    )
}


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
