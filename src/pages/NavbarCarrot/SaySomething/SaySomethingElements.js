import styled from "styled-components"
import HomeBg from "../../../images/CarrotSvg/SaySomethingBg.svg";

export const HeroContainer = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* margin-top: -80px; */
    height: 100%;
    min-height: 600px;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
    border: none;
    margin-top: -150px;


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

export const CategoriesCarrot = styled.img`
    position: absolute;
    width: 90px;
    height: 110px;
    bottom: 1rem;
    left: -4rem;
`
export const HeroContent = styled.div`
    z-index: 3;
    /* max-width: 1100px; */
    height: 100%;
    width: 100%;
    min-height: 400px;
    /* padding: 0.5em 1.8em; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const AllCategories = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    overflow: scroll;
    width: 100%;
    min-height: 300px;
    height: 100%;
`
export const CategoriesCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin-right: 1.5rem;
`

export const CategoryCardImage = styled.img`
    width: 80px;
    height: 80px;
`

export const CategoryCardText = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 29px;
    text-align: center;
    color: #303030;
`
export const GuyImageSection = styled.img`
    width: 300px;
    height: 100%;

    @media screen and (max-width: 900px) {
        width: 200px;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 100%;
    }

    @media screen and (max-width: 580px) {
        width: 100px;
        height: 100%;
    }

    @media screen and (max-width: 420px) {
        width: 60px;
        height: 100%;
    }

    @media screen and (max-width: 320px) {
        width: 40px;
        height: 100%;
    }
`
export const SignWelcome = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
        margin-top: 0rem;
        font-size: 0.9rem;
    }


    @media screen and (max-width: 480px) {
        margin-top: 0rem;
        font-size: 0.8rem;
    }

    @media screen and (max-width: 280px) {
        margin-top: 0rem;
        font-size: 0.7em;
    }
`
