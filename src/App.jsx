import { useState } from "react";
import { app } from "./data";
import './App.css'


function App() {
  const [index, setIndex] = useState(0)
  const [change, setChange] = useState(false)

  let question = app[index]
  let reponse = question.reponse


  function handleClick(){
    setTimeout(()=>{
      setIndex((index+1) % app.length)
    })
  }
  
  function handleChange(rep){
    if(rep === reponse){
      setChange(true)
    }
  }
  
  return (
    <>
      <div className="container">
        <h1>My quiz App</h1>
        <div>
          <h2>Question: {question.question}</h2>
        </div>
        <section>
          {question.reponses.map((rep, ind) => (
            <div key={ind} >
              <input type="radio" id={`response-${ind}`} name="question" onChange={()=>{handleChange(rep)}} />
              <label htmlFor={`response-${ind}`} color={change ? 'green' : 'red'}>{rep}</label>
            </div>
          ))}
        </section>
        <button onClick={handleClick}>Repondre</button>
      </div>
    </>
  )
}




export default App
