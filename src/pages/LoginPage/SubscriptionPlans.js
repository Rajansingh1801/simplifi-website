import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from 'react-lottie';
import Input from '../../components/Input';
import CarrotInput from '../../components/CarrotInput';
import Overlay from '../../components/Overlay';
import axios from "../../axios";

import ChairGuySvg from "../../images/CarrotSvg/ChairGuy.svg"
import ChairGuyImage from "../../images/CarrotImages/ChairGuy.png";
import GreenBottomImage from "../../images/CarrotImages/GreenBottom.png";
import LottieCarrot from "../../images/CarrotJSON/carrot.json";
import DotCarrotSection from "../../images/CarrotSvg/DotCarrotSection.svg";
import DotCarrotInside from "../../images/CarrotSvg/DotCarrotInside.svg";
import SubFree from "../../images/CarrotSvg/SubFree.svg";
import PurchasedImageSvg from "../../images/CarrotSvg/PurchaseSvg.svg";

import { loginValidator } from '../../utils/validators';
import { getPaymentLink } from '../../utils/functions';

import { HeroContainer, HeroBg, ImgBgDot, HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
    WelcomeDesign,
    TrapeziumContent,
    TrapeziumLeft,
    TrapeziumRight,
    SignInSection,
    WelcomeRow,
    ButtonInside,
    EmailPswdSection,
    LabelInput,
    InputLabel,
    // CarrotInput,
    PlanCardsSection,
    RightSectionInsideDot,
    RightSectionDotOutBig,
    LeftSectionUpperDot,
    LeftSectionOutsideDot,
    RightSectionOutsideDot,
    LeftSectionDot,
    ForgotRow,
    ForgotText,
    CarrotButtonRow,
    PointRowDotButton,
    CarrotButton,
    DontHaveRow,
    ChairSvgSection,
    ChairGuy,
    ChairBottom,
    DontHave,
    SignupText,
    AllPlanCards,
    PlanCard,
    CardHeadingRow,
    CardHeading,
    CardPointsSection,
    CardPointRow,
    CardPoint,
    BuySection,
    CardPrice,
    FreeImage,
    WelcomeSection,
    PurchasedSvg,
    WrapSection } from './LoginElements';




const HeroSection = ({ userData, defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);

    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
    });


    useEffect(() => {
        getSubscriptionPlans();
    },[])
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const getSubscriptionPlans = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/get_subscription_plan`);
            setSubscriptionPlans(data.data);
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

    console.log(subscriptionPlans);
    

    return (
        <>
            <HeroContainer style={{height: "100%"}}>
                <HeroBg>
                    <ImgBgDot src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{padding: "1.5rem 0rem"}}>
                            <HeroH1>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Choose your right</div>&nbsp;<div style={{color: "#28C54E", fontFamily: "Titan One"}}>Plan</div>
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <AllPlanCards>
                                {subscriptionPlans && subscriptionPlans.length > 0 ? (
                                    <>
                                        {subscriptionPlans.map((item,index) => (
                                            <>
                                                <PlanCard>
                                                    <CardHeadingRow>
                                                        <CardHeading
                                                            type={item.planName}
                                                        >
                                                            {item.planName}
                                                        </CardHeading>
                                                    </CardHeadingRow>
                                                    <CardPointsSection type={item.planName}>
                                                        {item.description ? (
                                                            <>
                                                                {item.description.length>0 ? (
                                                                    <>
                                                                        {item.description.map((descItem) => (
                                                                            <>
                                                                            <CardPointRow>
                                                                                <PointRowDotButton/>
                                                                                <CardPoint>
                                                                                    {descItem}
                                                                                </CardPoint>
                                                                            </CardPointRow>
                                                                            </>
                                                                        ))}
                                                                    </>
                                                                ) : ""}
                                                            </>
                                                        ) : ""}
                                                    </CardPointsSection>
                                                    {item.planPrice === 0 ? (
                                                        <>
                                                            <BuySection>
                                                                <FreeImage src={SubFree}/>
                                                            </BuySection>
                                                        </>
                                                    ) : ""}
                                                    {item.planPrice > 0 ? (
                                                        <>
                                                            <WrapSection>
                                                                <BuySection>
                                                                    <CardPrice>
                                                                        ${item.planPrice}&nbsp;/&nbsp;m
                                                                    </CardPrice>
                                                                    {get(userData,"plan_id._id","")===item._id ?
                                                                    <>
                                                                        <PurchasedSvg src={PurchasedImageSvg}/>
                                                                        <CardPointRow style={{justifyContent: "center", padding: "0.5rem 0rem 0rem 0rem"}}>
                                                                            <CardPoint>
                                                                                Expired in : 15/06/2023
                                                                            </CardPoint>
                                                                        </CardPointRow>
                                                                    </> : (
                                                                        <>
                                                                            <CarrotButton
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    getPaymentLink({
                                                                                        type: item.planType,
                                                                                        price: item.plan_default_price,
                                                                                        setIsLoading: setIsLoading
                                                                                    })
                                                                                }}
                                                                            >
                                                                                <ButtonInside>
                                                                                    Buy Now
                                                                                </ButtonInside>
                                                                            </CarrotButton>
                                                                        </>
                                                                    )}
                                                                </BuySection>
                                                            </WrapSection>
                                                        </>
                                                    ) : ""}
                                                </PlanCard>
                                            </>
                                        ))}
                                    </>
                                ) : ""}
                            </AllPlanCards>
                        </PlanCardsSection>
                    </SignWelcome>
                    <HeroBtnWrapper>
                        
                    </HeroBtnWrapper>
                </HeroContent>
                <ChairSvgSection>
                </ChairSvgSection>
            </HeroContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
