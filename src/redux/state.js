let renderEntireTree = () => {
  console.log("there's state")
}

let state = {
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
  
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likesCount: 1
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id:5,
    message: state.messagesPage.newMessageText
  };

  state.messagesPage.messages.push(newMessage);
  state.messagesPage.newMessageText = '';
  renderEntireTree(state);
};

export const updateMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  renderEntireTree(state);
};

export const subscribe=(observer) => {
  renderEntireTree = observer;
}



export default state;