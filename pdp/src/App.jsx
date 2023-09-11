import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import Counter from "home/Counter";
const App = () => {
const [current, setCurrent]=useState(0)
  const chValue = (data)=>{
    setCurrent(data)
}  

  return(<div style={{margin: '10px'}}>
  <Header></Header>
  <div>This is my PDP paget </div>
  <div>{current}</div>
  <Counter titleOne={'Increment'} chValue={chValue} titleTwo={'Decrement'}></Counter>
  
  <Footer></Footer>
</div>);
  
};
ReactDOM.render(<App />, document.getElementById("app"));
