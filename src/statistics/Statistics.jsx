import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positivePercentage,
}) {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Total : {totalFeedbacks}</li>
        <li>
          Positive feedback : {positivePercentage > 0 ? positivePercentage : 0}%
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalFeedbacks: PropTypes.number,
};
