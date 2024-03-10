import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Overlay from '../../../components/Overlay';
import axios from "../../../axios";
import SubFree from "../../../images/CarrotSvg/SubFree.svg";
import { getPaymentLink } from '../../../utils/functions';


import { HeroContainer, HeroBg, ImgBgDot, HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
    WelcomeDesign,
    TrapeziumContent,
    TrapeziumLeft,
    TrapeziumRight,
    SignInSection,
    WelcomeRow,
    ButtonInside,
    EmailPswdSection,
    LabelInput,
    InputLabel,
    // CarrotInput,
    PlanCardsSection,
    RightSectionInsideDot,
    RightSectionDotOutBig,
    LeftSectionUpperDot,
    LeftSectionOutsideDot,
    RightSectionOutsideDot,
    LeftSectionDot,
    ForgotRow,
    ForgotText,
    CarrotButtonRow,
    PointRowDotButton,
    CarrotButton,
    DontHaveRow,
    ChairSvgSection,
    ChairGuy,
    ChairBottom,
    DontHave,
    SignupText,
    
    PlanCard,
    CardHeadingRow,
    CardHeading,
    CardPointsSection,
    CardPointRow,
    CardPoint,
    BuySection,
    CardPrice,
    FreeImage,
    WelcomeSection,
    WrapSection, 
    } from '../../LoginPage/LoginElements';

import { AllPlanCards, ImgBgDotPay, ModalClick, ModalClose, TermsAndConditionContainer,TermsAndConditionLabel,TermsCheckbox } from "./AssociateMemberElements";
import {PageHeadingGreen} from "../AllStores/AllStoresElements";
import { Modal } from '../../../components/Modal/Modal';
// import { SlClose } from "react-icons/sl";


const HeroSection = ({ userToken, userData, defaultState, setDefaultState, setUsers }) => {
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [businessPurchase, setBusinessPurchase] = useState([]);
const [openModal,setOpenModal]=useState(false)
const[Termschecked,setTermschecked]=useState(false)
const [showErrorTerms,setShowErrorTerms]=useState(false)
    useEffect(() => {
        getSubscriptionPlans();
    },[])

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const getSubscriptionPlans = async (values) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`/user/get_preferred_member_content`);
            setBusinessPurchase(data.data);
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
                    <ImgBgDotPay src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{padding: "1.5rem 0rem"}}>
                            <HeroH1>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Become&nbsp;a</div>&nbsp;
                                <PageHeadingGreen style={{color: "#28C54E", fontFamily: "Titan One"}}>Preferred&nbsp;Business&nbsp;Partner</PageHeadingGreen>
                            </HeroH1>
                            <HeroP>
                                Lorem ipsum dolor sit amet consectetur. At viverra risus ultrices et.
                            </HeroP>
                        </SignInSection>
                        <PlanCardsSection>
                            <AllPlanCards>
                                <PlanCard>
                                    {businessPurchase ? (
                                        <>
                                            <CardHeadingRow>
                                                <CardHeading>
                                                    ${businessPurchase.price}&nbsp;/&nbsp;year
                                                </CardHeading>
                                            </CardHeadingRow>
                                            <CardPointsSection>
                                                {businessPurchase.features ? (
                                                    <>
                                                        {businessPurchase.features.map((item,index) => (
                                                            <>
                                                                <CardPointRow>
                                                                    <PointRowDotButton/>
                                                                    <CardPoint>
                                                                        {item}
                                                                    </CardPoint>
                                                                </CardPointRow>
                                                            </>
                                                        ))}
                                                    </>
                                                ) : ""}
                                            </CardPointsSection>
                                        </>
                                    ) : ""}
                                    <WrapSection>
                                        <BuySection style={{paddingTop : "1rem"}}>
                                            <CarrotButton
                                                type="button"
                                                onClick={() => {
                                                    if(!userToken || !userData) {
                                                        navigate("/login");
                                                        toast.error(`Please login first`, {
                                                            position: toast.POSITION.TOP_RIGHT,
                                                          });
                                                    } else {
                                                        if(Termschecked){
                                                            // setShowErrorTerms(false)
                                                        getPaymentLink({
                                                            type: "2",
                                                            price: businessPurchase.stripe_price,
                                                            setIsLoading: setIsLoading
                                                        })
                                                      
                                                    }else{
                                                        // setTermschecked(false)
                                                        setShowErrorTerms(true)
                                                    }
                                                    }
                                                    
                                                }}
                                            >
                                                <ButtonInside>
                                                    Buy Now
                                                </ButtonInside>
                                            </CarrotButton>
                                        </BuySection>
                                        <TermsAndConditionContainer>
                                            <div style={{display: "flex", flexDirection : "row", width: "100%"}}>
                                                <TermsCheckbox  
                                                    id="styled-checkbox" 
                                                    type="checkbox" 
                                                    value={Termschecked} 
                                                    onChange={()=>{setTermschecked(!Termschecked);setShowErrorTerms(false)}}
                                                /> 
                                                <TermsAndConditionLabel for="styled-checkbox">
                                                    *I accept all the Terms & Conditions,&nbsp;
                                                </TermsAndConditionLabel>
                                                <ModalClick onClick={()=>setOpenModal(true)}>View</ModalClick>
                                            </div>
                                        {showErrorTerms&&
                                            <p
                                                style={{
                                                    paddingTop: 5,
                                                    fontSize: 13,
                                                    color: "red",
                                                    textAlign: "left",
                                                    paddingLeft: "2rem"
                                                }}>
                                                Please accept Terms & Conditions First
                                                </p>
                                            }
                                        </TermsAndConditionContainer>
                                    </WrapSection>
                                </PlanCard>
                            </AllPlanCards>
                        </PlanCardsSection>
                    </SignWelcome>
                </HeroContent>
                <ChairSvgSection>
                </ChairSvgSection>
            </HeroContainer>
            <Modal
                RoundedCorners={true}
                isOpen={openModal}
                border="1px solid rgba(228, 63, 15, 0.8)"
                // RoundedCorners={true}
                onClose={(event, reason) => {
                if (reason && (reason === "backdropClick" || "escapeKeyDown")) {
                } else {
                    setOpenModal(false);
                    
                }
                }}
                backgroundModal={false}
                backgroundModalContent={false}
                title={
                <div style={{position:"relative"}}>
                    <div
                    className="my-3"
                    style={{ color:  "#101011",
                        textAlign: "center",
                        fontFamily: "Visby Round CF",
                        fontSize: "40px",
                
                        fontWeight: 700,
                    
                        }}
                    >
                    <span style={{   borderBottom:"1px solid #fd973a",}}> Terms & Conditions</span>
                        
                    
                    </div>
                    <ModalClose  onClick={() => {
                        setOpenModal(false);
                        
                        }}>x</ModalClose>
                    {/* <div className=""> */}
                    {/* <SlClose
                        style={{
                        // fontSize: "1.5rem",
                        position: "absolute",
                        top: 16,
                        right: 16,
                        // color: "#fff",
                        // borderRadius: "50%",
                        // backgroundColor: "red",
                        cursor: "pointer",
                        }}
                        onClick={() => {
                        //   setOpenModal(false);
                        
                        // setSelectedPetCategoryData(null);
                        }}
                    /> */}
                
                    {/* </div> */}
                </div>
                }
                content={
                <>
                    test 
                </>
                }
            />
            {isLoading && <Overlay />}
        </>
    )
}




const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        locationData: state.locations,
        defaultState: state.defaultState,
        userToken: state.userToken,
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
