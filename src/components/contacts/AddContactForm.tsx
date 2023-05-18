import React from 'react';
import useInput from '../../hooks/useInput';

type AddContactFormProps = {
  contacts: number[];
  setContacts: React.Dispatch<React.SetStateAction<number[]>>;
};

function AddContactForm({ contacts, setContacts }: AddContactFormProps) {
  const [newContact, setNewContact, resetNewContactField] = useInput('');

  const handleNewContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedValue = parseInt(newContact);
    if (!isNaN(parsedValue) && !contacts.includes(parsedValue)) {
      setContacts([...contacts, parsedValue]);
    }
    resetNewContactField();
  };

  return (
    <form onSubmit={handleNewContactSubmit}>
      <label>
        Add Contact Number:
        <input type='number' value={newContact} onChange={setNewContact} />
      </label>
      <button type='submit'>Add Contact</button>
    </form>
  );
}

export default AddContactForm;
