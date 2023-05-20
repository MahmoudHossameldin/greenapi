import ReactDOM from 'react-dom';
import CredentialsForm from './CredentialsForm';
import styled from 'styled-components';

type ModalProps = {
  closeModal: () => void;
};

function Modal({ closeModal }: ModalProps) {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        <div className='modal-header'>
          <h2>Please enter your IdInstance and ApiTokenInstance</h2>
        </div>
        <div className='modal-body'>
          <CredentialsForm closeModal={closeModal} />
        </div>
      </ModalContent>
    </ModalOverlay>,
    document.querySelector('.modal-container') as HTMLDivElement
  );
}

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.8rem;
  width: 60%;

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .modal-header h2 {
    font-size: 1.5rem;
    margin: 5rem 0 0 5rem;
  }

  .modal-body {
    margin-top: 1rem;
  }
`;
