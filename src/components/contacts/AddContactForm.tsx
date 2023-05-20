import React from 'react';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import search from '../../assets/search.svg';

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
    <Wrapper onSubmit={handleNewContactSubmit}>
      <img src={search} alt='add contact' />
      <input
        type='number'
        value={newContact}
        onChange={setNewContact}
        placeholder='Start new chat'
      ></input>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    padding-left: 1.2rem;
  }
  input {
    border: none;
    width: 100%;
    padding-left: 6.5rem;
    background-color: #f0f2f5;
    border-radius: 0.8rem;
    font-size: 16px;
    height: 3.5rem;

    :focus {
      outline: currentColor;
    }
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default AddContactForm;
