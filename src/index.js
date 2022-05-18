import React from "react";
import ReactDOM from "react-dom/client";
// import Operan from "./ReactDasar/Operan";
// import StateProps from "./ReactDasar/StateProps";
// import App from "./ReactDasar/App";
// import Variabel from "./ReactDasar/Variabel";
// import Map from "./ReactDasar/Map";
// import Lifecycle from './ReactDasar/Lifecycle'


import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Crud/>
  </React.StrictMode>
);
