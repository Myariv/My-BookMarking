import { useRef, useState } from 'react';
import { authActions } from '../../store/auth/auth-slice';
import { useSelector, useDispatch } from 'react-redux';
import AuthFormInput from './AuthFormInput';
import classes from './AuthForm.module.css';

const AuthForm = (props) => {
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmaildValid, setIsEmaildValid] = useState(true);
  const [isNamedValid, setIsNamedValid] = useState(true);
  const { isRegister } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const registerHandler = () => {
    dispatch(authActions.register(true));
  };

  const loginHandler = () => {
    dispatch(authActions.register(false));
  };

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    let enteredName;

    if (!isRegister) {
      enteredName = nameInputRef.current.value;
    }
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // validation
    if (!isRegister) {
      if (!enteredName) {
        setIsNamedValid(false);
      } else {
        setIsNamedValid(true);
      }
    }

    if (!enteredEmail || !enteredEmail.includes('@')) {
      setIsEmaildValid(false);
    } else {
      setIsEmaildValid(true);
    }

    if (enteredPassword.length <= 5) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    if (!isRegister) {
      if (!enteredPassword || !enteredEmail || !enteredName) {
        return;
      }
    } else {
      if (!enteredPassword || !enteredEmail) {
        return;
      }
    }

    props.onUserAuHandler({
      email: enteredEmail,
      password: enteredPassword,
      isRegister,
      name: isRegister ? '' : enteredName,
    });

    if (!isRegister) {
      nameInputRef.current.value = '';
    }
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['form__title']}>
          {!isRegister && <p>Register</p>}
          {isRegister && <p>Login</p>}
        </div>

        <div className={classes.inputs}>
          {!isRegister && (
            <AuthFormInput
              label='name'
              title='Name'
              type='text'
              inputRef={nameInputRef}
              isValid={isNamedValid}
              errorMessage={'Name Is Required'}
            />
          )}

          <AuthFormInput
            label='email'
            title='Email'
            type='email'
            inputRef={emailInputRef}
            isValid={isEmaildValid}
            errorMessage={"Invalid Email Must Contain '@'"}
          />
          <AuthFormInput
            label='password'
            title='Password'
            type='password'
            inputRef={passwordInputRef}
            isValid={isPasswordValid}
            errorMessage={'Invalid Password Must Be Atleast 6 Chars'}
          />
        </div>

        <p className={classes.register}>
          {isRegister ? 'To Create New Account' : 'Already Have An Account?'}{' '}
          <button type='button' onClick={isRegister ? loginHandler : registerHandler}>
            Click Here!
          </button>
        </p>

        <div className={classes['form__bottom']}>
          {!isRegister && <button className={classes.button}>Register</button>}
          {isRegister && <button className={classes.button}>Login</button>}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
