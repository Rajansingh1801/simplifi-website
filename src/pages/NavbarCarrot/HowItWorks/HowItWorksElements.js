import styled from "styled-components";
import HomeBg from "../../../images/CarrotSvg/HowItWorksBg.svg";

export const WorksContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    z-index: -1;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`

export const WorksWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 1.5em;
    padding: 0 50px;
    width: 100%;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 0px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 3rem 1rem;
    }
`
export const VideoSection = styled.video`
    width: 100%;
    height: 300px;
`
export const HowWorksSection = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 2rem;

    @media screen and (max-width: 768px) {
        padding-left: 0rem;
    }
`
export const JoinShopPaid = styled.img`
    width: 100%;
    height: 100%;
    margin-top: -20px;
`
export const HowWorksHeading = styled.div`
    color: #F1F1F1;
    font-family: "Titan One";
    font-size: 2rem;
    text-align: left;
    margin-bottom: 0.1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 0rem;
    position: relative;

    @media screen and (max-width: 380px) {
        font-size: 1.5rem;
    }
    
`
export const HowWorksPara = styled.div`
    font-weight: 400;
    font-size: 1rem;
    text-align: left;
    max-width: 600px;
    font-family: 'Visby Round CF';
    color: #101011;
    opacity: 0.6;

    @media screen and (max-width: 380px) {
        font-size: 0.8rem;
    }
`

export const StoreDotSection = styled.div`
    width: 100%;
    height: 300px;
    margin-right: 1.5rem;

    @media screen and (max-width: 768px) {
        height: 250px;
        padding-right: 0rem;
    }
    @media screen and (max-width: 380px) {
        height: 200px;
        width: calc(100vw - 3rem);
        margin-right: 0rem;
    }

`

export const StoreImage = styled.img`
    width: 100%;
    height: 100%;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBg}) no-repeat center center / cover;
    background-position-x: left;
    background-position-y: bottom;
`

export const CarrotHeadingHowItWorks = styled.img`
    position: absolute;
    right: 4rem;
    bottom: -1rem;
    z-index: 999;
    width: 60px;
    height: 90px;

    @media screen and (max-width: 1000px) {
        right: 1rem;
    }

    @media screen and (max-width: 380px) {
        width: 40px;
        height: 60px;
    }    

`
export const JSPRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 0rem;

    @media screen and (max-width: 420px) {
        padding: 1rem 0rem;
        justify-content: center;
    }

`
export const JSPSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const JSPImage = styled.img`
    width: 60px;
    height: 60px;
    transition: 0.2s all ease;

    @media screen and (max-width: 380px) {
        width: 45px;
        height: 45px;
    }

    &:hover {
        scale: 1.5;
        padding-bottom: 0.5rem;
    }
    
`
export const JSPArrowTop = styled.img`
    width: 60px;
    height: 20px;
    margin-bottom: 100px;
    margin-left: 0.25rem;
    margin-right: 0.25rem;

    @media screen and (max-width: 380px) {
        width: 45px;
    }
`
export const JSPArrowBottom = styled.img`
    width: 60px;
    height: 20px;
    margin-top: 100px;
    margin-left: 0.25rem;
    margin-right: 0.25rem;

    @media screen and (max-width: 380px) {
        width: 45px;
    }
`
export const JSPText = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 900;
    font-size: 1.1rem;
    line-height: 29px;
    text-align: center;
    color: #303030;

    @media screen and (max-width: 380px) {
        font-size: 0.9rem;
    }
    
`

export const Ifr = styled.iframe`
    border-radius: 20px;
    height: 100%;
    width: 100%;
`