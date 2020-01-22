import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const { stats, statsItem, label, quantity } = styles;

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={stats}>
      <li className={statsItem}>
        <span className={label}>Followers</span>
        <span className={quantity}>{followers}</span>
      </li>
      <li className={statsItem}>
        <span className={label}>Views</span>
        <span className={quantity}>{views}</span>
      </li>
      <li className={statsItem}>
        <span className={label}>Likes</span>
        <span className={quantity}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
