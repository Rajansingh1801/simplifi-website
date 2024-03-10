import React, { useState, useEffect,  } from 'react'
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

import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotStores from "../../../images/CarrotSvg/CarrotStores.svg";

import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import { businessPreferredValidator } from "../../../utils/validators";
import { HeroContainer, HeroBg,  HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
    ButtonInside,
    SignInSection,
    LabelInput,
    InputLabel,
    PlanCardsSection,
    CarrotButtonRow } from '../../LoginPage/LoginElements';

import { ImgBgDot,
    UpperSectionCardForm } from "../AssociateMember/AssociateMemberElements";

import { SortRow,
    SortData,
    SortBy,
    SortButton,
    AllStoresSection,
    StoresCarrot,
    StoreDetailButton,
    StoreCard,
    StoreLogo,
    PaginationRow,
    AllStoresCard,
    CardLogo,
    OfferSection,
    OfferDetailsHeading,
    OfferDetails,
    BgDiv,
    PageHeadingRed,
    StoresCarrotSingleStore,
    ImgBgDotDetails,
    CarrotButton,
} from "./AllStoresElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const params = useParams();

    const [isLoading, setIsLoading] = useState(false);
  
    const [allStoresData, setStoreData] = useState("");

    useEffect(() => {
        getAllStores();
        window.scrollTo(0,0);
    },[])

    const getAllStores = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/getStore_details?store_id=${params.id}`);
            setStoreData(data.data);
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
                    <ImgBgDotDetails src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{padding: "1.5rem 0rem"}}>
                            <HeroH1> 
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Store&nbsp;</div>
                                <PageHeadingRed>
                                    Details 
                                </PageHeadingRed>
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <AllStoresCard>
                                {allStoresData ? (
                                    <>
                                        <CardLogo src={allStoresData.icon}>
                                        </CardLogo>
                                        <OfferSection>
                                            <OfferDetailsHeading>
                                                Offer Details :-
                                            </OfferDetailsHeading>
                                            <OfferDetails>
                                                {allStoresData.description}
                                            </OfferDetails>
                                            <BgDiv/>
                                            <StoreDetailButton>
                                                <CarrotButton
                                                    // type="button"
                                                    // href={`// ${allStoresData.link}`}
                                                    href={`https://${allStoresData.link}`}
                                                    target="_blank"
                                                    rel="noopener"
                                                    // onClick={() => {
                                                    //     console.log(window.location);
                                                    //     window.location.replace(allStoresData.link);
                                                    //     // window.open(`${allStoresData.link}`)
                                                    //     // window.location = allStoresData.link
                                                    // }}
                                                >
                                                    <ButtonInside>
                                                        View Website
                                                    </ButtonInside>
                                                </CarrotButton>
                                            </StoreDetailButton>
                                        </OfferSection>
                                    </>
                                ) : ""}
                            </AllStoresCard>
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
