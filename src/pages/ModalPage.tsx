import { useState } from 'react';
import Modal from '../components/modal/Modal';

function ModalPage() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    return <Modal closeModal={closeModal} />;
  }

  return <></>;
}

export default ModalPage;
