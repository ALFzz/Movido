import { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { FilmList } from '../Components/Card/FilmList';
import { fetchFilms } from '../http/FilmAPI';




export const Actions = observer(() => {
  const {film} = useContext(Context)
  

  useEffect(() => {
    
    fetchFilms().then(data => {
      film.setFilmsByGenre(data, 2)
    })  

}, [])
  

  return (
    <>
      <div className="container">
        <FilmList/>
      </div>


    </>
  )
});