import React, { useState } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';

import Lottie from 'react-lottie';
import Input from '../../components/Input';
import CarrotInput from '../../components/CarrotInput';

import ChairGuySvg from "../../images/CarrotSvg/ChairGuy.svg"
import ChairGuyImage from "../../images/CarrotImages/ChairGuy.png";
import GreenBottomImage from "../../images/CarrotImages/GreenBottom.png";
import LottieCarrot from "../../images/CarrotJSON/carrot.json";
import DotCarrotSection from "../../images/CarrotSvg/DotCarrotSection.svg";
import DotCarrotInside from "../../images/CarrotSvg/DotCarrotInside.svg";

import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
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
    RightSectionInsideDot,
    RightSectionDotOutBig,
    LeftSectionUpperDot,
    LeftSectionOutsideDot,
    RightSectionOutsideDot,
    LeftSectionDot,
    ForgotRow,
    CarrotButtonRow,
    CarrotButton,
    DontHaveRow,
    ChairSvgSection,
    ChairGuy,
    ChairBottom,
    DontHave,
    SignupText,
    WelcomeSection } from './LoginElements';




const HeroSection = ({ defaultState, setDefaultState }) => {
    

    const navigate = useNavigate();


    const defaultOptionsCarrot = {
        loop: true,
        autoplay: true,
        animationData: LottieCarrot,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </HeroBg>
            <HeroContent className="container">
                <SignWelcome>
                    <SignInSection>
                        <HeroH1>
                            <div style={{color: "#101011"}}>Sign</div>&nbsp;<div style={{color: "#28C54E"}}>In</div>
                        </HeroH1>
                        <HeroP>We will send you mail to verify</HeroP>
                    </SignInSection>
                    <WelcomeSection>
                        <WelcomeDesign>
                            <TrapeziumLeft>
                                <LeftSectionDot src={DotCarrotSection}/>
                                <LeftSectionOutsideDot src={DotCarrotInside}/>
                                <LeftSectionUpperDot src={DotCarrotInside}/>
                            </TrapeziumLeft>
                            <TrapeziumRight>
                                <RightSectionInsideDot src={DotCarrotInside}/>
                                <RightSectionDotOutBig src={DotCarrotSection}/>
                                <RightSectionOutsideDot src={DotCarrotInside}/>
                            </TrapeziumRight>
                            <TrapeziumContent>
                                <WelcomeRow>
                                    This is Homepage
                                </WelcomeRow>
                                <EmailPswdSection>
                                    <LabelInput>
                                        <InputLabel>
                                            Email
                                        </InputLabel>
                                        <CarrotInput
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </LabelInput>
                                    <LabelInput>
                                        <InputLabel>
                                            Password
                                        </InputLabel>
                                        <CarrotInput
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </LabelInput>
                                    <ForgotRow>
                                        Forgot Password?
                                    </ForgotRow>
                                    <CarrotButtonRow>
                                        <CarrotButton>
                                            <ButtonInside
                                                onClick={() => {
                                                    navigate("/login")
                                                }}
                                            >
                                            Sign In
                                            </ButtonInside>
                                        </CarrotButton>
                                    </CarrotButtonRow>
                                </EmailPswdSection>
                                <DontHaveRow>
                                    <DontHave>
                                        Don’t have an account?
                                    </DontHave>
                                    <SignupText>
                                        &nbsp;Sign Up Here
                                    </SignupText>
                                </DontHaveRow>
                            </TrapeziumContent>
                            <Lottie
                                options={defaultOptionsCarrot}
                                height={"165px"}
                                width={"175px"}
                                style={{
                                    position: "absolute",
                                    right: "-5.5rem",
                                    top: "-3.5rem",
                                    transform: "rotate(245deg)"
                                }}
                            />
                        </WelcomeDesign>
                    </WelcomeSection>
                </SignWelcome>
                <HeroBtnWrapper>
                    
                </HeroBtnWrapper>
            </HeroContent>
            <ChairSvgSection>
                <ChairGuy src={ChairGuyImage} />
                <ChairBottom src={GreenBottomImage}/>
                    
            </ChairSvgSection>
            {/*<ChairSvg src={ChairGuySvg}/>*/}
        </HeroContainer>
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
