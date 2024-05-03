import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Films } from './Films';
import { Home } from './Home';
import { Poster } from './Poster/Poster';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <Films/> */}
    </>
  )
}

export default App
