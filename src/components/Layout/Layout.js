import React, { useState } from 'react';
import Aux from '../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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
