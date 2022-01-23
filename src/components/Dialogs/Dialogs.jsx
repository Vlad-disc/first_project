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

    let dialogs = [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Lera" },
        { id: 3, name: "Lenka" },
        { id: 4, name: "Mishka" },
        { id: 5, name: "Romka" }
    ];

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "Bye" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Wats up" }
    ];

    let dialogsElements = dialogs.map
        (d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = messages.map
        (m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messageElements}

            </div>
        </div>

    )
}


export default Dialogs;