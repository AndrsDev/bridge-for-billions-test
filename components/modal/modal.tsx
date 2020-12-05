import React, { ReactNode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';

interface Props {
  children: ReactNode,
  onClose: () => void,
}

function Modal({ onClose, children } : Props) {
  return (
    <div className={`${styles.modalBackground}`} onClick={onClose} >
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
