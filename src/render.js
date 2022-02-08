import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updatePostText  } from './redux/state';
import { addMessage, updateMessageText } from './redux/state';


export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} updatePostText={updatePostText} 
      addPost={addPost} addMessage={addMessage} updateMessageText={updateMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
