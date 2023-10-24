import React, { ReactNode, useEffect, useRef } from 'react';
import useModal from './useModal';

interface ModalProps {
  headerText?: string;
  isModalOpen: boolean;
  onClickCloseModal: () => void;
  children?: ReactNode;
}

function Modal({
  headerText,
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
    <div>
      <section ref={modalRef}>
        <header>
          {headerText}
          <button onClick={onClickCloseModal}>
            &times;
          </button>
        </header>
        <main>{children}</main>
      </section>
    </div>
  );
}

export default Modal;
