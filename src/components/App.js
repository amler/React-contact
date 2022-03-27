import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    // never directly manipulate the contacts, just used to update the state
    setContacts([...contacts, {id: uuidv4(), ...contact}]);
  };

  const deleteContactHandler = (id) => {
    // creates a copy of the contact first
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={deleteContactHandler}/>
    </div>
  );
}

export default App;
