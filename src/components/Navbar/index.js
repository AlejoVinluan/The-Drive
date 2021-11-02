import React from 'react'
import { Nav, Bars, NavMenu, NavLink } from './NavbarElements'

function Navbar(){
    return(
        <div>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/" activeStyle>Home</NavLink>
                    <NavLink to="/stats">Player Statistics</NavLink>
                    <NavLink to="/matchups">Today in NBA</NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar;