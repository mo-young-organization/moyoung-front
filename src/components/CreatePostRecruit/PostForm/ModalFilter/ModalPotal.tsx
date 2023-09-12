import React from 'react';
import ReactDom from 'react-dom';

const ModalPotal = ({ children }) => {
  const el = document.getElementById('modalfilter');
  return ReactDom.createPortal(children, el);
};

export default ModalPotal;
