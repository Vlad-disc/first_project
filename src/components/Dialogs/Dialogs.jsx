import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Sasha" id="1"/>
                <DialogItem name="Lera" id="2"/>
                <DialogItem name="Lenka" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Bye"/>
                <Message message="Hi"/>
                <Message message="Bye"/>
            </div>
        </div>

    )
}


export default Dialogs;