import React from 'react';
import { useAppDispatch } from '../../hooks/app';
import { changeActiveChat } from '../../store/slices/activeChatSlice';
import { useAppSelector } from '../../hooks/app';
import unknown from '../../assets/unknown.svg';
import styled from 'styled-components';

type ContactListItemProps = {
  number: number;
  index: number;
};

function ContactListItem({ number, index }: ContactListItemProps) {
  const activeChatNumber = useAppSelector((state) => state.activeChat.number);
  const dispatch = useAppDispatch();

  const handleChangeActiveChat = (number: number) => {
    dispatch(changeActiveChat(number));
  };

  return (
    <Wrapper
      onClick={() => handleChangeActiveChat(number)}
      className={`${index === 0 ? 'first-child' : ''} ${
        number === activeChatNumber ? 'active' : ''
      }`}
    >
      <div className='img'>
        <img src={unknown} alt='profile' />
      </div>
      <div className='number'>
        <p>{number}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  height: 7.2rem;
  cursor: pointer;
  align-items: center;
  position: relative;

  &.active {
    background-color: #f0f2f5;
  }

  &:not(.active):hover {
    background-color: #f5f6f6;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% - 7.6rem);
    border: 1px solid #e9edef;
    top: 0;
    right: 0;
  }

  &.first-child:before {
    width: 0%;
  }

  .img {
    padding: 0 1.5rem 0 1.2rem;
    display: flex;
    img {
      width: 4.9rem;
      border: 1px solid grey;
      border-radius: 50%;
    }
  }
  .number {
    height: 4.5rem;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export default ContactListItem;
