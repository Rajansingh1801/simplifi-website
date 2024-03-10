import React, { useState } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from '../../../components/Overlay';
import axios from "../../../axios";

import categoriesCarrotsvg from "../../../images/CarrotSvg/CategoriesCarrot.svg";
import categoryMobileImage from "../../../images/CarrotSvg/CategoryMobile.png";
import AssociateCard from "../../../images/CarrotSvg/AssociateCard.svg";
import SocialMediaPublicity from "../../../images/CarrotSvg/social-media-publicity.svg";

import  { HeroContainer, HeroBg, ImgBg, CategoriesCarrot, HeroContent, AllCategories,
    CategoriesCard, MemberSection,
    MemberCard,
    MemberCardHead,
    MemberPara,
    MemberImage,
    CategoryCardImage,
    CategoryCardText, MemberButton } from "./AssociateElements";

import {  HeroH1, HeroP, HeroBtnWrapper, SignWelcome,
    SignInSection,
    WelcomeSection, CarrotButton,
    ButtonInside } from '../../LoginPage/LoginElements';






const HeroSection = ({ userData, defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent>
                    <MemberSection>
                        <MemberCard>
                            {get(userData, "associate_member.is_associate_member","") === "1" ? (
                                <>
                                    <MemberButton>
                                        You are member
                                    </MemberButton>
                                </>
                            ) : ""}
                            <MemberCardHead>
                                <div style={{display: "flex", flexDirection: "row", width :"100%", alignItems:"center", justifyContent:"center"}}>
                                    <div style={{color: "#28C54E", fontFamily: "Titan One"}}>Associate</div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", width :"100%", alignItems:"center", justifyContent:"center"}}>
                                    <div style={{color: "#101011", fontFamily: "Titan One"}}>Member</div>
                                </div>
                            </MemberCardHead>
                            <MemberPara>
                                Lorem ipsum dolor sit amet consectetur. Donec malesuada in tortor aliquet eu tincidunt mattis eget dictum. Velit eros quam dolor id eget.
                            </MemberPara>
                            <MemberImage src={AssociateCard}>
                            
                            </MemberImage>
                            <CarrotButton type="button"
                                onClick={() => {
                                    navigate("/associateMember")
                                }}
                            >
                                <ButtonInside>
                                    View
                                </ButtonInside>
                            </CarrotButton>
                        </MemberCard>
                        <MemberCard>
                            {get(userData, "preferred_member.is_preferred_member","") === "1" ? (
                                <>
                                    <MemberButton>
                                        You are member
                                    </MemberButton>
                                </>
                            ) : ""}
                            <MemberCardHead>
                                <div style={{display: "flex", flexDirection: "row", width :"100%", alignItems:"center", justifyContent:"center"}}>
                                    <div style={{color: "#28C54E", fontFamily: "Titan One"}}>Preferred</div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", width :"100%", alignItems:"center", justifyContent:"center"}}>
                                    <div style={{color: "#101011", fontFamily: "Titan One"}}>Business&nbsp;Partner</div>
                                </div>
                            </MemberCardHead>
                            <MemberPara>
                            Lorem ipsum dolor sit amet consectetur. Donec malesuada in tortor aliquet eu tincidunt mattis eget dictum. Velit eros quam dolor id eget.
                            </MemberPara>
                            <MemberImage src={SocialMediaPublicity}>
                            
                            </MemberImage>
                            <CarrotButton type="button"
                                onClick={() => {
                                    navigate("/business-partner-list")
                                }}
                            >
                                <ButtonInside>
                                    View
                                </ButtonInside>
                            </CarrotButton>
                        </MemberCard>
                    </MemberSection>
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









