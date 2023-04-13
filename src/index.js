import React from "react";
import "./app/app.css";
import "../src/boostraps/css/style.css";
import "../src/boostraps/lib/animate/animate.min.css";
import "../src/boostraps/lib/owlcarousel/assets/owl.carousel.min.css";
import App from "./app/App.js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store.js";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const option = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...option}>
      <App />
    </AlertProvider>
  </Provider>
);
