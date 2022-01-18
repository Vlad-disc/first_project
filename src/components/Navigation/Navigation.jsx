import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const activeLink = ({ isActive }) => ({ color: isActive ? "#f52f41" : "" });

const Navigation = () => {
  return (
    <nav className={s.nav}>

      <div className={s.item}>
        <NavLink to='/profile' style={activeLink}>Profile</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/dialogs' style={activeLink}>Messages</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/news' style={activeLink}>News</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/music' style={activeLink}>Music</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/settings' style={activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;