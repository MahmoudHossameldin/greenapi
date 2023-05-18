import React from 'react';
import { useAppDispatch } from '../../hooks/app';
import { changeActiveChat } from '../../store/slices/activeChatSlice';

type ContactListItemProps = {
  number: number;
};

function ContactListItem({ number }: ContactListItemProps) {
  const dispatch = useAppDispatch();

  const handleChangeActiveChat = (number: number) => {
    dispatch(changeActiveChat(number));
  };

  return <li onClick={() => handleChangeActiveChat(number)}>{number}</li>;
}

export default ContactListItem;
