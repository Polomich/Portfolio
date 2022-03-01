import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElems";
  
const Navbar = () => {
  return (
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/webprojects" activeStyle>
            Digital Projects
          </NavLink>
          <NavLink to="/artprojects" activeStyle>
            Art Projects
          </NavLink>
        </NavMenu>
      </Nav>
  );
};
  
export default Navbar;