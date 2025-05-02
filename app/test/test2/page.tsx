"use client";

import React, { useState, useCallback } from "react";
import styled, { css, keyframes } from "styled-components";

const unfoldIn = keyframes`
  0% { transform: scaleX(0) scaleY(0.005); }
  50% { transform: scaleX(1) scaleY(0.005); }
  100% { transform: scaleY(1) scaleX(1); }
`;

const zoomIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const unfoldOut = keyframes`
  0% { transform: scale(1) }
  50% { transform: scaleX(1) scaleY(0.005); }
  100% { transform: scaleX(0) scaleY(0.005); }
`;

const zoomOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

const fadeIn = keyframes`
  0% { background: transparent; }
  100% { background: rgba(0, 0, 0, 0.7); }
`;

const scaleUp = keyframes`
  0% { transform: scale(.8) translateY(1000px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

const scaleBack = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(.8); }
`;

const quickScaleDown = keyframes`
  0% { transform: scale(1); }
  99.9% { transform: scale(1); }
  100% { transform: scale(0); }
`;

const fadeOut = keyframes`
  0% { background: rgba(0, 0, 0, 0.7); }
  100% { background: transparent; }
`;

const scaleDown = keyframes`
  0% { transform: scale(1) translateY(0); opacity: 1; }
  100% { transform: scale(.8) translateY(1000px); opacity: 0; }
`;

const scaleForward = keyframes`
  0% { transform: scale(0.85); }
  100% { transform: scale(1); }
`;

const blowUpModal = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const blowUpContent = keyframes`
  0% { transform: scale(1); opacity: 1; }
  99.9% { transform: scale(2); opacity: 0; }
  100% { transform: scale(0); }
`;

const blowUpModalTwo = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
`;

const blowUpContentTwo = keyframes`
  0% { transform: scale(2); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const Button = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background: #efefef;
  padding: 10px 15px;
  margin: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  color: #333;
  font-weight: bold;

  &:hover {
    color: #fff;
    background: #009bd5;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: table;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: scale(0);

  &.modal-active {
    transform: scale(1);
  }

  &.one {
    animation: ${css`
        ${unfoldIn}`} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

    .modal-background .modal {
      transform: scale(0);
      animation: ${css`
          ${zoomIn}`} 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    &.out {
      transform: scale(1);
      animation: ${css`
          ${unfoldOut}`} 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

      .modal-background .modal {
        animation: ${css`
            ${zoomOut}`} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }

  &.two {
    transform: scale(1);

    .modal-background {
      background: transparent;
      animation: ${css`
          ${fadeIn}`} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    .modal-background .modal {
      opacity: 0;
      animation: ${css`
          ${scaleUp}`} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    &.out {
      animation: ${css`
          ${quickScaleDown}`} 0s 0.5s linear forwards;

      .modal-background {
        animation: ${css`
            ${fadeOut}`} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }

      .modal-background .modal {
        animation: ${css`
            ${scaleDown}`} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
  }

  &.four {
    z-index: 0;
    transform: scale(1);

    .modal-background {
      background: rgba(0, 0, 0, 0.9);

      .modal {
        animation: ${css`
            ${blowUpModal}`} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }

    &.out .modal-background .modal {
      animation: ${css`
          ${blowUpModalTwo}`} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
`;

const ModalBackground = styled.div`
  display: table-cell;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 50px;
  display: inline-block;
  border-radius: 3px;
  position: relative;

  h2 {
    font-size: 25px;
    line-height: 25px;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    line-height: 22px;
  }
`;

const ContentWrapper = styled.div<{
  $modalactive: boolean;
  $animationclass: string;
}>`
  min-height: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  z-index: 0;
  ${({ $animationclass }) =>
    $animationclass === "two" &&
    css`
      animation: ${scaleBack} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      &.out {
        animation: ${scaleForward} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
      }
    `}

  ${({ $animationclass }) =>
    $animationclass === "four" &&
    css`
      z-index: 1;
      animation: ${blowUpContent} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
      &.out {
        animation: ${blowUpContentTwo} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
      }
    `}
`;

export default function ModalAnimations() {
  const [modalActive, setModalActive] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [contentAnimationClass, setContentAnimationClass] = useState("");
  const body = typeof document !== "undefined" ? document.body : null;

  const handleOpenModal = useCallback(
    (id: string) => {
      setAnimationClass(id);
      setContentAnimationClass("");
      setModalActive(true);
      if (body) {
        body.classList.add("modal-active");
      }
      if (id === "two" || id === "three" || id === "four") {
        setContentAnimationClass(id);
      }
    },
    [body]
  );

  const handleCloseModal = useCallback(() => {
    setAnimationClass((prev) => prev + " out");
    setContentAnimationClass((prev) => prev + " out");
    setTimeout(() => {
      setModalActive(false);
      setAnimationClass("");
      setContentAnimationClass("");
      if (body) {
        body.classList.remove("modal-active");
      }
    }, 500); // 애니메이션 시간과 일치
  }, [body]);

  return (
    <>
      <ContentWrapper
        $modalactive={modalActive}
        $animationclass={contentAnimationClass}
      >
        <h1>Modal Animations</h1>
        <div className='buttons'>
          <Button href='#none' id='one' onClick={() => handleOpenModal("one")}>
            Unfolding
          </Button>
          <Button href='#none' id='two' onClick={() => handleOpenModal("two")}>
            Revealing
          </Button>
          <Button
            href='#none'
            id='four'
            onClick={() => handleOpenModal("four")}
          >
            Blow Up
          </Button>
        </div>
      </ContentWrapper>

      <ModalContainer
        id='modal-container'
        className={
          modalActive ? `modal-active ${animationClass}` : animationClass
        }
        onClick={handleCloseModal}
      >
        <ModalBackground className='modal-background'>
          <ModalContent className='modal'>
            <h2>I'm a Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis, similique!
            </p>
          </ModalContent>
        </ModalBackground>
      </ModalContainer>
    </>
  );
}
