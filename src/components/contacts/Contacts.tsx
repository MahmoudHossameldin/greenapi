import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import ContactListItem from './ContactListItem';
import styled from 'styled-components';
import gravatar from '../../assets/gravatar.png';
import { scrollStyles } from '../../styles/helpers';

function Contacts() {
  const [contacts, setContacts] = useState<number[]>([]);

  return (
    <Wrapper>
      <div className='sticky'>
        <div className='header'>
          <img src={gravatar} alt='profile' />
        </div>
        <div className='form'>
          <AddContactForm contacts={contacts} setContacts={setContacts} />
        </div>
      </div>
      <div className='contacts'>
        <ul className={`${!contacts.length ? 'empty' : ''}`}>
          {contacts.map((number, index) => (
            <ContactListItem key={number} number={number} index={index} />
          ))}
          {!contacts.length && <div>Add contacts to start chatting.</div>}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .sticky {
    z-index: 1;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #e9edef;
    background-color: #fff;
    flex: 0 0 auto;
  }

  .header {
    height: 6rem;
    width: 100%;
    background-color: #f0f2f5;
    padding: 0 1.5rem 0 1.2rem;
    display: flex;
    align-items: center;
    img {
      width: 4rem;
      height: 4rem;
      border: 1px solid grey;
      border-radius: 50%;
    }
  }
  .form {
    padding: 0.5rem 1.2rem;
  }
  .contacts {
    ${scrollStyles}
    flex-grow: 1;

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      position: relative;

      &.empty {
        align-items: center;
        justify-content: center;

        > div {
          margin-top: 3rem;
        }
      }
    }
  }
`;

export default Contacts;
