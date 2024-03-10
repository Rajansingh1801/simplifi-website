import React, { useEffect } from "react";
import "./style.css";
import star from "../../assets/images/img/star-fill.svg";
import search from "../../assets/images/img/search.svg";
import img from "../../assets/images/img/userimg.png";
import share from "../../assets/images/img/share.svg";
import like from "../../assets/images/img/like.svg";
import dislike from "../../assets/images/img/dislike.svg";

function Reviews() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="reviews">
        <div className="header">
          <h2>Reviews</h2>
        </div>

        <section className="bodysection py-5">
          <div className="container">
            <div className="text-center">
              <div>
                <div className="d-flex justify-content-center">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <h4>1144 Reviews</h4>
              </div>
            </div>
            <div className="d-flex justify-content-between my-5">
              <div className="field">
                <input type="text" name="" id="" />
                <button>
                  <img src={search} alt="" />
                </button>
              </div>
              <div>
                <button className="button1">Write a review</button>
              </div>
            </div>
            <div className="hr"></div>
            <div className="dropdowns my-5">
              <select name="" id="">
                <option value="">Sort By Date</option>
                <option value="">Last 25 days</option>
                <option value="">Last Month</option>
                <option value="">Last 6 Month</option>
                <option value="">Last 1 Year</option>
              </select>

              <select name="" id="">
                <option value="">Rating</option>
                <option value="">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                <option value="">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
                <option value="">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
                <option value="">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
                <option value="">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
              </select>
            </div>
            <div className="cardsection">
              <div className="my-5">
                <h4>Site Reviews</h4>
                <div className="heading-hr"></div>
              </div>
              <div className="reviewcards">
                <div>
                  <img src={img} alt="" className="userimg" />
                </div>
                <div className="px-3">
                  <div className="d-flex justify-content-between w-100 ">
                    <div>
                      <h3>rajan singh</h3>
                      <div className="d-flex">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                      </div>
                    </div>
                    <div>
                      <p>12-12-2025</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, non.
                    </h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Vel laudantium a fuga sed, maiores dolore dolorem illum!
                      Expedita sed excepturi porro quae vero blanditiis eligendi
                      doloribus, labore totam, tenetur maiores, aliquid dicta
                      fugiat voluptatibus possimus adipisci iste reiciendis
                      voluptates magnam. Reprehenderit quae praesentium
                      officiis. Quas tenetur molestiae amet similique officia?
                    </p>
                  </div>

                  <div className="my-4 d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={share} alt="" className="pe-2" />
                      <p>share</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p>Was This Review Helpful?</p>
                      <img src={like} alt="" className="ps-4 pe-1" />
                      <p>9</p>
                      <img src={dislike} alt="" className="ps-3 pe-1" />0
                    </div>
                  </div>
                </div>
              </div>
              <div className="rehr"></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Reviews;
