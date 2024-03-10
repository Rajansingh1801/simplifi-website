import React from "react";
import "./order.css";
import free from "../../assets/images/plan/free.png";
import cup from "../../assets/images/plan/cup.png";
import cup2 from "../../assets/images/plan/cup2.png";
import girl from "../../assets/images/plan/girl.png";
import money from "../../assets/images/plan/money.png";
import plus from "../../assets/images/plan/plus.png";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import Overlay from "../Overlay";

const Ordernow = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [list, setList] = useState();
  const plan = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("/api/get-membership");
      setList(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
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
  useEffect(() => {
    plan();
  }, []);
  const planlist = list?.data?.data;
  const token = localStorage.getItem("access_token");
  const handleclick = (item) => {
    if (token != null) {
      navigate(`/shop-payment/${item.id}`, {
        state: item,
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <section className="plan">
        <div>
          <div className="text-center">
            <h2>Order Now</h2>
            <div className="d-sm-flex text-center justify-content-center subhead">
              <div className="d-flex align-items-center justify-content-center">
                <img src={free} alt="" />
                <p className="ps-sm-2 ps-1">Free Shipping.</p>
              </div>
              <div className="mx-4"></div>
              <div className="d-flex align-items-center justify-content-center">
                <img src={money} alt="" />
                <p className="ps-sm-2 ps-1"> Money Back Guarantee.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              {planlist?.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="card">
                      <div
                        className={
                          item.name !== "MONTH + TELEHEALTH"
                            ? "cardCont"
                            : "cardCont cardCont2"
                        }
                      >
                        <div>
                          <div className="text-center">
                            <img src={item.icon} alt="" />
                          </div>
                          <h4
                            className={
                              item.name !== "MONTH + TELEHEALTH"
                                ? "simpletext mt-4"
                                : "simpletext gredientText mt-4"
                            }
                          >
                            {item?.name}
                          </h4>
                        </div>
                      </div>
                      <div className="detail">
                        <div>
                          {item.featuresPack.map((Element) => (
                            <>
                              <p key={Element}>&#10003; &nbsp; {Element}</p>
                            </>
                          ))}
                        </div>
                      </div>
                      <div className="rate text-center mt-auto">
                        <h3 className="textgr">
                          <span className="cross">
                            Just ${item.price}/
                            <span className="small">month</span>
                          </span>
                          &nbsp;&nbsp; ${item.discountPrice}/
                          <span className="small">month</span>
                        </h3>
                        <div className="d-flex justify-content-center mt-4">
                          <button
                            className="button1"
                            onClick={() => {
                              handleclick(item);
                            }}
                          >
                            Purchase Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {isLoading && <Overlay />}
    </>
  );
};

export default Ordernow;
