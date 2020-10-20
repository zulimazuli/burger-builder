import React, { useState } from 'react';
import Aux from '../ReactAux/ReactAux';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import styles from './Layout.module.css';

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  // const prevShowSideDrawerRef = useRef(null);
  
  // useEffect(() => {
  //   prevShowSideDrawerRef.current = showSideDrawer;
  // });

  // const prevShowSideDrawer = prevShowSideDrawerRef.current;

  return (
    <Aux>
      <Toolbar drawerToggleClicked={() => setShowSideDrawer(!showSideDrawer)} />
      <SideDrawer
        open={showSideDrawer}        
        closed={() => setShowSideDrawer(false)}
      />
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
