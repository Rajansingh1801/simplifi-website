import React, { useState, useEffect } from "react";
import {
  WorksContainer,
  WorksH1,
  WorksWrapper,
  WorksCard,
  WorksIcon,
  WorksH2,
  WorksH6,
  WorksP,
  IconBackground,
} from "./BlogsElements";
import Icon1 from "../../../images/CarrotImages/aron-visuals-BXOXnQ26B7o-unsplash.jpg";
import Icon2 from "../../../images/CarrotImages/aron-visuals-BXOXnQ26B7o-unsplash.jpg";
import Icon3 from "../../../images/CarrotImages/aron-visuals-BXOXnQ26B7o-unsplash.jpg";

import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from "../../../components/Overlay";
import axios from "../../../axios";

import categoriesCarrotsvg from "../../../images/CarrotSvg/CategoriesCarrot.svg";
import categoryMobileImage from "../../../images/CarrotSvg/CategoryMobile.png";

import {
  HeroContainer,
  HeroBg,
  ImgBg,
  CategoriesCarrot,
  HeroContent,
  AllCategories,
  SignWelcome,
  CategoryCardImage,
  WorksData,
  CategoryCardText,
} from "./BlogsElements";

import {
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  SignInSection,
  WelcomeSection,
  CarrotButtonRow,
  CarrotButton,
  ButtonInside,
} from "../../LoginPage/LoginElements";

import { PageHeadingRed } from "../../WebsitePages/AllStores/AllStoresElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [allBlogsData, setAllBlogsData] = useState([]);

  // useEffect(() => {
  //   getAllBlogs();
  // }, []);

  // const getAllBlogs = async (values) => {
  //   setIsLoading(true);
  //   try {
  //     const { data } = await axios.get(`/user/get_all_blogs`);
  //     setAllBlogsData(data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     if (error?.response?.data?.errors) {
  //       toast.error(`${error.response.data.errors[0].msg}`, {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     } else {
  //       toast.error(`${error?.response?.data?.message}`, {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     }
  //   }
  // };

  // const customDescription = (e) => {
  //   if (e.length <= 100) {
  //     return e;
  //   } else {
  //     let text = e.slice(0, 100) + " ... ";
  //     return text;
  //   }
  // };

  return (
    <>
      <section>{isLoading && <Overlay />}</section>
    </>
  );
};

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
