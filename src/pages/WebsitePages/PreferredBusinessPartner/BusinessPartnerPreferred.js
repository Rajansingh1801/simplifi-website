import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from 'react-lottie';
import Overlay from '../../../components/Overlay';
import axios from "../../../axios";
import ReactHtmlParser from "react-html-parser";

import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import { PageHeadingRed } from "../AllStores/AllStoresElements";

import { HeroContainer, HeroBg,  HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
    WelcomeDesign,
    CarrotButton,
    ButtonInside,
    TrapeziumContent,
    TrapeziumLeft,
    TrapeziumRight,
    SignInSection,
    WelcomeRow,
    EmailPswdSection,
    LabelInput,
    InputLabel,
    // CarrotInput,
    PlanCardsSection,
    ChairSvgSection,
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
    WrapSection } from '../../LoginPage/LoginElements';

import { ImgBgDot, UpperSection,
    UpperSectionCard,
    LowerSection,
    VideoSectionAssoiate,
    CarrotAssociateDiv,
    LearnMoreButtonRow,
    ParagraphAssociate } from "../AssociateMember/AssociateMemberElements";


const HeroSection = ({ userToken, userData, defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const [associateMemberData, setAssociateMemberData] = useState([]);

    useEffect(() => {
        getAssociateMemberContent();
    },[])

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const getAssociateMemberContent = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/getPreferredContent`);
            setAssociateMemberData(data.data);
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
            <HeroContainer style={{height: "100%"}}>
                <HeroBg>
                    <ImgBgDot src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{padding: "1.5rem 0rem"}}>
                            <HeroH1>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Preferred&nbsp;</div>
                                <PageHeadingRed>
                                    Business&nbsp;Partner
                                </PageHeadingRed>
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <UpperSection>
                                <UpperSectionCard>
                                    {associateMemberData.length >0 ? (
                                        <>
                                         <div className="container" style={{padding: "1rem 0rem", margin: "0rem", width: "100%"}}>{ReactHtmlParser(associateMemberData[0].benefits)}</div>
                                        </>
                                    ) : ""}
                                </UpperSectionCard>
                            </UpperSection>
                            <LearnMoreButtonRow>
                                <CarrotButton
                                    type="button"
                                    onClick={() => {
                                        // if(!userToken || !userData) {
                                        //     navigate("/login");
                                        //     toast.error(`Please login first`, {
                                        //         position: toast.POSITION.TOP_RIGHT,
                                        //       });
                                        // } else {
                                        // }
                                        navigate("/businessPartnerForm")
                                        
                                    }}
                                >
                                    <ButtonInside>
                                        Continue
                                    </ButtonInside>
                                </CarrotButton>
                            </LearnMoreButtonRow>
                        </PlanCardsSection>
                    </SignWelcome>
                </HeroContent>
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
