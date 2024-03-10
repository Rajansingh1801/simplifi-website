import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import HomescreenContext from "./contextApi/context";
import "./index.css";

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <Router basename="/">
      <HomescreenContext>
        <App />
      </HomescreenContext>
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
