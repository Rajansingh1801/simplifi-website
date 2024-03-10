import React, { useState, useEffect ,useContext} from 'react'
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

import  { HeroContainer, HeroBg, ImgBg, CategoriesCarrot, HeroContent, AllCategories,
    CategoriesCard,
    CategoryCardImage,
    CategoryCardText } from "./TopStoresElements"

import {  HeroH1, HeroP, HeroBtnWrapper, SignWelcome,
    SignInSection,
    WelcomeSection,
    CarrotButtonRow,
    CarrotButton,
    ButtonInside
} from '../../LoginPage/LoginElements';

import { MyContext } from '../../../contextApi/context';




const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const {homedata,setIsLoading,isLoading}=useContext(MyContext);
console.log("hooooooooooomedataa",homedata)
    // const [isLoading, setIsLoading] = useState(false);
    const [allStoresData, setHomeScreenData] = useState([]);

    useEffect(() => {
        // getHomeScreen();
        window.scrollTo(0,0);
    },[])

    // const getHomeScreen = async (values) => {
    //     setIsLoading(true);
    //     try {
    //         const { data } = await axios.get(`/user/get_homeScreen`);
    //         console.log(data);
    //         setHomeScreenData(get(data,"data.category",""));
    //         setIsLoading(false);
    //     } catch (error) {
    //         setIsLoading(false);
    //         if (error?.response?.data?.errors) {
    //             toast.error(`${error.response.data.errors[0].msg}`, {
    //               position: toast.POSITION.TOP_RIGHT,
    //             });
    //         } else {
    //             toast.error(`${error?.response?.data?.message}`, {
    //               position: toast.POSITION.TOP_RIGHT,
    //             });
    //         }
    //     }
    // };
    

    return (
        <>
            <HeroContainer id="TopCategories">
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent>
                    <SignWelcome>
                        <SignInSection>
                            <HeroH1>
                                <CategoriesCarrot src={categoriesCarrotsvg}/>
                                <div style={{color: "#28C54E", fontFamily: "Titan One"}}>Top&nbsp;</div><div style={{color: "#101011", fontFamily: "Titan One"}}>Categories</div>
                            </HeroH1>
                            <HeroP>Lorem ipsum dolor sit amet consectetur. Ut quis cursus orci praesent ultrices vulputate.</HeroP>
                        </SignInSection>
                        <WelcomeSection style={{padding: "0rem"}}>
                            <AllCategories>
                                {/* {allStoresData.length > 0 ? (
                                    <>
                                        {allStoresData.map((item,index) => ( */}
                                          {homedata?.data?.category.length > 0 ? (
                                    <>
                                        {homedata?.data?.category.map((item,index) => (
                                            <>
                                                <CategoriesCard
                                                    onClick={() => {
                                                        navigate(`/category-store/${item._id}`)
                                                    }}
                                                >
                                                    <CategoryCardImage src={item.icon}/>
                                                    <CategoryCardText>
                                                        {item.name}
                                                    </CategoryCardText>
                                                </CategoriesCard>
                                            </>
                                        ))}
                                    
                                    </>
                                ) : ""}
                            </AllCategories>
                            <CarrotButtonRow>
                                <CarrotButton
                                    type="button"
                                    onClick={() => {
                                        navigate("/allStores")
                                    }}
                                >
                                    <ButtonInside>
                                        View All
                                    </ButtonInside>
                                </CarrotButton>
                            </CarrotButtonRow>
                        </WelcomeSection>
                    </SignWelcome>
                    <HeroBtnWrapper>
                        
                    </HeroBtnWrapper>
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









