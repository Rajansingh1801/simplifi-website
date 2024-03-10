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
import { Modal } from '../../../components/Modal/Modal'

import AssociateLady from "../../../images/CarrotSvg/AssociateLady.png";
import CarrotAssociate from "../../../images/CarrotSvg/CarrotAssociate.svg";
import ThankRightTick from "../../../images/CarrotSvg/ThankYouRightTick.svg";
import { associateFormValidator } from "../../../utils/validators";
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

import { PageHeadingRed, PageHeadingGreen } from "../AllStores/AllStoresElements";

import { ImgBgDot, UpperSection, UpperSectionForm,
    UpperSectionCardForm,
    LowerSection,
    VideoSectionAssoiate,
    CarrotAssociateDiv,
    LearnMoreButtonRow,
    PurchaseSubRow,
    PlanCard,
    CardPoint,
    RightTickThank,
    PurchaseText,
    PurchaseButton,
    ParagraphAssociate, AssociateFormCarrot, CloseIconButton } from "./AssociateMemberElements";


const HeroSection = ({ defaultState, setDefaultState, setUsers, userToken, userData }) => {
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [associateFormValues, setAssociateFormValues] = useState({
        email : "",
        name : "",
        countryCode : "",
        mobileNumber : "",
        description : ""
    });
    const [modalState, setModalState] = useState({
        isThankYou: ""
    });


    const handleAssociateMemberForm = async (values, resetForm) => {

        var formvalues = {
            email: values.email,
            name: values.name,
            countryCode: values.countryCode,
            mobileNumber: values.mobileNumber,
            description: values.description
        }


        setIsLoading(true);
        try {
            const { data } = await axios.post("/user/associateMember", formvalues);
            console.log(data);
            setAssociateFormValues({
                email : "",
                name : "",
                countryCode : "",
                mobileNumber : "",
                description : ""
            })
            resetForm();

            setIsLoading(false);
            setModalState({
                isThankYou: true
            });
            // navigate(`/form-success?type=associate`)
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


    

    return (
        <>
            <HeroContainer style={{height: "100%"}}>
                <HeroBg>
                    <ImgBgDot src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                </HeroBg>
                {/*<PurchaseSubRow>
                    <PurchaseText>
                    Purchase subscription to become a Associate Member
                    </PurchaseText>
                    <PurchaseButton
                        type="button"
                        onClick={() => {
                            navigate('/associate-payment');
                        }}
                    >
                    Purchase
                    </PurchaseButton>
                </PurchaseSubRow>*/}
                <HeroContent className="container">
                <SignWelcome>
                
                        <SignInSection style={{paddingTop: "1rem"}}>
                            <HeroH1>
                                <div style={{color: "#101011", fontFamily: "Titan One"}}>Associate&nbsp;</div>
                                <PageHeadingRed>
                                    Member&nbsp;Enquiry&nbsp;Form
                                </PageHeadingRed>
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <UpperSectionForm>
                                <UpperSectionCardForm>
                                    <Formik
                                        enableReinitialize
                                        initialValues={associateFormValues}
                                        validate={(values) => associateFormValidator(values)}
                                        validateOnChange
                                        onSubmit={(values , { resetForm }) => {
                                            // if(!userToken || !userData) {
                                            //     navigate("/login");
                                            // } else {
                                            // }
                                            handleAssociateMemberForm(values, resetForm);
                                        }}
                                    >
                                        {(formikBag) => {
                                            return (
                                                <Form className="formStyle">
                                                    
                                                    <div className='col-md-12 mdNoPaddingFlexRow'>
                                                        <Field name="firstName">
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
                                                        <Field name="mobileNumber">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel>
                                                                        Mobile Number
                                                                    </InputLabel>
                                                                    <CarrotInputNormal
                                                                        {...field}
                                                                        style={{justifyContent: "center"}}
                                                                        country="us"
                                                                        type="phone"
                                                                        enableSearch={true}
                                                                        phoneInput={true}
                                                                        countryCodeEditable={false}
                                                                        value={
                                                                            formikBag.values.countryCode +
                                                                            formikBag.values.mobileNumber
                                                                        }
                                                                        onChange={(phone, data) => {
                                                                            formikBag.setFieldValue("countryCode", data.format.slice(0, 1) + data.dialCode );
                                                                            formikBag.setFieldValue("mobileNumber", phone.slice(data.dialCode.length) );
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.mobileNumber &&
                                                                                formikBag.errors.mobileNumber
                                                                                ? formikBag.errors.mobileNumber
                                                                                : null
                                                                        }
                                                                        placeholder="Phone Number"
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
                                                                        Description
                                                                    </InputLabel>
                                                                    <CarrotInputNormal
                                                                        {...field}
                                                                        type="textarea"
                                                                        placeholder="Write description..."
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
                                <AssociateFormCarrot src={CarrotStores}/>
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
                                            For submitting the enquiry form.
                                        </CardPoint>
                                    </CardPointRow>
                                    <CardPointRow style={{justifyContent: "center", padding : "0rem"}}>
                                        <CardPoint style={{ textAlign: "center"}}>
                                            Admin will get back to you!
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
