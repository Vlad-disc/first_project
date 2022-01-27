import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

let activeDialog = ({ isActive }) => ({color: isActive ? "#832129" : ""});

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogItem}>
            <NavLink to={path} style={activeDialog}>
                <img src={props.img} />
                {props.name}
            </NavLink>
        </div>
    )
}


export default DialogItem;