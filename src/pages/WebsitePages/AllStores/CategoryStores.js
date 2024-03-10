import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from 'react-lottie';
import Overlay from '../../../components/Overlay';
import CarrotInputNormal from '../../../components/CarrotInputNormal';
import axios from "../../../axios";
import * as IoIcons from "react-icons/io"
import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotStores from "../../../images/CarrotSvg/CarrotStores.svg";

import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import { businessPreferredValidator } from "../../../utils/validators";
import { HeroContainer, HeroBg,  HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
    CarrotButton,
    ButtonInside,
    SignInSection,
    LabelInput,
    InputLabel,
    PlanCardsSection,
    CarrotButtonRow } from '../../LoginPage/LoginElements';

import { UpperSectionForm,
    UpperSectionCardForm } from "../AssociateMember/AssociateMemberElements";

import { ImgBgDot, SortRow,
    SortData,
    SortBy,
    SortButton,
    AllStoresSection,
    StoresCarrot,
    StoreDetailButton,
    StoreCard,
    StoreLogo,
    PageHeadingRed,
    PageInnerRow,
    LeftArrow,
    PageButton,
    InnerRow,
    RightArrow,
    PaginationRow } from "./AllStoresElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const params = useParams();
    const [isLoading, setIsLoading] = useState(false);
  
    const [allStoresData, setAllStoresData] = useState([]);
    const [sortSelected, setSortSelected] = useState("newest");
    const [currentPage, setCurrentPage] = useState("1");

    useEffect(() => {
        getAllStores();
        window.scrollTo(0,0);
    },[])

    const getAllStores = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/get_store_by_category?category_id=${params.id}&page=${values?.page ? values?.page : currentPage}&pageSize=9&sort=${values?.sort ? values?.sort : sortSelected}`);
            setAllStoresData(data.data);
            setCurrentPage(get(data,"data.page",""));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error?.response?.data?.errors) {
                toast.error(`${error.response.data.errors[0].msg}`, {
                  position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                toast.error(`${error?.response?.data?.message}`, {
                  position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
    };    

    

    return (
        <>
            <HeroContainer style={{height: "100%"}}>
                <HeroBg>
                    <ImgBgDot src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{padding: "1.5rem 0rem"}}>
                            <HeroH1> 
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>All&nbsp;</div>
                                <PageHeadingRed>
                                    Stores
                                </PageHeadingRed>
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <SortRow>
                                <SortData>
                                    <SortBy>
                                        Sort by :
                                    </SortBy>
                                    {/*<SortButton 
                                        IsSelected={sortSelected==="popularity" ? true : false}
                                        onClick={() => {
                                            setSortSelected("popularity")
                                        }}
                                    >   
                                        Popularity
                                    </SortButton>*/}
                                    <SortButton 
                                        IsSelected={sortSelected==="newest" ? true : false}
                                        onClick={() => {
                                            getAllStores({
                                                sort: "newest"
                                            })
                                            setSortSelected("newest")
                                        }}
                                    >   
                                        Newest
                                    </SortButton>
                                    <SortButton 
                                        IsSelected={sortSelected==="a_to_z" ? true : false}
                                        onClick={() => {
                                            getAllStores({
                                                sort: "a_to_z"
                                            })
                                            setSortSelected("a_to_z")
                                        }}    
                                    >   
                                        A to Z
                                    </SortButton>
                                    {/*<SortButton 
                                        IsSelected={sortSelected==="percent" ? true : false}
                                        onClick={() => {
                                            setSortSelected("percent")
                                        }}
                                    >   
                                        Percent
                                    </SortButton>*/}
                                    
                                </SortData>
                                <StoresCarrot src={CarrotStores}>

                                </StoresCarrot>
                            </SortRow>
                            <AllStoresSection>
                                {allStoresData ? (
                                    <>
                                        {allStoresData.docs ? (
                                            <>
                                                {allStoresData.docs.length > 0 ? (
                                                    <>
                                                        {allStoresData.docs.map((item,index) => (
                                                            <>
                                                                <StoreCard>
                                                                    <StoreLogo src={item.icon}>
                                
                                                                    </StoreLogo>
                                                                    <StoreDetailButton>
                                                                        <CarrotButton
                                                                            type="button"
                                                                            onClick={() => {
                                                                                navigate(`/store/${item._id}`)
                                                                            }}
                                                                        >
                                                                            <ButtonInside>
                                                                                View Details
                                                                            </ButtonInside>
                                                                        </CarrotButton>
                                                                    </StoreDetailButton>
                                                                </StoreCard>
                                                            </>
                                                        ))}
                                                    </>
                                                ) : ""}
                                            </>
                                        ) : ""}
                                    </>
                                ) : ""}
                            </AllStoresSection>
                            <PaginationRow>
                                <PageInnerRow>
                                    
                                        <>
                                            <LeftArrow
                                                IsDisabled={allStoresData.hasPrevPage ? false : true}
                                                onClick={() => {
                                                    if(allStoresData.hasPrevPage) {
                                                        getAllStores({
                                                            page: allStoresData.prevPage
                                                        })
                                                    }
                                                }}
                                            >
                                                <IoIcons.IoIosArrowBack/>
                                            </LeftArrow>
                                        </>
                                    <InnerRow>
                                        {allStoresData.totalPages ? (
                                            <>
                                                {allStoresData.totalPages<10 ? (
                                                    <>
                                                        {[...Array(allStoresData.totalPages).keys()].map((item,index) => (
                                                            <>
                                                                <PageButton IsSelectedPage={currentPage===item+1 ? true : false}
                                                                    onClick={() => {
                                                                        getAllStores({
                                                                            page: item+1
                                                                        })
                                                                    }}
                                                                >
                                                                    {item+1}
                                                                </PageButton>
                                                            </>
                                                        ))}
                                                    </>
                                                ) : (
                                                    <>
                                                    
                                                        {[...Array(allStoresData.totalPages).keys()].map((item,index) => (
                                                            <>
                                                                <PageButton IsSelectedPage={currentPage===item+1 ? true : false}
                                                                    onClick={() => {
                                                                        getAllStores({
                                                                            page: item+1
                                                                        })
                                                                    }}
                                                                >
                                                                    {item+1}
                                                                </PageButton>
                                                            </>
                                                        ))}
                                                    </>
                                                )}
                                               
                                            </>
                                        ) : ""}
                                    </InnerRow>
                                    <>
                                        <RightArrow
                                            IsDisabled={allStoresData.hasNextPage ? false : true}
                                            onClick={() => {
                                                if(allStoresData.hasNextPage) {
                                                    getAllStores({
                                                        page: allStoresData.nextPage
                                                    })
                                                }
                                            }}
                                        >
                                        <IoIcons.IoIosArrowForward/>
                                        </RightArrow>
                                    </>
                                </PageInnerRow>
                            </PaginationRow>
                        </PlanCardsSection>
                    </SignWelcome>
                </HeroContent>
            </HeroContainer>
            {isLoading && <Overlay />}
        </>
    )
}




const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        locationData: state.locations,
        defaultState: state.defaultState,
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
