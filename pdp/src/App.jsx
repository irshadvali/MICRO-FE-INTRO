import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import Counter from "home/Counter";
const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header></Header>
    <div>This is my PDP paget</div>
    <Counter></Counter>
    <Footer></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
