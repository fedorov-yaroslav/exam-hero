import { useState } from 'react'
import './App.css'
function App() {
  const [number, setNumber] = useState(0)

  const [interval, setInterval] = useState(1)

  const [historyRecords, setHistoryRecords] = useState([])

  const minus = () => {
    if (number - interval >= 0){
      const current = number;
      setNumber(prev => prev - interval);
      const message = `${current} - ${interval} = ${Number(current) - Number(interval)}`;
      setHistoryRecords(prev => [...prev, message])
    }
  }

  const plus = () => {
    const current = number;
    setNumber(prev => Number(prev) + Number(interval));
    const message = `${current} + ${interval} = ${Number(current) + Number(interval)}`
    setHistoryRecords(prev => [...prev, message])
  }

  const clearHistory = () => {
    setHistoryRecords([]);
  }

  return (
      <article>
        <p className= 'light-grey'>Минимальное значение: 0</p>
        <div className = 'container'>
          <p className=' main-number'>{number}</p>
          <button onClick = {plus}>+{interval}</button>
          <button onClick = {minus}>-{interval}</button>
          <button onClick = {() => setNumber(0)}>Сброс</button>
          <input type="number" placeholder = 'Шаг изменения' value = {interval} onChange = {(e) => setInterval(e.target.value)}/>
        </div>
        <p className = 'light-grey'>История изменений: </p>
        <button className = 'clear-button' onClick={clearHistory}>Очистить журнал</button>
        <div>
          {historyRecords
              .reverse()
              .slice(0, 5)
              .map(record=> (<p className='light-grey small'>{record}</p>))}
        </div>
      </article>
  )
}

export default App