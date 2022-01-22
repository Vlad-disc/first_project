import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Lera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Lenka</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Wat up</div>
                <div className={s.message}>Wup</div>
                <div className={s.message}>a u ok?</div>
                <div className={s.message}>Ya, bru</div>
            </div>
        </div>

    )
}


export default Messages;