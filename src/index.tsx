import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { ExpenseContextProvider } from "./Data/expense.context";
import { initNotifications } from "./Services/firebase.service";

const loader = document.querySelector(".loader");
const showLoader = () => loader?.classList.remove("loader--hide");
const hideLoader = () => loader?.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <ExpenseContextProvider>
      <App hideLoader={hideLoader} showLoader={showLoader} />
    </ExpenseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

setTimeout(() => {
  initNotifications();
}, 5000);
serviceWorkerRegistration.register();
reportWebVitals();
