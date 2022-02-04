import { Fragment } from 'react';
import MainNav from './MainNav';
// import EditBookmark from '../editBookmark/EditBookmark';

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
      {/*<EditBookmark />*/}
    </Fragment>
  );
};

export default Layout;
