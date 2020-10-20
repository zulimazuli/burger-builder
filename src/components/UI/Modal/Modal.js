import React, { useEffect } from 'react';
import Aux from '../../../hoc/ReactAux';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = (props) => {
  //for debug
  useEffect(() => {
    console.log('[Modal] has changed.');
  });

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

const areEqual = (prevProps, nextProps) => {
  return nextProps.show === prevProps.show;
}

export default React.memo(Modal, areEqual);
