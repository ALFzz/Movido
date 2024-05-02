import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import films from './films.json'
import { Card } from './Card/Card';
import { Button, Container } from 'react-bootstrap';
import {Header} from './Header/Header'
import { Footer } from './Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <Header/>
    
      
    {films.map(film => <Card src={film.image} alt={film.title}/>)}

    
      
    <Footer/>
    
    
    
      
    </>
  )
}

export default App
