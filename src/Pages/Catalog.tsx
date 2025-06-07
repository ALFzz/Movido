import { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { FilmList } from '../Components/Card/FilmList';
import { fetchFilms,  } from '../http/FilmAPI';




export const Catalog = observer(() => {
  const {film} = useContext(Context)

  

  useEffect(() => {
    // console.log()
    fetchFilms().then(data => {

      film.setFilms(data)
      
    }
      
      
    )  

 
  }, [])
  

  return (
    <>
      <div className="container">
        <FilmList/>

      </div>


    </>
  )
});