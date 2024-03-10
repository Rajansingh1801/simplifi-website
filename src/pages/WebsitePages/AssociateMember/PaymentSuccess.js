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
  CardPoint,
} from "./AssociateMemberElements";
import { PageHeadingGreen } from "../AllStores/AllStoresElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const trackid = searchParams.get("trackid");
  const customerId = searchParams.get("customerId");
  const type = searchParams.get("type");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  console.log(trackid);
  console.log(customerId);
  console.log(type);

  useEffect(() => {
    updatePaymentSucess();
  }, []);

  const updatePaymentSucess = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `/user/update_payment_details?transaction_id=${trackid}&customer=${customerId}&type=${type}&success=0`
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
                  <RightTick src={RightTickImage} />
                  <CardHeadingRow>
                    <CongratulationHeading>
                      Congratulation!
                    </CongratulationHeading>
                  </CardHeadingRow>
                  <CardPointsSection type="free">
                    {type === "0" ? (
                      <>
                        <CardPointRow style={{ justifyContent: "center" }}>
                          <CardPoint>
                            For purchasing the subscription plan.
                          </CardPoint>
                        </CardPointRow>
                      </>
                    ) : (
                      ""
                    )}
                    {type === "1" ? (
                      <>
                        <CardPointRow style={{ justifyContent: "center" }}>
                          <CardPoint>For becoming an</CardPoint>
                          <CardPoint style={{ fontWeight: "bold" }}>
                            &nbsp;Associate Member.
                          </CardPoint>
                        </CardPointRow>
                      </>
                    ) : (
                      ""
                    )}
                    {type === "2" ? (
                      <>
                        <CardPointRow style={{ justifyContent: "center" }}>
                          <CardPoint>For becoming an</CardPoint>
                          <CardPoint style={{ fontWeight: "bold" }}>
                            &nbsp;Preferred Business Partner.
                          </CardPoint>
                        </CardPointRow>
                      </>
                    ) : (
                      ""
                    )}
                  </CardPointsSection>
                  <LottieDiv>
                    <Lottie
                      options={defaultOptionsCarrot}
                      height={"100%"}
                      width={"100%"}
                    />
                  </LottieDiv>
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
