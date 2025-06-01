import { Button } from 'react-bootstrap'
import './Poster.scss'
import { useNavigate } from 'react-router-dom'
import { CATALOG_ROUTE } from '../../utils/consts'

export const Poster = () => {
    const navigate = useNavigate()
    return (
        <>
            
            <div className="head-block  top-0 start-0">
                <div className='head-open position-relative pt-5 text-white'>
                    <p >
                        "Откройте дверь в мир кино с фильмотекой Movido!</p>
                    <p >Наслаждайтесь широким выбором фильмов всех жанров
                        - от захватывающих блокбастеров до удостоенных наград 
                        инди-фильмов. С Movido вы получаете не только доступ
                        к великолепному контенту, но и удобство просмотра в 
                        любое время и в любом месте. Погрузитесь в мир кино с Movido уже сегодня!</p>
                
                </div>
                <Button  className='mt-3 head-btn   ' onClick={() => navigate(CATALOG_ROUTE)}>Начните прямо сейчас!</Button>
                <br/>
                <div className='head-slide'>
                    <div className='head-wrap head-img-slide '>
                        <img className='head-img mt-5' src='/small/casino.jpg'/>
                        <img className='head-img mt-5' src='/small//wolf.jpg'/>
                        <img className='head-img mt-5' src='/small//incredibles.jpg'/>
                        <img className='head-img mt-5' src='/small//black.jpg'/>
                        <img className='head-img mt-5' src='/small//knives out.jpg'/>
                        <img className='head-img mt-5' src='/small//wolf.jpg'/>
                        <img className='head-img mt-5' src='/small//se7en.jpg'/>
                        <img className='head-img mt-5' src='/small//sherlock.jpg'/>
                        <img className='head-img mt-5' src='/small//truman.jpg'/>
                        <img className='head-img mt-5' src='/small//zodiac.jpg'/>
                        <img className='head-img mt-5' src='/small//1+1.jpg'/>
                        <img className='head-img mt-5' src='/small//taxi.jpg'/>
                        <img className='head-img mt-5' src='/small//roadhouse.jpg'/>
                        <img className='head-img mt-5' src='/small//taxist.jpg'/>
                        <img className='head-img mt-5' src='/small//payne.jpg'/>
                        <img className='head-img mt-5' src='/small//harry.jpg'/>
                        <img className='head-img mt-5' src='/small//fallguy.jpg'/>
                        <img className='head-img mt-5' src='/small//bladerunner.jpg'/>
                        <img className='head-img mt-5' src='/small//challangers.jpg'/>
                        <img className='head-img mt-5' src='/small//goodbad.jpg'/>
                        <img className='head-img mt-5' src='/small//fightclub.jpg'/>
                        <img className='head-img mt-5' src='/small//hangover.jpg'/>
                        <img className='head-img mt-5' src='/small//arthur.jpg'/>
                        <img className='head-img mt-5' src='/small//diamond.jpg'/>
                        <img className='head-img mt-5' src='/small//matrix.jpg'/>
                        <img className='head-img mt-5' src='/small//godfather.jpg'/>
                        <img className='head-img mt-5' src='/small//Brat.jpg'/>










                        

                    </div>
                    <div className='head-wrap head-img-slide '>
                        <img className='head-img mt-5' src='/small/casino.jpg'/>
                        <img className='head-img mt-5' src='/small//wolf.jpg'/>
                        <img className='head-img mt-5' src='/small//incredibles.jpg'/>
                        <img className='head-img mt-5' src='/small//black.jpg'/>
                        <img className='head-img mt-5' src='/small//knives out.jpg'/>
                        <img className='head-img mt-5' src='/small//wolf.jpg'/>
                        <img className='head-img mt-5' src='/small//se7en.jpg'/>
                        <img className='head-img mt-5' src='/small//sherlock.jpg'/>
                        <img className='head-img mt-5' src='/small//truman.jpg'/>
                        <img className='head-img mt-5' src='/small//zodiac.jpg'/>
                        <img className='head-img mt-5' src='/small//1+1.jpg'/>
                        <img className='head-img mt-5' src='/small//taxi.jpg'/>
                        <img className='head-img mt-5' src='/small//roadhouse.jpg'/>
                        <img className='head-img mt-5' src='/small//taxist.jpg'/>
                        <img className='head-img mt-5' src='/small//payne.jpg'/>
                        <img className='head-img mt-5' src='/small//harry.jpg'/>
                        <img className='head-img mt-5' src='/small//fallguy.jpg'/>
                        <img className='head-img mt-5' src='/small//bladerunner.jpg'/>
                        <img className='head-img mt-5' src='/small//challangers.jpg'/>
                        <img className='head-img mt-5' src='/small//goodbad.jpg'/>
                        <img className='head-img mt-5' src='/small//fightclub.jpg'/>
                        <img className='head-img mt-5' src='/small//hangover.jpg'/>
                        <img className='head-img mt-5' src='/small//arthur.jpg'/>
                        <img className='head-img mt-5' src='/small//diamond.jpg'/>
                        <img className='head-img mt-5' src='/small//matrix.jpg'/>
                        <img className='head-img mt-5' src='/small//godfather.jpg'/>
                        <img className='head-img mt-5' src='/small//Brat.jpg'/>











                    </div>
                </div>
                
              
            </div>
            
        </>
    )
} 