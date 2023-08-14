import React , {useState}from "react";
export default function Counter (){
    const [count, setCount] = useState(0);
    return (
        <div className=" p-5 bg-green-50 text-black text-3xl font-bc">
            <p>{`conunt is ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}