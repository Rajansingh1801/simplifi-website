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

import { businessPreferredValidator } from "../../../utils/validators";
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
    PlanCard,
    CardPoint,
    RightTickThank,
    PurchaseText,
    PurchaseButton,
    BusinessFormCarrot,
    ParagraphAssociate, AssociateFormCarrot, CloseIconButton, FileSize } from "../AssociateMember/AssociateMemberElements";
import { PageHeadingRed, PageHeadingGreen } from "../AllStores/AllStoresElements";
import UploadImage from "../../../components/UploadImage"
import VideoUpload from "../../../components/VideoUpload"
import { uploadImage } from '../../../utils/functions';
import FileDrop from '../../../components/FileDrop';


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
        description : "",
        business_name : "",
        industry_type : "",
        logo:"",
        video:"",
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
            description: values.description,
            business_name: values.business_name,
            industry_type: values.industry_type,
            logo:values.logo,
            video:values.video,
        }


        setIsLoading(true);
        try {
            const { data } = await axios.post("/user/preferredMember", formvalues);
            console.log(data);
            setAssociateFormValues({
                email : "",
                name : "",
                countryCode : "",
                mobileNumber : "",
                description : "",
                business_name : "",
                industry_type : "",
                logo:"",
                video:"",
            })
            resetForm();
            // setModalState({
            //     isThankYou: true
            // });
            navigate("/preferred-payment")
            setIsLoading(false);
            // navigate(`/form-success?type=preferred`)
            // toast.success(data.message, {
            //     position: toast.POSITION.TOP_RIGHT,
            // });
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
                    Purchase subscription to become a Preferred Business Partner
                    </PurchaseText>
                    <PurchaseButton
                        type="button"
                        onClick={() => {
                            navigate('/preferred-payment');
                        }}
                    >
                    Purchase
                    </PurchaseButton>
                </PurchaseSubRow>*/}
                <HeroContent className="container">
                    <SignWelcome>
                        <SignInSection style={{paddingTop: "1rem"}}>
                            <HeroH1>
                            <div style={{color: "#101011", fontFamily: "Titan One"}}>Become&nbsp;a&nbsp;</div>
                            <PageHeadingRed>
                                Preferred&nbsp;Business&nbsp;Partner&nbsp;
                            </PageHeadingRed>
                            
                            </HeroH1>
                        </SignInSection>
                        <PlanCardsSection>
                            <UpperSectionForm>
                                <UpperSectionCardForm>
                                    <Formik
                                        enableReinitialize
                                        initialValues={associateFormValues}
                                        validate={(values) => businessPreferredValidator(values)}
                                        validateOnChange
                                        onSubmit={(values, { resetForm }) => {
                                            if(!userToken || !userData) {
                                                toast.error(`Please login first`, {
                                                    position: toast.POSITION.TOP_RIGHT,
                                                });
                                                navigate("/login");
                                            } else {
                                                handleAssociateMemberForm(values, resetForm);
                                            }
                                            // console.log(values)
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
                                                    <div className='col-md-7 '>
                                                        <Field name="business_name">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel>
                                                                        Business Name
                                                                    </InputLabel>
                                                                    <CarrotInputNormal
                                                                        {...field}
                                                                        type="text"
                                                                        placeholder="Enter your Business Name"
                                                                        value={formikBag.values.business_name}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue(
                                                                                "business_name",
                                                                                e.target.value
                                                                            );
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.business_name &&
                                                                                formikBag.errors.business_name
                                                                                ? formikBag.errors.business_name
                                                                                : null
                                                                        }
                                                                    />
                                                                </LabelInput>
                                                            )}
                                                        </Field>
                                                        </div>
                                                        <div className='col-md-5 '>
                                                        <Field name="logo">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel style={{paddingLeft: "2rem"}}>
                                                                       Upload Logo
                                                                    </InputLabel>
                                                                    <UploadImage
                                                                        {...field}
                                                                        type="file"
                                                                        // placeholder="Image"
                                                                        // value={formikBag.values.image}
                                                                        // onChange={(e) => {
                                                                        //     formikBag.setFieldValue(
                                                                        //         "image",
                                                                        //         e.target.value
                                                                        //     );
                                                                        // }}
                                                                        // onChange={async (e) => {
                                                                            
                                                                        //   }}
                                                                        setFieldValue={formikBag.setFieldValue}
                                                                        setIsLoading={setIsLoading}
                                                                        Imagepath={formikBag.values.logo}
                                                                        error={
                                                                           
                                                                                !formikBag.errors.logo
                                                                                ? null:formikBag.errors.logo
                                                                                
                                                                        }
                                                                    />
                                                                  <FileSize>Max. file size 2MB. </FileSize>
                                                                </LabelInput>
                                                            )}
                                                        </Field>
                                                        
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 mdNoPaddingFlexRow'>
                                                        <Field name="industry_type">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel>
                                                                        Industry Type
                                                                    </InputLabel>
                                                                    <CarrotInputNormal
                                                                        {...field}
                                                                        type="text"
                                                                        placeholder="Enter Industry Type"
                                                                        value={formikBag.values.industry_type}
                                                                        onChange={(e) => {
                                                                            formikBag.setFieldValue(
                                                                                "industry_type",
                                                                                e.target.value
                                                                            );
                                                                        }}
                                                                        error={
                                                                            formikBag.touched.industry_type &&
                                                                                formikBag.errors.industry_type
                                                                                ? formikBag.errors.industry_type
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
                                                    <div className='col-md-12 mdNoPaddingFlexRow'>
                                                        <Field name="video">
                                                            {({ field }) => (
                                                                <LabelInput>
                                                                    <InputLabel>
                                                                        Video
                                                                    </InputLabel>
                                                                    {/* <VideoUpload
                                                                        {...field}
                                                                        type="file"
                                                                        
                                                                        setFieldValue={formikBag.setFieldValue}
                                                                        setIsLoading={setIsLoading}
                                                                        error={
                                                                            
                                                                                formikBag.errors.video
                                                                                ? formikBag.errors.video
                                                                                : null
                                                                        }
                                                                    /> */}
                                                                    <FileDrop
                                                                    // key={formikBag.values.video}
                                                                                    // onDrop={async (e) => {
                                                                                    //     console.log(e);
                                                                                    //     const fileSize = e[0].size / 1024 / 1024; // in MiB
                                                                                    //     if (fileSize > 2) {
                                                                                    //         alert("ex_2mb");
                                                                                    //         // $(file).val(''); //for clearing with Jquery
                                                                                    //     } else {
                                                                                    //         setIsLoading(true);
                                                                                    //         var video = await uploadImage(e[0]);
                                                                                          
                                                                                            
                                                                                    //         formikBag.setFieldValue('video', video.path)

                                                                                    //         setIsLoading(false);
                                                                                    //     }
                                                                                    // }}
                                                                                    
                                                                                    setFieldValue={formikBag.setFieldValue}
                                                                                    setIsLoading={setIsLoading}
                                                                                    uploadImage={uploadImage}
                                                                                   
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
                                <BusinessFormCarrot src={CarrotStores}/>
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
