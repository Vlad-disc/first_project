import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const activeLink = ({ isActive }) => ({ color: isActive ? "#f52f41" : "" });


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
        <img src='https://cdn-icons.flaticon.com/png/512/3161/premium/3161569.png?token=exp=1642756966~hmac=8d5759050d2402cd552d714ff157762b' />
        <NavLink to='/music' style={activeLink}>Music</NavLink>
      </div>

      <div className={s.item}>
        <img src='https://cdn-icons.flaticon.com/png/512/1687/premium/1687794.png?token=exp=1642756375~hmac=6471dfa129a5f37b471bff5984317656' />
        <NavLink to='/settings' style={activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;