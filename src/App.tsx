import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import films from './films.json'
import { Card } from './Card/Card';
import { Button } from 'react-bootstrap';
import {Header} from './Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <Header/>
    {/* {films.map(film => <Card src={film.image} alt={film.title}/>)} */}
    
    
      
    </>
  )
}

export default App
