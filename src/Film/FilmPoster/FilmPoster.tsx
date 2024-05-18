import { Button } from 'react-bootstrap'
import { Footer } from '../../Footer/Footer'
import { Header } from '../../Header/Header'
import './FilmPoster.scss'
import { Heart } from '../Heart/Heart'

export const FilmPoster = () => {

    const film = 
    {
        id: 1,
        title: 'Люди в чёрном',
        rating: 9.1,
        year: 1997,
        genres: 'Комедия, боевик',
        img_page: '/public/men.png',
        small_description: 'Фантастический боевик о секретной организации, защищающей Землю от пришельцев в обличии обычных людей.'
    }
    return(
        <>
            

            <div className=' film-cont'>
                
                <img className='film-big-image position-absolute start-0' src={film.img_page} alt="" />
                <div className='film-blacker_blur'></div>
                <div>
                    <h1 className='film-title'>{film.title}</h1>
                    <Button className='film-btn'>Смотреть</Button>
                    <div className='film-pos'><Heart/></div>
                    

                    <span>
                        <p className='film-rate'>{film.rating}</p>
                        <p className='film-year'>{film.year}</p>
                    </span>

                    <h3 className='film-genres'>{film.genres}</h3>

                    <h3 className='film-description'>{film.small_description}</h3>
                    
                </div>


                <div className='film-line'></div>

               
                
            </div>

            

        </>
    )
}