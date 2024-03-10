import react, { useEffect, useState } from "react";
import "./style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ordericon from "../../assets/images/img/order.png";
import img from "../../assets/images/img/img.png";
import axios from "../../axios";
import Overlay from "../Overlay";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";

const Dilivered = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();
  const order = async () => {
    try {
      const data = await axios.get("/api/my-orders/COMPLETED?page=0&limit=10");
      setOrderList(data);
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

  const filterdata = async (selectedValue) => {
    setIsLoading(true);
    console.log(`Selected value: ${selectedValue}`);
    var filterType = "";

    if (selectedValue == 4) {
      filterType = 4;
    } else if (selectedValue == 5) {
      filterType = 5;
    } else if (selectedValue == 6) {
      filterType = 5;
    }

    try {
      const data = await axios.get(
        `api/user-order-filter?filterType=${filterType}&orderType=COMPLETED`
      );
      console.log(data);
      setOrderList(data?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
    order();
  }, []);

  const allorder = orderList?.data?.data;

  console.log(orderList);
  return (
    <>
      <div className="orderheads container">
        <div className="heading">
          <h2>Order History</h2>
        </div>
        <div className="statusbtn text-center my-3 w-fit bg-none">
          <button className="" onClick={() => navigate("/ongoing-order")}>
            Ongoing
          </button>
          <button
            className="mx-2 active"
            onClick={() => navigate("/completed-order")}
          >
            Completed
          </button>
          <button onClick={() => navigate("/cancelled-order")}>
            Cancelled
          </button>
        </div>
      </div>
      <section className="orderhistory">
        <div className="container">
          <div className="text-end dropdowns">
            <select
              name=""
              id=""
              onChange={(event) => filterdata(event.target.value)}
            >
              <option value="5">last 3 months</option>
              <option value="6">last 6 months</option>
              <option value="4">last 1 year</option>
            </select>
          </div>
          <div className="orderlist">
            {orderList?.data?.data != null ? (
              <>
                {allorder?.map((item, index) => {
                  if (item?.orderStatus?.delivered?.status === true) {
                    return (
                      <>
                        <div className="order">
                          <div className="orderhead">
                            <div className="d-flex align-items-center">
                              <img src={ordericon} alt="img" />
                              <h6 className="ps-3">
                                Order No: #
                                {String(item?.orderIncrement).padStart(3, "0")}
                              </h6>
                            </div>
                            <div>
                              <h6 className="dilivery-status">
                                Estimated Delivery on Sun, 10 Dec
                              </h6>
                            </div>
                          </div>
                          <div className="hr"></div>
                          <div className="orderbody">
                            <div className="row justify-content-between">
                              <div className="col-md-6">
                                <div className="d-flex">
                                  <div>
                                    <img src={img} alt="" />
                                  </div>
                                  <div className="ps-3">
                                    <h6>{item?.product?.name}</h6>
                                    <h5>${item?.totalAmount}</h5>
                                  </div>
                                </div>
                                <Time item={item} />
                              </div>
                              <div className="col-md-6 leftside">
                                <div>
                                  <div className="d-flex">
                                    <Locationicon />
                                    <h6 className="ps-2">Delivery Address :</h6>
                                  </div>
                                  <div>
                                    <p>
                                      {item?.shippingDetails?.streetAddress}
                                      ,&nbsp;
                                    </p>
                                    <p>
                                      {item?.shippingDetails?.apartment},&nbsp;
                                      {item?.shippingDetails?.city},&nbsp;
                                      {item?.shippingDetails?.state}
                                    </p>

                                    <button
                                      className="btn1 mt-2"
                                      onClick={() =>
                                        navigate(`/order-details/${item._id}`)
                                      }
                                    >
                                      View Details
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </>
            ) : (
              <>
                <p className="text-center emptyorder">
                  There is not any order at this time
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      {isLoading && <Overlay />}
    </>
  );
};

export default Dilivered;

const Locationicon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
      >
        <path
          d="M17.4545 9.42857C17.4545 7.38262 16.627 5.42046 15.154 3.97375C13.681 2.52704 11.6832 1.71429 9.6 1.71429C7.51685 1.71429 5.51901 2.52704 4.046 3.97375C2.57298 5.42046 1.74545 7.38262 1.74545 9.42857C1.74545 12.5931 4.32349 16.7177 9.6 21.6583C14.8765 16.7177 17.4545 12.5931 17.4545 9.42857ZM9.6 24C3.19942 18.2863 0 13.428 0 9.42857C0 6.92796 1.01143 4.52976 2.81178 2.76156C4.61212 0.993365 7.05392 0 9.6 0C12.1461 0 14.5879 0.993365 16.3882 2.76156C18.1886 4.52976 19.2 6.92796 19.2 9.42857C19.2 13.428 16.0006 18.2863 9.6 24Z"
          fill="#00080E"
        />
        <path
          d="M9.59866 11.3797C10.2534 11.3797 10.8813 11.1197 11.3442 10.6567C11.8072 10.1938 12.0672 9.56587 12.0672 8.91116C12.0672 8.25646 11.8072 7.62856 11.3442 7.16562C10.8813 6.70267 10.2534 6.44259 9.59866 6.44259C8.94396 6.44259 8.31606 6.70267 7.85312 7.16562C7.39017 7.62856 7.13009 8.25646 7.13009 8.91116C7.13009 9.56587 7.39017 10.1938 7.85312 10.6567C8.31606 11.1197 8.94396 11.3797 9.59866 11.3797ZM9.59866 13.0254C8.50748 13.0254 7.461 12.592 6.68942 11.8204C5.91784 11.0488 5.48438 10.0023 5.48438 8.91116C5.48438 7.81998 5.91784 6.7735 6.68942 6.00192C7.461 5.23034 8.50748 4.79688 9.59866 4.79688C10.6898 4.79688 11.7363 5.23034 12.5079 6.00192C13.2795 6.7735 13.7129 7.81998 13.7129 8.91116C13.7129 10.0023 13.2795 11.0488 12.5079 11.8204C11.7363 12.592 10.6898 13.0254 9.59866 13.0254Z"
          fill="#00080E"
        />
      </svg>
    </>
  );
};

const Time = (item) => {
  const dateString = item?.item?.orderStatus?.orderPlaced?.date;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",

    localeMatcher: "best fit",
    hour12: true,
    weekday: "long",
  };
  const formattedDate = date.toLocaleString("en-IN", options);

  return (
    <>
      <p className="pt-3">
        Order Placed on &nbsp;
        {formattedDate}
      </p>
    </>
  );
};

const diliveryTime = (item) => {
  const dateString = item?.item?.orderStatus?.orderPlaced?.date;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",

    localeMatcher: "best fit",
    hour12: true,
    weekday: "long",
  };
  const formattedDate = date.toLocaleString("en-IN", options);

  return (
    <>
      <p className="pt-3">
        Order Placed on &nbsp;
        {formattedDate}
      </p>
    </>
  );
};

const CountdownTimer = (item) => {
  const orderDate = new Date(item?.item?.orderStatus?.orderPlaced?.date);
  const adjustedDate = new Date(orderDate.getTime() + 24 * 60 * 60 * 1000);

  const [timeRemaining, setTimeRemaining] = useState(adjustedDate - new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const newTimeRemaining = adjustedDate - currentTime;
      if (newTimeRemaining <= 0) {
        clearInterval(intervalId);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(newTimeRemaining);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [adjustedDate]);

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      {timeRemaining > 0 && (
        <h6 className="d-flex">
          Cancel {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
          <p>*(You can cancel your order within 24 hrs only)</p>
        </h6>
      )}
    </div>
  );
};
