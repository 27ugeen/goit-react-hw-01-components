import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../db/user.json';
import statisticalData from '../db/statistical-data.json';
import friends from '../db/friends.json';
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
