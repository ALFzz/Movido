import { Button } from 'react-bootstrap'
import { Footer } from '../../Footer/Footer'
import { Header } from '../../Header/Header'
import './FilmPoster.scss'

export const FilmPoster = () => {
    return(
        <>
            

            <div className=' cont'>

                <img className='big-image position-absolute start-0' src="/public/men.png" alt="" />
                <div className='blacker_blur'></div>
                <div>
                    <h1 className='film-title'>Люди в чёрном</h1>
                    <Button className='btn'>Смотреть</Button>
                    <span>
                        <p className='rate'>9.1</p>
                        <p className='year'>1997</p>
                    </span>

                    <h3 className='genres'>Комедия, боевик</h3>

                    <h3 className='description'>Фантастический боевик
                    о секретной организации, защищающей Землю от пришельцев
                    в обличии обычных людей.</h3>
                    
                </div>


                <div className='line'></div>


                
            </div>

            

        </>
    )
}