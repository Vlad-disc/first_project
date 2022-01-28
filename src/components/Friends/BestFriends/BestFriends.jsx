import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './BestFriends.module.css';

const BestFriends = (props) => {
    let activeDialog = ({ isActive }) => ({color: isActive ? "#832129" : ""});
    
    let path = "/friends/" + props.id;

    return (
        <div className={s.bestFriendItem}>
            <NavLink to={path} style={activeDialog}>
                <img src={props.img} />
                {props.name}
            </NavLink>
        </div>
    )
}


export default BestFriends;