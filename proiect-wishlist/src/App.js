

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './routes/Login';
import NewWishlist from './routes/NewWishlist';
import Register from './routes/Register'
import Groups from './routes/Groups';
import Profile from './routes/Profile';
import Home from './routes/Home';
function App() {
return(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/newWishlist" element={<NewWishlist />} />
    <Route path="/register" element={<Register/>} />
    <Route path="/groups" element={<Groups/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/home" element={<Home/>}/>  
  </Routes>
</BrowserRouter>
);  
}

export default App;
