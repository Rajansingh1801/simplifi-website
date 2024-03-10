import styled from "styled-components"
import HomeBg from "../../../images/CarrotImages/CategoriesBg.png";

export const HeroContainer = styled.div`
    background: #FFFfff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
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

export const ImgBg = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #FFFFFF;
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
    max-width: 1100px;
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

export const MemberSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 1rem;
    padding: 0rem 4rem;
    padding-bottom: 6rem;
    @media screen and (max-width: 768px) {
        padding: 0rem 1rem;
    }
    @media screen and (max-width: 500px) {
        padding: 0rem 0.7rem;
        grid-template-columns: repeat(1,1fr);
    }
    @media screen and (max-width: 430px) {
        padding: 2rem 0rem;
    }
    
`

export const MemberCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    border: 1px solid #FFE1D8;
    border-radius: 14px;
    position: relative;

    &:hover {
        box-shadow: 0px 0px 24px rgba(228, 63, 15, 0.15);
        border: 1px solid transparent;
    }

`
export const MemberCardHead = styled.div`
    color: #F1F1F1;
    font-family: "Titan One";
    font-size: 2rem;
    text-align: center;
    padding: 0.5rem 0rem;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }
    
`
export const MemberImage = styled.img`
    width: 100%;
    height: 350px;

    @media screen and (max-width: 768px) {
        width: 220px;
        height: 250px;
    }

    @media screen and (max-width: 580px) {
        width: 180px;
        height: 200px;
    }

`
export const MemberPara = styled.div`
    font-weight: 400;
    font-size: 0.9rem;
    text-align: center;
    max-width: 600px;
    font-family: 'Visby Round CF';
    color: #101011;
    opacity: 0.6;

    @media screen and (max-width: 768px) {
        margin-top: 0.6em;
        font-size: 0.85em;
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
export const MemberButton = styled.div`
    position: absolute;
    top: 0rem;
    right: 0rem;
    border-radius: 0px 14px;
    background: linear-gradient(255deg, #E43F0F 0%, #FD973A 100%);
    color: #FFFFFF;
    text-align: center;
    font-family: "Visby Round CF";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0.5rem 1rem;
`