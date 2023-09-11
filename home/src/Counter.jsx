import React , {useState}from "react";
export default function Counter ({titleOne='INC', titleTwo='DEC', chValue}){
    const [count, setCount] = useState(0);

  const myInc = ()=>{
      setCount(count + 1);
      chValue && chValue(count + 1)
  }  
  const myDec = ()=>{
    setCount(count - 1);
    chValue && chValue(count - 1)
}
    return (
        <div className=" p-5 bg-green-50 text-black text-3xl font-bc">
            <p>{`conunt is ${count}`}</p>
            <div>
            <button onClick={() => myInc()}>{titleOne}</button>
            </div>
            <div>
            <button onClick={() => myDec()}>{titleTwo}</button>
            </div>
        </div>
    )
}