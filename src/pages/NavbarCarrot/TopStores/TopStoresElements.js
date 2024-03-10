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
    justify-content: flex-start;
    padding: 1rem 0.5rem;
    overflow: scroll;
    width: 100%;
    min-height: 220px;
    height: 220px;
`
export const CategoriesCard = styled.div`
    background: #FFFFFF;
    cursor: pointer;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    height: 100%;
    text-transform: capitalize;
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
