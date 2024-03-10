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
import CarrotStores from "../../../images/CarrotSvg/FaqCarrot.svg";
import { Modal } from '../../../components/Modal/Modal'
import * as HiIcons from "react-icons/hi";
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

import { UpperSectionForm, FaqFormCarrot, ImgBgDot, UpperSectionCardForm, TermsDataSection,
    TermsButtonSection,
    DeclineButton,
    AcceptButton, FaqCard,
    FaqCardIcon,
    FaqCardData,
    FaqCardDataHeading,
    FaqCardDataPara, StillQuestionsSection,
    StillQuestionImages,
    ImageMiddle,
    StillQuestionHeading,
    StillQuestionsPara, ImageLeft, MiddleImgaes,
    ImageRight } from "./ContentElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers, userToken, userData }) => {
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [contentData, setContentData] = useState("");
    const [openedFaq, setOpenenFaq] = useState("");

    useEffect(() => {
        getContent();
    },[])


    const getContent = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/getFaq`);
            setContentData(data.data);
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
                <HeroContent className="container">
                <SignWelcome>
                
                        <SignInSection style={{paddingTop: "1rem"}}>
                            <HeroH1>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Frequently&nbsp;Asked&nbsp;</div>
                                <PageHeadingRed>   
                                    Questions&nbsp;
                                </PageHeadingRed>
                            </HeroH1>
                            <HeroP>
                            Have Questions? We’re here to help.
                            </HeroP>
                        </SignInSection>
                        <PlanCardsSection>
                            <UpperSectionForm>
                                {contentData ? (
                                    <>
                                        {contentData.docs ? (
                                            <>
                                                {contentData.docs.length > 0 ? (
                                                    <>
                                                        {contentData.docs.map((item,index) => (
                                                            <>
                                                                <FaqCard
                                                                    IsOpened={openedFaq===index ? true : false}
                                                                    onClick={() => {
                                                                        if(openedFaq===index) {
                                                                            setOpenenFaq("");
                                                                        } else {
                                                                            setOpenenFaq(index);
                                                                        }
                                                                    }}
                                                                >
                                                                    <FaqCardIcon>
                                                                        {openedFaq===index ? (
                                                                            <>
                                                                                <HiIcons.HiMinus/>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <HiIcons.HiPlus/>
                                                                            </>
                                                                        )}
                                                                    </FaqCardIcon>
                                                                    <FaqCardData>
                                                                            <FaqCardDataHeading>
                                                                                {item.question}
                                                                            </FaqCardDataHeading>
                                                                            {openedFaq===index ? (
                                                                                <>
                                                                                    <FaqCardDataPara>
                                                                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                                                                    </FaqCardDataPara>
                                                                                </>
                                                                            ) : ""}
                                                                    </FaqCardData>
                                                                </FaqCard>
                                                            </>
                                                        ))}
                                                    </>
                                                ) : ""}
                                            </>
                                        ) : ""}
                                    </>
                                ) : ""}
                                <FaqFormCarrot src={CarrotStores}/>
                            </UpperSectionForm>
                        </PlanCardsSection>
                        <StillQuestionsSection>
                            <StillQuestionImages>
                                    <MiddleImgaes>
                                        <ImageLeft src={"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80"}/>
                                        <ImageMiddle src={"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80"}/>
                                        <ImageRight src={"https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80"}/>
                                    </MiddleImgaes>
                            </StillQuestionImages>
                            <StillQuestionHeading>
                                Still have questions?
                            </StillQuestionHeading>
                            <StillQuestionsPara>
                                Can’t find the answer you’re looking for? Please chat to our friendly team.
                            </StillQuestionsPara>
                        </StillQuestionsSection>
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
