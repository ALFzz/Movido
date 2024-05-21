import { Component, useState } from 'react'
import { Catalog } from '../Catalog';
import { Home } from '../Home';
import { Poster } from '../Home/Poster/Poster';
// import { Answer } from './Answer/Answer';
import { FAQ } from '../FAQ';
import { Contacts } from '../Contacts/Contacts';
import { AboutUs } from '../AboutUs/AboutUs';
import { FilmPage } from '../Film/FilmPage';
import {Registration} from '../Registration/Registration'
import { Autorization } from '../Authorization/Authorization';
import { Profile } from '../Profile/Profile';
// import { Heart } from './Film/Heart/Heart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ABOUT_US_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, FAQ_ROUTE, FILM_ROUTE, HOME_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Admin } from '../Admin/Admin';
import { FilmList } from '../Card/FilmList';
import { Detectives } from '../Detectives/Detectives';
import { Actions } from '../Actions/Actions';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin/>
  }
]


export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home/>
  },
  {
    path: CATALOG_ROUTE,
    Component: <Catalog/>
  },
  {
    path: LOGIN_ROUTE,
    Component: <Autorization/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Autorization/>
  },
  {
    path: PROFILE_ROUTE,
    Component: <Profile/>
  },
  {
    path: CONTACTS_ROUTE,
    Component: <Contacts/>
  },
  {
    path: ABOUT_US_ROUTE,
    Component: <AboutUs/>
  },
  {
    path: FAQ_ROUTE,
    Component: <FAQ/>
  },
  {
    path: '/actions',
    Component: <Actions/>
  },
  {
    path: '/detectives',
    Component: <Detectives/>
  },
  {
    path: FILM_ROUTE + '/:id',
    Component: <FilmPage/>
  }
]