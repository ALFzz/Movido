import { Button } from 'react-bootstrap'
import { Footer } from '../../Footer/Footer'
import { Header } from '../../Header/Header'
import './FilmPoster.scss'
import { Heart } from '../Heart/Heart'

export const FilmPoster = () => {
    return(
        <>
            

            <div className=' film-cont'>

                <img className='film-big-image position-absolute start-0' src="/public/men.png" alt="" />
                <div className='film-blacker_blur'></div>
                <div>
                    <h1 className='film-title'>Люди в чёрном</h1>
                    <Button className='film-btn'>Смотреть</Button>
                    <div className='film-pos'><Heart/></div>
                    

                    <span>
                        <p className='film-rate'>9.1</p>
                        <p className='film-year'>1997</p>
                    </span>

                    <h3 className='film-genres'>Комедия, боевик</h3>

                    <h3 className='film-description'>Фантастический боевик
                    о секретной организации, защищающей Землю от пришельцев
                    в обличии обычных людей.</h3>
                    
                </div>


                <div className='film-line'></div>

               
                
            </div>

            

        </>
    )
}