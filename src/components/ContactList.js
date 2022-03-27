import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  // passing from child to parent to App parent. TODO: better solution
  const removeContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={removeContactHandler} key={contact.id}></ContactCard>
    );
  })
  return (
    <div className="ui celled list">
      {renderContactList}
    </div>
  );
}

export default ContactList;
