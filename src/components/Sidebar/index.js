import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import * as FaIcons from "react-icons/fa";
import placeholderImage from "../../images/CarrotImages/lady.png";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import {
  SignInText,
  ProfileCard,
  ProfileCardRow,
  LeftProfile,
  ProfileSection,
  ProfileItem,
  ProfileFinal,
  ProfileImage,
  UserImageButton,
  ProfileCardtext,
} from "../../pages/NavbarCarrot/NavbarElements";

const Sidebars = ({
  isOpen,
  toggle,
  userData,
  history,
  sidebar,
  setSidebar,
  setUsers,
}) => {
  const navigate = useNavigate();
  const userNavbarRef = useRef(null);

  const [IsShowProfileCard, setIsShowProfileCard] = useState(false);
  const [isLoadingSidebarBackground, setIsLoadingSidebarBackground] =
    useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showBackOverlay = () =>
    setIsLoadingSidebarBackground(!isLoadingSidebarBackground);

  const handleConfirm = (async) => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("UserDataEverguard");
    setUsers("");
    navigate("/");
    navigate(0);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            onClick={() => {
              navigate("/associateMember");
            }}
          >
            Associate Member
          </SidebarLink>
          <SidebarLink
            onClick={() => {
              navigate("/businessPartner");
            }}
          >
            Preferred Business Partner
          </SidebarLink>
          <SidebarLink
            onClick={() => {
              navigate("/about-us");
            }}
          >
            About Us
          </SidebarLink>
          <SidebarLink
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {!userData ? (
            <>
              <SidebarRoute primary="true" to="/login">
                Login
              </SidebarRoute>
              <SidebarRoute to="/signup">Create Account</SidebarRoute>
            </>
          ) : (
            <>
              <ProfileSection style={{ display: "flex" }}>
                <LeftProfile ref={userNavbarRef}>
                  <ProfileItem>
                    <ProfileFinal
                      onClick={(e) => {
                        e.preventDefault();
                        showBackOverlay();
                        showSidebar();
                        // setIsShowProfileCard(!IsShowProfileCard)
                      }}
                    >
                      {userData?.profileImage ? (
                        <ProfileImage
                          src={
                            get(userData, "profileImage", "") ||
                            placeholderImage
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
                          <ProfileCardtext>
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
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

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
    setSidebar: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_SIDEBAR,
        updateSidebar: updatedValue,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebars);
