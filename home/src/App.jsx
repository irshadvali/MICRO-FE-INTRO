import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header></Header>
    <div>This is my home paget</div>
    <Counter></Counter>
    <Footer></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));