import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from 'react-lottie';
import Overlay from '../../../components/Overlay';
import CarrotInputNormal from '../../../components/CarrotInputNormal';
import axios from "../../../axios";
import CarrotStores from "../../../images/CarrotSvg/CarrotStores.svg";
import LottieCarrot from "../../../images/CarrotSvg/Contact-us.json";
import { Modal } from '../../../components/Modal/Modal'
import ThankRightTick from "../../../images/CarrotSvg/ThankYouRightTick.svg";

import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import { handleContactValidator } from "../../../utils/validators";
import { HeroContainer, HeroBg,  HeroContent, HeroH1, HeroP, HeroBtnWrapper, NavBtnLink, ChairSvg, SignWelcome,
    WelcomeDesign,
    CarrotButton,
    ButtonInside,
    TrapeziumContent,
    TrapeziumLeft,
    TrapeziumRight,
    SignInSection,
    WelcomeRow,
    EmailPswdSection,
    LabelInput,
    InputLabel,
    // CarrotInput,
    PlanCardsSection,
    CarrotButtonRow,
    ChairSvgSection,
    AllPlanCards,
    CardHeadingRow,
    CardHeading,
    CardPointsSection,
    CardPointRow,
    BuySection,
    CardPrice,
    FreeImage,
    WelcomeSection,
    WrapSection } from '../../LoginPage/LoginElements';

import { ImgBgDot, UpperSection, UpperSectionForm,
    UpperSectionCardForm,
    LowerSection,
    VideoSectionAssoiate,
    CarrotAssociateDiv,
    LearnMoreButtonRow,
    PurchaseSubRow,
    PurchaseText,
    PurchaseButton,
    BusinessFormCarrot,
    RightTickThank,
    PlanCard,
    CardPoint,
    LottieDivContactUs,
    ParagraphAssociate, CloseIconButton } from "../AssociateMember/AssociateMemberElements";
import { PageHeadingRed, PageHeadingGreen } from "../AllStores/AllStoresElements";


const HeroSection = ({ defaultState, setDefaultState, setUsers, userToken, userData }) => {
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [contactFormValues, setContactFormValues] = useState({
        email : "",
        name : "",
        description : ""
    });
    const [modalState, setModalState] = useState({
        isThankYou: ""
    });

    const handleContactUs = async (values, resetForm) => {

        var formvalues = {
            email: values.email,
            name: values.name,
            description: values.description
        }


        setIsLoading(true);
        try {
            const { data } = await axios.post("/user/contactUs", formvalues);
            console.log(data);
            setContactFormValues({
                email : "",
                name : "",
                description : ""
            })
            setModalState({
                isThankYou: true
            });
            resetForm();

            setIsLoading(false);
            // navigate(`/form-success?type=contact`)
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } catch (error) {
            console.log(error);
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

    const defaultOptionsCarrot = {
        loop: true,
        autoplay: true,
        animationData: LottieCarrot,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
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
                            <div style={{color: "#101011", fontFamily: "Titan One"}}>Contact&nbsp;</div>
                            <PageHeadingRed>
                                Us
                            </PageHeadingRed>
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <UpperSectionForm>
                                <UpperSectionCardForm>
                                    <Formik
                                        enableReinitialize
                                        initialValues={contactFormValues}
                                        validate={(values) => handleContactValidator(values)}
                                        validateOnChange
                                        onSubmit={(values, { resetForm }) => {
                                            handleContactUs(values, resetForm);
                                        }}
                                    >
                                        {(formikBag) => {
                                            return (
                                                <Form className="formStyle">
                                                    
                                                    <div className='col-md-12 mdNoPaddingFlexRow'>
                                                        <Field name="name">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel>
                                                                        Name
                                                                    </InputLabel>
                                                                    <CarrotInputNormal
                                                                        {...field}
                                                                        type="text"
                                                                        placeholder="Enter your name"
                                                                        value={formikBag.values.name}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue(
                                                                                "name",
                                                                                e.target.value
                                                                            );
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.name &&
                                                                                formikBag.errors.name
                                                                                ? formikBag.errors.name
                                                                                : null
                                                                        }
                                                                    />
                                                                </LabelInput>
                                                            )}
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12 mdNoPaddingFlexRow'>
                                                        <Field name="email">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel>
                                                                        Email Address
                                                                    </InputLabel>
                                                                    <CarrotInputNormal
                                                                        {...field}
                                                                        type="email"
                                                                        placeholder="Enter your Email address"
                                                                        value={formikBag.values.email}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue(
                                                                                "email",
                                                                                e.target.value
                                                                            );
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.email &&
                                                                                formikBag.errors.email
                                                                                ? formikBag.errors.email
                                                                                : null
                                                                        }
                                                                    />
                                                                </LabelInput>
                                                            )}
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12 mdNoPaddingFlexRow'>
                                                        <Field name="description">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel>
                                                                        Message
                                                                    </InputLabel>
                                                                    <CarrotInputNormal
                                                                        {...field}
                                                                        type="textarea"
                                                                        placeholder="Write a message"
                                                                        rows="4"
                                                                        value={formikBag.values.description}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue(
                                                                                "description",
                                                                                e.target.value
                                                                            );
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.description &&
                                                                                formikBag.errors.description
                                                                                ? formikBag.errors.description
                                                                                : null
                                                                        }
                                                                    />
                                                                </LabelInput>
                                                            )}
                                                        </Field>
                                                    </div>
                                                    <CarrotButtonRow>
                                                        <CarrotButton
                                                            type="submit"
                                                        >
                                                            <ButtonInside>
                                                                Submit
                                                            </ButtonInside>
                                                        </CarrotButton>
                                                    </CarrotButtonRow>
                                                </Form>
                                            );
                                        }}
                                    </Formik>
                                    
                                </UpperSectionCardForm>
                                <LottieDivContactUs>
                                    <Lottie
                                        options={defaultOptionsCarrot}
                                        height={"100%"}
                                        width={"100%"}
                                    />
                                </LottieDivContactUs>
                            </UpperSectionForm>
                        </PlanCardsSection>
                    </SignWelcome>
                </HeroContent>
            </HeroContainer>

            {/* Menu add */}
            <Modal
                isOpen={modalState.isThankYou}
                width="300px"
                padding="0rem"
                className="update_profile"
                thankYouClass="thankYouDesign"
                onClose={() => {
                    setModalState({
                        isThankYou: false
                    });
                }}
                maxWidth='xs'
                title={
                    <div className="modalsign">
                        <CloseIconButton
                            onClick={() => {
                                setModalState({
                                    isSubscriptionBuy: false
                                });
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </CloseIconButton>

                        <>
                            <PlanCard>
                                <RightTickThank
                                    src={ThankRightTick}
                                />
                                <CardHeadingRow>
                                    <PageHeadingGreen style={{fontSize: "2rem"}}>
                                        Thank You
                                    </PageHeadingGreen>
                                </CardHeadingRow>
                                <CardPointsSection style={{borderBottom: "0rem", padding : "0rem"}}>
                                    <CardPointRow style={{justifyContent: "center"}}>
                                        <CardPoint style={{ textAlign: "center"}}>
                                        For contacting us, 
                                        </CardPoint>
                                    </CardPointRow>
                                    <CardPointRow style={{justifyContent: "center", padding : "0rem"}}>
                                        <CardPoint style={{ textAlign: "center"}}>
                                        We will get back to you.
                                        </CardPoint>
                                    </CardPointRow>
                                </CardPointsSection>
                            </PlanCard>
                        </>
                    </div>
                }
                content={

                    <>
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
        setToken: (updatedValue) => {
            dispatch({
                type: actionTypes.USER_TOKEN,
                updatedToken: updatedValue,
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
