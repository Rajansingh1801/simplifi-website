import styled from "styled-components"
import HomeBg from "../../../images/CarrotSvg/MoneySomethingBg.svg";

export const StoreDotSection = styled.div`
    width: 40%;
    height: 100%;
    padding-right: 1.5rem;

    @media screen and (max-width: 580px) {
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-bottom: 1rem;
    }

     @media screen and (max-width: 480px) {
        width: 100%;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }
`


export const PaidSection = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3rem 0rem;
    padding-left: 3rem;

    @media screen and (max-width: 1000px) {
        padding-left: 0rem;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem 0rem;
    }

    @media screen and (max-width: 580px) {
        width: 100%;
        padding-left: 0rem;
    }
`

export const LearningCarrot = styled.img`
    position: absolute;
    width: 90px;
    height: 110px;
    bottom: 1rem;
    right: -3rem;
`
export const ImageCard = styled.img`
    width: 120px;
    height: 60px;
    margin-right: 1rem;
`
export const VideoCard = styled.iframe`
    width: 120px;
    height: 60px;
    margin-right: 1rem;
    border-radius: 5px;
`

export const ImageCards = styled.div`
    overflow: scroll;
    /*display: flex;
    flex-direction: row; */
    /* align-items: center;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 100%;
    padding-top: 2rem;

    @media screen and (max-width: 580px) {
        display: none;
    }
`
export const ImageCardsMobile = styled.div`
    overflow: scroll;
    /*display: flex;
    flex-direction: row; */
    /* align-items: center;
    justify-content: space-between; */
    display: none;
    grid-template-columns: repeat(4,1fr);
    width: 100%;
    padding-top: 2rem;

    @media screen and (max-width: 580px) {
        display: grid;
    }
`

export const HeroContainer = styled.div`
    background: #FFFfff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 30px;
    /* margin-top: -80px; */
    height: 100%;
    min-height: 600px;

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

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBg}) no-repeat center center / cover;
    background-position-x: left;
    background-position-y: top;
`

export const Ifr = styled.iframe`
    height: 100%;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
`
export const PersonName = styled.div`
    text-align: center;
    font-size: 1.4rem;
    font-family: "Visby Round CF";
    font-weight: 500;
    color: #000000;
`
export const PersonPosition = styled.div`
    text-align: center;
    font-size: 1.1rem;
    font-family: "Visby Round CF";
    font-weight: 500;
    color: #999999;
`
export const VideoBox = styled.div`
    border-radius: 20px;
    
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #E43F0F;

    @media screen and (max-width: 768px) {
        height: 250px;
    }
`
export const LeftArrow = styled.div`
    position: absolute;
    left: 2rem;
    top: 40%;
    cursor: pointer;
    z-index: 99;

    @media screen and (max-width: 1200px) {
        left: 1rem;
    }

    @media screen and (max-width: 580px) {
        left: 0.5rem;
        top: 45%;
    }

    @media screen and (max-width: 430px) {
        left: 0.25rem;
    }
    

`
export const RightArrow = styled.div`
    position: absolute;
    right: 2rem;
    top: 40%;
    cursor: pointer;
    z-index: 99;

    @media screen and (max-width: 1200px) {
        right: 1rem;
    }

    @media screen and (max-width: 580px) {
        right: 0.5rem;
        top: 45%;
    }

    @media screen and (max-width: 430px) {
        right: 0.25rem;
    }
`
export const PersonVideo = styled.div`
    height: 250px;
    width: 100%;
`
export const PersonData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.7rem 1rem;

    @media screen and (max-width: 768px) {
        padding: 0.25rem 1rem;
    }
`

export const ArrowImage = styled.img`
    width: 30px;
    height: 60px;

    @media screen and (max-width: 768px) {
        width: 25px;
        height: 50px;
    }

    @media screen and (max-width: 580px) {
        width: 20px;
        height: 40px;
    }

    @media screen and (max-width: 430px) {
        width: 15px;
        height: 30px;
    }
`
export const SmallVideo = styled.img`
    width: 130px;
    height: 80px;
    margin-right: 1rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        margin-right: 0.5rem;
        width: 90px;
        height: 65px;
    }

`

export const HeroP = styled.div`
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    max-width: 600px;
    font-family: 'Visby Round CF';
    color: #101011;
    opacity: 0.6;




    @media screen and (max-width: 768px) {
        margin-top: 0.6em;
        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        margin-top: 0rem;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 280px) {
        margin-top: 0rem;
        font-size: 0.7em;
    }
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
        padding: 0.5em 0rem;
        flex-direction: column-reverse;
        padding-bottom: 200px;
    }
`