import PropTypes from 'prop-types';

import { ContactListItem } from './ContactListItem';
import { StyledContacts } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledContacts>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};
