import React, { useState, useEffect } from 'react'
import axios from "../axios";
import { toast } from "react-toastify";

export const uploadImage = async (file) => {
    var formData = new FormData();
    formData.append("media", file);
    try {
      const { data } = await axios.post("/user/uploadImage", formData);
      console.log(data);
  
      return data;
    } catch (error) {}
  };
  

export const getPaymentLink = async (e) => {
  let { setIsLoading } = e;
  setIsLoading(true);
  try {
      const { data } = await axios.get(`/user/get_payment_link?type=${e.type}&price=${e.price}`);
      setIsLoading(false);
      // window.location.href = data?.data?.returnLink;
      window.open(`${data.data}`,"_self")
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
  
  
export const extractDate = (e) => {
    if(e) {
        let date = new Date(e).toLocaleDateString()
        return date;
    } else {
        return "";
    }
};

export const extractDatee = (e) => {
  const dateName = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
if (e) {
    let date = new Date(e).getDate();
    if(date<10) {
      date = dateName[date-1];
    }
    return `${date}`;
  } else {
    return "";
  }
}
export const extractMonth = (e) => {
  const monthName = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
if (e) {
    let month = new Date(e).getUTCMonth();
    return `${monthName[month]}`;
  } else {
    return "";
  }
}