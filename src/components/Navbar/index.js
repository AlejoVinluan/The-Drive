import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavContainer, NavLogo, Icon, NavMenu, NavLink, NavItem, NavBtn, NavBtnLink } from './NavbarElements'


function Navbar(){
    return(
        <>
            <Nav>

                <NavContainer>
                    <NavLogo to="/">The Drive</NavLogo>
                    <Icon>
                        <FaBars />
                    </Icon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/stats">Player Statistics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/matchups">Today's Matchups</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;