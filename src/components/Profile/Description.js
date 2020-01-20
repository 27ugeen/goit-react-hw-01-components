import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const { description, userAvatar, userName, userTag, userLocation } = styles;

const Description = ({ name, avatar, tag, location }) => {
  return (
    <div className={description}>
      <img src={avatar} alt={name} className={userAvatar} />
      <p className={userName}>{name}</p>
      <p className={userTag}>@{tag}</p>
      <p className={userLocation}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
