import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import axios from "../axios";
import { toast } from "react-toastify";
import { ResendOtpText } from "../pages/LoginPage/LoginElements";
import Overlay from "./Overlay";
const CountdownTimer = ({ totalSec, otpData }) => {
  console.log("email is ", otpData?.email);
  const countRef = useRef("");
  const [restart, setRestart] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [timee, setTime] = useState(Date.now() + totalSec);
  // console.log(countRef);
  const resendVerificationCode = (e, apiii) => {
    e.preventDefault();
    resendOTP();
    setTime(Date.now() + totalSec);
    // apiii.start();
  };

  const renderer = ({ hours, minutes, seconds, completed, api }) => {
    if (completed) {
      // console.log(api);
      return (
        <div>
          <ResendOtpText onClick={(e) => resendVerificationCode(e, api)}>
            Resend OTP
          </ResendOtpText>
        </div>
      );
    } else {
      return (
        <ResendOtpText>
          Resend in&nbsp;
          <span>{minutes > 9 ? minutes : `0${minutes}`}</span>
          <span>{" : "}</span>
          <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
        </ResendOtpText>
      );
    }
  };

  const resendOTP = () => {
    let resData = {
      email: otpData.email,
    };
    setIsLoading(true);

    axios
      .post("/api/send-otp", resData)
      .then((res) => {
        toast.success(`${res.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setIsLoading(false);
      })

      .catch((error) => {
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
      });
  };

  useEffect(() => {
    if (restart) {
      countRef?.current?.start();
    }
  }, [restart, timee]);

  return (
    <>
      <Countdown
        date={timee}
        renderer={renderer}
        autoStart={false}
        ref={countRef}
      ></Countdown>
      {isLoading && <Overlay />}
    </>
  );
};

export default CountdownTimer;
