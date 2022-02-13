import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddUpdateForm from './AddUpdateForm';

const initialState = { url: '', isValidUrl: true };

const urlReducer = (state, action) => {
  const updatedState = { ...state };

  if (action.type === 'URL') {
    updatedState.url = action.enterdUrl;

    if (
      !updatedState.url.startsWith('https://') &&
      !updatedState.url.startsWith('http://')
    ) {
      updatedState.isValidUrl = false;
      return updatedState;
    }

    updatedState.isValidUrl = true;
    return updatedState;
  }

  return state;
};

const AddUpdateCategoryLink = () => {
  const { uid } = useSelector((state) => state.auth);
  const reduxDispatch = useDispatch();
  const { categoryId } = useParams();

  const [state, dispatch] = useReducer(urlReducer, initialState);
  const { isValidUrl } = state;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isValidUrl) {
      return;
    }

    reduxDispatch();
  };

  const changeHandler = (e) => {
    dispatch({ type: 'URL', enterdUrl: e.target.value });
  };

  return (
    <AddUpdateForm
      onSubmitHandler={submitHandler}
      onChange={changeHandler}
      url={state.url}
      isValidUrl={isValidUrl}
    />
  );
};

export default AddUpdateCategoryLink;
