import React from 'react';
import './App.css'
import Profile from './components/Profile';
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />

      <Navigation />

      <Profile />
    </div>
  );
}

const index = () => {
  return (
    <Header />
  )
}

export default App;