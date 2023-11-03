import React from 'react';
import ReactDom from 'react-dom';

const DistancePotal = ({ children }) => {
  const el = document.getElementById('modalSearchDistance');
  return ReactDom.createPortal(children, el);
};

export default DistancePotal;
