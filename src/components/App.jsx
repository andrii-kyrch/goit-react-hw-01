import './App.css';
import Profile from './Profile/Profile';
import userData from '../assets/userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../assets/friends.json';

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
      <FriendList friends={friends} />
    </>
  );
}

export default App;
