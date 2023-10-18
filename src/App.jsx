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

function App() {
  const [contacts, setContacts] = useState([]);

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

  // Передати у проп onDelete компонента ContactsList
  // Додати кнопку для видалення кнопку при кліці на яку запуститься ця функція через проп onDelete
  function deleteContact(contactId) {
    deleteContactService(contactId).then(() => {
      setContacts((prev) =>
        prev.filter((contact) => {
          return contact.id !== contactId;
        })
      );
    });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onCreate={createContact} />
      <br />

      <h2>Contacts</h2>
      <Searchbar />
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default App;
