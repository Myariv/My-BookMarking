import { useRef, useState } from 'react';
import { authActions } from '../../store/auth/auth-slice';
import { useSelector, useDispatch } from 'react-redux';
import classes from './AuthForm.module.css';

const AuthForm = (props) => {
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmaildValid, setIsEmaildValid] = useState(true);
  // const [isRegister, setIsRegister] = useState(false);
  const { isRegister } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const registerHandler = () => {
    // setIsRegister(true);
    dispatch(authActions.register(true));
  };

  const loginHandler = () => {
    //   // setIsRegister(false)
    dispatch(authActions.register(false));
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation
    if (enteredPassword.length <= 5) {
      setIsPasswordValid(false);
      return;
    }

    if (!enteredEmail || !enteredEmail.includes('@')) {
      setIsEmaildValid(false);
      return;
    }

    setIsPasswordValid(true);
    setIsEmaildValid(true);

    props.onUserAuHandler({ email: enteredEmail, password: enteredPassword, isRegister });

    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {!isRegister && <div className={classes.title}>Register</div>}
      {isRegister && <div className={classes.title}>Login</div>}

      <div className={classes.inputs}>
        <div className={classes.input}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' ref={emailInputRef} />
          {!isEmaildValid && (
            <p className={classes.invalid}>Invalid Email Must Contain '@'</p>
          )}
        </div>

        <div className={classes.input}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' ref={passwordInputRef} />
          {!isPasswordValid && (
            <p className={classes.invalid}>Invalid Password Must Be Atleast 6 Chars</p>
          )}
        </div>
      </div>

      <p className={classes.register}>
        {isRegister ? 'To Create New Account' : 'Already Have An Account?'}{' '}
        <button type='button' onClick={isRegister ? loginHandler : registerHandler}>
          Click Here!
        </button>
      </p>

      {!isRegister && <button className={classes.button}>Register</button>}
      {isRegister && <button className={classes.button}>Login</button>}
    </form>
  );
};

export default AuthForm;
