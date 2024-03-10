import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from "../../../components/Overlay";
import axios from "../../../axios";
import SubFree from "../../../images/CarrotSvg/SubFree.svg";

import {
  HeroContainer,
  HeroBg,
  ImgBgDot,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  NavBtnLink,
  ChairSvg,
  SignWelcome,
  WelcomeDesign,
  TrapeziumContent,
  TrapeziumLeft,
  TrapeziumRight,
  SignInSection,
  WelcomeRow,
  ButtonInside,
  EmailPswdSection,
  LabelInput,
  InputLabel,
  // CarrotInput,
  PlanCardsSection,
  RightSectionInsideDot,
  RightSectionDotOutBig,
  LeftSectionUpperDot,
  LeftSectionOutsideDot,
  RightSectionOutsideDot,
  LeftSectionDot,
  ForgotRow,
  ForgotText,
  CarrotButtonRow,
  PointRowDotButton,
  CarrotButton,
  DontHaveRow,
  ChairSvgSection,
  ChairGuy,
  ChairBottom,
  DontHave,
  SignupText,
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
  WrapSection,
  NewHeroP,
} from "../../LoginPage/LoginElements";

import {
  AllPlanCards,
  BusinessListContainer,
  BusinessListItem,
  BusinessListItemDescription,
  BusinessListItemHeading,
  BusinessListItemLeft,
  BusinessListItemRight,
  BusinessListItemRightData,
  BusinessListItemRightImage,
  ImgBgDotPay,
} from "./AssociateMemberElements";
import {
  InnerRow,
  LeftArrow,
  PageButton,
  PageHeadingGreen,
  PageInnerRow,
  PaginationRow,
  RightArrow,
} from "../AllStores/AllStoresElements";
import videoButton from "../../../images/videoButton.png";
import * as IoIcons from "react-icons/io";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [allStoresData, setAllStoresData] = useState([]);
  const [currentPage, setCurrentPage] = useState("1");

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    getBusinessPartnerList();
    window.scrollTo(0, 0);
  }, []);

  const getBusinessPartnerList = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/user/get_preferred_partner_list?page=${values ? values : currentPage}&pageSize=8`);
      setAllStoresData(data.data);
      setCurrentPage(get(data, "data.page", ""));
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

  console.log(subscriptionPlans);
  const customDescription = (e) => {
    if (e.length <= 100) {
      return e;
    } else {
      let text = e.slice(0, 100) + " ... ";
      return text;
    }
  };
  const customTitle = (e) => {
    if (e.length <= 20) {
      return e;
    } else {
      let text = e.slice(0, 20) + " ... ";
      return text;
    }
  };

  return (
    <>
      <HeroContainer style={{ height: "100%" }}>
        <HeroBg>
          <ImgBgDotPay src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
        </HeroBg>
        <HeroContent className="container">
          <SignWelcome>
            <SignInSection style={{ padding: "1.5rem 0rem" }}>
              <HeroH1>
                <div style={{ color: "#101011", fontFamily: "Titan One" }}>Preferred&nbsp;Business</div>&nbsp;
                <PageHeadingGreen style={{ color: "#28C54E", fontFamily: "Titan One" }}>Partner&nbsp;List</PageHeadingGreen>
              </HeroH1>
              {/* <HeroP>Lorem ipsum dolor sit amet consectetur. At viverra risus ultrices et.</HeroP> */}
              <NewHeroP>Lorem ipsum dolor sit amet consectetur. At viverra risus ultrices et.</NewHeroP>
            </SignInSection>
          </SignWelcome>
          <BusinessListContainer>
            {!allStoresData.docs ? (
              <></>
            ) : (
              allStoresData.docs.map((ele) => (
                <BusinessListItem>
                  <BusinessListItemLeft src={!ele.logo?videoButton:ele.logo} alt="logo" />
                  <BusinessListItemRight>
                    <BusinessListItemRightData>
                      <BusinessListItemHeading>{customTitle(ele.name)}</BusinessListItemHeading>
                      <BusinessListItemDescription>{customDescription(ele.description)} </BusinessListItemDescription>
                    </BusinessListItemRightData>
                    {!ele.video?false:<a href={ele.video} target="_blank" style={{alignSelf:"flex-end"}}><BusinessListItemRightImage src={videoButton} alt="img"  /></a>}
                  </BusinessListItemRight>
                </BusinessListItem>
              ))
            )}
          </BusinessListContainer>
          <PaginationRow>
            <PageInnerRow>
              <>
                <LeftArrow
                  IsDisabled={allStoresData.hasPrevPage ? false : true}
                  onClick={() => {
                    if (allStoresData.hasPrevPage) {
                      getBusinessPartnerList(allStoresData.prevPage);
                    }
                  }}
                >
                  <IoIcons.IoIosArrowBack />
                </LeftArrow>
              </>
              {/*{allStoresData.hasPrevPage ? (
                                    ) : ""}*/}
              <InnerRow>
                {allStoresData.totalPages ? (
                  <>
                    {allStoresData.totalPages < 10 ? (
                      <>
                        {[...Array(allStoresData.totalPages).keys()].map((item, index) => (
                          <>
                            <PageButton
                              IsSelectedPage={currentPage === item + 1 ? true : false}
                              onClick={() => {
                                getBusinessPartnerList(item + 1);
                              }}
                            >
                              {item + 1}
                            </PageButton>
                          </>
                        ))}
                      </>
                    ) : (
                      <>
                        {[...Array(allStoresData.totalPages).keys()].map((item, index) => (
                          <>
                            <PageButton
                              IsSelectedPage={currentPage === item + 1 ? true : false}
                              onClick={() => {
                                getBusinessPartnerList(item + 1);
                              }}
                            >
                              {item + 1}
                            </PageButton>
                          </>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  ""
                )}
              </InnerRow>
              <>
                <RightArrow
                  IsDisabled={allStoresData.hasNextPage ? false : true}
                  onClick={() => {
                    if (allStoresData.hasNextPage) {
                      getBusinessPartnerList(allStoresData.nextPage);
                    }
                  }}
                >
                  <IoIcons.IoIosArrowForward />
                </RightArrow>
              </>
              {/*{allStoresData.hasNextPage ? (
                                    ) : ""}*/}
            </PageInnerRow>
          </PaginationRow>
          <HeroBtnWrapper></HeroBtnWrapper>
        </HeroContent>
        <ChairSvgSection></ChairSvgSection>
      </HeroContainer>
      {isLoading && <Overlay />}
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
