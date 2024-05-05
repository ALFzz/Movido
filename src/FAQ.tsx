import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Card } from './Card/Card';
import faq from './faq.json';
import {Header} from './Header/Header'
import { Footer } from './Footer/Footer';
import { Answer } from './Answer/Answer';


export function FAQ() {
//   const [count, setCount] = useState(0)

  return (
    <>
    <Header/>     
    
    {faq.map(faq => <Answer question={faq.question} answer={faq.answer}  />)}

    

    <Footer/>
    </>
  )
}