import { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Catalog } from './Catalog';
import { Home } from './Home';
import { Poster } from './Home/Poster/Poster';
import { Answer } from './Answer/Answer';
import { FAQ } from './FAQ';
import { Contacts } from './Contacts/Contacts';
import { AboutUs } from './AboutUs/AboutUs';
import { Film } from './Film/Film';
import {Registration} from './Registration/Registration'
import { Autorization } from './Authorization/Authorization';
import { Profile } from './Profile/Profile';
import { Heart } from './Film/Heart/Heart';
import {AppRouter} from './AppRouter/AppRouter'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from './main';
import { check } from './http/userAPI';



const  App = observer(() => {
  const [count, setCount] = useState(0)
  const {user} =  useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])
  

  return (
    <>




     <BrowserRouter>
        <AppRouter/>
     </BrowserRouter>

 
    </>
  )
})

export default App
