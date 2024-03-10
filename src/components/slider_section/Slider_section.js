import React, { useEffect, useRef } from "react";
import "./style.css";
import img1 from "../../assets/images/slider/img.png";
import colon from "../../assets/images/slider/colon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Star = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="31"
        viewBox="0 0 34 31"
        fill="none"
        className="mx-1 star"
      >
        <path
          d="M16.1221 0.609788C16.5011 -0.0851534 17.4989 -0.0851552 17.8779 0.609786L22.3802 8.86523C22.524 9.12896 22.7788 9.31406 23.0741 9.36935L32.3167 11.1002C33.0948 11.2459 33.4031 12.1949 32.8593 12.7701L26.3992 19.6031C26.1928 19.8214 26.0955 20.1209 26.1342 20.4188L27.3442 29.7439C27.446 30.5289 26.6388 31.1154 25.9237 30.776L17.4288 26.7436C17.1575 26.6147 16.8425 26.6147 16.5712 26.7436L8.07633 30.776C7.36124 31.1154 6.55396 30.5289 6.65582 29.7439L7.86584 20.4188C7.90449 20.1209 7.80718 19.8214 7.60081 19.6031L1.14069 12.7701C0.596876 12.1949 0.90523 11.2459 1.68328 11.1002L10.9259 9.36935C11.2212 9.31406 11.476 9.12896 11.6198 8.86523L16.1221 0.609788Z"
          fill="#FDC830"
        />
      </svg>
    </>
  );
};

const Slider_section = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="slider-section">
        <div className="container">
          <div className="heading text-center mb-5">
            <h2>What People Are Saying</h2>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur. Lobortis feugiat.
            </p>
          </div>
          <div>
            <Slider {...settings} className="body">
              <div className="slider-cont">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <img src={img1} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <p className="pb-5 position-relative">
                        <img src={colon} alt="" className="colon" />
                        Lorem ipsum dolor sit amet consectetur. Nulla posuere
                        eget nulla feugiat mauris gravida eleifend hendrerit
                        malesuada. Mi faucibus a lectus feugiat eu eget et
                        potenti. At amet quam commodo at in. Sollicitudin
                        adipiscing at egestas neque. In nulla lorem nullam.
                      </p>
                      <h5 className="underline">Vastu Rajpoot</h5>
                      <div className="d-flex mt-3">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-cont">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <img src={img1} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <p className="pb-5 position-relative">
                        <img src={colon} alt="" className="colon" />
                        Lorem ipsum dolor sit amet consectetur. Nulla posuere
                        eget nulla feugiat mauris gravida eleifend hendrerit
                        malesuada. Mi faucibus a lectus feugiat eu eget et
                        potenti. At amet quam commodo at in. Sollicitudin
                        adipiscing at egestas neque. In nulla lorem nullam.
                      </p>
                      <h5 className="underline">Rober Junior</h5>
                      <div className="d-flex mt-3">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-cont">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <img src={img1} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <p className="pb-5 position-relative">
                        <img src={colon} alt="" className="colon" />
                        Lorem ipsum dolor sit amet consectetur. Nulla posuere
                        eget nulla feugiat mauris gravida eleifend hendrerit
                        malesuada. Mi faucibus a lectus feugiat eu eget et
                        potenti. At amet quam commodo at in. Sollicitudin
                        adipiscing at egestas neque. In nulla lorem nullam.
                      </p>
                      <h5 className="underline">Rohit sharma</h5>
                      <div className="d-flex mt-3">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-cont">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div>
                      <img src={img1} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <p className="pb-5 position-relative">
                        <img src={colon} alt="" className="colon" />
                        Lorem ipsum dolor sit amet consectetur. Nulla posuere
                        eget nulla feugiat mauris gravida eleifend hendrerit
                        malesuada. Mi faucibus a lectus feugiat eu eget et
                        potenti. At amet quam commodo at in. Sollicitudin
                        adipiscing at egestas neque. In nulla lorem nullam.
                      </p>
                      <h5 className="underline">virat kohli</h5>
                      <div className="d-flex mt-3">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-cont">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <img src={img1} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <p className="pb-5 position-relative">
                        <img src={colon} alt="" className="colon" />
                        Lorem ipsum dolor sit amet consectetur. Nulla posuere
                        eget nulla feugiat mauris gravida eleifend hendrerit
                        malesuada. Mi faucibus a lectus feugiat eu eget et
                        potenti. At amet quam commodo at in. Sollicitudin
                        adipiscing at egestas neque. In nulla lorem nullam.
                      </p>
                      <h5 className="underline">Ruchin Ravinder</h5>
                      <div className="d-flex mt-3">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider_section;
