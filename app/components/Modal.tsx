import React, { ReactNode, useEffect, useRef } from "react";
import useModal from "./useModal";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isModalOpen: boolean;
  onClickCloseModal: () => void;
  children?: ReactNode;
}

function Modal({ isModalOpen, onClickCloseModal, children }: ModalProps) {
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

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickCloseModal]);

  const isOpen = useModal(isModalOpen, 100);
  if (!isOpen) return null;
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center bg-transparent ${
        isModalOpen ? "animate-overlay-fade-in" : "animate-overlay-fade-out"
      }`}
    >
      <section
        ref={modalRef}
        className={`fixed top-[100px] w-[500px] h-[500px] bg-background-cr transition-all duration-300 md:w-[454.55px] sm:w-[412px] ${
          isModalOpen
            ? "animate-modal-open-move opacity-100 scale-100"
            : "animate-modal-close-move opacity-0 scale-95"
        }`}
      >
        <div className="flex flex-col justify-center items-center">{children}</div>
        <button
          onClick={onClickCloseModal}
          className="absolute bottom-0 right-0 text-white p-[5px] pb-[2px] m-[3px] border-none rounded-[10px] bg-gray-500/50 cursor-pointer"
        >
          <IoCloseSharp className="w-[25px] h-[25px]" />
        </button>
      </section>
    </div>
  );
}

export default Modal;
