import PropTypes from 'prop-types';

export default function Notification({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

Notification.propTypes = {
  title: PropTypes.string,
};
