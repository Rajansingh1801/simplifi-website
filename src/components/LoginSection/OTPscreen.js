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
import Countdown from 'react-countdown';
import { LanguageContext } from "../../utils/language/Language";

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
import OtpScreen from "../../pages/LoginPage/OtpScreen";





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

        const Completionist = () => <a
        onClick={() => {
        sendOTP(otpPhone);
        }}
        href="javascript:void()"
    >
       {dictionary.authentication.resend_otp}
    </a>;

    const renderer = ({ minutes, seconds, completed }) => {
        console.log("min", minutes);
        console.log("seconds", seconds);
        console.log("completed", completed);
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <span>{minutes}:{seconds}</span>;
        }
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


    console.log(OTPFormValues);

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
        restaurant_location: address ? address : get(userData, 'restaurant_location', ''),
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

    const [center, setCenter] = useState({ lat: 28.699735333299, lng: 77.066645622253 });


    
    // const userDatas = localStorage.getItem("userData")
    // console.log(userDatas.email);


    const handleConfirm = (async) => {
        let modal = { ...modalData };
        if (window.confirm('Are you sure you want to Logout?')) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userData");
        setUsers("");
        setDefaultState(loginObjOne)
        navigate('/')
        // setDailogType("");
        modal.type = "success";

        // setUsers(null);
        modal.isOpen = false;
        setModalData(modal);
        navigate(0);
    } else {
    }
    };

    const countryCode = localStorage.getItem("countryCODE");
    const mobileNumers = localStorage.getItem("mobileNUMBER");

    console.log(countryCode+mobileNumers);


    const handleSignUP = async (values) => {

        var formvalues = {
            owner_name: values.owner_name,
            email: values.email,
            country_code: values.country_code,
            mobile_number: values.mobile_number,
            password: values.password,
        }
        // console.log(formvalues);


        setSignUpformValues({ ...formvalues, confirm_password: values.confirm_password });
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
            localStorage.setItem("accessToken", data.data.accessToken || data.data.access_token);
            localStorage.setItem("userData", JSON.stringify(data.data));
            setUsers(data.data);
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
            navigate("/restaurantdetailsform");
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


    const sendOTP =  async (values) => {
        console.log(values);
        // window.location.reload();
        setIsLoading(true);
        // setDefaultState({
        //   isSignup: false,
        //   isLogin: false,
        // });
        try {
            const { data } =  await axios.post("/auth/restaurant/sendOtp", {
                country_code: updateProfileValues.country_code,
                mobile_number: updateProfileValues.mobile_number,
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
            // if (forget) {
            //     setIsForgetting(true);
            // }

            setOtpFormValues({
                country_code: values.country_code,
                mobile_number: values.mobile_number,
                verification_code: "",
            });

            setIsLoading(false);
            // setTimeout(function(){
            //     window.location.reload(1);
            //  }, 2000);
        } catch (error) {
            setIsLoading(false);
            // if (forget) {
            //     // setDefaultState({
            //     //   isSignup: false,
            //     //   isLogin: false,
            //     //   isForget: true,
            //     // });
            //     setDefaultState(forgotObjOne)
            //     // navigate("/forgot");
            // } else {
            //     setDefaultState(signUpObjOne)
            //     // navigate("/signup");
            //     // setDefaultState({
            //     //   isSignup: true,
            //     //   isLogin: false,
            //     // });
            // }
            toast.error(`${error.response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };


    const verifyOTP = async (values) => {
        console.log(values);
        setOtpFormValues(values);
        // setDefaultState((prevState) => {
        //   return {
        //     ...prevState,
        //     isSignup: false,
        //   };
        // });
        setIsLoading(true);
        try {
            const { data } = await axios.post("/auth/restaurant/verifyOtp", {
                country_code: updateProfileValues.country_code || countryCode,
                mobile_number: updateProfileValues.mobile_number || mobileNumers,
                verification_code: values.verification_code,
            });
            console.log(data);
            setIsLoading(false);
            navigate("/restaurantdetailsform");

            if (updateProfileValues.mobile_number == "") {
                if (!isForgetiing) {
                    // let modal = { ...modalData };
                    // modal.isOpen = true;
                    // modal.message = data.message;
                    //setModalData(modal);
                    setIsLoading(false);

                    setLoginValues({
                        country_code: values.country_code,
                        mobile_number: values.mobile_number,
                        password: "",
                    });
                    setSignUpformValues({
                        firstName: "",
                        lastName: "",
                        company_name: "",
                        mobileNumber: "",
                        email: "",
                        password: "",
                        latitude: 26.7,
                        longitude: 72,
                    });
                    setDefaultState(loginObjOne)
                    // navigate("/login");
                    //   setDefaultState({
                    //     isLogin: true,
                    //     isSignup: false,
                    //   });
                } else {
                    //   setDefaultState({
                    //     isSignup: false,
                    //     isReset: true,
                    //   });
                    // setDefaultState(resetObjOne)
                    navigate("/restaurantdetailsform");
                    setLoginValues({
                        country_code: values.country_code,
                        mobile_number: values.mobile_number,
                        password: "",
                    });
                    setOtpSend(false);
                }
            } else {
                localStorage.setItem("accessToken", data.data.access_token);
                localStorage.setItem("userData", JSON.stringify(data.data));
                setOtpSend(false)
                setDefaultState(restaurantDetailsObjOne)
                // navigate("/restaurantDetails");
                // setProfileUpdating(true)
                // setDefaultState({
                //   isLogin: false,
                //   isSignup: false,
                //   isProfileUpdate: true,
                // });
            }

        } catch (error) {
            setIsLoading(false);
            setDefaultState(verifyOtpObjOne)
            // navigate("/verifyOtp");
            //   setDefaultState({
            //     isSignup: true,
            //     isLogin: false,
            //   });
            //   setLoginValues({
            //     country_code: values.country_code,
            //     mobile_number: values.mobile_number,
            //     password: "",
            //   });
            toast.error(`${error.response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setOtpSend(true);
        }
    };


    // history.go("/restaurantdetailsform");

    
    // useEffect(() => {
    //     window.navigateState(null, document.title, window.location.href);
    //     window.addEventListener('popstate', function (event){
    //         window.navigateState(null, document.title,  window.location.href);
    //     });
    // }, [ ])


    // console.log(coordinates.lat);
    // console.log(coordinates.lng);
    // console.log(address);

    return (
        <>
            <OtpScreen/>
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
                                <LogoutIcon>
                                        <img src={logoutIcon} style={{ height: "35px" }} onClick={handleConfirm}></img>
                                    </LogoutIcon>
                            </LanguageLogout>
                            <TextWrapper
                                contentAlign={false}
                            >
                                <LoginBox>

                                    <LoginHeading
                                        contentAlign={true}
                                    >
                                        {dictionary.authentication.enter_verfication_code}
                                    </LoginHeading>
                                    <LoginPara
                                        textAlign={true}
                                    >{dictionary.authentication.we_have_sent_4_digit}<br></br> {(updateProfileValues.country_code || countryCode)} {(updateProfileValues.mobile_number || mobileNumers)}   </LoginPara>
                                </LoginBox>
                                <InputBox>
                                    <Formik
                                        enableReinitialize
                                        initialValues={OTPFormValues}
                                        validate={otpValidator}
                                        validateOnChange
                                        onSubmit={verifyOTP}
                                    >
                                        {(formikBag) => {
                                            return (
                                                <Form>
                                                    <div className="signup-cont px-4">
                                                        <div className="otp_input">
                                                            <OtpInput
                                                                isInputNum={true}
                                                                value={formikBag.values.verification_code}
                                                                onChange={(e) =>
                                                                    formikBag.setFieldValue("verification_code", e)
                                                                }
                                                                numInputs={4}
                                                            />
                                                        </div>
                                                        {formikBag.errors.verification_code ? (
                                                            <p
                                                                style={{
                                                                    paddingTop: 5,
                                                                    fontSize: 13,
                                                                    color: "red",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                {formikBag.errors.verification_code}
                                                            </p>
                                                        ) : null}

                                                        <div className="pt-2 pb-4 d-flex justify-content-center">
                                                            <LoginButton
                                                                type="submit"
                                                            >
                                                                {dictionary.authentication.continue}
                                                            </LoginButton>
                                                        </div>
                                                        <p className="login-footer text-center"> {dictionary.authentication.didnt_receive_otp}?&nbsp;
                                                                    <Countdown
                                                                    date={Date.now() + 30000}
                                                                    renderer={renderer}
                                                                    />
                                                                    </p>
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
