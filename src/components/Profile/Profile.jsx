import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <section className={css.profile}>
      <div className="container">
        <div className={css.content}>
          <div className={css.profileName}>
            <img
              className={css.avatar}
              width="100"
              src={image}
              alt="User avatar"
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
          </div>
          <ul className={css.stats}>
            <li className={css.item}>
              <span className={css.label}>Followers</span>
              <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.item}>
              <span className={css.label}>Views</span>
              <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.item}>
              <span className={css.label}>Likes</span>
              <span className={css.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
