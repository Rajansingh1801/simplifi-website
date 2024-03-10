import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import logo from "../../assets/logo/logo.png";
import location from "../../assets/logo/location.png";
import usericon from "../../assets/logo/usericon.png";
import { Link, useNavigate } from "react-router-dom";
import Notificationimg from "../../assets/icon/notification.png";
import orderimg from "../../assets/icon/order.png";
import settingimg from "../../assets/icon/setting.png";
import logoutimg from "../../assets/icon/logout.png";
import { toast } from "react-toastify";
import Fade from "react-reveal/Fade";

const Header = ({ toggle }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("UserDataEverguard");
  const storedData = localStorage.getItem("UserDataEverguard");
  const parsedData = JSON.parse(storedData);
  // console.log(parsedData);

  let first_name = parsedData?.first_name;
  let last_name = parsedData?.last_name;

  // console.log(first_name.charAt(0), last_name.charAt(0));

  const user = JSON.parse(token);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
      setUserName(user?.first_name + " " + user?.last_name);
    } else {
      setIsAuthenticated(false);
    }
  }, [token, user]);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setVisible(!isScrollingDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const login = () => {
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("UserDataEverguard");
    localStorage.removeItem("email");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const initialBg =
    "linear-gradient(180deg, rgba(0, 0, 0, 0.43) 0%, rgba(0, 0, 0, 0.24) 100%)";
  const finalBg =
    "url(https://everguardimage.s3.amazonaws.com/img/1699427894585.jpg)";

  const [bg, setBg] = useState(initialBg);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setBg(initialBg);
      } else {
        setBg(finalBg);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isContentVisible, setIsContentVisible] = useState(false);
  const buttonRef = useRef(null);
  const toggleVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsContentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <header
        className={visible ? "headerporp" : "header-hidden"}
        style={{ background: bg }}
      >
        <div className="d-flex align-items-center">
          <div className="me-8">
            <img src={logo} alt="img" onClick={toggle} />
          </div>
          <Link to="/" className="text-decoration-none">
            <h3 className="text-white">
              Simpli<span>fi</span>
            </h3>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          {isAuthenticated ? (
            <div
              className="d-flex align-items-center user"
              onClick={toggleVisibility}
              ref={buttonRef}
            >
              <div className="me-4 position-relative">
                <div className="d-flex align-items-center">
                  {parsedData?.profile_image != "" &&
                  parsedData?.profile_image != null ? (
                    <img src={parsedData.profile_image} className="userimg" />
                  ) : (
                    <div className="userimg text-uppercase">
                      {first_name?.charAt(0)} {last_name?.charAt(0)}
                    </div>
                  )}

                  <p className="username mb-0 ps-3 text-white text-capitalize">
                    {userName}
                  </p>
                </div>
                {isContentVisible && (
                  <div className="slidebar">
                    <div>
                      <div className="triangle"></div>
                      <ul>
                        {parsedData?.is_verified !== false && (
                          <li onClick={() => navigate("/notification")}>
                            <img
                              src={Notificationimg}
                              className="sideimg"
                              alt=""
                            />{" "}
                            Notification
                          </li>
                        )}
                        <li onClick={() => navigate("/ongoing-order")}>
                          <img src={orderimg} className="sideimg" alt="" />{" "}
                          Order History
                        </li>

                        {parsedData?.is_verified !== false &&
                          parsedData?.social_account_type !== "Facebook" &&
                          parsedData?.social_account_type !== "Google" && (
                            <li onClick={() => navigate("/ProfileSetting")}>
                              <img
                                src={settingimg}
                                className="sideimg"
                                alt=""
                              />{" "}
                              Profile Settings
                            </li>
                          )}

                        <li onClick={logout}>
                          <img src={logoutimg} className="sideimg" alt="" />{" "}
                          Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div
              className="d-flex align-items-center user"
              onClick={toggleVisibility}
              ref={buttonRef}
            >
              <div className="me-4 position-relative">
                <div className="d-flex align-items-center">
                  <img src={usericon} alt="img" onClick={login} />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
