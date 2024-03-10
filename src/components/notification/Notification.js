import React, { useState } from "react";
import "./style.css";
import img from "../../assets/images/img/person.png";
import axios from "../../axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Overlay from "../Overlay";

const Notification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notificatioData, setNotificatioData] = useState();
  const [is_read, setIs_read] = useState(notificatioData?.is_read);
  const handledata = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get("/api/notifications");
      setNotificatioData(data?.data?.data);
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
    handledata();
  }, []);

  console.log(notificatioData);

  return (
    <>
      <section className="notification">
        <div className="heading container">
          <h2 className="text-center pb-3">Notification</h2>
          <p
            className="text-end pb-3 text-blue"
            onClick={() => {
              setIs_read(true);
            }}
          >
            Mark All Read
          </p>
        </div>
        <div className="body  py-5">
          <div className="container d-flex align-items-center">
            <div className="w-100">
              {notificatioData?.map((item, index) => {
                return (
                  <>
                    <div className="d-flex cards">
                      <div className="d-flex align-items-center ">
                        <FormateDate time={item?.createdAt} />
                        <div className="lines"></div>
                        <Dot />
                      </div>
                      <div
                        className={
                          item?.is_read
                            ? "bg-white card-cont d-flex"
                            : "unread card-cont d-flex"
                        }
                      >
                        <div className="w-100 p-3">
                          <div className="d-flex w-100 justify-content-between">
                            <div>
                              <h5 className="bold">{item?.title}</h5>
                              <p className="content">{item?.description}</p>
                            </div>
                            <FormattedTime time={item?.createdAt} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
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

export default Notification;

const Dot = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_167_1977)" />
        <circle cx="11" cy="11" r="5" fill="white" />
        <defs>
          <linearGradient
            id="paint0_linear_167_1977"
            x1="0"
            y1="11"
            x2="22"
            y2="11"
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

const FormateDate = (time) => {
  const dateString = time;
  const date = new Date(dateString?.time);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    localeMatcher: "best fit",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-IN", options);

  return (
    <>
      <p className="date pe-3">{formattedDate}</p>
    </>
  );
};

const FormattedTime = (props) => {
  const { time } = props;

  const isValidDate = (date) => !isNaN(new Date(date).getTime());

  const formattedTime = isValidDate(time)
    ? new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Invalid Date";

  return <p className="time">{formattedTime}</p>;
};
