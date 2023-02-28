import PropTypes from 'prop-types';

import { StyledContainer } from './Layout.styled';

export const Layout = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
