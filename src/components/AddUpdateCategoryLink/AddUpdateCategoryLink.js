import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addOneLink } from '../../store/links/links-actions';
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
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const { categoryId } = useParams();

  const [state, dispatch] = useReducer(urlReducer, initialState);
  const { isValidUrl } = state;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!isValidUrl) {
      return;
    }

    const link = {
      title: state.url.split('.')[1],
      url: state.url,
      own: categoryId,
      favicon: `https://s2.googleusercontent.com/s2/favicons?domain=${state.url}`,
    };

    reduxDispatch(addOneLink(uid, link)).then(() => navigate(-1));
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
