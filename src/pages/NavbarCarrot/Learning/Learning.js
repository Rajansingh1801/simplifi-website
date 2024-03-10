import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from 'react-lottie';
import CarrotInput from '../../../components/CarrotInput';
import Overlay from '../../../components/Overlay';
import axios from "../../../axios";

import ArrowLeft from "../../../images/CarrotSvg/ArrowLeft.svg"
import ArrowRight from "../../../images/CarrotSvg/ArrowRight.svg"
import ChairGuyImage from "../../../images/CarrotImages/ChairGuy.png";
import LottieCarrot from "../../../images/CarrotJSON/carrot.json";
import CarrotMobileImage from "../../../images/CarrotSvg/carrotMobile.svg";
import DotCarrotSection from "../../../images/CarrotSvg/DotCarrotSection.svg";
import DotCarrotInside from "../../../images/CarrotSvg/DotCarrotInside.svg";
import LearningVideo from "../../../images/CarrotSvg/LearningVideo.png";
import LearningCarrotsvg from "../../../images/CarrotSvg/LearningCarrot.svg";
import VideoGuy from "../../../images/CarrotSvg/VideoGuy.png";

import { loginValidator } from '../../../utils/validators';
import { CarrotButton, ButtonInside } from "../../LoginPage/LoginElements";
import { CategoriesCarrot } from "../TopStores/TopStoresElements"
import {  HeroH1,  HeroBtnWrapper, SignWelcome,
    SignInSection,
    WelcomeSection } from '../../LoginPage/LoginElements';
import { PageHeadingRed } from "../../WebsitePages/AllStores/AllStoresElements";

import { HeroBg, 
    StoreImage,
    PaidHeading } from "../ShoppingExplore/ShoppingExploreElements";

    import { StoreDotSection, LearningCarrot, ImageCards,
        ImageCard,
        PaidSection, HeroContainer,
        VideoBox,
        PersonVideo,
        PersonData,
        PersonName,
        PersonPosition,
        HeroP,
        HeroContent,
        ImageCardsMobile,
        ImgBg, Ifr, ArrowImage, LeftArrow,
        RightArrow, SmallVideo } from "./LearningElements"


const ShoppingExplore = ({ defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [learningData, setLearningData] = useState([
        {
            link: "https://www.youtube.com/embed/sjkrrmBnpGE",
            videoIndex: 1,
            name: "Utsav Chauhan",
            position : "Designer, Codeaegis"
        },
        {
            link: "https://www.youtube.com/embed/sjkrrmBnpGE",
            videoIndex: 2,
            name: "Utsav Mishra",
            position : "Developer, Codeaegis"
        },
        {
            link: "https://www.youtube.com/embed/sjkrrmBnpGE",
            videoIndex: 3,
            name: "Vicek goyal",
            position : "DeveloperR, Codeaegis"
        },
        {
            link: "https://www.youtube.com/embed/sjkrrmBnpGE",
            videoIndex: 4,
            name: "Vicdrek goyal",
            position : "Developerth, Codeaegis"
        },
        {
            link: "https://www.youtube.com/embed/sjkrrmBnpGE",
            videoIndex: 5,
            name: "Viqwcek goyal",
            position : "Developergh, Codeaegis"
        },
        {
            link: "https://www.youtube.com/embed/sjkrrmBnpGE",
            videoIndex: 6,
            name: "Viceuyk goyal",
            position : "Developervsd, Codeaegis"
        },
    ]);
    const [allStoresData, setHomeScreenData] = useState([]);
    const [allStoresShuffleData, setHomeScreenShuffleData] = useState([]);
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [slideLength, setSlideLength] = useState(get(allStoresShuffleData,"length",1));

    const nextSlide = () => {
        // setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        // console.log(allStoresShuffleData)
        let dataToShuffle = [...allStoresShuffleData];
        let firstElement = dataToShuffle[0];
        let newArray = dataToShuffle.splice(1,dataToShuffle.length);
        let latestArray = [...newArray,firstElement];
        setHomeScreenShuffleData(latestArray);
        // console.log(newArray);
        // console.log(firstElement);
        // let newArray = [allStoresShuffleData[allStoresShuffleData.length-1], ...allStoresShuffleData];
        // let afterDeleteLastItem = newArray.splice(0,newArray.length-1);
        // setHomeScreenShuffleData(afterDeleteLastItem);

        // allStoresShuffleData.push(allStoresShuffleData[0]);
        // allStoresShuffleData.splice(0,1);
        
    };
    
    const prevSlide = () => {
        // setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        let newArray = [allStoresShuffleData[allStoresShuffleData.length-1], ...allStoresShuffleData];
        let afterDeleteLastItem = newArray.splice(0,newArray.length-1);
        setHomeScreenShuffleData(afterDeleteLastItem);
      };


    useEffect(() => {
        getHomeScreen();
        window.scrollTo(0,0);
    },[])

    const getHomeScreen = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/get_homeScreen`);
            console.log(data);
            setHomeScreenData(get(data,"data.video",""));
            setHomeScreenShuffleData(get(data,"data.video",""));
            // if(get(data,"data.video","")) {
            //     setSlideLength(get(data,"data.video","").length)
            // }
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
            <HeroContainer id="MoneyLearningVideos">
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <LeftArrow
                    onClick={() => {
                        prevSlide();
                    }}
                >
                    <ArrowImage src={ArrowLeft}/>
                </LeftArrow>
                <RightArrow
                        onClick={() => {
                            nextSlide();
                        }}
                    >
                        <ArrowImage src={ArrowRight}/>
                </RightArrow>
                <HeroContent className="container">
                    <ImageCardsMobile>
                        {allStoresShuffleData.length >0 ? (
                            <>
                                {allStoresShuffleData.slice(1,5).map((item,index) => (
                                    <>
                                        <SmallVideo
                                            src={item.thumbnail}
                                            onClick={() => {
                                                let currentItem = allStoresShuffleData[index+1];
                                                let copyData = [...allStoresShuffleData];
                                                copyData.splice(index+1,1);
                                                let newData = [currentItem, ...copyData]
                                                setHomeScreenShuffleData(newData);
                                            }}
                                            // frameborder='0'
                                            // aria-disabled="true"
                                            // autoplay={false}
                                            // // allow='autoplay; encrypted-media'
                                            // allowfullscreen={false}
                                            // title='video'
                                        />
                                    </>
                                ))}
                            </>
                        ) : ""}
                    </ImageCardsMobile>
                    <StoreDotSection>
                                {allStoresShuffleData.length > 0 ? (
                                    <>
                                        {[allStoresShuffleData[0]].map((item,index) => (
                                            <>
                                                <VideoBox>
                                                    <PersonVideo>
                                                        <Ifr src={item.link}
                                                            frameborder='0'
                                                            allow='autoplay; encrypted-media'
                                                            allowfullscreen
                                                            title='video'
                                                        // width="100%"
                                                        // height="450"
                                                        />
                                                    </PersonVideo>
                                                    <PersonData>
                                                        <PersonName>
                                                            {item.title}
                                                        </PersonName>
                                                        <PersonPosition>
                                                            {item.description}
                                                        </PersonPosition>
                                                    </PersonData>
                                                </VideoBox>
                                            </>
                                        ))}
                                    </>
                                ) : ""}
                                                    
                    </StoreDotSection>
                    
                    <PaidSection style={{alignItems: "flex-start", paddingTop: "0rem", justiftContent: "flex-start"}}>
                        <HeroH1 style={{flexDirection: "column", textAlign: "left"}}>
                            <div style={{display: "flex", flexDirection: "row", width :"100%"}}>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Top&nbsp;</div>
                                <PageHeadingRed>
                                    Money
                                </PageHeadingRed>
                            </div>
                            <div style={{color: "#101011", fontFamily: "Titan One"}}>Learning Videos</div>
                            <LearningCarrot src={LearningCarrotsvg}/>
                        </HeroH1>
                        <HeroP style={{textAlign: "left"}}>Lorem ipsum dolor sit amet consectetur. Ut quis cursus orci praesent ultrices vulputate.</HeroP>
                        <ImageCards>
                            {allStoresShuffleData.length >0 ? (
                                <>
                                    {allStoresShuffleData.slice(1,5).map((item,index) => (
                                        <>
                                            <SmallVideo
                                                src={item.thumbnail}
                                                onClick={() => {
                                                    let currentItem = allStoresShuffleData[index+1];
                                                    let copyData = [...allStoresShuffleData];
                                                    copyData.splice(index+1,1);
                                                    let newData = [currentItem, ...copyData]
                                                    setHomeScreenShuffleData(newData);
                                                }}
                                                // frameborder='0'
                                                // aria-disabled="true"
                                                // autoplay={false}
                                                // // allow='autoplay; encrypted-media'
                                                // allowfullscreen={false}
                                                // title='video'
                                            />
                                        </>
                                    ))}
                                </>
                            ) : ""}
                        </ImageCards>
                    </PaidSection>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingExplore);
