import React, { Component } from "react";
import "../src/reset.css";
import "./App.css";
import Home from "./Components/Home/Home";

export default class App extends Component {
	render() {
		return (
			<div className="backGround ">
				<Home />
			</div>
		);
	}
}