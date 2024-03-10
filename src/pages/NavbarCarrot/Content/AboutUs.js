import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from "react-lottie";
import Overlay from "../../../components/Overlay";
import CarrotInputNormal from "../../../components/CarrotInputNormal";
import axios from "../../../axios";
import CarrotStores from "../../../images/CarrotSvg/PrivacyPolicyCarrot.svg";
import { Modal } from "../../../components/Modal/Modal";
import ArrowLeft from "../../../images/CarrotSvg/ArrowLeft.svg"
import ArrowRight from "../../../images/CarrotSvg/ArrowRight.svg"

import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import ThankRightTick from "../../../images/CarrotSvg/ThankYouRightTick.svg";
import { associateFormValidator } from "../../../utils/validators";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  NavBtnLink,
  ChairSvg,
  SignWelcome,
  WelcomeDesign,
  CarrotButton,
  ButtonInside,
  TrapeziumContent,
  TrapeziumLeft,
  TrapeziumRight,
  SignInSection,
  WelcomeRow,
  EmailPswdSection,
  LabelInput,
  InputLabel,
  // CarrotInput,
  PlanCardsSection,
  CarrotButtonRow,
  ChairSvgSection,
  AllPlanCards,
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
  PageHeadingRed,
  PageHeadingGreen,
} from "../../WebsitePages/AllStores/AllStoresElements";

import { UpperSectionForm } from "../../WebsitePages/AssociateMember/AssociateMemberElements";
import {
  AssociateFormCarrot,
  ImgBgDot,
  UpperSectionCardForm,
  TermsDataSection,
  TermsButtonSection,
  DeclineButton,
  AcceptButton,
  CustomImage,
  OurTeamSection,
    OurTeamCard,
    TeamMemberImage,
    TeamData,
    MemberName,
    MemberPara,
    TeamMemberImageFirst,
    TeamMemberImageSecond,
    ArrowImage,
    LeftArrow, RightArrow,
} from "./ContentElements";
import LexicalEditor from "../../../LexicalEditor";

const HeroSection = ({
  defaultState,
  setDefaultState,
  setUsers,
  userToken,
  userData,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [contentData, setContentData] = useState(null);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    getContent();
  }, []);

  const getContent = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/user/get_about_us`);
      setContentData(data);
      setTeamData(data?.our_teams);
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

  const nextSlide = () => {
    let dataToShuffle = [...teamData];
    let firstElement = dataToShuffle[0];
    let newArray = dataToShuffle.splice(1,dataToShuffle.length);
    let latestArray = [...newArray,firstElement];
    setTeamData(latestArray);
    
};

const prevSlide = () => {
    let newArray = [teamData[teamData.length-1], ...teamData];
    let afterDeleteLastItem = newArray.splice(0,newArray.length-1);
    setTeamData(afterDeleteLastItem);
  };

  console.log(contentData);

  return (
    <>
      <HeroContainer style={{ height: "100%" }}>
        <HeroBg>
          <ImgBgDot src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
        </HeroBg>
        <HeroContent className="container">
          <SignWelcome>
            <SignInSection style={{ paddingTop: "1rem" }}>
              <HeroH1>
                <PageHeadingRed>Our&nbsp;</PageHeadingRed>
                <div style={{ color: "#101011", fontFamily: "Titan One" }}>
                  Story&nbsp;
                </div>
              </HeroH1>
            </SignInSection>
            <PlanCardsSection>
              <UpperSectionForm>
                <TermsDataSection>
                  {/* <div dangerouslySetInnerHTML={{ __html: contentData }} /> */}
                  <CustomImage src={contentData?.about_us?.our_story?.image} />
                  <LexicalEditor
                    initialEditorState={
                      contentData?.about_us?.our_story?.description
                    }
                    key={contentData?.about_us?.our_story?.description}
                  />
                </TermsDataSection>
                \{" "}
              </UpperSectionForm>
            </PlanCardsSection>
            <SignInSection style={{ paddingTop: "1rem" }}>
              <HeroH1>
                <PageHeadingRed>Our&nbsp;</PageHeadingRed>
                <div style={{ color: "#101011", fontFamily: "Titan One" }}>
                  Aim&nbsp;
                </div>
              </HeroH1>
            </SignInSection>
            <PlanCardsSection>
              <UpperSectionForm>
                <TermsDataSection>
                  {/* <div dangerouslySetInnerHTML={{ __html: contentData }} /> */}

                  <LexicalEditor
                    initialEditorState={
                      contentData?.about_us?.our_aim?.description
                    }
                    key={contentData?.about_us?.our_aim?.description}
                  />
                  <CustomImage src={contentData?.about_us?.our_aim?.image} />
                </TermsDataSection>
              </UpperSectionForm>
            </PlanCardsSection>
            <SignInSection style={{ paddingTop: "1rem" }}>
              <HeroH1>
                <PageHeadingRed>Our&nbsp;</PageHeadingRed>
                <div style={{ color: "#101011", fontFamily: "Titan One" }}>
                  Team&nbsp;
                </div>
              </HeroH1>
            </SignInSection>
            {teamData.length > 0 ? (
                <>
                    <OurTeamSection>
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
                            <OurTeamCard>
                                <TeamMemberImageFirst src={teamData[0].image}>
                                </TeamMemberImageFirst>
                                <TeamData>
                                    <MemberName>
                                        {teamData[0].name}
                                    </MemberName>
                                    <MemberPara>
                                        {teamData[0].description ? (
                                            <>
                                                {teamData[0].description.slice(0,90)}
                                            </>
                                        ) : ""}
                                    </MemberPara>
                                </TeamData>
                            </OurTeamCard>
                            <OurTeamCard>
                                <TeamMemberImageSecond src={teamData[1].image}>
                                </TeamMemberImageSecond>
                                <TeamData>
                                    <MemberName>
                                        {teamData[1].name}
                                    </MemberName>
                                    <MemberPara>
                                    {teamData[1].description ? (
                                        <>
                                            {teamData[1].description.slice(0,90)}
                                        </>
                                    ) : ""}
                                    </MemberPara>
                                </TeamData>
                            </OurTeamCard>
                            <OurTeamCard>
                                <TeamMemberImage src={teamData[2].image}>
                                </TeamMemberImage>
                                <TeamData>
                                    <MemberName>
                                        {teamData[2].name}
                                    </MemberName>
                                    <MemberPara>
                                        {teamData[2].description ? (
                                            <>
                                                {teamData[2].description.slice(0,90)}
                                            </>
                                        ) : ""}
                                    </MemberPara>
                                </TeamData>
                            </OurTeamCard>
                            <OurTeamCard>
                                <TeamMemberImageSecond src={teamData[3].image}>
                                </TeamMemberImageSecond>
                                <TeamData>
                                    <MemberName>
                                    {teamData[3].name}
                                    </MemberName>
                                    <MemberPara>
                                        {teamData[3].description ? (
                                            <>
                                                {teamData[3].description.slice(0,90)}
                                            </>
                                        ) : ""}
                                    </MemberPara>
                                </TeamData>
                            </OurTeamCard>
                            <OurTeamCard>
                                <TeamMemberImageFirst src={teamData[4].image}>
                                </TeamMemberImageFirst>
                                <TeamData>
                                    <MemberName>
                                    {teamData[4].name}
                                    </MemberName>
                                    <MemberPara>
                                        {teamData[4].description ? (
                                            <>
                                                {teamData[4].description.slice(0,90)}
                                            </>
                                        ) : ""}
                                    </MemberPara>
                                </TeamData>
                            </OurTeamCard>
                    </OurTeamSection>
                </>
            ) : ""}
          </SignWelcome>
        </HeroContent>
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
    setToken: (updatedValue) => {
      dispatch({
        type: actionTypes.USER_TOKEN,
        updatedToken: updatedValue,
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
