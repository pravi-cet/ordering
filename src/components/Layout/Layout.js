import React from 'react';
import Dummy from '../../hoc/Dummy';
import classes from './Layout.css';

const Layout = (props) => (
  <Dummy>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
    {props.children}
    </main>
  </Dummy>
);

export default Layout;
