import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Root";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);