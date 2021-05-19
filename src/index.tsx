import React from "react"
import ReactDOM from "react-dom"
import App from "./css-grid/App"
// import HomeManager from "./hook-typescript/HomeManager"
import "./index.css"
// import App from "./UseReducer"
// import {App} from './UseContext';
// import { App } from './UseCallback'
// import {App} from './UseRef';
// import  HomeManager  from './tweak-hooks/HomeManager'
ReactDOM.render(
	<React.StrictMode>
		{/* <HomeManager /> */}
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
