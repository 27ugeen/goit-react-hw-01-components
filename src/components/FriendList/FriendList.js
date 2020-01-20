import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const { friendList, listItem } = styles;

// console.log(FriendListItem);


const FriendList = ({ friends }) => {
  return (
    <ul className={friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={listItem}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
