import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOneCategory } from '../../store/categories/categories-actions';
import OnlyAddForm from './OnlyAddForm';

const initialState = { categoryName: '', isValidName: true };

const inputReducer = (state, action) => {
  const updatedState = { ...state };

  if (action.type === 'NAME') {
    updatedState.categoryName = action.enterdName;

    if (!updatedState.categoryName) {
      updatedState.isValidName = false;
      return updatedState;
    }

    updatedState.isValidName = true;
    return updatedState;
  }

  return state;
};

const AddUpdateCategory = () => {
  const { uid } = useSelector((state) => state.auth);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(inputReducer, initialState);
  const { isValidName } = state;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isValidName) return;

    let reFactName = state.categoryName.toLowerCase();
    reFactName = reFactName.replace(reFactName[0], reFactName[0].toUpperCase());

    reduxDispatch(addOneCategory(uid, reFactName)).then(() => navigate(-1));
  };

  const changeHandler = (e) => {
    dispatch({ type: 'NAME', enterdName: e.target.value });
  };

  return (
    <OnlyAddForm
      onSubmitHandler={submitHandler}
      isValidName={state.isValidName}
      name={state.categoryName}
      onChange={changeHandler}
    />
  );
};

export default AddUpdateCategory;
