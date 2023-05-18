import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import ContactListItem from './ContactListItem';

function Contacts() {
  const [contacts, setContacts] = useState<number[]>([]);

  return (
    <div>
      <AddContactForm contacts={contacts} setContacts={setContacts} />

      <ul>
        {contacts.map((number) => (
          <ContactListItem key={number} number={number} />
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
