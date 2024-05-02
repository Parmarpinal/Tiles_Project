import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import TileDetail from './TileComponents/TileDetail';
import AddTiles from './TileComponents/AddTiles';
import Tiles from './TileComponents/Tiles';
import UpdateTile from './TileComponents/UpdateTile';
import Login from './User/Login';
import Signup from './User/Signup';
import UserProfile from './User/UserProfile';
import Cart from './User/Cart';
import AdminForm from './User/AdminForm';
import AllUser from './Admin/AllUser';
import FilteredTiles from './TileComponents/filteredTiles';
import AllUserMassages from './Admin/AllUserMessages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/:place' element={<Tiles/>}/>
        <Route path='/detailTile/:place/:id' element={<TileDetail/>} />
        <Route path='/updateTile/:field/:id' element={<UpdateTile/>} />
        <Route path='/addTiles/:field' element={<AddTiles/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/adminForm' element={<AdminForm />} />
        <Route path='/profile' element={<UserProfile/>} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/allUser' element={<AllUser />} />
        <Route path='/filteredData' element={<FilteredTiles />} />
        <Route path='/usermsg' element={<AllUserMassages />} />
      </Routes> 
    </BrowserRouter>
    <Footer/> 
  </React.StrictMode>
);

reportWebVitals();
