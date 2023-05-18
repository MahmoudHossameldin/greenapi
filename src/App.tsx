import './App.css';
import styled from 'styled-components';
import Contacts from './components/contacts/Contacts';
import Chat from './components/chat/Chat';
import ModalPage from './pages/ModalPage';

function App() {
  return (
    <Wrapper className='App'>
      <ModalPage />
      <div className='container'>
        <div className='col left'>
          <Contacts />
        </div>
        <div className='col right'>
          <Chat />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    display: flex;
  }
  .left {
    width: 30%;
  }
  .right {
    width: 70%;
  }
`;

export default App;
