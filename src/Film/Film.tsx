import { Button } from 'react-bootstrap'
import { Footer } from '../Footer/Footer'
import '../App.css'
import { Header } from '../Header/Header'
import { FilmPoster } from './FilmPoster/FilmPoster'
import { FilmInfo } from './FilmInfo/FilmInfo'

export function Film () {
    return(
        <>
            <Header/>

            
            <FilmPoster/>
            <FilmInfo/>

            <Footer/>

        </>
    )
}