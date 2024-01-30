import React from "react";
import "./script.js"
const Card = ()=>{
    return(
        <div className="card">
<h1 className="heading">INTREST CALCULATOR</h1>
            <div className="input-container">
                
            <label htmlFor="p">Principle :</label>
            <input type="text" id = "p" className="principle input " placeholder="Enter the principle" />
            </div>
            <div className="input-container">

            <label htmlFor="t">Time :</label>
            <input type="text" id = "t" className="time input " placeholder="Enter the time period"/>
            </div>
            <div className="input-container">

            <label htmlFor="r">Rate :</label>
            <input type="text" id = "r" className="rate input" placeholder="Enter the rate of intrest"/>
            </div>
            <button type="submit" className="calculate">Calculate</button>
            <div className="Intrest"></div>
        </div>
    )
}
const App = ()=>{
    return(
        <div className="app">
            <Card/>
        </div>
    )
}
export default App;