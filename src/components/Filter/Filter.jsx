import PropTypes from 'prop-types';

import { StyledFilter, StyledInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <StyledFilter>
      Finde contacts by name
      <StyledInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </StyledFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
