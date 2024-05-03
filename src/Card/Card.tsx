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
    <div className='inline'>
      <div className='rating'>
        <h2 className='h2-rating'>{props.rating}</h2>
      </div>

      <img className='img' src= {props.image} alt= {props.title}/>
      <p className='name'>{props.title}</p>
      <p className='year'>{props.year}</p>
    </div>




    </>

    // <div className='div-inline-block'>
        
    // </div>
  );
}