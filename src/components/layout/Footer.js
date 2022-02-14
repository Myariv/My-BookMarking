import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p>
          &#169; All Rights Reserved To <span> Yariv Malca</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
