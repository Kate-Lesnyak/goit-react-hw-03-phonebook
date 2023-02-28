import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobaleStyle';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Section } from './Section';
import { Layout } from './Layout';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      return alert(`${name} is already in contacts!`);
    }
    return this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => this.setState({ filter: e.target.value });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Section>
        <Layout>
          <GlobalStyle />
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          {contacts.length ? (
            <>
              <Filter value={filter} onChange={this.changeFilter} />
              <ContactList
                contacts={visibleContacts}
                onDeleteContact={this.deleteContact}
              />
            </>
          ) : (
            <Notification message="There are no contacts in your phonebook. Please add a contact!" />
          )}
        </Layout>
      </Section>
    );
  }
}
