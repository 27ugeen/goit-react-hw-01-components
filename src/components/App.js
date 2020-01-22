import React from 'react';

import Profile from './Profile';
import user from '../db/user.json';

import Statistics from './Statistics';
import statisticalData from '../db/statistical-data.json';

import FriendList from './FriendList';
import friends from '../db/friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../db/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
