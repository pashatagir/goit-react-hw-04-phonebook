import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const initialValue = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const localContacts = JSON.parse(localStorage.getItem('contacts'));

  const visibleContacts =
    localContacts?.length > 0 ? localContacts : initialValue;

  const [contacts, setContacts] = useState(visibleContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const checkName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts);
//     if (parseContacts?.length) {
//       this.setState({ contacts: parseContacts });
//       return;
//     }
//     this.setState({ contacts: this.state.contacts });
//   }

//   componentDidUpdate(prevState, prevProps) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;
//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addContact = (name, number) => {
//     const { contacts } = this.state;
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const checkName = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (checkName) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();
//     return (
//       <Container>
//         <Section title="Phonebook">
//           <Phonebook onSubmit={this.addContact} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={this.filter} onChange={this.changeFilter} />
//           <ContactsList
//             contacts={filteredContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }
