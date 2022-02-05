import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Backdrop from './Backdrop';
import classes from './Modal.module.css';

const ModalForm = (props) => {
  const navigate = useNavigate();

  const returnOnce = () => {
    navigate(-1);
  };

  return (
    <Fragment>
      <Backdrop returnOnceHandler={returnOnce} />
      <main className={classes.modal}>{props.children}</main>
    </Fragment>
  );
};

export default ModalForm;
