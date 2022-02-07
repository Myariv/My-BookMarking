import classes from './AuthForm.module.css';

const AuthFormInput = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.label}>{props.title}</label>
      <input type={props.type} id={props.label} ref={props.inputRef} />
      {!props.isValid && <p className={classes.invalid}>{props.errorMessage}</p>}
    </div>
  );
};

export default AuthFormInput;
