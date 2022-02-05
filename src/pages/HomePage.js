import { Fragment, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth/auth-slice';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

let isRegister;

const HomePage = () => {
  const [credentials, setCredentials] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (credentials) {
    isRegister = credentials.isRegister;
  }

  useEffect(() => {
    const createUser = async (connect) => {
      try {
        const res = await connect(auth, credentials.email, credentials.password);

        const {
          user: { accessToken, uid },
        } = res;

        dispatch(authActions.login({ accessToken, uid }));
        navigate('/dashboard', { replace: true });
      } catch (e) {
        console.log(e); // handle error later !
      }
    };

    if (!credentials) {
      return;
    }

    if (!isRegister) {
      createUser(createUserWithEmailAndPassword);
    } else {
      createUser(signInWithEmailAndPassword);
    }
  }, [credentials, dispatch, navigate]);

  const userAuHandler = (userCredentials) => {
    console.log(userCredentials);
    setCredentials(userCredentials);
  };

  return (
    <Fragment>
      <AuthForm onUserAuHandler={userAuHandler} />
    </Fragment>
  );
};

export default HomePage;
