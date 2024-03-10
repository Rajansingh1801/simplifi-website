import styled from "styled-components";
import HomeBg from "../../../images/CarrotImages/ExploreeBg.png";

export const HeroContainer = styled.div`
    background: #FFFfff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 30px;
    /* margin-top: -80px; */
    height: 100%;
    min-height: 400px;

    position: relative;
    z-index: 1;
    border: none;

    /* add :before styles */
    :before {
        content: "";
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    @media screen and (max-width: 480px) {
        padding: 0rem 1rem;
    }

    @media screen and (max-width: 280px) {
        padding: 0rem 0.5rem;
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`
export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBg}) no-repeat center center / cover;
    background-position-x: left;
    background-position-y: bottom;
;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1100px;
    
    height: 100%;
    min-height: 400px;
    padding: 0.5em 1.8em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 580px) {
        padding: 0.5em 0.8em;
    }

    @media screen and (max-width: 480px) {
        padding: 0.5em 0.8em;
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 420px) {
        padding: 0.5rem 0rem;
    }
`
export const StoreDotSection = styled.div`
    width: 60%;
    height: 100%;
    padding-right: 1.5rem;

    @media screen and (max-width: 480px) {
        width: 100%;
        padding-right: 0rem;
        min-height: 180px;
    }
    @media screen and (max-width: 420px) {
        min-height: 150px;
    }

`
export const StoreImage = styled.img`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 480px) {
        min-height: 180px;
    }

    @media screen and (max-width: 420px) {
        min-height: 150px;
    }
`

export const PaidSection = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3rem 0rem;

    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 2rem 0rem 1rem 0rem;
    }

   
`
export const PaidHeading = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 28px;
    text-align: center;
    color: #303030;
    padding-bottom: 2rem;
`