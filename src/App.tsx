import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Films } from './Films';
import { Home } from './Home/Home';
import { Poster } from './Home/Poster/Poster';
import { Header } from './Header/Header';
import { Answer } from './Answer/Answer';
import { FAQ } from './FAQ';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}

      <FAQ/>

      {/* <Films/> */}
    </>
  )
}

export default App
