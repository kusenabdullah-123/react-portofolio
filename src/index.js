import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.css";
import "./assets/vendors/linericon/style.css";
import "./assets/css/font-awesome.min.css";
import "./assets/vendors/owl-carousel/owl.carousel.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/vendors/nice-select/css/nice-select.css";
import "./assets/css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
