import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from 'react-lottie';
import Overlay from '../../../components/Overlay';
import CarrotInputNormal from '../../../components/CarrotInputNormal';
import axios from "../../../axios";
import CarrotStores from "../../../images/CarrotSvg/PrivacyPolicyCarrot.svg";
import { Modal } from '../../../components/Modal/Modal'

import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import ThankRightTick from "../../../images/CarrotSvg/ThankYouRightTick.svg";
import { associateFormValidator } from "../../../utils/validators";
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
    CarrotButtonRow,
    ChairSvgSection,
    AllPlanCards,
    
    CardHeadingRow,
    CardHeading,
    CardPointsSection,
    CardPointRow,
    
    BuySection,
    CardPrice,
    FreeImage,
    WelcomeSection,
    WrapSection } from '../../LoginPage/LoginElements';

import { PageHeadingRed, PageHeadingGreen } from "../../WebsitePages/AllStores/AllStoresElements";

import { UpperSectionForm } from "../../WebsitePages/AssociateMember/AssociateMemberElements";
import { AssociateFormCarrot, ImgBgDot, UpperSectionCardForm, TermsDataSection,
    TermsButtonSection,
    DeclineButton,
    AcceptButton } from "./ContentElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers, userToken, userData }) => {
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [contentData, setContentData] = useState("");

    useEffect(() => {
        getContent();
    },[])


    const getContent = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/getContent?contentHeading=privacyPolicy`);
            setContentData(data);
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
console.log(contentData);

    

    return (
        <>
            <HeroContainer style={{height: "100%"}}>
                <HeroBg>
                    <ImgBgDot src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                {/*<PurchaseSubRow>
                    <PurchaseText>
                    Purchase subscription to become a Associate Member
                    </PurchaseText>
                    <PurchaseButton
                        type="button"
                        onClick={() => {
                            navigate('/associate-payment');
                        }}
                    >
                    Purchase
                    </PurchaseButton>
                </PurchaseSubRow>*/}
                <HeroContent className="container">
                <SignWelcome>
                
                        <SignInSection style={{paddingTop: "1rem"}}>
                            <HeroH1>
                                <PageHeadingRed>   
                                    Privacy&nbsp;
                                </PageHeadingRed>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Policy&nbsp;</div>
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <UpperSectionForm>
                                <UpperSectionCardForm>
                                   <TermsDataSection>
                                        <div dangerouslySetInnerHTML={{ __html: contentData }} />
                                   </TermsDataSection>
                                </UpperSectionCardForm>
                                <AssociateFormCarrot src={CarrotStores}/>
                            </UpperSectionForm>
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
        setToken: (updatedValue) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
