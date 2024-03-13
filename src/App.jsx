import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <header className='header__container'>
        <div className='header__content'>
          <h1>Sinergy</h1>
          <div className="card">
            <p className='header__subtitle'>
              A minimal, dark blue theme for VS Code
            </p>
            <div className='header__image'>
              <img href="https://github.com/jefersonqui/ExtensionVscode/blob/main/public/assets/imgext.jpg" alt="header image" />

            </div>

          </div>
          <p className="read__the-docs">
            <a src="https://marketplace.visualstudio.com/items?itemName=jefersonquiguantar.sinergy" target='_blank'>VS Code</a>
          </p>
        </div >
      </header>
      <section className='section__container'>
        <div >
          <img src="https://github.com/jefersonqui/ExtensionVscode/blob/main/public/assets/logo2.png" alt="logo" />
        </div>
        <p>Made by Jeferson Quiguantar</p>
      </section>
    </>
  )
}

export default App
