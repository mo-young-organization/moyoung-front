import React from 'react';
import ReactDom from 'react-dom';

const RecPotal = ({ children }) => {
  const el = document.getElementById('modalListFilter');
  return ReactDom.createPortal(children, el);
};

export default RecPotal;
