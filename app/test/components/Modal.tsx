"use client";

import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import {
  MainContainer,
  ModalSection,
  ChildrenContents,
  CloseModalBtn,
  CloseIcn,
} from "../../styles/components/Modal";

interface ModalProps {
  isModalOpen: boolean;
  onClickCloseModal: () => void;
  children?: ReactNode;
}

function Modal({ isModalOpen, onClickCloseModal, children }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalSectionRef = useRef<HTMLDivElement>(null);
  const isClosing = useRef(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpen &&
        modalSectionRef.current &&
        !modalSectionRef.current.contains(event.target as Node | null)
      ) {
        startCloseAnimation();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, onClickCloseModal]);

  const startCloseAnimation = useCallback(() => {
    if (isClosing.current) return;
    isClosing.current = true;
    const modalContainerElement = modalContainerRef.current;
    const modalElement = modalSectionRef.current;
    if (modalElement && modalContainerElement) {
      modalContainerElement.classList.add("closing");
      modalElement.classList.add("closing");
      setTimeout(() => {
        onClickCloseModal();
        modalContainerElement.classList.remove("closing");
        modalElement.classList.remove("closing");
        isClosing.current = false;
      }, 300);
    } else {
      onClickCloseModal();
      isClosing.current = false;
    }
  }, [onClickCloseModal]);

  if (!isModalOpen && !isClosing.current) return null;

  return (
    <MainContainer
      $ismodalopen={isModalOpen}
      ref={modalContainerRef}
      className={isClosing.current ? "closing" : ""}
    >
      <ModalSection
        $ismodalopen={`${isModalOpen}`}
        ref={modalSectionRef}
        className={isClosing.current ? "closing" : ""}
      >
        <ChildrenContents>{children}</ChildrenContents>
        <CloseModalBtn onClick={startCloseAnimation}>
          <CloseIcn />
        </CloseModalBtn>
      </ModalSection>
    </MainContainer>
  );
}

export default Modal;
