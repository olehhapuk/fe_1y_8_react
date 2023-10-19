import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Searchbar from './components/Searchbar';
import {
  createContactService,
  deleteContactService,
  getAllContactsService,
} from './services/contactsService';
// import * as contactsServices from './services/contactsService';

// Синхронізувати стан contacts з localStorage по прикладу зі списку завдань
function App() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState('');

  function createContact(name, number) {
    createContactService({
      name,
      number,
    }).then((newContact) => {
      setContacts((prev) => [...prev, newContact]);
    });
  }

  useEffect(() => {
    getAllContactsService().then((data) => {
      setContacts(data);
    });
  }, []);

  function deleteContact(contactId) {
    console.log({ contactId });
    deleteContactService(contactId).then(() => {
      setContacts((prev) =>
        prev.filter((contact) => {
          return contact.id !== contactId;
        })
      );
    });
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onCreate={createContact} />
      <br />

      <h2>Contacts</h2>

      <Searchbar query={query} setQuery={setQuery} />

      <ContactsList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
