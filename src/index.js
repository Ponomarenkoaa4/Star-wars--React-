import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import ThemeProvider from "@context/ThemeProvider";
import App from "@containers/App";
import "./styles/index.css";

import store from "@store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
