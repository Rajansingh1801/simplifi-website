import styled from "styled-components";
import worksBg from '../../../images/CarrotImages/CarrotBgWithGreen.png'
import worksBgRotate from '../../../images/CarrotImages/GreenBottom.png'
import HomeBg from "../../../images/CarrotSvg/BlogsBg.svg";

import HomeBgDot from '../../../images/CarrotImages/PlaneBlogBg.png'

export const ImgBgDot = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: url(${HomeBgDot}) no-repeat center center / cover;
    background-position-x: center;
    background-position-y: -3rem;
`

export const WorksContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    z-index: -1;
    
    @media screen and (max-width: 1000px) {
        background-position: 25% 50%;
        height: 900px;
        background-color: #FAFCFC;
    }
    
    @media screen and (max-width: 768px) {
        background-position: 25% 50%;
        background-color: #FAFCFC;
        height: 1250px;
    }

    @media screen and (max-width: 480) {
        height: 1400px;
    }
`

export const WorksWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1.5em;
    padding: 1.5rem 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 430px) {
        padding: 0 0px;
    }
`
export const WorksCard = styled.div`
    background: #FFFFFF;
    
    border-radius: 40px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 380px;
    height: 380px;
    /* padding: 30px; */
    transition: all 0.2s ease-in-out;
    cursor: pointer;


    @media screen and (max-width : 780px) {
        max-height: 360px;
    }

    @media screen and (max-width : 480px) {
        max-height: 360px;
    }

    &:hover {
        box-shadow: 0px 4px 20px #0000001F;
        .workedicon {
            transform: scale(1.12);
            transition: all 0.5s ease-in-out;
            
        }
    }
`
export const IconBackground = styled.div`
    height: 200px;
    width: 100%;
    /* padding-bottom: 4px; */
    border-radius: 40px 40px 50% 50%;
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-bottom: 4px solid #FD973A;
`


export const WorksIcon = styled.img`
    height: 200px;
    width: 100%;
    border-radius: 40px 40px 50% 50%;
`
export const WorksH1 = styled.h1`
font-size: 2rem;
    font-weight: 500;
    color: #000000;
    margin-bottom: 2.5rem;
    text-align: center;

    @media screen and (max-width : 780px) {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
    }
`

export const WorksH2 = styled.h2`
    font-size: 1.3rem;
    text-align: center;
    color: #1C1C1C;
    margin: 1.2rem 0rem;

    @media screen and (max-width : 780px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width : 480px) {
        font-size: 1.2rem;
    }

`

export const WorksH6 = styled.h6`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 900;
    font-size: 1rem;
    text-align: center;
    color: #000000;
`

export const WorksP = styled.p`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    font-size: 0.85rem;
    text-align: center;
    color: #000000;
    display: flex;
    flex-direction: row;
`
export const WorksData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem 1.5rem 1rem;
    height: 180px;
`















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

    @media screen and (max-width: 500px) {
        height: 70px;
    }

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
export const SignWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    position: relative;

    @media screen and (max-width: 500px) {
        padding: 2rem 0rem;
    }


    
`
export const AllBlogsData = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1.5rem;
`

export const PlanCardsSection = styled.div`
    height: 100%;
    width: 100%;
    background: transparent;    
    padding: 2rem 3rem 2rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1000px) {
        padding: 2rem 2rem 2rem 2rem;
    }
    @media screen and (max-width: 768px) {
        padding: 2rem 0rem 2rem 0rem;
    }
    @media screen and (max-width: 520px) {
        padding: 0rem 0rem 0rem 0rem;
    }

`
export const DetailBlogSection = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    
`
export const SingleBlog = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.5rem;

    @media screen and (max-width: 1100px) {
        padding-right: 1rem;
        width: 60%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-right: 0rem;
    }

`
export const OtherBlog = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1100px) {
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 1rem;
        padding: 1rem 0rem;
    }

    @media screen and (max-width: 580px) {
        grid-template-columns: repeat(1,1fr);
        grid-gap: 0.5rem;
    }

`
export const OtherSingleBlog = styled.div`
    padding: 0.25rem 0rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    cursor: pointer;
`
export const BlogData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    padding-left: 1rem;
    height: 110px;

    @media screen and (max-width: 1100px) {
        width: 60%;
    }

    @media screen and (max-width: 850px) {
        padding-left: 0.4rem;
    }

`
export const BlogImage = styled.img`
    width: 50%;
    border-radius: 20px;
    height: 110px;

    @media screen and (max-width: 1100px) {
        width: 40%;
    }
`
export const OtherBlogTitle = styled.div`
    color: #101011;
    font-size: 1rem;
    font-family: "Visby Round CF";
    font-weight: 900;
    text-align: left;
    width: 100%;
    padding-bottom: 0.25rem;
    line-height: 1rem;

    @media screen and (max-width: 620px) {
        font-size: 0.9rem;
    }


`
export const OtherBlogDescription = styled.div`
    color: #101011;
    font-size: 0.8rem;
    font-family: "Visby Round CF";
    font-weight: 400;
    text-align: left;
    width: 100%;

    @media screen and (max-width: 620px) {
        font-size: 0.7rem;
    }
`
export const BlogHeadingRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 1rem 0rem;
`
export const BlogHeadingText = styled.div`
    color: #101011;
    font-size: 1.25rem;
    font-family: "Visby Round CF";
    font-weight: 900;
`

export const InnerContent = styled.div`
    height: 100%;
    min-height: 150px;
    width: 100%;
    background-color: transparent;
    padding-bottom: 2rem;

`
export const BlogImageBig = styled.img`
    height: 400px;
    width: 100%;
    margin: 1rem 0rem;
`

export const HeroContentBlog = styled.div`
    z-index: 3;
    max-width: 1100px;
    height: 100%;
    /* position: absolute; */
    padding: 0.5em 1.8em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 1150px) {
        padding: 0.5rem 0rem;
    }

    @media screen and (max-width: 580px) {
        padding: 0.5em 0.8em;
    }

    @media screen and (max-width: 480px) {
        padding: 0.5em 0.8em;
    }

    @media screen and (max-width: 420px) {
        padding: 0.5rem 0rem;
    }
`