import React from 'react';
import Aux from '../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar';

import styles from './Layout.module.css';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
