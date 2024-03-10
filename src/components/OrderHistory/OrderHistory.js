import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Overlay from "../Overlay";

const OrderHistory = () => {
  const navigate = useNavigate();
  const url = window.location.href;
  const separatedString = url.split("/").pop();

  return (
    <>
      <div className="orderheads container">
        <div className="heading">
          <h2>Order History</h2>
        </div>
        <div className="statusbtn text-center my-3 w-fit bg-none">
          <button className="active" onClick={() => navigate("/ongoing-order")}>
            Ongoing
          </button>
          <button className="mx-2" onClick={() => navigate("/completed-order")}>
            Completed
          </button>
          <button onClick={() => navigate("/cancelled-order")}>
            Cancelled
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
