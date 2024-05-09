import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Catalog } from './Catalog';
import { Home } from './Home';
import { Poster } from './Home/Poster/Poster';
import { Header } from './Header/Header';
import { Answer } from './Answer/Answer';
import { FAQ } from './FAQ';
import { Contacts } from './Contacts/Contacts';
import { AboutUs } from './AboutUs/AboutUs';
import { Film } from './Film/Film';
import {Registration} from './Registration/Registration'
import { Autorization } from './Authorization/Authorization';
import { Profile } from './Profile/Profile';
import { Heart } from './Film/Heart/Heart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/catalog",
      element: <Catalog/>
    },
    {
      path: '/auth',
      element: <Autorization/>
    },
    {
      path: '/reg',
      element: <Registration/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '/contacts',
      element: <Contacts/>
    },
    {
      path: '/aboutus',
      element: <AboutUs/>
    },
    {
      path: '/faq',
      element: <FAQ/>
    }
  ])

  return (
    <>


      {/* <Home/> */}

      {/* <Contacts/> */}

     {/* <AboutUs/> */}

     {/* <Registration/> */}

     {/* <Autorization/> */}

     {/* <Profile/> */}

     <RouterProvider router={router}/>

      {/* <Film/> */}


      {/* <FAQ/> */}

      {/* <Catalog/> */}
    </>
  )
}

export default App
