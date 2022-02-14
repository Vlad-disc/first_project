const ADD_MESSAGE = 'ADD-MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
      id:5,
      message: state.newMessageText
      };
  
      state.messages.push(newMessage);
      state.newMessageText = '';
    return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newDialog;
      return state;
    
    default: return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (dialog) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, newDialog: dialog });

export default messagesReducer;