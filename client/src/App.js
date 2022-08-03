import './App.css';
import React, { useState } from "react";

import {Suspense, lazy} from "react"
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { GoogleOAuthProvider } from '@react-oauth/google';


const NotFound =lazy(()=> import ('./pages/not-found.js'));

const Home =lazy(()=> import ('./pages/Home'));
const Admin =lazy(()=> import ('./pages/Admin'));
const Cart =lazy(()=> import ('./pages/Cart'));
const Browse =lazy(()=> import ('./pages/Browse'));
const Product =lazy(()=> import ('./pages/Product'));
const Profile =lazy(()=> import ('./pages/Profile'));

export const HotelContext = React.createContext();
export const UserContext = React.createContext();

function App() {

  // const [hotelContext, setHotelContext] = useState([]);
  const [userContext, setUserContext] = useState([]);

  const CLIENTID="839890200657-ab7pl0ud5o5a1bpvi69vjjiud8jrrlqt.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={CLIENTID}>
    <UserContext.Provider value={{userContext, setUserContext}}>
    {/* <HotelContext.Provider value={{hotelContext, setHotelContext}}> */}
    <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home/>}/>
        <Route exact path={ROUTES.BROWSE} element={<Browse/>}/>
        <Route exact path={ROUTES.CART} element={<Cart/>}/>
        <Route exact path={ROUTES.PROFILE} element={<Profile/>}/>
        <Route exact path={ROUTES.ADMIN} element={<Admin/>}/>
        <Route exact path='product' element={<Product/>}/>  
        <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
  {/* </HotelContext.Provider> */}
  </UserContext.Provider>
  </GoogleOAuthProvider>
  );
}

export default App;