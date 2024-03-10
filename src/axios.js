import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./constants/Statics";

// import { compose } from "redux";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: API_URL,
});

//customer and admin secure
// instance.defaults.headers.common["language"] = window.localStorage.getItem("rcml-lang") || "en";
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
if (localStorage.access_token) {
  const JWT_token = localStorage.access_token;
  instance.defaults.headers.common["access_token"] = JWT_token;
}

instance.interceptors.request.use(async (config) => {
  const JWT_token = localStorage.access_token;

  config.headers.common["Authorization"] = "Bearer" + " " + JWT_token;

  return config;
});
console.log(instance.interceptors, "instance");

instance.interceptors.request.use(null, (error) => {
  if (error.response.status == 401) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("UserDataEverguard");
    window.location.href = "/";
  }
  return Promise.reject(error);
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },

  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("UserDataEverguard");
      localStorage.removeItem("access_token");
      setTimeout(() => {
        window.location.pathname = "/login";
      }, 1500);
    }
    return Promise.reject(error);
  }
);

export default instance;
