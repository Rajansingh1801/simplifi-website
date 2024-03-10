import React, { useState, useEffect } from "react";
import "./blog.css";
import one from "../../../assets/images/blogs/1.png";
import two from "../../../assets/images/blogs/2.png";
import p from "../../../assets/images/blogs/p1.png";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Field, Form } from "formik";
import get from "lodash/get";
import Lottie from "react-lottie";
import Overlay from "../../../components/Overlay";
import axios from "../../../axios";
import ReactHtmlParser from "react-html-parser";
import Icon1 from "../../../images/CarrotImages/aron-visuals-BXOXnQ26B7o-unsplash.jpg";
import { useLocation } from "react-router-dom";
import { PageHeadingRed } from "../../WebsitePages/AllStores/AllStoresElements";

const HeroSection = ({ defaultState, setDefaultState, setUsers }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [allBlogsData, setAllBlogsData] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getAllBlogs = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/api/get-blogs`);
      console.log(data?.data);
      setAllBlogsData(data?.data);
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

  const customDescription = (e) => {
    if (e.length <= 100) {
      return e;
    } else {
      let text = e.slice(0, 100) + " ... ";
      return text;
    }
  };

  const Viewpage = (blogItem) => {
    navigate(`/blog/${blogItem.id}`, { state: blogItem });
  };
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);
  useEffect(() => {
    document.title = "Blog-Simiplifi";
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStrings =
    allBlogsData?.filter((str) =>
      (str?.title).toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <>
      <section className="blogs">
        <div className="bloghead">
          <h3>blogs</h3>
        </div>
        <div className="body">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row ">
                {allBlogsData.map((blogItem, index) =>
                  blogItem.status === true ? (
                    <div
                      className="col col-sm-6 col-12 d-flex mb-md-5 mb-3 flex-column"
                      onClick={() => Viewpage(blogItem)}
                      key={index}
                    >
                      <div className="card">
                        <div>
                          <img src={blogItem?.image} alt="" className="img1" />
                        </div>
                        <div className="cont pt-4">
                          <h4 className="heading">{blogItem?.title}</h4>
                          <p className="para">{blogItem?.sort_description}</p>
                          <div className="mt-auto">
                            <div className="hr"></div>
                            <div className="date">
                              <DateFormate data={blogItem?.createdAt} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
            <div className="col-lg-4  ps-sm-5">
              <div className="bloglist">
                <div className="mt-3 mb-5">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <Serachicon />
                  </div>
                </div>
                {filteredStrings?.map((blogItem, index) =>
                  blogItem.status === true ? (
                    <div
                      className="cont d-flex align-items-center justify-content-center"
                      onClick={() => Viewpage(blogItem)}
                      key={index}
                    >
                      <div className="img-cont">
                        <img src={blogItem?.image} alt="" />
                      </div>
                      <div className="ps-3">
                        <h5>{blogItem?.title}</h5>
                        <p>{blogItem?.sort_description}</p>
                      </div>
                      <div className="hr"></div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLoading && <Overlay />}
    </>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);

const Serachicon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M26.7592 24.6908L21.2461 19.1777C22.5734 17.4108 23.2899 15.26 23.2875 13.05C23.2875 7.40508 18.6949 2.8125 13.05 2.8125C7.40508 2.8125 2.8125 7.40508 2.8125 13.05C2.8125 18.6949 7.40508 23.2875 13.05 23.2875C15.26 23.2899 17.4108 22.5734 19.1777 21.2461L24.6908 26.7592C24.9699 27.0086 25.3339 27.1418 25.708 27.1313C26.0822 27.1209 26.4382 26.9676 26.7029 26.7029C26.9676 26.4382 27.1209 26.0822 27.1313 25.708C27.1418 25.3339 27.0086 24.9699 26.7592 24.6908ZM5.7375 13.05C5.7375 11.6037 6.16637 10.1899 6.96988 8.98739C7.77339 7.78486 8.91544 6.8476 10.2516 6.29413C11.5878 5.74067 13.0581 5.59585 14.4766 5.87801C15.8951 6.16016 17.198 6.85661 18.2207 7.87928C19.2434 8.90195 19.9398 10.2049 20.222 11.6234C20.5041 13.0419 20.3593 14.5122 19.8059 15.8484C19.2524 17.1846 18.3151 18.3266 17.1126 19.1301C15.9101 19.9336 14.4963 20.3625 13.05 20.3625C11.1113 20.3602 9.25271 19.589 7.88185 18.2182C6.51099 16.8473 5.73983 14.9887 5.7375 13.05Z"
          fill="url(#paint0_linear_144_1990)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_144_1990"
            x1="2.8125"
            y1="14.9722"
            x2="27.1319"
            y2="14.9722"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001525" />
            <stop offset="0.0001" stop-color="#022948" />
            <stop offset="0.9999" stop-color="#003251" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const DateFormate = ({ data }) => {
  const dateObject = new Date(data);

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formatter = new Intl.DateTimeFormat("en-IN", options);
  const formattedDate = formatter.format(dateObject);

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};
