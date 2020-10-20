import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/ReactAux/ReactAux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        
        <div onClick={props.closed} className={styles.CloseButton}></div> {/* to component */}
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
