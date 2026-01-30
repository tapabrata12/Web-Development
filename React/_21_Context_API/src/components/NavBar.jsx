import Nav2 from "./Nav2";
import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'
const NavBar = () => {
  const { theme } = useContext(ThemeContextData)
  return (
    <div className={theme}>
      <h2 className={theme}>Navbar</h2>
      <Nav2 />
    </div>
  );
};

export default NavBar;