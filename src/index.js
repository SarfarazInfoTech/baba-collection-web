import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.js";
import "./app/app.css";
import { Provider } from "react-redux";
import store from "./Store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
