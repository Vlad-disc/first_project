import React from 'react';
import './App.css'
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />

      <Navigation />

      {/* <Profile /> */}
      
      <div className='app-wrapper-content'>
        <Dialogs />    
      </div>
      

    </div>
  );
}

export default App;
