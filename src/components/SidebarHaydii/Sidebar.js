import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import './sidebarScrollDesign.css'
import { get } from "lodash";
import { LanguageContext } from "../../utils/language/Language";
// const Nav = styled.div`
//     background: #15171c;
//     height: 80px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
// `
const NavIcon = styled.div`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SidebarNav = styled.nav`
margin-top: 80px;
    background: #ffffff;
    width: 280px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 100ms;
    z-index: 9999;
    left: -100%;

    @media screen and (max-width: 768px) {
        left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    }
`

const SidebarWrap = styled.div`
    width: 100%;
    overflow: scroll;

    overflow-x: hidden;
    /* overflow-y: hidden; */
`


const BannerImage = styled.div`
    margin-left: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #EAEBEE;
    margin-right: 1rem;
    height: 100px;
`

const RestaurantImage = styled.img`
    width: 60px;
    height: 60px;
    margin-top: 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
`
export const BannerContent = styled.div`
    width: 100%;
    height: 60px;
    margin-top: 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const BannerCity = styled.div`
    text-align: left;
    font-size: 17px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    width: 100%;
`
export const BannerState = styled.div`
    text-align: left;
    font-size: 14px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.5;
    // width: 100%;
    text-overflow: ellipsis;
    width: 150px;
    white-space: nowrap;
  overflow: hidden; 
`

// export const StartLogo = styled.div`
//      height: auto;
//      width: auto;
//      display: flex;
//      align-items: center;
// `

export const Rating = styled.p`
    color: #878997;
    font-size: 0.8rem;
`

const Sidebar = ({ userData, sidebar, setSidebar }) => {

    const { dictionary } = useContext(LanguageContext);


    return (
        <IconContext.Provider value={{ color: "#D80066" }}>

            <SidebarNav sidebar={sidebar}>
                <SidebarWrap className="designScrollbarSide">
                    {SidebarData(dictionary).map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        locationData: state.locations,
        defaultState: state.defaultState,
        sidebar: state.sidebar,
    };
};




const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (updatedValue) => {
            dispatch({
                type: actionTypes.UPDATE_USER,
                updatedUser: updatedValue,
            });
        },
        setDefaultState: (updatedValue) => {
            dispatch({
                type: actionTypes.UPDATE_DEFAULT,
                updateDefault: updatedValue,
            });
        },
        setSidebar: (updatedValue) => {
            dispatch({
                type: actionTypes.UPDATE_SIDEBAR,
                updateSidebar: updatedValue,
            });
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

