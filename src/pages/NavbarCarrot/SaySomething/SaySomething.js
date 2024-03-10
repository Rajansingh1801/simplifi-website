import React, { useState } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from '../../../components/Overlay';
import axios from "../../../axios";
import Lottie from 'react-lottie';

import categoriesCarrotsvg from "../../../images/CarrotSvg/CategoriesCarrot.svg";
import categoryMobileImage from "../../../images/CarrotSvg/CategoryMobile.png";
import SomethingGuy from "../../../images/CarrotSvg/SomethingGuy.svg";
import SomethingCarrot from "../../../images/CarrotSvg/SomethingCarrot.svg";
import LottieGift from "../../../images/CarrotJSON/Gift.json";

import  { HeroContainer, HeroBg, ImgBg, CategoriesCarrot, HeroContent, AllCategories, SignWelcome,
    CategoriesCard,
    CategoryCardImage,
    CategoryCardText, GuyImageSection, HeroP } from "./SaySomethingElements";

import {  HeroH1, HeroBtnWrapper,  CarrotButton,
    ButtonInside,
    SignInSection,
    WelcomeSection } from '../../LoginPage/LoginElements';

import { PageHeadingRed } from "../../WebsitePages/AllStores/AllStoresElements";





const HeroSection = ({ userData, userToken, defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [categoryStores, setCategoryStores] = useState([
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
    ]);
    

    const defaultOptionsCarrot = {
        loop: true,
        autoplay: true,
        animationData: LottieGift,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent>
                    <SignWelcome>
                        <GuyImageSection src={SomethingGuy}>
                        
                        </GuyImageSection>
                        <SignInSection> 
                            <HeroH1 style={{flexDirection: "column", textAlign: "left"}}>
                                <div style={{display: "flex", flexDirection: "row", width :"100%"}}>
                                    <div style={{color: "#101011", fontFamily: "Titan One"}}>Say&nbsp;</div>
                                    <PageHeadingRed>
                                        Something,
                                    </PageHeadingRed>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", width :"100%"}}>
                                    <PageHeadingRed>
                                        Earn&nbsp;
                                    </PageHeadingRed>
                                    <div style={{color: "#101011", fontFamily: "Titan One"}}>Something</div>
                                </div>
                            </HeroH1>
                            <Lottie
                                options={defaultOptionsCarrot}
                                height={"100px"}
                                width={"100px"}
                                style={{margin: "1rem 0rem"}}
                            />
                            <CarrotButton type="button"
                                onClick={() => {
                                    if(!userToken || !userData) {
                                        navigate("/login");
                                        toast.error(`Please login first`, {
                                            position: toast.POSITION.TOP_RIGHT,
                                          });
                                    } else {
                                        navigate('/referEarn');
                                    }
                                }}
                            >
                                <ButtonInside>
                                    Invite
                                </ButtonInside>
                            </CarrotButton>
                            <HeroP style={{padding: "1rem 0rem"}}>*Bonus Terms apply</HeroP>
                            <HeroP>Lorem ipsum dolor sit amet consectetur. Blandit augue sapien nisl justo dictum suscipit vitae tellus. At senectus et morbi imperdiet ipsum tincidunt. Vel semper iaculis consequat scelerisque. Nisi gravida odio et lacus lorem.</HeroP>
                        </SignInSection>
                        <GuyImageSection src={SomethingCarrot}>
                        
                        </GuyImageSection>
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









