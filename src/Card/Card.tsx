import './Card.scss'
// 

interface IFilm {
  title: string,
  image: string,
  rating: number,
  year: number,
  alt: string;

}


export const Card = (props: IFilm) => {
  return (
    <>
    <div className='card-inline'>
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