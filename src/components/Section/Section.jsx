import PropTypes from 'prop-types';

import { StyledSection } from './Section.styled';

export const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
