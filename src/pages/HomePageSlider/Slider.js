import { useState, useEffect, useContext } from "react";
import "./Slider.css";
import axios from "../../axios";
import { useNavigate } from 'react-router-dom';

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { get } from "lodash";
import styled from 'styled-components/macro';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import { toast } from "react-toastify";
import Overlay from '../../components/Overlay';
import ArrowLeft from "../../images/CarrotSvg/ArrowLeft.svg"
import ArrowRight from "../../images/CarrotSvg/ArrowRight.svg"
import {MyContext} from "../../contextApi/context"

const ArrowButton = styled.button`
  border: 1px transparent;
  /* opacity: 0.28; */
  color: #FFFFFF;
  background: transparent;
  cursor: pointer;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  &:hover {
    /* background-color: #fff;
    color: #777; */
  }

`

const DotsRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: ${({ isCurrentSlide, translateValue }) => (translateValue ? `all 0s ease` : "all 0.5s ease")};
  opacity: ${({ isCurrentSlide }) => (isCurrentSlide ? '1' : '0')};
  z-index: ${({ isCurrentSlide }) => (isCurrentSlide ? '0' : '-1')};
  transform: ${({ isCurrentSlide, translateValue }) => (translateValue ? `translateX(${translateValue}%)` : (isCurrentSlide ? "translateX(0)" : "translateX(50%)"))};
`
const DotsButton = styled.button`
  border: 1px transparent;
  background: ${({ isActive }) => (isActive ? 'linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%)' : '#FFFFFF28')};
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 50%;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  padding: 0.22rem;
  margin-right: 0.25rem;

  &:hover {
    background: linear-gradient(255.29deg, #E43F0F 8.23%, #FD973A 92.9%);
  }

  @media screen and (max-width: 425px) {
    width: 7px;
    padding: 0.19rem;
    margin-right: 0.22rem;
  }
  @media screen and (max-width: 320px) {
    width: 6px;
    padding: 0.17rem;
    margin-right: 0.2rem;
  }

`
const JoinNowButton = styled.button`
  position: absolute;
  z-index: 999;
  right: 6rem;
  bottom: 5.5rem;
  /* background: linear-gradient(255deg, #E43F0F 0%, #FD973A 100%); */
  background: #333156;
  border: 1px solid #FFFFFF;
  padding: 0.8rem 3rem;
  color: #FFFFFF;
  font-family: Visby Round CF;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`

const Slider = ({
  userData, userToken,
  // imageData
}) => {

  const navigate = useNavigate();
const {homedata,setIsLoading,isLoading}=useContext(MyContext);
console.log("hooooooooooomedataa",homedata)
const [homeScreenData, setHomeScreenData] = useState(!homedata?[]:get(homedata,"data.banner",""));
  // const [isLoading, setIsLoading] = useState(false);
  // const [homeScreenData, setHomeScreenData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  // const slideLength = get(homeScreenData,"length",1);
  const slideLength = get(homedata.data,"banner.length",1);

  const [direction, setDirection] = useState("")
  const [translateValue, setTranslateValue] = useState("")

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
    // getHomeScreen();
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

//   const getHomeScreen = async (values) => {
//     setIsLoading(true);
//     try {
//         const { data } = await axios.get(`/user/get_homeScreen`);
//         setHomeScreenData(get(data,"data.banner",""));
//         setIsLoading(false);
//     } catch (error) {
//         setIsLoading(false);
//         if (error?.response?.data?.errors) {
//             toast.error(`${error.response.data.errors[0].msg}`, {
//               position: toast.POSITION.TOP_RIGHT,
//             });
//         } else {
//             toast.error(`${error?.response?.data?.message}`, {
//               position: toast.POSITION.TOP_RIGHT,
//             });
//         }
//     }
// };

  return (
    <>
      <div className="slider">
        <ArrowButton className="prev">
          <img src={ArrowLeft} onClick={prevSlide}/>
        </ArrowButton>
        <ArrowButton className="next">
          <img src={ArrowRight} onClick={nextSlide}/>
        </ArrowButton>
        

        <div className="contentSlider" style={{display :"flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end"}}
        // onTouchStart={console.log("touchStatrt")}
        // onTouchEnd={console.log("tpuchend")}
        onTouchStart={(e) => {
          setDirection(e.touches[0].clientX)
          // console.log(e)
        }}
        onTouchMove={(e) => {
          // console.log(e);
          let movedChange = (direction - e.changedTouches[0].clientX);
          let percentageChange = 100*movedChange/direction;
          // let clientXEnd = e.changedTouches[0].clientX;
          // if(clientXEnd < direction) {
          //   console.log("swipes right")
          //   setTranslateValue(+percentageChange);
          // } else if(clientXEnd > direction) {
          //   console.log("swipes left")
          //   setTranslateValue(-percentageChange);
          // } else {

          // }
          // console.log(direction);
          // console.log(movedChange);
          setTranslateValue(-(percentageChange));
          // console.log(percentageChange);
          // console.log(-(percentageChange));
        }}
        onTouchEnd={(e) => {
          // console.log(e);
          let clientXEnd = e.changedTouches[0].clientX;
          if(clientXEnd < direction) {
            // console.log("swipes right")
            nextSlide();
          }
          if(clientXEnd > direction) {
            // console.log("swipes left")
            prevSlide();
          }
          setTranslateValue("")
        }}
        >
          
          <DotsRow>
            {/* {homeScreenData && homeScreenData.map((item,index) => ( */}
            {homedata?.data?.banner &&homedata?.data?.banner.map((item,index) => (

              <DotsButton
                onClick={() => {
                  setCurrentSlide(index);
                }}
                isActive={index===currentSlide ? true : false}
                key={index}
              />
            ))}
          </DotsRow>
          </div>
        <div style={{ zIndex: "-1" }}>
          {/* {homeScreenData && homeScreenData.map((slide, index) => { */}
          {homedata?.data?.banner && homedata?.data?.banner.map((slide, index) => {

            return (
              <SlideImage
                isCurrentSlide={index === currentSlide ? true : false}
                className={index === currentSlide ? "slide current" : "slide"}
                translateValue={translateValue}
                key={index}
              >
                {index === currentSlide && (
                  <>
                  {(!userToken && !userData) ? (
                    <>
                      <JoinNowButton
                        onClick={() => {
                          navigate(`/signup`);
                        }}
                      >
                        Join Now
                      </JoinNowButton>
                    </>
                  ) : "" }
                  <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    <img src={slide.image} alt="slide" className="image" />
                    
                  </div>
                  </>
                )}
              </SlideImage>
            );
          })}
        </div>
      </div>
      {isLoading && <Overlay />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
