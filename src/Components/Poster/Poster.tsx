import { Button } from 'react-bootstrap'
import './Poster.scss'
import { useNavigate } from 'react-router-dom'
import { CATALOG_ROUTE } from '../../utils/consts'

export const Poster =/**
 *
 */
() => {
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
                        <img className='head-img mt-5' alt='casino' src='/small/casino.jpg'/>
                        <img className='head-img mt-5' alt='wolf' src='/small/wolf.jpg'/>
                        <img className='head-img mt-5' alt='incredibles' src='/small/incredibles.jpg'/>
                        <img className='head-img mt-5' alt='black' src='/small/black.jpg'/>
                        <img className='head-img mt-5' alt='knives' src='/small/knives out.jpg'/>
                        <img className='head-img mt-5' alt='wolf' src='/small/wolf.jpg'/>
                        <img className='head-img mt-5' alt='se7en' src='/small/se7en.jpg'/>
                        <img className='head-img mt-5' alt='sherlock' src='/small/sherlock.jpg'/>
                        <img className='head-img mt-5' alt='truman' src='/small/truman.jpg'/>
                        <img className='head-img mt-5' alt='zodiac' src='/small/zodiac.jpg'/>
                        <img className='head-img mt-5' alt='1+1' src='/small/1+1.jpg'/>
                        <img className='head-img mt-5' alt='taxi' src='/small/taxi.jpg'/>
                        <img className='head-img mt-5' alt='roadhouse' src='/small/roadhouse.jpg'/>
                        <img className='head-img mt-5' alt='taxist' src='/small/taxist.jpg'/>
                        <img className='head-img mt-5' alt='payne' src='/small/payne.jpg'/>
                        <img className='head-img mt-5' alt='harry' src='/small/harry.jpg'/>
                        <img className='head-img mt-5' alt='fallguy' src='/small/fallguy.jpg'/>
                        <img className='head-img mt-5' alt='bladerunner' src='/small/bladerunner.jpg'/>
                        <img className='head-img mt-5' alt='challangers' src='/small/challangers.jpg'/>
                        <img className='head-img mt-5' alt='goodbad' src='/small/goodbad.jpg'/>
                        <img className='head-img mt-5' alt='fightclub' src='/small/fightclub.jpg'/>
                        <img className='head-img mt-5' alt='hangover' src='/small/hangover.jpg'/>
                        <img className='head-img mt-5' alt='arthur' src='/small/arthur.jpg'/>
                        <img className='head-img mt-5' alt='diamond' src='/small/diamond.jpg'/>
                        <img className='head-img mt-5' alt='matrix' src='/small/matrix.jpg'/>
                        <img className='head-img mt-5' alt='Brat' src='/small/Brat.jpg'/>
                    </div>
                    <div className='head-wrap head-img-slide '>
                        <img className='head-img mt-5' alt='casino' src='/small/casino.jpg'/>
                        <img className='head-img mt-5' alt='wolf' src='/small/wolf.jpg'/>
                        <img className='head-img mt-5' alt='incredibles' src='/small/incredibles.jpg'/>
                        <img className='head-img mt-5' alt='black' src='/small/black.jpg'/>
                        <img className='head-img mt-5' alt='knives' src='/small/knives out.jpg'/>
                        <img className='head-img mt-5' alt='wolf' src='/small/wolf.jpg'/>
                        <img className='head-img mt-5' alt='se7en' src='/small/se7en.jpg'/>
                        <img className='head-img mt-5' alt='sherlock' src='/small/sherlock.jpg'/>
                        <img className='head-img mt-5' alt='truman' src='/small/truman.jpg'/>
                        <img className='head-img mt-5' alt='zodiac' src='/small/zodiac.jpg'/>
                        <img className='head-img mt-5' alt='1+1' src='/small/1+1.jpg'/>
                        <img className='head-img mt-5' alt='taxi' src='/small/taxi.jpg'/>
                        <img className='head-img mt-5' alt='roadhouse' src='/small/roadhouse.jpg'/>
                        <img className='head-img mt-5' alt='taxist' src='/small/taxist.jpg'/>
                        <img className='head-img mt-5' alt='payne' src='/small/payne.jpg'/>
                        <img className='head-img mt-5' alt='harry' src='/small/harry.jpg'/>
                        <img className='head-img mt-5' alt='fallguy' src='/small/fallguy.jpg'/>
                        <img className='head-img mt-5' alt='bladerunner' src='/small/bladerunner.jpg'/>
                        <img className='head-img mt-5' alt='challangers' src='/small/challangers.jpg'/>
                        <img className='head-img mt-5' alt='goodbad' src='/small/goodbad.jpg'/>
                        <img className='head-img mt-5' alt='fightclub' src='/small/fightclub.jpg'/>
                        <img className='head-img mt-5' alt='hangover' src='/small/hangover.jpg'/>
                        <img className='head-img mt-5' alt='arthur' src='/small/arthur.jpg'/>
                        <img className='head-img mt-5' alt='diamond' src='/small/diamond.jpg'/>
                        <img className='head-img mt-5' alt='matrix' src='/small/matrix.jpg'/>
                        <img className='head-img mt-5' alt='Brat' src='/small/Brat.jpg'/>
                    </div>
                </div>


            </div>

        </>
    )
} 