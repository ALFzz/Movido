import { Button } from 'react-bootstrap'
import './FilmInfo.scss'
import { Heart } from '../Heart/Heart'

export const FilmInfo = () => {
    const film = 
    {
        id: 1,
        title: 'Люди в чёрном',
        director: 'Барри Зонненфельд',
        rating: 9.1,
        year: 1997,
        country: 'США',
        genres: 'Комедия, боевик',
        img_page: '/public/men.png',
        small_description: 'Фантастический боевик о секретной организации, защищающей Землю от пришельцев в обличии обычных людей.',
        big_description: `Агент Кей и Ди участвуют в операции по поимке беглого инопланетянина. После её окончания Ди объявляет, что стал слишком стар для такой работы и уходит на пенсию. Агенту Кей нужен новый напарник.
        Полицейский Джеймс Эдвардс в Нью-Йорке преследует преступника, который оказывается инопланетянином. После операции он пишет рапорт, над которым смеются все его коллеги, а спецагент, пришедший поговорить с ним, стирает его память. Но физические данные Джеймса настолько великолепны, что Кей даёт ему визитку и приглашает на отбор. После испытаний Джеймсу предлагают присоединиться к секретной организации, основанной для контроля за инопланетянами-беженцами, поселившимся на Земле. После ночи раздумий Джеймс соглашается, ему присваивают имя Агент Джей, а данные о его личности стирают из баз данных правительства.
        Тем временем неподалёку от Нью-Йорка падает космический корабль. Инопланетянин убивает фермера Эдгара и надевает на себя его кожу. Агенты осматривают место крушения и устанавливают, что на планету прибыл «Жук» — опасный вид тараканоподобных пришельцев. Жук знает, что где-то на Земле хранится галактика, являющаяся источником субатомной энергии, и собирается завладеть бесценным объектом. «Люди в черном» должны остановить жука и предотвратить серьёзный межпланетный конфликт.`,

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



            <div className='filminfo-plot'>
                <h1 className='filminfo-plot-title'>Сюжет</h1>
                <h2 className='filminfo-plot-desc'>{film.big_description}</h2>

            </div>

            <div className='filminfo-info'>
                <h1 className='filminfo-info-title'>Информация</h1>

                <span>
                    <h2 className='filminfo-info-desc'>{film.country}</h2>
                    <h2 className='filminfo-info-ans'>США</h2>
                </span>

                <span>
                    <h2 className='filminfo-info-desc'>Жанры</h2>
                    <h2 className='filminfo-info-ans'>{film.genres}</h2>
                </span>

                <span>
                    <h2 className='filminfo-info-desc'>Режиссёр</h2>
                    <h2 className='filminfo-info-ans'>{film.director}</h2>
                </span>

            </div>

        </>
    )

}