import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div onClick={props.returnOnceHandler} className={classes.backdrop}></div>;
};

export default Backdrop;
