import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const activeLink = ({ isActive }) => ({ color: isActive ? "#832129" : "" });


const Navigation = (props) => {
  return (
    <nav className={s.nav}>

      <div className={s.item}>
        <NavLink to='/profile' style={activeLink}>
          <img src="https://cdn-icons-png.flaticon.com/512/6652/6652177.png" />
          Profile
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/dialogs' style={activeLink}>
          <img src='https://cdn-icons-png.flaticon.com/512/2089/2089181.png' />
          Messages
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/news' style={activeLink}>
          <img src='https://cdn-icons-png.flaticon.com/512/876/876209.png' />
          News
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/music' style={activeLink}>
          <img src='https://cdn-icons-png.flaticon.com/512/608/608386.png' />
          Music
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/settings' style={activeLink}>
          <img src='https://cdn-icons-png.flaticon.com/512/1827/1827737.png' />
          Settings
        </NavLink>
      </div>

      <div className={s.itemF}>
        <NavLink to='/friends' style={activeLink}>
          <img src='https://cdn-icons-png.flaticon.com/512/1500/1500455.png' />
          Friends
        </NavLink>
        
        <div className={s.friends}>
          <NavLink to='/friends' style={activeLink}>
            <img src='https://cdn-icons-png.flaticon.com/512/2922/2922693.png' />
            <img src='https://cdn-icons-png.flaticon.com/512/2922/2922572.png' />
            <img src='https://cdn-icons-png.flaticon.com/512/2922/2922591.png' />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;