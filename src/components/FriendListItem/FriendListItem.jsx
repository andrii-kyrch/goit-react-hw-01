import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className={clsx(css.status, css.online)}>Online</p>
      ) : (
        <p className={clsx(css.status, css.offline)}>Offline</p>
      )}
    </li>
  );
};

export default FriendListItem;
