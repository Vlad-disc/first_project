import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map
        (d => <DialogItem name={d.name} id={d.id} img={d.img} />)
    ;

    let messageElements = props.state.messages.map
        (m => <Message message={m.message} />)
    ;
  
    let newDialogElement = React.createRef();

    let addDialog = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onDialogChange = () => {
        let dialog = newDialogElement.current.value;
        let action = updateNewMessageTextActionCreator(dialog);
        props.dispatch(action);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                { dialogsElements }

            </div>
            <div className={s.messages}>

                { messageElements }
                 
                <div className={s.addMessage}>
                    
                    <div>
                        <textarea onChange={ onDialogChange } 
                        ref={ newDialogElement } value={ props.state.newMessageText} />
                    </div>

                    <div>
                        <button onClick={ addDialog }>Send Message</button>
                    </div>

                </div>

            </div>


        </div>

    )
}


export default Dialogs;