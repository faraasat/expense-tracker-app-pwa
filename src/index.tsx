import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { ExpenseContextProvider } from "./Data/expense.context";

ReactDOM.render(
  <React.StrictMode>
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
reportWebVitals();
