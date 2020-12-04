import React, { ReactNode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.scss';

interface Props {
  children: ReactNode,
  onClose?: () => void,
}

function Modal({ onClose, children } : Props) {
  const [ element, setElement ] = useState(null)

  useEffect(() => {
    const container = ReactDOM.createPortal(
      <div className={`${styles.modalBackground}`} onClick={onClose} >
        <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.getElementById('modal')!
    );

    setElement(container);
  }, [])

  return element;
}

export default Modal;
