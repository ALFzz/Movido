import { Button } from 'react-bootstrap'
import './Poster.scss'

export const Poster = () => {
    return (
        <>
            
            <div className="block  top-0 start-0">
                <div className='open position-relative pt-5 text-white'>
                    <p >
                        "Откройте дверь в мир кино с фильмотекой Movido!</p>
                    <p >Наслаждайтесь широким выбором фильмов всех жанров
                        - от захватывающих блокбастеров до удостоенных наград 
                        инди-фильмов. С Movido вы получаете не только доступ
                        к великолепному контенту, но и удобство просмотра в 
                        любое время и в любом месте. Погрузитесь в мир кино с Movido уже сегодня!</p>
                
                </div>
                <Button  className='mt-3 btn btn-primary  '>Начните прямо сейчас!</Button>
                <br/>
                <div className='slide'>
                    <div className='wrap img-slide '>
                        <img className='img mt-5' src='/casino.jpg'/>
                        <img className='img mt-5' src='/wolf.jpg'/>
                        <img className='img mt-5' src='/incredibles.jpg'/>
                        <img className='img mt-5' src='/black.jpg'/>
                        <img className='img mt-5' src='/knives out.jpg'/>
                        <img className='img mt-5' src='/wolf.jpg'/>
                        <img className='img mt-5' src='/se7en.jpg'/>
                        <img className='img mt-5' src='/sherlock.jpg'/>
                        <img className='img mt-5' src='/truman.jpg'/>
                        <img className='img mt-5' src='/zodiac.jpg'/>
                        <img className='img mt-5' src='/1+1.jpg'/>
                        <img className='img mt-5' src='/taxi.jpg'/>
                        <img className='img mt-5' src='/casino.jpg'/>
                    </div>
                    <div className='wrap img-slide '>
                        <img className='img mt-5' src='/casino.jpg'/>
                        <img className='img mt-5' src='/wolf.jpg'/>
                        <img className='img mt-5' src='/incredibles.jpg'/>
                        <img className='img mt-5' src='/black.jpg'/>
                        <img className='img mt-5' src='/knives out.jpg'/>
                        <img className='img mt-5' src='/wolf.jpg'/>
                        <img className='img mt-5' src='/se7en.jpg'/>
                        <img className='img mt-5' src='/sherlock.jpg'/>
                        <img className='img mt-5' src='/truman.jpg'/>
                        <img className='img mt-5' src='/zodiac.jpg'/>
                        <img className='img mt-5' src='/1+1.jpg'/>
                        <img className='img mt-5' src='/taxi.jpg'/>
                        <img className='img mt-5' src='/casino.jpg'/>
                    </div>
                </div>
                
              
            </div>
            
        </>
    )
} 