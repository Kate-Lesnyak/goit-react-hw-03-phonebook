import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline } from 'react-icons/md';

import {
  StyledContactListItem,
  StyledName,
  StyledButton,
} from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <StyledContactListItem>
      <StyledName>{name}:</StyledName>
      <p> {number} </p>
      <StyledButton type="button" onClick={() => onDeleteContact(id)}>
        <MdOutlineDeleteOutline />
      </StyledButton>
    </StyledContactListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
