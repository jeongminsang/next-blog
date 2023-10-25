import React, { ReactNode, useEffect, useRef } from 'react';
import useModal from './useModal';
import { MainContainer, ModalSection, ChildrenContents } from '../styles/components/Modal';

interface ModalProps {
  isModalOpen: boolean;
  onClickCloseModal: () => void;
  children?: ReactNode;
}

function Modal({
  isModalOpen,
  onClickCloseModal,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node | null)
      ) {
        onClickCloseModal();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClickCloseModal]);

  const isOpen = useModal(isModalOpen, 100);
  if (!isOpen) return null;
  return (
    <MainContainer>
      <ModalSection ref={modalRef}>
        <ChildrenContents>{children}</ChildrenContents>
        <button onClick={onClickCloseModal}>
          &times;
        </button>
      </ModalSection>
    </MainContainer>
  );
}

export default Modal;
