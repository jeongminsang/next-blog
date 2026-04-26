"use client";

import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isModalOpen: boolean;
  onClickCloseModal: () => void;
  children?: ReactNode;
}

function Modal({ isModalOpen, onClickCloseModal, children }: ModalProps) {
  const modalSectionRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isModalOpen);

  useEffect(() => {
    if (isModalOpen) setShouldRender(true);
  }, [isModalOpen]);

  const handleAnimationEnd = () => {
    if (!isModalOpen) setShouldRender(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpen &&
        modalSectionRef.current &&
        !modalSectionRef.current.contains(event.target as Node | null)
      ) {
        onClickCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, onClickCloseModal]);

  if (!shouldRender && !isModalOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[99] flex justify-center items-center ${
        isModalOpen ? "animate-overlay-fade-in" : "animate-overlay-fade-out"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <section
        ref={modalSectionRef}
        className={`fixed top-[100px] w-[500px] h-[500px] bg-background-cr md:w-[454.55px] sm:w-[412px] ${
          isModalOpen ? "animate-modal-open-move" : "animate-modal-close-move"
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
