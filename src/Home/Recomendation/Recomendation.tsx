import './Recomendation.scss'
// import films from '../../films.json'
import { Card } from '../../Card/Card'
import { Context } from '../../main';
import { useContext, useEffect, useState } from 'react'
import { fetchFilms } from '../../http/FilmAPI';
import { FilmList } from '../../Card/FilmList';
interface IRecommend {
    header: string;
    subtitle: string;
}

export const Recommendation = 
(props: IRecommend) => {
    const {film} = useContext(Context)
    
    // расскоментируй useEffect чтообы загрузить с сервера
    // useEffect(() => {
    //     fetchFilms().then(data => film.setFilms(data))
    //   }, [])
    // const recommend = film.films.slice(0, 2) 

    return (
        <>
            <h1 className="rec-title">{props.header}</h1>
            <h2 className='rec-subtitle'>{props.subtitle}</h2>
            <div className='rec-arr'>

            
            <FilmList/>


   
            </div>
                
            
        </>
    )



}