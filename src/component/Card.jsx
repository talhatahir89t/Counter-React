import React, { useState } from "react";
import Count from "./Count";
import Countbutton from "./Couuntbutton";
import Reset from "./Reset";
import Title from "./Title";

export default function Card() {
    const [count, setCount] = useState(0);
    return (                
        <div className="card">
            <Title />
            <Count count={count} setCount={setCount} />
            <Reset setCount={setCount}/>
            <Countbutton count={count} setCount={setCount} />
        </div>
    )
}
