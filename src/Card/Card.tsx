import './Card.scss'


export const Card = (props: React.HTMLProps<HTMLImageElement>) => {
  return (
    <>
    <div className='inline'>
      <div className='rating'>
        <h2 className='h2-rating'>9.2</h2>
      </div>

      <img className='img' src= {props.src} alt= {props.alt}/>
    </div>


    </>

    // <div className='div-inline-block'>
        
    // </div>
  );
}