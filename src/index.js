import React from "react"
import  ReactDOM  from "react-dom"
import App from "./App";
import {Provider} from "react-redux"
import configureStore from "./container/redux/store"
ReactDOM.render(
  // <React.StrictMode>
    <Provider  store ={configureStore}>
    <App/>
    </Provider>
  // </React.StrictMode>
  ,
  document.getElementById("root")
)