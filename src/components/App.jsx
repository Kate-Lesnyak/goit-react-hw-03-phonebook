import { Component } from 'react';
import { GlobalStyle } from './GlobaleStyle';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Section } from './Section';
import { Layout } from './Layout';
import { Notification } from './Notification';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedAndParsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedAndParsedContacts !== null) {
      return this.setState({ contacts: savedAndParsedContacts });
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      return Notify.info(`${name} is already in contacts!`);
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
