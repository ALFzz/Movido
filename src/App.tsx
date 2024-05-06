import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Films } from './Films';
import { Home } from './Home';
import { Poster } from './Home/Poster/Poster';
import { Header } from './Header/Header';
import { Answer } from './Answer/Answer';
import { FAQ } from './FAQ';
import { Contacts } from './Contacts/Contacts';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}

      <Contacts/>

      {/* <FAQ/> */}

      {/* <Films/> */}
    </>
  )
}

export default App
