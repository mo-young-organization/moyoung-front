import React from 'react';
import ReactDom from 'react-dom';
import { styled } from 'styled-components';

const ModalOverlay = (props: { children: React.ReactNode }) => {
  return <div className="content">{props.children}</div>;
};

// const AnimationWrapper = styled.div`
//   .sidebar {
//     left: 100%;
//     transition: 0.3s;
//   }

//   .sidebar.active {
//     left: 50%;
//     transition: 0.3s;
//   }
// `;
// const ModalDiv = styled.div`
//   position: fixed;
//   width: 50%;
//   background-color: white;
//   height: 100vh;
//   z-index: 30;
// `;

const portalElement = document.getElementById('overlays');

const Modal = (props: { children: React.ReactNode }) => {
  return (
    <ModalContainer>
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement!)}
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

export default Modal;
