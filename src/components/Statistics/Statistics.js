import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const {
  statistics,
  sectionTitle,
  statList,
  listItem,
  itemLabel,
  itemPercent,
} = styles;

const getColor = () => {
  let c = '';
  while (c.length < 6) {
    c += Math.random()
      .toString(16)
      .substr(-6)
      .substr(-1);
  }
  return '#' + c;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={statistics}>
      {title && <h2 className={sectionTitle}>{title}</h2>}

      <ul className={statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{ backgroundColor: getColor() }}
            className={listItem}
          >
            <span className={itemLabel}>{label}</span>
            <span className={itemPercent}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
