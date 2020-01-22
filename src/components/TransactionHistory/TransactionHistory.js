import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const { transactionHistory, tableHead, tableRow, bodyRow } = styles;

const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionHistory}>
      <thead className={tableHead}>
        <tr className={tableRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={bodyRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
