import React from 'react';
import ReactDom from 'react-dom';

const CinemaPotal = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDom.createPortal(children, el);
};

export default CinemaPotal;
