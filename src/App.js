import React from 'react';
import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/*"
              element={<Profile posts={props.posts}/>} />

            <Route path="/dialogs/*"
              element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />

            <Route path="/music/*" element={<Music />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
