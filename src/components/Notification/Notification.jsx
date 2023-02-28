import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

export const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
