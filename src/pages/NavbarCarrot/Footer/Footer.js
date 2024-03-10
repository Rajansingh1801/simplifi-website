import React, { useState, useEffect, useContext } from 'react';
import { toast } from "react-toastify";
import { get } from "lodash";
import { useNavigate } from 'react-router-dom';

import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import Lottie from 'react-lottie';

import Logo from '../../../images/CarrotSvg/SmartCarrotNewLogo.svg';
import FooterSvg from '../../../images/CarrotSvg/Footer.svg';
import CarrotStores from "../../../images/CarrotSvg/CarrotStores.svg";
import CarrotAssociate from "../../../images/CarrotSvg/LearningCarrot.svg";
import LeafPlantlottie from "../../../images/CarrotJSON/planta moviéndose.json";

// Import Redux
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import axios from '../../../axios';


import {FooterLinks, Footers, FooterItem,CopyRight,FooterText,FooterLogo,Container, FooterRow, FooterBox, FooterSocial,
    SocialIcon, HeroBg,
    FooterSection,
    CarrotAssociateMember,
    ImgBg, LottieGreenBusinessFormLeft, LottieGreenBusinessFormRight, 
} from "./FooterElements";

import { StoresCarrotSingleStore } from "../../WebsitePages/AllStores/AllStoresElements";
import Search from '../../../components/SearchBar/Search';

function Footer(props) {

    const navigate = useNavigate();
    let path = window.location.pathname;

    const defaultOptionsCarrot = {
        loop: true,
        autoplay: true,
        animationData: LeafPlantlottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <>
            <Footers>
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <FooterSection>
                    {(path.includes("/store/")) ? (
                        <>
                            <StoresCarrotSingleStore src={CarrotStores}/>
                        </>
                    ) : ""}
                    {(path==="/associateBenefits" || path==="/businessPartner" || path==="/businessPreferred" || path.includes("/payment-success") ) ? (
                        <>
                            <CarrotAssociateMember src={CarrotAssociate}/>
                        </>
                    ) : ""}
                    {(path==="/businessPartnerForm" || path==="/associateMemberForm" ) ? (
                        <>
                            <LottieGreenBusinessFormLeft>
                                <Lottie
                                    options={defaultOptionsCarrot}
                                    height={"100%"}
                                    width={"100%"}
                                />
                            </LottieGreenBusinessFormLeft>
                            <LottieGreenBusinessFormRight>
                                <Lottie
                                    options={defaultOptionsCarrot}
                                    height={"100%"}
                                    width={"100%"}
                                />
                            </LottieGreenBusinessFormRight>
                        </>
                    ) : ""}
                    <Container>
                        <FooterRow>
                            <FooterBox style={{justifyContent: "space-between"}}>
                                    <FooterLogo src={Logo}
                                        onClick={() => {
                                            navigate('/');
                                        }}
                                    />
                                    <FooterSocial>
                                            <SocialIcon href='https://www.instagram.com/smartcarrots/' target='_blank'>
                                                <BsIcons.BsInstagram style={{color: "#FFFFFF"}} />
                                            </SocialIcon>
                                            <SocialIcon href='https://www.facebook.com/profile.php?id=100094310993550' target='_blank'>
                                                <FaIcons.FaFacebookF style={{color: "#FFFFFF"}}/>
                                            </SocialIcon>
                                            <SocialIcon href='https://www.linkedin.com/company/98233258/admin/feed/posts/' target='_blank'>
                                                <FaIcons.FaLinkedin style={{color: "#FFFFFF"}}/>
                                            </SocialIcon>
                                            <SocialIcon href='https://twitter.com/SmartCarrots1' target='_blank'>
                                                <FaIcons.FaTwitter style={{color: "#FFFFFF"}}/>
                                            </SocialIcon>
                                    </FooterSocial>
                            </FooterBox>
                            <FooterBox>
                                    <FooterText>Company</FooterText>
                                    <FooterLinks
                                        onClick={() => {
                                            navigate("/about-us");
                                        }}
                                    >About&nbsp;Us</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            navigate("/contact-us");
                                        }}
                                    >Contact&nbsp;Us</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            navigate("/blogs");
                                        }}
                                    >Blog</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            if(window.location.pathname==="/") {
                                                let access = document.getElementById(`TestimonialScroll`);
                                                if (access) {
                                                    access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                }
                                            } else {
                                                navigate("/");
                                                setTimeout(() => {
                                                    let access = document.getElementById(`TestimonialScroll`);
                                                    if (access) {
                                                        access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                    }
                                                 }, 1000);
                                            }
                                            
                                        }}
                                    >Testimonials</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            navigate("/faq");
                                        }}
                                    >FAQ</FooterLinks>
                            </FooterBox>
                            <FooterBox>
                                    <FooterText>Quick&nbsp;Link</FooterText>
                                    <FooterLinks
                                        onClick={() => {
                                            if(window.location.pathname==="/") {
                                                let access = document.getElementById(`HowItWorks`);
                                                if (access) {
                                                    access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                }
                                            } else {
                                                navigate("/");
                                                setTimeout(() => {
                                                    let access = document.getElementById(`HowItWorks`);
                                                    if (access) {
                                                        access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                    }
                                                }, 1000);
                                            }
                                        }}
                                    >How&nbsp;It&nbsp;Works</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            if(window.location.pathname==="/") {
                                                let access = document.getElementById(`TopCategories`);
                                                if (access) {
                                                    access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                }
                                            } else {
                                                navigate("/");
                                                setTimeout(() => {
                                                    let access = document.getElementById(`TopCategories`);
                                                    if (access) {
                                                        access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                    }
                                                }, 1000);
                                            }
                                        }}
                                    >Top&nbsp;Categories</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            if(window.location.pathname==="/") {
                                                let access = document.getElementById(`MoneyLearningVideos`);
                                                if (access) {
                                                    access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                }
                                            } else {
                                                navigate("/");
                                                setTimeout(() => {
                                                    let access = document.getElementById(`MoneyLearningVideos`);
                                                    if (access) {
                                                        access.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' }, true);
                                                    }
                                                }, 1000);
                                            }
                                        }}
                                    >Money&nbsp;Learning&nbsp;Videos</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            navigate("/terms-and-conditions");
                                        }}
                                    >Terms&nbsp;and&nbsp;Conditions</FooterLinks>
                                    <FooterLinks
                                        onClick={() => {
                                            navigate("/privacy-policy");
                                        }}
                                    >Privacy&nbsp;Policy</FooterLinks>
                            </FooterBox>
                            <FooterBox style={{justifyContent: "flex-end", paddingBottom: "2rem"}}>
                                    <FooterText style={{fontSize: "1.4rem", paddingBottom: "1.2rem"}}>Newsletter</FooterText>
                                    <Search/>
                            </FooterBox>
                        </FooterRow>

                    </Container>
                    <CopyRight>© 2023 SmartCarrots. All rights reserved.</CopyRight>
                </FooterSection>
            </Footers>

        </>
    )

}



const mapStateToProps = (state) => {
    return {
      defaultState: state.defaultState
    };
  };
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setDefaultState: (updatedValue) => {
        dispatch({
            type: actionTypes.UPDATE_DEFAULT,
            updateDefault: updatedValue,
        });
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Footer);
  