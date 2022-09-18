import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

function deletetoken(){
  localStorage.clear();
}


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/home'>
          Wishlist.soft
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            My Wishlists
          </NavLink>
          <NavLink to='/newWishlist' activeStyle>
            Create a new wishlist
          </NavLink>
          <NavLink to='/groups' activeStyle>
            Groups
          </NavLink>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/' activeStyle onClick={deletetoken}>
            Log out
          </NavLink>
         
         
          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;