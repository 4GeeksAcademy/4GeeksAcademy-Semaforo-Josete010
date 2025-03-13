import React, { useState } from "react";





const TrafficLight = () => {
    const [color, setcolor] = useState("");

    return (
        <div className="container" >
            <div className="traffic-light">
                <div onClick={() => setcolor("red")} className={`light red ${color === 'red' ? 'light-red-active' : ''}`}></div>
                <div onClick={() => setcolor("yellow")} className={`light yellow ${color === 'yellow' ? 'light-yellow-active' : ''}`}></div >
                <div onClick={() => setcolor("green")} className={`light green ${color === 'green' ? 'light-green-active' : ''}`}></div >
            </div>
        </div >
    );
};


export default TrafficLight;