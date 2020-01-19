import React from 'react';
import Profile from './Profile';
import user from '../user.json';

// console.log(user.stats.followers);

const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default App;
