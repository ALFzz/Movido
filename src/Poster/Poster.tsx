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
                <Button  className='mt-3 b btn-dark '>Начните прямо сейчас!</Button>
                <br/>
                <div className='wrap img-slide position-absolute bottom-1 start-0'>
                    <img className='img mt-5' src='/casino.jpg'/>
                    <img className='img mt-5' src='/wolf.jpg'/>
                </div>
              
            </div>
            
        </>
    )
} 