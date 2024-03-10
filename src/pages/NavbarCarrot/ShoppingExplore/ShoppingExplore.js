import React, { useState } from 'react'
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

import ChairGuyImage from "../../../images/CarrotImages/ChairGuy.png";
import LottieCarrot from "../../../images/CarrotJSON/carrot.json";
import CarrotMobileImage from "../../../images/CarrotSvg/carrotMobile.svg";
import DotCarrotSection from "../../../images/CarrotSvg/DotCarrotSection.svg";
import DotCarrotInside from "../../../images/CarrotSvg/DotCarrotInside.svg";
import storeimagee from "../../../images/CarrotImages/Storeimage.png";

import { loginValidator } from '../../../utils/validators';
import { CarrotButton, ButtonInside } from "../../LoginPage/LoginElements";

import { HeroContainer, HeroBg, ImgBg, HeroContent, StoreDotSection,
    StoreImage,
    PaidSection,
    PaidHeading } from "./ShoppingExploreElements";



const ShoppingExplore = ({ defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <StoreDotSection>
                        <StoreImage src={storeimagee}/>
                    </StoreDotSection>
                    <PaidSection>
                        <PaidHeading>
                        Get Paid for shopping at all your
                        Favourite Stores
                        </PaidHeading>
                        <CarrotButton type="button">
                            <ButtonInside>
                                Explore
                            </ButtonInside>
                        </CarrotButton>
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
