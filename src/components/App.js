import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: '1',
      name: 'Heather',
      email: 'heather@yahoo.com',
    },
    {
      id: '2',
      name: 'Mandy',
      email: 'mandy@aol.com',
    },
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
