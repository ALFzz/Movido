import { useNavigate } from 'react-router-dom';
import './Card.scss'
import { FILM_ROUTE } from '../utils/consts';
// 

interface IFilm {
  id: number,
  title: string,
  image: string,
  rating: number,
  year: number,
  alt: string;

}


export const Card = (props) => {
  const navigate = useNavigate()
  // console.log(props.id)
  return (
    <>
    <div className='card-inline ' onClick={() => navigate(FILM_ROUTE + '/' + props.id)}>
      <div className='card-anim'>

      <div className='card-rating'>
        <h2 className='card-h2-rating'>{props.rating}</h2>
      </div>

      <img className='card-image-card' src= {props.image} alt= {props.title}/>
      </div>
      <p className='card-name'>{props.title}</p>
      <p className='card-year'>{props.year}</p>
    </div>




    </>

    // <div className='div-inline-block'>
        
    // </div>
  );
}