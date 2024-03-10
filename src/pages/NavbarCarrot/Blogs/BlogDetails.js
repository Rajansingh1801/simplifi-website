import React, { useState, useEffect } from "react";
import "./blog.css";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Overlay from "../../../components/Overlay";
import axios from "../../../axios";
import ReactHtmlParser from "react-html-parser";
import LexicalEditor from "../../../LexicalEditor/index";
import { BlogData } from "./BlogsElements";

const HeroSection = ({ setDefaultState, setUsers, defaultState }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const stateData = location?.state;
  console.log(stateData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Add any side effects or asynchronous calls here
  }, []); // Make sure to add dependencies if needed

  return (
    <>
      <section className="blogdetails">
        <div className="container">
          <h1 className="text-center">{stateData?.title}</h1>
          <div className="text-center">
            <DateFormat data={stateData?.createdAt} />
          </div>
          <div className="line"></div>
          <div className="banner-img">
            <img src={stateData.image} alt="" />
          </div>
          <div className="py-4">
            <div
              dangerouslySetInnerHTML={{
                __html: stateData?.detail_description.replace(
                  /href/g,
                  "target='_blank' href"
                ),
              }}
            />
            {/* <LexicalEditor
              initialEditorState={stateData?.detail_description}
              key={stateData?.detail_description}
            /> */}
          </div>
        </div>
      </section>
      {isLoading && <Overlay />}
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
  locationData: state.locations,
  defaultState: state.defaultState,
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (updatedValue) =>
    dispatch({
      type: actionTypes.UPDATE_USER,
      updatedUser: updatedValue,
    }),
  setDefaultState: (updatedValue) =>
    dispatch({
      type: actionTypes.UPDATE_DEFAULT,
      updateDefault: updatedValue,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);

const DateFormat = ({ data }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObject = new Date(data);
  const monthIndex = dateObject.getMonth();
  const year = dateObject.getFullYear();
  const day = dateObject.getDate();

  const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

  return (
    <div>
      <p className="datap">{formattedDate}</p>
    </div>
  );
};
