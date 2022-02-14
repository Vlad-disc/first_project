import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsReducer from './friendsReducer';

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

    this._state.profilePage = profileReducer(
      this._state.profilePage, action
    );

    this._state.messagesPage = messagesReducer(
      this._state.messagesPage, action
    );

    this._state.friendsPage = friendsReducer(
      this._state.friendsPage, action
    );

    this._renderEntireTree(this._state);
  
  }
  
}

export default store;