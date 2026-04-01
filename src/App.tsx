import { useState} from 'react'
import './App.css'
import MainComponent from "./components/MainComponent.tsx";

function App() {
  const questions: {id: number, question: string, options: string[]}  = [
    {id: 1, question: 'Сколько будет 2 + 3?', correctAnswer: 6, options: [3, 4, 5, 6]},
    {id: 2, question: 'Сколько будет 10 * 6?', correctAnswer: 60, options: [50, 60, 70, 80]},
    {id: 3, question: 'Сколько будет 100 - 30?', correctAnswer: 70, options: [60, 70, 80, 90]}
  ]


  return (
      <MainComponent />
  )
}

export default App;