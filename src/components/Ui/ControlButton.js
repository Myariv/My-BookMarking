import classes from './ControlButton.module.css';

const ControlButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.label}
    </button>
  );
};

export default ControlButton;
