import { useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './Card';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main';




export const FilmList = observer(() => {
  const {film} = useContext(Context)
  
  // useEffect(() => {
  //   fetchFilms().then(data => film.setFilms(data))
  // })

  return (
    <>
    
    
    {/* {films.map(film => <Card  title={film.title } image={film.image} rating={film.rating} year={film.year} alt={film.title}/>)} */}
    {film.films.map(film => <Card key={film.id} film={film}/>)}

    

    
    </>
  )
});