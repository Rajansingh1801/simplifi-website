import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import Input from "../../components/Input";
import * as MdIcons from "react-icons/md";
import CarrotInput from "../../components/CarrotInput";
import { Formik, Field, Form } from "formik";
import axios from "../../axios";
import { toast } from "react-toastify";
import get from "lodash/get";
import ChairGuySvg from "../../images/CarrotSvg/ChairGuy.svg";
import ChairGuyImage from "../../images/CarrotImages/ChairGuy.png";
import GreenBottomImage from "../../images/CarrotImages/GreenBottom.png";
import LottieCarrot from "../../images/CarrotJSON/carrot.json";
import DotCarrotSection from "../../images/CarrotSvg/DotCarrotSection.svg";
import DotCarrotInside from "../../images/CarrotSvg/DotCarrotInside.svg";
import placeholder from "../../images/CarrotImages/lady.png";
import cameraIcon from "../../images/CarrotImages/camera.png";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  NavBtnLink,
  ChairSvg,
  SignWelcome,
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
  WhiteButton,
  RightSectionInsideDot,
  RightSectionDotOutBig,
  LeftSectionUpperDot,
  LeftSectionOutsideDot,
  RightSectionOutsideDot,
  LeftSectionDot,
  ForgotRow,
  TermsConditionRow,
  TermsCheckbox,
  TermsLabelRow,
  LabelDull,
  LabelDark,
  CarrotButtonRow,
  CarrotButton,
  DontHaveRow,
  ChairSvgSection,
  ProfilePicture,
  ChairGuy,
  ChairBottom,
  DontHave,
  ImageEditButton,
  SignupText,
  WelcomeSection,
} from "./LoginElements";
import Overlay from "../../components/Overlay";
import {
  UpdateProfileValidator,
  completeProfileValidator,
  signUPValidator,
} from "../../utils/validators";
import { uploadImage } from "../../utils/functions";

const HeroSection = ({
  userData,
  defaultState,
  setDefaultState,
  setUsers,
  setUserToken,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfileValues, setUpdateProfileValues] = useState({
    email: userData?.email,
    countryCode: userData?.countryCode,
    mobileNumber: userData?.mobileNumber,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    profileImage: userData?.profileImage,
  });
  console.log(userData);

  const handleUpdateProfile = async (values) => {
    var fromData = {
      countryCode: values?.countryCode,
      mobileNumber: values?.mobileNumber,
      firstName: values?.firstName,
      lastName: values?.lastName,
      profileImage: values?.profileImage,
    };
    setIsLoading(true);
    try {
      const { data } = await axios.post("/user/updateProfile", fromData);

      setUpdateProfileValues({
        ...updateProfileValues,
        email: values?.email,
        countryCode: values?.countryCode,
        mobileNumber: values?.mobileNumber,
        firstName: values?.firstName,
        lastName: values?.lastName,
        profileImage: values?.profileImage,
      });

      setIsLoading(false);
      console.log(data);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("UserDataEverguard", JSON.stringify(data.data));
      setUsers(data.data);
      setUserToken(data.access_token);
      navigate("/");
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  console.log(localStorage);

  const defaultOptionsCarrot = {
    loop: true,
    autoplay: true,
    animationData: LottieCarrot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <HeroContainer IsSignup={true}>
        <HeroBg>
          <ImgBg src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
        </HeroBg>
        <HeroContent className="container">
          <SignWelcome>
            <SignInSection>
              <HeroH1>&nbsp;</HeroH1>
              <HeroP>&nbsp;</HeroP>
            </SignInSection>
            <WelcomeSection IsSignup={true}>
              <Formik
                enableReinitialize
                initialValues={updateProfileValues}
                validate={(values) => UpdateProfileValidator(values)}
                validateOnChange
                onSubmit={(values) => {
                  handleUpdateProfile(values);
                }}
              >
                {(formikBag) => {
                  return (
                    <Form className="formStyle" style={{ height: "100%" }}>
                      <WelcomeDesign>
                        <TrapeziumLeft></TrapeziumLeft>
                        <TrapeziumRight></TrapeziumRight>
                        <TrapeziumContent>
                          <EmailPswdSection
                            style={{
                              padding: "1.5rem 1.5rem 0.5rem 1.5rem",
                              justifyContent: "space-around",
                            }}
                          >
                            <ProfilePicture>
                              <div className="profile_picture">
                                <div
                                  className="profile_pic"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div style={{ position: "relative" }}>
                                    {formikBag.values.profileImage ? (
                                      <div
                                        style={{
                                          background: "#FF5555",
                                          position: "absolute",
                                          top: "0.55rem",
                                          right: "0.65rem",
                                          borderRadius: "50%",
                                          color: "#FFFFFF",
                                          padding:
                                            "0rem 0.35rem 0.05rem 0.35rem",
                                          fontSize: "0.7rem",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          function resetFile() {
                                            const file =
                                              document.querySelector(
                                                ".fileInputProfile"
                                              );
                                            file.value = "";
                                          }
                                          resetFile();
                                          formikBag.setFieldValue(
                                            "profileImage",
                                            ""
                                          );
                                        }}
                                      >
                                        x
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <img
                                      src={
                                        formikBag.values.profileImage ||
                                        placeholder
                                      }
                                      alt="placeholder_img"
                                    />
                                  </div>
                                  <p>
                                    <input
                                      type="file"
                                      id="pic"
                                      className="fileInputProfile"
                                      accept=".img,.jpg,.jpeg,.png"
                                      name="profile_picture"
                                      onChange={async (e) => {
                                        setIsLoading(true);
                                        var image = await uploadImage(
                                          e.target.files[0]
                                        );
                                        console.log(image);
                                        formikBag.setFieldValue(
                                          "profileImage",
                                          image.path
                                        );
                                        setIsLoading(false);
                                      }}
                                    />
                                    <label
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginLeft: "3.2rem",
                                        marginTop: "-3.5rem",
                                      }}
                                      htmlFor="pic"
                                    >
                                      <ImageEditButton>
                                        <WhiteButton>
                                          <MdIcons.MdEdit
                                            style={{ color: "#E43F0F" }}
                                          />
                                        </WhiteButton>
                                      </ImageEditButton>
                                    </label>
                                  </p>
                                </div>
                              </div>
                            </ProfilePicture>

                            <div
                              className="col-md-12 mdNoPaddingFlexRow"
                              style={{ paddingTop: "1.5rem" }}
                            >
                              <div className="col-md-6 mdRightPaddingShow">
                                <Field name="firstName">
                                  {({ field }) => (
                                    <LabelInput>
                                      <InputLabel>First Name</InputLabel>
                                      <CarrotInput
                                        {...field}
                                        type="text"
                                        placeholder="First Name"
                                        value={formikBag.values.firstName}
                                        onChange={(e) => {
                                          formikBag.setFieldValue(
                                            "firstName",
                                            e.target.value
                                          );
                                        }}
                                        error={
                                          formikBag.touched.firstName &&
                                          formikBag.errors.firstName
                                            ? formikBag.errors.firstName
                                            : null
                                        }
                                      />
                                    </LabelInput>
                                  )}
                                </Field>
                              </div>
                              <div className="col-md-6 mdLeftPaddingShow">
                                <Field name="lastName">
                                  {({ field }) => (
                                    <LabelInput>
                                      <InputLabel>Last Name</InputLabel>
                                      <CarrotInput
                                        {...field}
                                        type="text"
                                        placeholder="Last Name"
                                        value={formikBag.values.lastName}
                                        onChange={(e) => {
                                          formikBag.setFieldValue(
                                            "lastName",
                                            e.target.value
                                          );
                                        }}
                                        error={
                                          formikBag.touched.lastName &&
                                          formikBag.errors.lastName
                                            ? formikBag.errors.lastName
                                            : null
                                        }
                                      />
                                    </LabelInput>
                                  )}
                                </Field>
                              </div>
                            </div>
                            <div className="col-md-12 mdNoPaddingFlexRow">
                              <Field name="email">
                                {({ field }) => (
                                  <LabelInput>
                                    <InputLabel>Email Address</InputLabel>
                                    <CarrotInput
                                      {...field}
                                      type="email"
                                      disabled={true}
                                      placeholder="Email Address"
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
                            <div className="col-md-12 mdNoPaddingFlexRow">
                              <Field name="mobileNumber">
                                {({ field }) => (
                                  <LabelInput>
                                    <InputLabel>Mobile Number</InputLabel>
                                    <CarrotInput
                                      {...field}
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
                                        formikBag.setFieldValue(
                                          "countryCode",
                                          data.format.slice(0, 1) +
                                            data.dialCode
                                        );
                                        formikBag.setFieldValue(
                                          "mobileNumber",
                                          phone.slice(data.dialCode.length)
                                        );
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
                            <CarrotButtonRow>
                              <CarrotButton type="submit">
                                <ButtonInside>Save Changes</ButtonInside>
                              </CarrotButton>
                            </CarrotButtonRow>
                          </EmailPswdSection>
                        </TrapeziumContent>
                      </WelcomeDesign>
                    </Form>
                  );
                }}
              </Formik>
            </WelcomeSection>
          </SignWelcome>
          <HeroBtnWrapper></HeroBtnWrapper>
        </HeroContent>
        <ChairSvgSection>
          {/*<ChairBottom src={GreenBottomImage}/>*/}
        </ChairSvgSection>
      </HeroContainer>
      {isLoading && <Overlay />}
    </>
  );
};

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
    setUserToken: (updatedValue) => {
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
