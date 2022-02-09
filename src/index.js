import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} updatePostText={store.updatePostText.bind(store)} 
      addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} 
      updateMessageText={store.updateMessageText.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
