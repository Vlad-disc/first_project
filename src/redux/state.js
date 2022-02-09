const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 10 },
        { id: 2, message: "Hi, I'm fine", likesCount: 21 },
        { id: 3, message: " Yo, What's up bro", likesCount: 15 },
        { id: 4, message: "YOOOOO, hommie", likesCount: 24 }
      ],
  
      newPostText: "Введите текст"
      
    },
  
    messagesPage: {
      dialogs: [
        { id: 1, name: "Sasha", img: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"},
        { id: 2, name: "Lera", img: "https://cdn-icons-png.flaticon.com/512/2922/2922591.png" },
        { id: 3, name: "Lenka", img: "https://cdn-icons-png.flaticon.com/512/2922/2922591.png"},
        { id: 4, name: "Mishka", img: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"},
        { id: 5, name: "Romka", img: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"}
      ],
  
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Bye" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Wats up" }
      ],
  
      newMessageText: "Введите текст"
    },
  
    friendsPage: {
      bestFriend: [
        { id: 1, name: "Sasha",img: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"},
        { id: 2, name: "Lera", img: "https://cdn-icons-png.flaticon.com/512/2922/2922591.png"},
        { id: 3, name: "Lenka", img: "https://cdn-icons-png.flaticon.com/512/2922/2922591.png"},
        { id: 4, name: "Mishka", img: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"},
        { id: 5, name: "Romka", img: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"}
      ]
    }
    
  },
  
  _renderEntireTree() {
    console.log("there's state")
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
       id:5,
       message: this._state.profilePage.newPostText,
       likesCount: 1
      };
  
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._renderEntireTree(this._state);


    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._renderEntireTree(this._state);


    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
      id:5,
      message: this._state.messagesPage.newMessageText
      };
  
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._renderEntireTree(this._state);


    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newDialog;
      this._renderEntireTree(this._state);
    }
  }
  
}

export const addPostActionCreator = () => ({ type: ADD_POST });
    

export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (dialog) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, newDialog: dialog });


export default store;