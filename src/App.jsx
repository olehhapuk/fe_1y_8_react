import { useState } from 'react';
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
    // Зробити запит на апі для створення контакту, передати об'єкт { name, number }
    // Обробити відповідь апі, додавши новий контакт у стейт contacts
    // Перевірити наявність контакту в React DevTools
    console.log({ name, number });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onCreate={createContact} />
      <br />

      <h2>Contacts</h2>
      <Searchbar />
      <ContactsList />
    </div>
  );
}

export default App;
