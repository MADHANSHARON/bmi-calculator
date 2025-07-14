import { useState } from 'react'
import './App.css'

function App() {
 const [height,setHeight]=useState("");
 const [weight,setWeight]=useState("");
 const [bmi,setBmi]=useState(null);
 const [bmistatus,setBmistatus]=useState("");
 const [error,setError]=useState("");

 const claculateBmi =()=>{
  const digitweight=/^\d+$/.test(weight);
  const digitHeight=/^\d+$/.test(height);
  if(digitHeight && digitweight){
    const heightinmeters=height/100;
    const bmivalue=weight/(heightinmeters*heightinmeters);
    setBmi(bmivalue.toFixed(2))
    if(bmivalue <18.5){
      setBmistatus("underweight");
    }
    else if(bmivalue >=18.5 && bmivalue<=24.9){
      setBmistatus("Normal");
    }
    else if(bmivalue>=25 && bmivalue<=29.9){
      setBmistatus("Overweight");
    }
    else{
      setBmistatus("Obese");
    }
    setError("");
  }
  else{
    setBmi(null);
    setBmistatus("");
    setError("Please enter valid numeric values for weight and height.")
  }
 };

function clear(){
  setHeight("");
  setWeight("");
  setBmistatus("");
  setBmi(null);
  setError("");
}

  return (
    <>
      <div className='bmi-calculator'>
       <div className="box"></div>
       <div className="data">
        <h1>BMI Calculator</h1>
        <p className='error-message'>{error}</p>
        <div className="input-container">
          <label htmlFor="height">Height (cm):</label>
          <input type="text" id='height' value={height} onChange={(e) =>{setHeight(e.target.value)}}/>
        </div>
        <div className="input-container">
          <label htmlFor="weight">weight (kg):</label>
          <input type="text" id='weight' value={weight } onChange={(e) =>{setWeight(e.target.value)}}/>
        </div>
        <div className="buttons">
        <button className='button1' onClick={claculateBmi}>calculate BMI</button>
        <button onClick={clear} className='clear-button'>Clear</button>
        </div>
        {bmi!==null && <div className="result">
          <p>Your BMI is : {bmi}</p>
          <p>Status : {bmistatus}</p>
        </div>}
       </div>
      </div>
      
    </>
  )
}

export default App
