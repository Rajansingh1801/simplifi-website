import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from '../../../components/Overlay';
import axios from "../../../axios";
import SubFree from "../../../images/CarrotSvg/SubFree.svg";


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
    WrapSection } from '../../LoginPage/LoginElements';

import { AllPlanCards, ImgBgDotPay } from "./AssociateMemberElements";
import {PageHeadingGreen} from "../AllStores/AllStoresElements";



const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
    
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
                    <ImgBgDotPay src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{padding: "1.5rem 0rem"}}>
                            <HeroH1>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Preferred&nbsp;Business</div>&nbsp;
                                <PageHeadingGreen style={{color: "#28C54E", fontFamily: "Titan One"}}>Partner&nbsp;List</PageHeadingGreen>
                            </HeroH1>
                            <HeroP>
                                Lorem ipsum dolor sit amet consectetur. At viverra risus ultrices et.
                            </HeroP>
                        </SignInSection>
                        <PlanCardsSection>
                            <AllPlanCards>
                                <PlanCard>
                                    <CardHeadingRow>
                                        <CardHeading
                                        >
                                            $199&nbsp;/&nbsp;year
                                        </CardHeading>
                                    </CardHeadingRow>
                                    <CardPointsSection>
                                        <CardPointRow>
                                            <PointRowDotButton/>
                                            <CardPoint>
                                            Lorem ipsum dolor sit amet consectetur. Risus etiam luctus magna.
                                            </CardPoint>
                                        </CardPointRow>
                                        <CardPointRow>
                                            <PointRowDotButton/>
                                            <CardPoint>
                                            Lorem ipsum dolor sit amet consectetur. Risus etiam luctus magna.
                                            </CardPoint>
                                        </CardPointRow>
                                        <CardPointRow>
                                            <PointRowDotButton/>
                                            <CardPoint>
                                            Lorem ipsum dolor sit amet consectetur. Risus etiam luctus magna.
                                            </CardPoint>
                                        </CardPointRow>
                                    </CardPointsSection>
                                    <WrapSection>
                                        <BuySection style={{paddingTop : "1rem"}}>
                                            <CarrotButton
                                                type="button"
                                            >
                                                <ButtonInside>
                                                    Buy Now
                                                </ButtonInside>
                                            </CarrotButton>
                                        </BuySection>
                                    </WrapSection>
                                </PlanCard>
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
