import { useState } from 'react'

function MainComponent() {
  const options: number[] = [22,24,32,34]

  const [isAnswered, setIsAnswered] = useState<boolean>(false)

  const correctAnswer = 24

  const [choice, setChoice] = useState<number | null>(null)

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  return (
      <>
        <h1>Квиз: математика</h1>
        <div className='container'>
          <p>Сколько будет 3 * 8</p>
          {options.map((option, index) =>
              <button
                  style={{
                    background: isAnswered && choice === correctAnswer && option === correctAnswer
                        ? '#aad7b9'  // если пользователь ответил верно
                        : 'white'    // иначе белый
                  }}
                  className = 'option'
                  disabled={isAnswered}
                  key = {index}
                  onClick = {() => {
                    setIsAnswered(true);
                    setChoice(option);
                    setIsCorrect(option === correctAnswer)
                  }}
              >
                {option}
              </button>
          )}
          {isAnswered && (
              <p
              style = {{color: isCorrect ? 'green' : 'red'}}
              >{isCorrect ? 'Вы правы!' : `Правильный ответ: ${correctAnswer}`}</p>
          )}
        </div>
      </>

  )
}

export default MainComponent