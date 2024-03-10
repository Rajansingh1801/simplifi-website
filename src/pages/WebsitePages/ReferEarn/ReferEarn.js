import React, { useState, useEffect,  } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from 'react-lottie';
import Overlay from '../../../components/Overlay';
import CarrotInputNormal from '../../../components/CarrotInputNormal';
import axios from "../../../axios";
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotStores from "../../../images/CarrotSvg/CarrotStores.svg";
import HowWorksVideo from "../../../images/CarrotSvg/HowItWorks.png";
import InviteImage from "../../../images/CarrotSvg/InviteImagenew.png";
import ArrowLeft from "../../../images/CarrotSvg/ArrowLeft.svg"
import ArrowRight from "../../../images/CarrotSvg/ArrowRight.svg"

import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import { businessPreferredValidator } from "../../../utils/validators";
import { HeroContainer, HeroBg,  HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
    CarrotButton,
    ButtonInside,
    SignInSection,
    LabelInput,
    InputLabel,
    PlanCardsSection,
    CarrotButtonRow } from '../../LoginPage/LoginElements';

import { ImgBgDot,
    UpperSectionCardForm } from "../AssociateMember/AssociateMemberElements";

import { SortRow,
    SortData,
    SortBy,
    SortButton,
    AllStoresSection,
    StoresCarrot,
    StoreDetailButton,
    StoreCard,
    StoreLogo,
    PaginationRow,
    AllStoresCard,
    CardLogo,
    OfferSection,
    OfferDetailsHeading,
    OfferDetails,
    BgDiv
} from "../AllStores/AllStoresElements";

import { VideoSection,
    VideoDescription,
    BigVideo,
    VideoRow,
    VideoInside,
    LeftArrow,
    RightArrow,
    ArrowImage,
    VideoInsideImage,
    ReferralSection,
    ReferralImage,
    ReferralPara,
    ReferralLinkData,
    ReferralHeading,
    ReferralLink,
    LinkText,
    CopyToClickboard,
    CoptTheLink,
    InviteData,
    InviteByHeading,
    InviteBubblesRow,
    InviteButton,
    InviteButtonSmall,
    InviteButtonMiddle
} from "./ReferEarnElements";

import { PageHeadingRed } from "../AllStores/AllStoresElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const params = useParams();

    const [isLoading, setIsLoading] = useState(false);
  
    const [referEarnData, setReferEarnData] = useState([]);

    useEffect(() => {
        getReferEarnContent();
    },[])

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const getReferEarnContent = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/get_refer_earn_content`);
            setReferEarnData(data.data);
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
    console.log(referEarnData);
    

    return (
        <>
            <HeroContainer style={{height: "100%"}}>
                <HeroBg>
                    <ImgBgDot src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{padding: "1.5rem 0rem"}}>
                            <HeroH1> 
                                <PageHeadingRed>
                                    Say&nbsp;
                                </PageHeadingRed>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Something,&nbsp;</div>
                                <PageHeadingRed>
                                    Earn&nbsp;
                                </PageHeadingRed>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Something</div>
                            </HeroH1>
                        </SignInSection>
                        <ReferralSection>
                            <ReferralImage src={InviteImage}/>
                            <ReferralPara>
                            Invite friend and earn Rewards points, Every time they shop!
                            </ReferralPara>
                            <ReferralLinkData>
                                <ReferralHeading>
                                Referral Link
                                </ReferralHeading>
                                {referEarnData.length >0 ? (
                                    <>
                                        <ReferralLink>
                                            <LinkText>
                                            {referEarnData[0].referral_code}
                                            </LinkText>
                                            <CopyToClickboard
                                                onClick={() => {
                                                    // Get the text field
                                                    var copyText = referEarnData[0].referral_code;
                                                  
                                                    // Copy the text inside the text field
                                                    navigator.clipboard.writeText(copyText);
                                                  
                                                    toast.success(`Text Copied`, {
                                                        position: toast.POSITION.TOP_RIGHT,
                                                    });
                                                    
                                                      
                                                }}
                                            >
                                                <MdIcons.MdContentCopy/>
                                            </CopyToClickboard>
                                        </ReferralLink>
                                    </>
                                ) : ""}
                                <CoptTheLink>
                                Copy the link and share it with thanks
                                </CoptTheLink>
                            </ReferralLinkData>
                            <InviteData>
                                <InviteByHeading>
                                    Invite by Social Media
                                </InviteByHeading>
                                <InviteBubblesRow>
                                    <InviteButtonSmall/>
                                    <InviteButtonMiddle/>
                                    <InviteButton>
                                        <FaIcons.FaFacebookF style={{ color: "#FFFFFF"}} />
                                    </InviteButton>
                                    <InviteButton>
                                        <FaIcons.FaWhatsapp style={{ color: "#FFFFFF"}} />
                                    </InviteButton>
                                    <InviteButton>
                                        <FaIcons.FaInstagram style={{ color: "#FFFFFF"}} />
                                    </InviteButton>
                                    <InviteButtonMiddle/>
                                    <InviteButtonSmall/>
                                </InviteBubblesRow>
                            </InviteData>
                        </ReferralSection>
                        <PlanCardsSection>
                            <VideoSection>
                                <VideoDescription>
                                Lorem ipsum dolor sit amet consectetur. Facilisis tristique et pretium vestibulum lacinia. Eu mauris venenatis convallis.
                                </VideoDescription>
                                {referEarnData.length > 0 ? (
                                    <>
                                       {referEarnData[0].videos ? (
                                            <>
                                                {referEarnData[0].videos.length >0 ? (
                                                    <>
                                                        <BigVideo 
                                                            src={referEarnData[0].videos[0]}
                                                            frameborder='0'
                                                            allow='autoplay; encrypted-media'
                                                            allowfullscreen
                                                            title='video'
                                                        />
                                                    </>
                                                ) : ""}
                                            </>
                                       ) : ""}
                                    </>
                                ) : ""}
                                
                                <VideoRow>
                                    <LeftArrow>
                                        <ArrowImage src={ArrowLeft}
                                            onClick={() => {
                                                let newData = [...referEarnData];
                                                let newImages = newData[0].images;
                                                
                                                let dataToShuffle = [...newImages];
                                                let newArray = [dataToShuffle[dataToShuffle.length-1], ...dataToShuffle];
                                                let afterDeleteLastItem = newArray.splice(0,newArray.length-1);

                                                newData[0].images = afterDeleteLastItem;
                                                setReferEarnData(newData);
                                            }} 
                                        />
                                    </LeftArrow>
                                    <VideoInside
                                        id="watchedScroll"
                                    >
                                        {referEarnData.length > 0 ? (
                                            <>
                                               {referEarnData[0].images ? (
                                                    <>
                                                        {referEarnData[0].images.length >0 ? (
                                                            <>
                                                                {referEarnData[0].images.slice(0,3).map((item,index) => (
                                                                    <>
                                                                        <VideoInsideImage src={item} index={index}/>
                                                                    </>
                                                                ))}
                                                            </>
                                                        ) : ""}
                                                    </>
                                               ) : ""}
                                            </>
                                        ) : ""}
                                    </VideoInside>
                                    <RightArrow>
                                        <ArrowImage src={ArrowRight}
                                            onClick={() => {
                                                let newData = [...referEarnData];
                                                let newImages = newData[0].images;

                                                let dataToShuffle = [...newImages];
                                                let firstElement = dataToShuffle[0];
                                                let newArray = dataToShuffle.splice(1,dataToShuffle.length);
                                                newData[0].images = [...newArray,firstElement];
                                                setReferEarnData(newData);

                                            }}
                                        />
                                    </RightArrow>
                                </VideoRow>
                            </VideoSection>
                            <AllStoresCard>
                                {referEarnData.length > 0 ? (
                                    <>
                                        <div dangerouslySetInnerHTML={{ __html: referEarnData[0].description }} />
                                    </>
                                ) : ""}
                            </AllStoresCard>
                        </PlanCardsSection>
                    </SignWelcome>
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
