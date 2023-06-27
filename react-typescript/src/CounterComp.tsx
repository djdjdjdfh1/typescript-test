import React, { Component, useState } from 'react'

interface CounterProps {
    startNumber: number;
}



const data = [
    {id:"id", text: "text"},
    {id: 1, text: "one"},
    {id: 2, text: "two"}
]
const CounterComp: React.FC<CounterProps> = (props) => {
    const [propsNum, setPropsNum] = useState(props.startNumber);
    
    return (
        <div>
            <h1>Counter 컴퍼넌트</h1>
            <p>props 값으로 전달된 처음 값 : {props.startNumber}</p>
            <p>props 값을 받아와 값을 수정하는 state 값 : {propsNum}</p>
            <label htmlFor="">수정할 숫자</label>
            <input type="number" onChange={(e)=>{setPropsNum(Number(e.target.value))}} />
            <hr />
            {data.map((d)=>(
                <li>{d.id} : {d.text}</li>
            ))}
        </div>
    )
}

export default CounterComp;