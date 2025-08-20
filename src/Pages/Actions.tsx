import { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import { FilmList } from '../Components/Card/FilmList';
import { fetchFilms } from '../http/FilmAPI';




export const Actions = observer(() => {
  const context = useContext(Context);
  if (!context) throw new Error("Context is null");
  const { film } = context;
  

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