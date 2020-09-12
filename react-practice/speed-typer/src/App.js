import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  let time = 20
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(time)
  const [isGameOn, setIsGameOn] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textRef = useRef(null)

  function handleText(e){
    const {value} = e.target
    setText(value)
  }

  useEffect(
    () => { 
      textRef.current.focus()
      if(timeRemaining > 0 && isGameOn){
      setTimeout(() => setTimeRemaining(timeRemaining -1), 1000)
      }else if(timeRemaining === 0){
        endGame()
        console.log("useEffect")
      }
    } , [timeRemaining, isGameOn]
  )

  function startGame(){
    setIsGameOn(true)
    setTimeRemaining(time)
    setText("")
  }

  function endGame(){
    setIsGameOn(false)
    calculateWordCount(text)
  }

  function calculateWordCount(paragraph){
     const words = paragraph.trim().split(" ")
     let wordsFiltered = words.filter(word => word!== " " && word!== "")
     setWordCount(wordsFiltered.length)
     console.log(wordsFiltered.length)
    
  }

  return (
   <div>
     <h1>Speed Typing Game</h1>
     <textarea ref = {textRef} onChange = {handleText} value={text} disabled = {!isGameOn}/>
   <h4>Time Remaining: {timeRemaining}</h4>
     <h4>Number of Words: {wordCount}</h4>
     <button onClick = {startGame} disabled = {isGameOn}>Start</button>
   </div>
  )
} 

export default App;
