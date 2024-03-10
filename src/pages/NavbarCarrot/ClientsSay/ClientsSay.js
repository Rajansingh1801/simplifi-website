import React, {useState, useEffect} from 'react'
import Icon1 from '../../../images/CarrotImages/aron-visuals-BXOXnQ26B7o-unsplash.jpg'
import Icon2 from '../../../images/CarrotImages/aron-visuals-BXOXnQ26B7o-unsplash.jpg'
import Icon3 from '../../../images/CarrotImages/aron-visuals-BXOXnQ26B7o-unsplash.jpg'

import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from '../../../components/Overlay';
import axios from "../../../axios";
import { extractDatee, extractMonth } from "../../../utils/functions";
import categoriesCarrotsvg from "../../../images/CarrotSvg/CategoriesCarrot.svg";
import categoryMobileImage from "../../../images/CarrotSvg/CategoryMobile.png";
import ArrowLeftImage from "../../../images/CarrotSvg/SayLeftArrow.svg";
import ArrowRightImage from "../../../images/CarrotSvg/SayRightArrow.svg";
import SayRedQuote from "../../../images/CarrotSvg/SayRedQuote.svg";
import SayWhiteQuote from "../../../images/CarrotSvg/SayWhiteQuote.svg";
import SayProfileQuote from "../../../images/CarrotSvg/SayProfileQuote.svg";
import SayQuoteIcon from "../../../images/CarrotSvg/SayQuoteIcon.svg";

import { WorksContainer, WorksH1,  WorksCard, WorksIcon, WorksH2, WorksH6, WorksP, IconBackground } from '../Blogs/BlogsElements';
import  {  HeroBg, CategoriesCarrot,  AllCategories,
    SignWelcome,
    CategoryCardImage,
    CategoryCardText } from "../Blogs/BlogsElements";

import {  HeroH1, HeroP, HeroBtnWrapper,
    SignInSection,
    WelcomeSection, CarrotButtonRow,
    CarrotButton,
    ButtonInside } from '../../LoginPage/LoginElements';

import { HeroContainer, ImgBg, HeroContent, WorksWrapper, LeftSection,
    SayHeading,
    BlackHeading,
    SayPara,
    SayArrow,
    ArrowButton,
    Arrow,
    RedHeading,
    RedQuote,
    WhiteQuote,
    ImageQuote,
    RedQuoteDiv,
    WhiteImageDiv,
    RedQuoteData,
    WhiteQuoteDiv,
    QuoteDataHeading,
    QuoteDataHeadingBelow,
    VerticalLine,
    WhiteQuoteData,
    QuoteIcon,
    QuoteSection,
    QuoteUserDetails,
    QuoteUserName,
    QuoteUserDesignation,
    RedPoint,
    BluePoint,
    SayArrowMobile,
    RightSection, ImageQuoteDiv, ImageQuoteDivv } from "./ClientsSayElements";
import { PageHeadingRed } from "../../WebsitePages/AllStores/AllStoresElements";


const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [shuffledTestimonial, setShuffledTestimonial] = useState([]);
    const [allTestimonialData, setAllTestimonialData] = useState([]);

    useEffect(() => {
        getAllTestimonial();
    },[])

    const getAllTestimonial = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/get_homeScreen`);
            setAllTestimonialData(get(data,"data.Testimonial",""));
            setShuffledTestimonial(get(data,"data.Testimonial",""));
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

    console.log(shuffledTestimonial)
   

    return (
        <>
            <HeroContainer id="TestimonialScroll">
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent>
                <SignWelcome>
                    <WelcomeSection style={{padding: "0rem", paddingTop: "1rem"}}>
                        <WorksWrapper>
                            <LeftSection>
                                <SayHeading>
                                    <BlackHeading>
                                        What&nbsp;Our&nbsp;
                                    </BlackHeading>
                                    <BlackHeading>
                                        Clients&nbsp;
                                    </BlackHeading>
                                    <RedHeading>
                                        Says
                                    </RedHeading>
                                </SayHeading>
                                <SayPara>
                                    Lorem ipsum dolor sit amet consectetur.
                                </SayPara>
                                <SayArrow>
                                    <ArrowButton style={{marginRight: "1.5rem"}}
                                        onClick={() => {
                                            let newArray = [shuffledTestimonial[shuffledTestimonial.length-1], ...shuffledTestimonial];
                                            let afterDeleteLastItem = newArray.splice(0,newArray.length-1);
                                            setShuffledTestimonial(afterDeleteLastItem);
                                        }}
                                    >
                                        <Arrow src={ArrowLeftImage}/>
                                    </ArrowButton>
                                    <ArrowButton
                                        onClick={() =>{
                                            let dataToShuffle = [...shuffledTestimonial];
                                            let firstElement = dataToShuffle[0];
                                            let newArray = dataToShuffle.splice(1,dataToShuffle.length);
                                            let latestArray = [...newArray,firstElement];
                                            setShuffledTestimonial(latestArray);
                                        }}
                                    >
                                        <Arrow src={ArrowRightImage}/>
                                    </ArrowButton>
                                </SayArrow>
                            </LeftSection>
                            {shuffledTestimonial.length >0 ? (
                                <>
                                    <RightSection>
                                        <WhiteImageDiv>
                                            <RedQuoteDiv>
                                                <RedQuote src={SayRedQuote}>
                                                </RedQuote>
                                                <RedQuoteData>
                                                    <QuoteDataHeading>
                                                        {extractDatee(shuffledTestimonial[0].updatedAt)}
                                                    </QuoteDataHeading>
                                                    <VerticalLine>
                                                    </VerticalLine>
                                                    <QuoteDataHeadingBelow>
                                                        {extractMonth(shuffledTestimonial[0].updatedAt)}
                                                    </QuoteDataHeadingBelow>
                                                </RedQuoteData>
                                            </RedQuoteDiv>
                                            <WhiteQuoteDiv>
                                                <WhiteQuote src={SayWhiteQuote}>
                                                </WhiteQuote>
                                                <WhiteQuoteData>
                                                    <QuoteIcon src={SayQuoteIcon}>
                                                    </QuoteIcon>
                                                    <QuoteSection>
                                                        {shuffledTestimonial[0].description.slice(0,220)}{shuffledTestimonial[0].description.length > 220 ? "..." :""}
                                                    </QuoteSection>
                                                    <QuoteUserDetails>
                                                        <QuoteUserName>
                                                            {shuffledTestimonial[0].clientName}
                                                        </QuoteUserName>
                                                        <QuoteUserDesignation>
                                                            <div>
                                                                {shuffledTestimonial[0].location}
                                                            </div>
                                                            {/*<div>
                                                                at CodeAegis
                            </div>*/}
                                                        </QuoteUserDesignation>
                                                    </QuoteUserDetails>
                                                </WhiteQuoteData>
                                            </WhiteQuoteDiv>
                                            <ImageQuoteDiv>
                                                <RedPoint/>
                                                <ImageQuoteDivv Imagee={shuffledTestimonial[0].image}>
                                                </ImageQuoteDivv>
                                                {/*<ImageQuote src={shuffledTestimonial[0].image}>
            </ImageQuote>*/}
                                                <BluePoint/>
                                            </ImageQuoteDiv>
                                        </WhiteImageDiv>
                                        <SayArrowMobile>
                                            <ArrowButton style={{marginRight: "1.5rem"}}
                                                onClick={() => {
                                                    let newArray = [shuffledTestimonial[shuffledTestimonial.length-1], ...shuffledTestimonial];
                                                    let afterDeleteLastItem = newArray.splice(0,newArray.length-1);
                                                    setShuffledTestimonial(afterDeleteLastItem);
                                                }}
                                            >
                                                <Arrow src={ArrowLeftImage}/>
                                            </ArrowButton>
                                            <ArrowButton
                                                onClick={() =>{
                                                    let dataToShuffle = [...shuffledTestimonial];
                                                    let firstElement = dataToShuffle[0];
                                                    let newArray = dataToShuffle.splice(1,dataToShuffle.length);
                                                    let latestArray = [...newArray,firstElement];
                                                    setShuffledTestimonial(latestArray);
                                                }}
                                            >
                                                <Arrow src={ArrowRightImage}/>
                                            </ArrowButton>
                                        </SayArrowMobile>
                                    </RightSection>
                                </>
                            ) : ""}
                        </WorksWrapper>
                    </WelcomeSection>
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


