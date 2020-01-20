import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Description from './Description';

import styles from './Profile.module.css';

const { profile } = styles;

const Profile = ({ user }) => {
  const { name, avatar, tag, location, stats } = user;
  const { followers, views, likes } = stats;

  return (
    <div className={profile}>
      <Description name={name} avatar={avatar} tag={tag} location={location} />
      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default Profile;
