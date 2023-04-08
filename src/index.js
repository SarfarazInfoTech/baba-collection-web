import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import "./app/app.css";
import { Provider } from "react-redux";
import store from "./Store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
