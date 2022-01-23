import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const activeLink = ({ isActive }) => ({ color: isActive ? "#832129" : "" });


const Navigation = () => {
  return (
    <nav className={s.nav}>

      <div className={s.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/6652/6652177.png'/>
        <NavLink to='/profile' style={activeLink}>Profile</NavLink>
      </div>

      <div className={s.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/2089/2089181.png' />
        <NavLink to='/dialogs' style={activeLink}>Messages</NavLink>
      </div>

      <div className={s.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/876/876209.png' />
        <NavLink to='/news' style={activeLink}>News</NavLink>
      </div>

      <div className={s.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/608/608386.png' />
        <NavLink to='/music' style={activeLink}>Music</NavLink>
      </div>

      <div className={s.item}>
        <img src='https://cdn-icons-png.flaticon.com/512/1827/1827737.png' />
        <NavLink to='/settings' style={activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;