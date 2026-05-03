import './App.css'
function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const password = formData.get('password')
    const repeatPassword = formData.get('repeatPassword')

    if (password !== repeatPassword) {
      alert('Пароли не совпадают')
      return
    }

    console.log('Данные формы:', Object.fromEntries(formData))
    alert('Форма отправлена!')
    e.target.reset()
  }

  return (
      <>
        <h2>
          Регистрация
        </h2>
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span className='form-text'>Имя <span className='red'>*</span></span>
            <input type='text' placeholder='Имя' id='name' name='name' required />
          </label>
          <label htmlFor="surname">
            <span className='form-text'>Фамилия <span className='red'>*</span></span>
            <input type="text" placeholder='Фамилия' id='surname' name='surname' required />
          </label>
          <label htmlFor="city">
            <span className='form-text'>Город <span className='red'>*</span></span>
            <input type="text" placeholder='Город' id='city' name='city' required />
          </label>
          <br/>
          <label htmlFor="email">
            <span className='form-text'>Эл. почта <span className='red'>*</span></span>
            <input type="email" placeholder='Эл. почта' id='email' name='email' required />
          </label>
          <label htmlFor="password">
            <span className='form-text'>Пароль <span className='red'>*</span></span>
            <input type="password" placeholder='Введите пароль' id='password' name='password' required />
          </label>
          <label htmlFor="repeatPassword">
            <span className='form-text'>Подтвердите пароль <span className='red'>*</span></span>
            <input type="password" placeholder='Подтвердите пароль' id='repeatPassword' name='repeatPassword' required />
          </label>
          <p className='small'><span className='red'>*</span> Обязательное поле</p>
          <button type='submit' className='submit-button'>Зарегистрироваться</button>
        </form>
      </>
  )
}

export default App