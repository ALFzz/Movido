import './Recomendation.scss'
// import films from '../../films.json'
import { Card } from '../../Card/Card'
import { useContext } from 'react';
import { Context } from '../../main';


interface IRecommend {
    header: string;
    subtitle: string;
}

export const Recommendation = 
(props: IRecommend) => {
    const {film} = useContext(Context)

    const recommend = film.films.slice(0, 4) 

    return (
        <>
            <h1 className="rec-title">{props.header}</h1>
            <h2 className='rec-subtitle'>{props.subtitle}</h2>
            <div className='rec-arr'>

            
            {recommend.map(film => <Card  title={film.title } image={film.image} rating={film.rating} year={film.year} alt={film.title}/>)}


   
            </div>
                
            
        </>
    )



}