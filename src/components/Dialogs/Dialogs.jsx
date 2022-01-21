import React from 'react';
import s from './Dialogs.module.css';

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Lera
                </div>
                <div className={s.dialog}>
                    Lenka
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