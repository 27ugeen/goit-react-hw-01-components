import React from 'react';

import Profile from './Profile';
import user from '../user.json';

import Statistics from './Statistics';
import statisticalData from '../statistical-data.json';

import FriendList from './FriendList';
import friends from '../friends.json';

console.log(FriendList);

const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />
    </>
  );
};

export default App;
