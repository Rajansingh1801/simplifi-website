import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Lottie from "react-lottie";

import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from "../../../components/Overlay";
import axios from "../../../axios";
import SubFree from "../../../images/CarrotSvg/SubFree.svg";
import RightTickImage from "../../../images/CarrotSvg/RightTick.svg";
import LottieCarrot from "../../../images/CarrotJSON/Handshake-blue.json";

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
} from "../../LoginPage/LoginElements";

import {
  AllPlanCards,
  ImgBgDotPay,
  RightTick,
  CongratulationHeading,
  LottieDiv,
} from "./AssociateMemberElements";
import { PageHeadingGreen } from "../AllStores/AllStoresElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const updatePaymentSucess = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `/user/update_payment_details?}&type=${type}&success=0`
      );
      localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
      setUsers(data.data);
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

  const defaultOptionsCarrot = {
    loop: true,
    autoplay: true,
    animationData: LottieCarrot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
              <HeroH1></HeroH1>
              <HeroP></HeroP>
            </SignInSection>
            <PlanCardsSection>
              <AllPlanCards>
                <PlanCard>
                  <CardHeadingRow>
                    <CongratulationHeading type="orange">
                      Thank You
                    </CongratulationHeading>
                  </CardHeadingRow>
                  <CardPointsSection>
                    {type === "associate" || type === "preferred" ? (
                      <>
                        <CardPointRow style={{ justifyContent: "center" }}>
                          <CardPoint style={{ textAlign: "center" }}>
                            For submitting the form, Admin will get back to you
                            from Email for further steps.
                          </CardPoint>
                        </CardPointRow>
                      </>
                    ) : (
                      ""
                    )}
                    {type === "contact" ? (
                      <>
                        <CardPointRow style={{ justifyContent: "center" }}>
                          <CardPoint>
                            For contacting us, We will get back to you.
                          </CardPoint>
                        </CardPointRow>
                      </>
                    ) : (
                      ""
                    )}
                  </CardPointsSection>
                  <WrapSection>
                    <BuySection style={{ paddingTop: "1rem" }}>
                      <CarrotButton
                        type="button"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        <ButtonInside>Continue</ButtonInside>
                      </CarrotButton>
                    </BuySection>
                  </WrapSection>
                </PlanCard>
              </AllPlanCards>
            </PlanCardsSection>
          </SignWelcome>
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
