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
          <img src='https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1643276362~hmac=17fdefdcc7984a005d0d78272f9208e4' />
          <img src='https://cdn-icons.flaticon.com/png/512/4139/premium/4139997.png?token=exp=1643276380~hmac=104be65cabc7bbccba94affc97e59ea4' />
          <img src='https://cdn-icons.flaticon.com/png/512/4140/premium/4140057.png?token=exp=1643276336~hmac=c367d25ac895b5eb0cf8c1b795f5d70e' />
        </div>
      </div>
    </nav>
  )
}

export default Navigation;