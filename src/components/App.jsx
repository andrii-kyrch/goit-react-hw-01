import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Profile from './Profile/Profile';
import userData from '../assets/userData.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}

export default App;
