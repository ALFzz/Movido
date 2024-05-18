import { Component, useState } from 'react'
import { Catalog } from '../Catalog';
import { Home } from '../Home';
import { Poster } from '../Home/Poster/Poster';
import { Header } from '../Header/Header';
// import { Answer } from './Answer/Answer';
import { FAQ } from '../FAQ';
import { Contacts } from '../Contacts/Contacts';
import { AboutUs } from '../AboutUs/AboutUs';
import { Film } from '../Film/Film';
import {Registration} from '../Registration/Registration'
import { Autorization } from '../Authorization/Authorization';
import { Profile } from '../Profile/Profile';
// import { Heart } from './Film/Heart/Heart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ABOUT_US_ROUTE, ADMIN_ROUTE, AUTH_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, FAQ_ROUTE, FILM_ROUTE, HOME_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Admin } from '../Admin/Admin';

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
    path: AUTH_ROUTE,
    Component: <Autorization/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Registration/>
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
    path: FILM_ROUTE + '/:id',
    Component: <Film/>
  }
]