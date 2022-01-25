import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Hi, how are you", likesCount: 10 },
  { id: 2, message: "Hi, I'm fine", likesCount: 21 },
  { id: 3, message: "Yo, What's up bro", likesCount: 15 },
  { id: 4, message: "YOOOOO, hommie", likesCount: 24 }
];

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
