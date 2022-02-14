import { Fragment } from 'react';
import MainNav from './MainNav';
import classes from './Layout.module.css';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
