import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import films from './films.json'
import { Card } from './Card/Card';
import { Button, Container } from 'react-bootstrap';
import {Header} from './Header/Header'
import { Footer } from './Footer/Footer';


export function Films() {
//   const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    
    {films.map(film => <Card  title={film.title } image={film.image} rating={film.rating} year={film.year} alt={film.title}/>)}

    <Footer/>
    </>
  )
}