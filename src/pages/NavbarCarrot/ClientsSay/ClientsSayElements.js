import styled from "styled-components";
import HomeBg from "../../../images/CarrotSvg/ClientSayBgNew.svg";

export const HeroContainer = styled.div`
    background: #FFFfff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* margin-top: -80px; */
    height: 100%;
    min-height: 480px;

    position: relative;
    z-index: 999;
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
    background-position-x: center;
    background-position-y:-5rem;
`

export const HeroContent = styled.div`
    z-index: 3;
    /* max-width: 1100px; */
    height: 100%;
    width: 100%;
    min-height: 480px;
    /* padding: 0.5em 1.8em; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const WorksWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 1.5em;
    padding: 1.5rem 50px;
    padding-bottom: 0rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0rem 3rem 0rem 0.5rem;
    }

    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr;
        padding: 0rem 0.5rem 0rem 0.5rem;
    }
`
export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 1rem;
`
export const SayHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0rem;
    width: 100%;

    @media screen and (max-width: 580px) {
        flex-direction: row;
    }

    @media screen and (max-width: 380px) {
        padding: 0.5rem 0rem;
    }
    
`
export const RightSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    @media screen and (max-width: 580px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 3rem;
    }
    @media screen and (max-width: 380px) {
        padding-left: 2rem;
    }
    

`
export const BlackHeading = styled.div`
    font-family: 'Titan One';
    font-style: normal;
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 42px;
    display: flex;
    align-items: center;
    color: #101011;
    width: 100%;

    @media screen and (max-width: 620px) {
        font-size: 1.6rem;
        line-height: 35px;
    }

    @media screen and (max-width: 580px) {
        width: unset;
    }

    @media screen and (max-width: 380px) {
        font-size: 1.25rem;
    }

`
export const RedHeading = styled.div`
    font-family: 'Titan One';
    font-style: normal;
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 42px;
    display: flex;
    align-items: center;
    width: 100%;
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media screen and (max-width: 620px) {
        font-size: 1.6rem;
        line-height: 35px;
    }
    @media screen and (max-width: 580px) {
        width: unset;
    }

     @media screen and (max-width: 380px) {
        font-size: 1.25rem;
    }

`
export const SayPara = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 22px;
    color: #103030;
    padding-bottom: 1rem;
    width: 100%;

    @media screen and (max-width: 620px) {
        font-size: 0.9rem;
        line-height: 16px;
    }

    @media screen and (max-width: 580px) {
        text-align: center;
    }

`
export const SayArrow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 1rem;

    @media screen and (max-width: 580px) {
        display: none;
    }

`
export const SayArrowMobile = styled.div`
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;

    @media screen and (max-width: 580px) {
        display: flex;
    }

`
export const ArrowButton = styled.div`
    border: 1.33333px solid #DADADA;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
    border-radius: 50%;
    cursor: pointer;

    @media screen and (max-width: 620px) {
        padding: 0.8rem 0.8rem;
    }
`
export const Arrow = styled.img`
    width: 18px;
    height: 18px;

    @media screen and (max-width: 620px) {
        width: 15px;
        height: 15px;
    }

`
export const RedQuoteDiv = styled.div`
    width: 250px;
    height: 280px;
    position: absolute;
    top: 0rem;
    right: 220px;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
        right: 180px;
    }

    @media screen and (max-width: 520px) {
        right: 220px;
    }

    @media screen and (max-width: 430px) {
        right: 180px;
    }
    @media screen and (max-width: 380px) {
        right: 150px;
        width: 150px;
        height: 150px;
    }

`
export const RedQuoteData = styled.div`
    position: absolute;
    margin-top: 3rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
        margin-right: 1rem;
    }
`
export const WhiteQuoteData = styled.div`
    position: absolute;
    margin-top: 1rem;
    /* margin-right: 2rem; */
    padding: 2.5rem 3rem 0rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 1rem 2rem 0rem 2rem;
    }

    @media screen and (max-width: 580px) {
        padding: 1rem 4rem 0rem 4rem;
    }
     @media screen and (max-width: 380px) {
        padding: 1rem 3rem 0rem 3rem;
    }

`
export const QuoteIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
    margin-left: 1rem;

    @media screen and (max-width: 768px) {
        width: 25px;
        height: 25px;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }
`
export const QuoteSection = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 19px;
    color: #303030;
    padding-bottom: 1rem;
    text-align: left;

    @media screen and (max-width: 768px) {
        padding-bottom: 0.5rem;
        font-size: 0.7rem;
        line-height: 14px;
    }

    @media screen and (max-width: 380px) {
        font-size: 0.5rem;
        padding-bottom: 0rem;
    }

`
export const QuoteUserName = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 22px;
    color: #303030;
    padding-bottom: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 16px;
    }
    @media screen and (max-width: 380px) {
        font-size: 0.6rem;
        padding-bottom: 0rem;
    }

`
export const QuoteUserDesignation = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 17px;
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        font-size: 0.7rem;
        line-height: 14px;
    }

    @media screen and (max-width: 380px) {
        font-size: 0.5rem;
    }
    

`
export const QuoteUserDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-left: 2.5rem;

    @media screen and (max-width: 768px) {
        padding-top: 0.5rem;
        padding-left: 1.5rem;
    }
    @media screen and (max-width: 380px) {
        padding-top: 0rem;
    }
`
export const QuoteDataHeading = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 900;
    font-size: 1.6rem;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 25px;
    }

`
export const QuoteDataHeadingBelow = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 25px;
    }

`
export const VerticalLine = styled.div`
    height: 50px;
    padding: 0.5rem 0rem;
    border: 0.4px solid #FFFFFF;
`
export const RedQuote = styled.img`
    width: 250px;
    height: 280px;

    @media screen and (max-width: 768px) {
        width: 200px;
        height: 200px;
    }

    @media screen and (max-width: 328px) {
        width: 160px;
        height: 160px;
    }

`
export const WhiteQuoteDiv = styled.div`
    width: 420px;
    height: 420px;
    right: 6rem;
    bottom: 5rem;
    margin-top: -1.5rem;
    margin-right: -3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 350px;
    }
    @media screen and (max-width: 520px) {
        margin-right: 0rem;
    }
    @media screen and (max-width: 430px) {
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 380px) {
        width: 250px;
        height: 250px;
    }


`
export const WhiteQuote = styled.img`
    width: 420px;
    height: 420px;

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 350px;
    }

    @media screen and (max-width: 430px) {
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 380px) {
        width: 250px;
        height: 250px;
    }
`
export const ImageQuoteDiv = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    margin-right: -2.5rem;
    z-index: 10;

    @media screen and (max-width: 768px) {
        width: 130px;
        height: 130px;
    }

    @media screen and (max-width: 520px) {
        margin-right: 0rem;
    }
    @media screen and (max-width: 430px) {
        width: 100px;
        height: 100px;
    }
    @media screen and (max-width: 380px) {
        width: 80px;
        height: 80px;
    }
    

`
export const ImageQuote = styled.img`
    width: 150px;
    height: 170px;
    z-index: 10;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
        width: 130px;
        height: 135px;
    }
    @media screen and (max-width: 430px) {
        width: 110px;
        height: 110px;
    }

`
export const ImageQuoteDivv = styled.div`
    width: 150px;
    height: 150px;
    z-index: 10;
    border-radius: 50%;
    background: ${({ Imagee }) => (Imagee ? `url(${Imagee}) no-repeat center center / cover` : '')};


    @media screen and (max-width: 768px) {
        width: 130px;
        height: 130px;
    }

    @media screen and (max-width: 430px) {
        width: 100px;
        height: 100px;
    }
    @media screen and (max-width: 380px) {
        width: 80px;
        height: 80px;
    }

`
export const WhiteImageDiv = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    @media screen and (max-width: 580px) {
        width: unset;
    }
`
export const RedPoint = styled.div`
    position: absolute;
    top: -1.35rem;
    right: 1rem;
    z-index: -1;
    padding: 1.5rem;
    border-radius: 50%;
    background: linear-gradient(255deg, #E43F0F 0%, #FD973A 100%);

    @media screen and (max-width: 430px) {
        top: -1.25rem;
        right: 0.75rem;
    }

    @media screen and (max-width: 380px) {
        top: -0.8rem;
        padding: 1rem;
    }

`
export const BluePoint = styled.div`
    position: absolute;
    bottom: 0.5rem;
    left: 0.7rem;
    z-index: 11;
    padding: 0.7rem;
    border-radius: 50%;
    background: linear-gradient(255deg, #0F3EE4 0%, #3AC3FD 100%);

    @media screen and (max-width: 430px) {
        bottom: 0rem;
    }

    @media screen and (max-width: 380px) {
        padding: 0.5rem;
    }
`