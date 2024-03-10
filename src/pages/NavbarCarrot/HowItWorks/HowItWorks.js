import React from 'react'
import JoinPaid from "../../../images/CarrotSvg/HowItworkspaid.svg";
import HowWorksVideo from "../../../images/CarrotSvg/HowItWorks.png";
import CarrotStores from "../../../images/CarrotSvg/CarrotStores.svg";
import JSPComputer from "../../../images/CarrotSvg/JSPComputer.svg";
import JSPToopArrow from "../../../images/CarrotSvg/JSPToopArrow.svg";
import JSPBottomArrow from "../../../images/CarrotSvg/JSPBottomArrow.svg";
import JSPPaid from "../../../images/CarrotSvg/JSPPaid.svg";
import JSPShop from "../../../images/CarrotSvg/Cart/Cart.svg";

import { WorksContainer, WorksWrapper,
    VideoSection,
    HowWorksSection,
    HowWorksHeading,
    HowWorksPara,
    JoinShopPaid,
    StoreDotSection,
    StoreImage,
    ImgBg,
    CarrotHeadingHowItWorks,
    JSPRow,
    JSPSection,
    JSPImage,
    JSPText,
    JSPArrow,
    JSPArrowTop,
    JSPArrowBottom,
    Ifr
} from './HowItWorksElements';

import { PageHeadingRed } from "../../WebsitePages/AllStores/AllStoresElements";
import { HeroContainer, HeroBg } from "../ShoppingExplore/ShoppingExploreElements";



const HowItWorks = () => {
    return (
        <>
            <HeroContainer style={{alignItems: "center"}} id="HowItWorks">
                <HeroBg>
                    <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <WorksWrapper>
                    <StoreDotSection>
                        <Ifr src='https://www.youtube.com/embed/sjkrrmBnpGE'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            // width="100%"
                            // height="450"
                        />
                    </StoreDotSection>
                    <HowWorksSection>
                        <HowWorksHeading>
                            <div style={{color: "#101011", fontFamily: "Titan One"}}>How&nbsp;It&nbsp;</div>
                            <PageHeadingRed>
                                Works
                            </PageHeadingRed>
                            <CarrotHeadingHowItWorks src={CarrotStores} />
                        </HowWorksHeading>
                        <HowWorksPara>
                            Lorem ipsum dolor sit amet consectetur.
                        </HowWorksPara>
                        <JSPRow>
                            <JSPSection>
                                <JSPImage src={JSPComputer} />
                                <JSPText>
                                    Join
                                </JSPText>
                            </JSPSection>
                            <JSPArrowTop src={JSPToopArrow} />
                            <JSPSection>
                                <JSPImage src={JSPShop} />
                                <JSPText>
                                    Shop
                                </JSPText>
                            </JSPSection>
                            <JSPArrowBottom src={JSPBottomArrow} />
                            <JSPSection>
                                <JSPImage src={JSPPaid} />
                                <JSPText>
                                    Get Paid
                                </JSPText>
                            </JSPSection>
                        </JSPRow>
                        
                    </HowWorksSection>
                </WorksWrapper>
            </HeroContainer>
        </>
    )
}

export default HowItWorks;
