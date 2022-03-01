import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #BDE0FE;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  background: #FFAFCC;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  margin: 0 0.5rem;
  height: 80%;
  cursor: pointer;
  &.active {
    color: #FFAFCC;
    background: white;
  }
  &:hover{
      color: #FF70A5;
  }
`;

export const NavTwo = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavLinkTwo = styled(Link)`
background: #A2D2FF;
border-radius: 0.5rem;
border-width: 2px;
border-color: white;
color: black;
display: inline-flex;
padding: 1rem 1rem;
margin: 0.5rem 0.5rem;
cursor: pointer;
&:hover {
  color: white;
  border-color: #85C4FF;
}
`;


