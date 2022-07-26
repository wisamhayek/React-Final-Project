import './App.css';
import React, { useState } from "react";

import {Suspense, lazy} from "react"
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';


const NotFound =lazy(()=> import ('./pages/not-found.js'));
// const Book =lazy(()=> import ('./pages/book'));
// const Discover =lazy(()=> import ('./pages/discover'));

const Home =lazy(()=> import ('./pages/Home'));
const Admin =lazy(()=> import ('./pages/Admin'));
const Cart =lazy(()=> import ('./pages/Cart'));
const Browse =lazy(()=> import ('./pages/Browse'));
const Product =lazy(()=> import ('./pages/Product'));
const Profile =lazy(()=> import ('./pages/Profile'));

export const HotelContext = React.createContext();
export const UserContext = React.createContext();

function App() {

  const [hotelContext, setHotelContext] = useState([]);
  const [userContext, setUserContext] = useState([]);

  return (
    <UserContext.Provider value={{userContext, setUserContext}}>
    <HotelContext.Provider value={{hotelContext, setHotelContext}}>
    <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home/>}/>
        <Route exact path={ROUTES.BROWSE} element={<Browse/>}/>
        <Route exact path={ROUTES.CART} element={<Cart/>}/>
        <Route exact path={ROUTES.PROFILE} element={<Profile/>}/>
        <Route exact path={ROUTES.ADMIN} element={<Admin/>}/>  
        <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
  </HotelContext.Provider>
  </UserContext.Provider>
  );
}

export default App;