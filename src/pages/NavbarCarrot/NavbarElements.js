import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import logo from '../../images/CarrotSvg/smartlogosvg.svg'

/* background: ${({scrollNav, bgLogin}) => ( bgLogin? '#fff': (scrollNav? '#effbf0': 'transparent'))}; */

export const Nav = styled.nav`

    background: ${({scrollNav, bgLogin}) => ( scrollNav ? "#effbf0" :  bgLogin ? 'transparent': "#effbf0")};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    border: none;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }


    @media screen and (max-width:480px) {
        transition: 0s all ease-in-out;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index :1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
    border-bottom: 1px solid #CFCAC3;


`

export const NavbarContainerSignup = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index :1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    border-bottom: 1px solid #CFCAC3;


`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    /* font-size: 1.5rem; */
    display: flex;
    align-items: center;
    margin-left: 24px;
    /* font-weight: bold; */
    text-decoration: none;

    
    .logoImage {
        width: 75%;
    }

    @media screen and (max-width: 1100px) {
        .logoImage {
            width: 80%;
        }
        margin-left: 0px;
    }

    @media screen and (max-width: 768px) {
        .logoImage {
            width: 75%;
        }
    }


    @media screen and (max-width:480px) {
        margin-left: 10px;
        margin-top: 0px;
        .logoImage {
        width: 65%;
    }
    }
`
    export const SvgLogo = styled.img`
        /* color: #fff; */
            /* background: url(${logo}) no-repeat center center / cover; */
    `
    export const SvgLogoo = styled.img`
    /* color: #fff; */
        /* background: url(${logo}) no-repeat center center / cover; */
    `

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: -10px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000000;
    }


    @media screen and (max-width:480px) {
        font-size: 1.5em;
        /* top: -5px; */
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -22px; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
    padding: 1.25rem 1.4rem;
    position: relative;

    @media screen and (max-width: 1300px) {
        padding: 1.25rem 0.5rem;
    }
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    
    height: 100%;
    cursor: pointer;

    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    line-height: 19px;

    font-size: 1.05rem;
    border-radius: 40px;
    padding: 0.4rem 1rem;
    background: linear-gradient(83deg, #28C54E 0%, #A1F68B 100%);

    color: #101011;

    @media screen and (max-width: 1200px) {
        padding: 0.4rem 0.75rem;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 900px) {
        padding: 0.4rem 0.4rem;
        font-size: 0.7rem;
    }

    &:hover {
        /* border-bottom: 1.5px solid #E43F0F;
        background: -webkit-linear-gradient(#E43F0F, #FD973A);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text; */
        color: #101011;
        transform: scale(1.05);
    }

`

export const NavLinksRoute = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    
    height: 100%;
    cursor: pointer;

    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    line-height: 19px;

    font-size: 1.05rem;
    border-radius: 40px;
    padding: 0.4rem 1rem;
    background: linear-gradient(83deg, #28C54E 0%, #A1F68B 100%);

    color: #101011;

    @media screen and (max-width: 1200px) {
        padding: 0.4rem 0.75rem;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 900px) {
        padding: 0.4rem 0.4rem;
        font-size: 0.7rem;
    }
    

    &:hover {
        /* border-bottom: 1.5px solid #E43F0F;
        border-radius: 0px;
        background: -webkit-linear-gradient(#E43F0F, #FD973A);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text; */
        color: #101011;
        transform: scale(1.05);
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    margin: 0.4em;
    border-radius: 4px;
    white-space: nowrap;
    padding: 0.25em 1em;
    color: ${props => props.primary ? "#F1F1F1" : "#F1F1F1"};
    background: ${props => props.primary ? "transparent" : "#FF4001"};
    border: 1px solid ${props => props.primary ? "#FFFFFF" : "#FF4001"};
    font-size: 1em;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.primary ? "transparent" : "#FF4001"};
        color: ${props => props.primary ? "FFFFFF" : "#FFFFFF"};
    }
`

export const LoginTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LoginCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const LoginAnchor = styled.a`
    color: #2B3BF6;
`

export const Profilelabel = styled.label`
    color: #0088ff;
    cursor: pointer;
    width: 100%;
    text-align: center !important;
`

export const NavIcon = styled(LinkR)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;


    @media screen and (max-width:480px) {
        font-size: 1.5rem;
        /* top: -5px; */
    }
`

export const SidebarMobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: contents;
        position: absolute;
        top: -45px;
        /* right: 0; */
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }


    @media screen and (max-width:480px) {
        font-size: 1.5em;
        /* top: -5px; */
    }
`

export const SignInText = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 17px;
    color: #000000;
    text-transform: capitalize;

    @media(max-width: 1000px) {
        font-size: 0.7rem;
    }
`
export const ProfileCardtext = styled.div`
    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 22px;
    color: #000000;
    cursor: pointer;
     &:hover {
        background: -webkit-linear-gradient(#E43F0F, #FD973A);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`
export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 300px;
    padding: 1.75rem;
    position: absolute;
    top: 50px;
    right: 0rem;
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
`
export const AssociateCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 300px;
    padding: 1.75rem;
    position: absolute;
    top: 70px;
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
`
export const ProfileCardRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-bottom: 1rem;
`
export const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    height: 80px;
    padding: 1.25rem;

    @media screen and (max-width: 1200px) {
        padding: 1.25rem 0.5rem;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const LeftProfile = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    position: relative;
   
    
`
export const ProfileItem = styled.div`
    border-radius: 50px;
    background: linear-gradient(270deg, #E43F0F, #FD973A);
    &:hover {
        scale: 1.09;
    }

`
export const ProfileFinal = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.6rem 1.5rem;
    height: 100%;
    cursor: pointer;

    font-family: 'Visby Round CF';
    font-style: normal;
    font-weight: 400;
    line-height: 19px;

    font-size: 1.1rem;
    color: #FFFFFF;

    @media(max-width: 1000px) {
        font-size: 0.9rem;
        padding: 0.6rem 0.7rem;
    }


`
export const ProfileImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 0.6rem;

    @media(max-width: 1000px) {
        width: 20px;
        height: 20px;
        font-size: 0.7rem;
    }
    
`
export const UserImageButton = styled.button`
    white-space: nowrap;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 0.6rem;
    border: none;
    background: #FFFFFF;
    /* border-radius: 8px; */
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0px;
    color: #E43F0F;
    font-family: "Nunito";
    text-transform: uppercase;
    opacity: 1;
    padding: 0.5rem;

    @media(max-width: 1000px) {
        width: 20px;
        height: 20px;
        font-size: 0.7rem;
    }
    @media(max-width: 481px) {
        height: 25px;
        width: 25px;
        font-size: 0.7rem;
    }
`