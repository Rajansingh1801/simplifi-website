import React, { useState, useContext, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import { connect } from "react-redux";
import { get } from "lodash";
import { toast } from "react-toastify";

// Icons
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

// Images
import logoWlogin from "../../images/CarrotSvg/SmartCarrotNewLogo.svg";

import Overlay from "../../components/Overlay";
import SidebarOverlay from "../../components/SidebarOverlay";
import * as actionTypes from "../../store/actions";
import placeholderImage from "../../images/CarrotImages/lady.png";
import { LanguageContext } from "../../utils/language/Language";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksRoute,
  NavBtn,
  NavBtnLink,
  LoginTitle,
  LoginCenter,
  LoginAnchor,
  SvgLogo,
  NavIcon,
  SidebarMobileIcon,
  SignInText,
  ProfileCard,
  AssociateCard,
  ProfileCardRow,
  LeftProfile,
  ProfileSection,
  ProfileItem,
  ProfileFinal,
  ProfileImage,
  UserImageButton,
  ProfileCardtext,
} from "./NavbarElements";
import Profile from "../LoginPage/Profile";

const Navbar = (props) => {
  const {
    userData,
    toggle,
    history,
    sidebar,
    setSidebar,
    deviceToken,
    setDeviceToken,
    // location: { search },
    setUsers,
  } = props;

  const search = window?.location;
  console.log(search);

  const navigate = useNavigate();
  const userNavbarRef = useRef(null);
  const userNavbarAssociateRef = useRef(null);
  const userNavbarBusinessRef = useRef(null);

  // ******Localization****
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (value) => userLanguageChange(value);
  const defaultLanguage = window.localStorage.getItem("rcml-lang") || "en";
  const { dictionary } = useContext(LanguageContext);

  const [scrollNav, setScrollNav] = useState(false);
  const [bgLogin, setBgLogin] = useState(false);
  const [logoColor, setLogoColor] = useState(logoWlogin);
  const [defaultState, setDefaultState] = useState({
    isLogin: "",
    isSignup: "",
    isForget: "",
    isOtp: "",
    isReset: "",
    isProfileUpdate: "",
    isApproved: "",
    isRejected: "",
    isProfileComplete: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [IsShowProfileCard, setIsShowProfileCard] = useState(false);
  const [IsShowAssociateCard, setIsShowAssociateCard] = useState(false);
  const [IsShowBusinessCard, setIsShowBusinessCard] = useState(false);
  const [isLoadingSidebarBackground, setIsLoadingSidebarBackground] =
    useState(false);
  const [isToggled, setIsToggled] = useState(
    get(userData, "restaurant_on", false)
  );

  const showSidebar = () => setSidebar(!sidebar);
  const showBackOverlay = () =>
    setIsLoadingSidebarBackground(!isLoadingSidebarBackground);

  console.log(sidebar);

  const changeNavOnScroll = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNavOnScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userNavbarRef.current &&
        !userNavbarRef.current.contains(event.target)
      ) {
        setIsShowProfileCard(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userNavbarRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userNavbarAssociateRef.current &&
        !userNavbarAssociateRef.current.contains(event.target)
      ) {
        setIsShowAssociateCard(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userNavbarAssociateRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userNavbarBusinessRef.current &&
        !userNavbarBusinessRef.current.contains(event.target)
      ) {
        setIsShowBusinessCard(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userNavbarBusinessRef]);

  console.log(userData);

  const handleConfirm = (async) => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("UserDataEverguard");
    setUsers("");
    navigate("/");
    navigate(0);
  };

  const leftBox = (
    <>
      {!userData ? (
        <>
          <ProfileSection>
            <LeftProfile>
              <ProfileItem>
                <ProfileFinal
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <SignInText style={{ color: "#FFFFFF" }}>
                    Join For Free
                  </SignInText>
                </ProfileFinal>
              </ProfileItem>
            </LeftProfile>
          </ProfileSection>
        </>
      ) : (
        <>
          <ProfileSection>
            <LeftProfile ref={userNavbarRef}>
              <ProfileItem>
                <ProfileFinal
                  onClick={(e) => {
                    e.preventDefault();
                    setIsShowProfileCard(!IsShowProfileCard);
                  }}
                >
                  {userData?.profileImage ? (
                    <ProfileImage
                      src={
                        get(userData, "profileImage", "") || placeholderImage
                      }
                    />
                  ) : (
                    <>
                      {userData?.firstName ? (
                        <UserImageButton>
                          {userData?.firstName[0]}
                          {userData?.lastName[0]}
                        </UserImageButton>
                      ) : (
                        <ProfileImage src={placeholderImage} />
                      )}
                    </>
                  )}
                  <SignInText style={{ color: "#FFFFFF" }}>
                    {userData.firstName}&nbsp;{userData.lastName}
                  </SignInText>
                </ProfileFinal>
              </ProfileItem>
              {IsShowProfileCard ? (
                <>
                  <ProfileCard>
                    <ProfileCardRow>
                      <ProfileCardtext
                        onClick={() => {
                          navigate("/profile");
                          setIsShowProfileCard(false);
                        }}
                      >
                        Profile
                      </ProfileCardtext>
                    </ProfileCardRow>
                    <ProfileCardRow>
                      <ProfileCardtext
                        onClick={() => {
                          navigate("/change-password");
                          setIsShowProfileCard(false);
                        }}
                      >
                        Change Password
                      </ProfileCardtext>
                    </ProfileCardRow>
                    <ProfileCardRow>
                      <ProfileCardtext
                        onClick={() => {
                          navigate("/subscription");
                          setIsShowProfileCard(false);
                        }}
                      >
                        Subscription Plan
                      </ProfileCardtext>
                    </ProfileCardRow>
                    <ProfileCardRow>
                      <ProfileCardtext>Wallet</ProfileCardtext>
                    </ProfileCardRow>
                    <ProfileCardRow>
                      <ProfileCardtext
                        onClick={() => {
                          navigate("/referEarn");
                          setIsShowProfileCard(false);
                        }}
                      >
                        Say&nbsp;Something&nbsp;Earn&nbsp;Something
                      </ProfileCardtext>
                    </ProfileCardRow>
                    <ProfileCardRow>
                      <ProfileCardtext>Development Partner</ProfileCardtext>
                    </ProfileCardRow>
                    <ProfileCardRow>
                      <ProfileCardtext>Finance management</ProfileCardtext>
                    </ProfileCardRow>
                    <ProfileCardRow style={{ paddingBottom: "0rem" }}>
                      <ProfileCardtext
                        onClick={() => {
                          handleConfirm();
                          setIsShowProfileCard(false);
                        }}
                      >
                        Logout
                      </ProfileCardtext>
                    </ProfileCardRow>
                  </ProfileCard>
                </>
              ) : (
                ""
              )}
            </LeftProfile>
          </ProfileSection>
        </>
      )}
    </>
  );

  const middleBox = (
    <>
      <NavMenu>
        <NavItem ref={userNavbarAssociateRef}>
          <NavLinksRoute
            // to="/associateMember"
            onClick={(e) => {
              e.preventDefault();
              setIsShowAssociateCard(!IsShowAssociateCard);
            }}
          >
            Associate&nbsp;Member
          </NavLinksRoute>
          {IsShowAssociateCard ? (
            <>
              <AssociateCard>
                <ProfileCardRow>
                  <ProfileCardtext
                    onClick={() => {
                      navigate("/associateMember");
                      setIsShowAssociateCard(false);
                    }}
                  >
                    Learn More
                  </ProfileCardtext>
                </ProfileCardRow>
                <ProfileCardRow>
                  <ProfileCardtext
                    onClick={() => {
                      navigate("/associateMemberForm");
                      setIsShowAssociateCard(false);
                    }}
                  >
                    Ask Questions
                  </ProfileCardtext>
                </ProfileCardRow>
                <ProfileCardRow style={{ paddingBottom: "0rem" }}>
                  <ProfileCardtext
                    onClick={() => {
                      navigate("/associate-payment");
                      setIsShowAssociateCard(false);
                    }}
                  >
                    Become a Member
                  </ProfileCardtext>
                </ProfileCardRow>
              </AssociateCard>
            </>
          ) : (
            ""
          )}
        </NavItem>
        <NavItem ref={userNavbarBusinessRef}>
          <NavLinksRoute
            // to="/businessPartner"
            onClick={(e) => {
              e.preventDefault();
              setIsShowBusinessCard(!IsShowBusinessCard);
            }}
          >
            Preferred&nbsp;Business&nbsp;Partner
          </NavLinksRoute>
          {IsShowBusinessCard ? (
            <>
              <AssociateCard>
                <ProfileCardRow>
                  <ProfileCardtext
                    onClick={() => {
                      navigate("/businessPartner");
                      setIsShowBusinessCard(false);
                    }}
                  >
                    Learn More
                  </ProfileCardtext>
                </ProfileCardRow>
                {/* <ProfileCardRow>
                  <ProfileCardtext
                    onClick={() => {
                      navigate("/businessPartnerForm");
                      setIsShowBusinessCard(false);
                    }}
                  >
                    Ask Questions
                  </ProfileCardtext>
                </ProfileCardRow> */}
                <ProfileCardRow>
                  <ProfileCardtext
                    onClick={() => {
                      // navigate("/preferred-payment");
                      navigate("/businessPartnerForm");
                      setIsShowBusinessCard(false);
                    }}
                  >
                    Become a Partner
                  </ProfileCardtext>
                </ProfileCardRow>
                <ProfileCardRow style={{ paddingBottom: "0rem" }}>
                  <ProfileCardtext
                    onClick={() => {
                      navigate("/business-partner-list");
                      setIsShowBusinessCard(false);
                    }}
                  >
                    View Preferred Partner List
                  </ProfileCardtext>
                </ProfileCardRow>
              </AssociateCard>
            </>
          ) : (
            ""
          )}
        </NavItem>
        <NavItem>
          <NavLinks
            onClick={() => {
              navigate("/about-us");
            }}
          >
            About&nbsp;Us
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinksRoute to="/contact-us">Contact&nbsp;Us</NavLinksRoute>
        </NavItem>
      </NavMenu>
    </>
  );

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <Nav
          scrollNav={scrollNav}
          bgLogin={
            window.location.pathname === "/allStores" ||
            window.location.pathname.includes("/store/")
              ? true
              : false
          }
        >
          <NavbarContainer>
            <NavLogo to="/">
              <SvgLogo className="logoImage" src={logoColor} />
              {/*<img className="logoImage" src={logo} alt="logo" />*/}
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            {middleBox}
            {leftBox}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      {isLoading && <Overlay />}
      {sidebar ? <SidebarOverlay /> : ""}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    locationData: state.locations,
    defaultState: state.defaultState,
    sidebar: state.sidebar,
    deviceToken: state.deviceToken,
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
    },
    setDeviceToken: (updatedValue) => {
      dispatch({
        type: actionTypes.DEVICE_TOKEN,
        updateDeviceToken: updatedValue,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
