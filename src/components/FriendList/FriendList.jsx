import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friendList}>
      <div className="container">
        <ul className={css.itemList}>
          {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FriendList;
