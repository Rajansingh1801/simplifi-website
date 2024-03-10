import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const SidebarLink = styled(Link)`
  display: flex;
  color: #d80066;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0px 18px 18px;
  height: 60px;
  text-decoration: none;
  font-size: 16.5px;

  &:hover {
    /* border-right: 2px solid #D90066; */
    /* cursor: pointer; */
  }

  &.active {
    color: #000000;
    border-bottom: 3px solid #01bf71;
    /* border-right: 8px solid #D90066; */
    /* background: #252831; */
  }

  &:focus {
    /* border-right: 2px solid #D90066; */
    /* color: #D80066; */
  }

  &:visited {
    background-color: #252831;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.div`
  /* background: #414757; */
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const IconLabel = styled.div`
  width: 100%;
  border-radius: 1.5px;

  &:hover {
    border-right: 2.5px solid #d90066;
    cursor: pointer;
  }

  &:visited {
    color: #d80066;
  }
`;

const SubMenu = ({
  userData,
  item,
  history,
  sidebar,
  setSidebar,
  setUsers,
}) => {
  const [subnav, setSubnav] = useState(false);
  const navigate = useNavigate();

  const showSubnav = () => setSubnav(!subnav);

  const showSidebar = () => setSidebar(!sidebar);

  const handleConfirm = (async) => {
    setSidebar(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("UserDataEverguard");
    setUsers("");
    navigate("/");
    navigate(0);
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={
          item.title === "Logout"
            ? handleConfirm
            : (item.subNav && showSubnav) || (sidebar ? showSidebar : "")
        }
        // style={{ borderRight: history.location.pathname == item.path ? "2px solid #D90066" : "" }}
      >
        <IconLabel
          style={{
            borderRight:
              "/webPanel/dashboard" == item.path ? "2.5px solid #D90066" : "",
          }}
        >
          {/* {item.icon} */}
          <img src={item.icon} />
          <SidebarLabel>{item.title}</SidebarLabel>
        </IconLabel>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);
