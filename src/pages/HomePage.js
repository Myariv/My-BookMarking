import { Fragment, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth/auth-slice';
import { useNavigate } from 'react-router-dom';
import {
  setUserCredencialsInDB,
  fetchUserCredencialsFromDB,
} from './../store/auth/auth-actions';

import AuthForm from '../components/Auth/AuthForm';

let isRegister;

const HomePage = () => {
  const [credentials, setCredentials] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (credentials) {
    isRegister = credentials.isRegister;
  }

  useEffect(() => {
    const createOrLoginUser = async (connect) => {
      try {
        const res = await connect(auth, credentials.email, credentials.password);

        const {
          user: { uid },
        } = res;

        return { uid, name: credentials.name };
      } catch (e) {
        console.log(e); // handle error later !
      }
    };

    if (!credentials) {
      return;
    }

    if (!isRegister) {
      createOrLoginUser(createUserWithEmailAndPassword).then((credentialsToSingUp) => {
        dispatch(setUserCredencialsInDB(credentialsToSingUp));
        dispatch(
          authActions.login({
            uid: credentialsToSingUp.uid,
            name: credentialsToSingUp.name,
          })
        );
        navigate('/myBookmarks', { replace: true });
      });
    } else {
      createOrLoginUser(signInWithEmailAndPassword)
        .then((credentialsToSingIn) => {
          return dispatch(fetchUserCredencialsFromDB(credentialsToSingIn));
        })
        .then((credentialsToSingIn) => {
          dispatch(
            authActions.login({
              uid: credentialsToSingIn.uid,
              name: credentialsToSingIn.name,
            })
          );
          navigate('/myBookmarks', { replace: true });
        });
    }
  }, [credentials, dispatch, navigate]);

  const userAuHandler = (userCredentials) => {
    setCredentials(userCredentials); // Getting From Form!!
  };

  return (
    <Fragment>
      <AuthForm onUserAuHandler={userAuHandler} />
    </Fragment>
  );
};

export default HomePage;
