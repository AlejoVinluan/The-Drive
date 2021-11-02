import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #231F20;
    height: 85px;
    display: flex;
    justify-content: space-between;
    z-index: 12;
`

export const NavLink = styled(Link)`
    color: #DCE0DF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #FAF9F6;
    }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #DCE0DF;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`