import ReactDOM from 'react-dom';
import CredentialsForm from './CredentialsForm';

type ModalProps = {
  closeModal: () => void;
};

function Modal({ closeModal }: ModalProps) {
  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-header'>
          <h2>Please Enter your IdInstance and ApiToken</h2>
          <button className='close-button' onClick={closeModal}>
            Close
          </button>
        </div>
        <div className='modal-body'>
          <CredentialsForm closeModal={closeModal} />
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container') as HTMLDivElement
  );
}

export default Modal;

/*  *** */
