let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likesCount: 10 },
      { id: 2, message: "Hi, I'm fine", likesCount: 21 },
      { id: 3, message: " Yo, What's up bro", likesCount: 15 },
      { id: 4, message: "YOOOOO, hommie", likesCount: 24 }
    ],
  },

  messagesPage: {
    dialogs: [
      { id: 1, name: "Sasha", img: "https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1643276362~hmac=17fdefdcc7984a005d0d78272f9208e4"},
      { id: 2, name: "Lera", img: "https://cdn-icons.flaticon.com/png/512/4139/premium/4139997.png?token=exp=1643276380~hmac=104be65cabc7bbccba94affc97e59ea4" },
      { id: 3, name: "Lenka", img: "https://cdn-icons.flaticon.com/png/512/4140/premium/4140053.png?token=exp=1643276376~hmac=2f11cdf6adcee39f6047c2078e680ad6"},
      { id: 4, name: "Mishka",img: "https://cdn-icons.flaticon.com/png/512/4140/premium/4140077.png?token=exp=1643276369~hmac=7a137c418096cea5fe6c8206bb9e192d"},
      { id: 5, name: "Romka", img: "https://cdn-icons.flaticon.com/png/512/4140/premium/4140057.png?token=exp=1643276336~hmac=c367d25ac895b5eb0cf8c1b795f5d70e"}
    ],

    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Bye" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Wats up" }
    ]
  }
  
};

export default state;