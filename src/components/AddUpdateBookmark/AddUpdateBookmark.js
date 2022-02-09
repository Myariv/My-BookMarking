import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOneBookmark,
  UpdateOneBookmark,
} from '../../store/bookmarks/bookmarks-actions';
import AddUpdateForm from './AddUpdateForm';

const inputsReducer = (state, action) => {
  let updatedState = { ...state };

  if (action.type === 'TITLE') {
    if (!action.enterdTitle) {
      updatedState.validTitle = false;
    } else {
      updatedState.validTitle = true;
    }

    updatedState.title = action.enterdTitle;
    return updatedState;
  }

  if (action.type === 'URL') {
    if (
      !action.enterdUrl.startsWith('https://') &&
      !action.enterdUrl.startsWith('http://')
    ) {
      updatedState.validUrl = false;
    } else {
      updatedState.validUrl = true;
    }

    if (!action.enterdUrl) {
      updatedState.validUrl = false;
    }

    updatedState.url = action.enterdUrl;
    return updatedState;
  }

  if (action.type === 'TAGS') {
    if (action.enterdTags.length > 0) {
      updatedState.tags = action.enterdTags.split(',');
      updatedState.validTags = true;
    }

    if (action.enterdTags.endsWith(',')) {
      updatedState.validTags = false;
    }

    if (!action.enterdTags) {
      updatedState.tags = [];
      updatedState.validTags = true;
    }

    return updatedState;
  }

  if (action.type === 'NOTES') {
    updatedState.notes = action.enterdNotes;
    return updatedState;
  }

  if (action.type === 'VALID_FORM') {
    if (updatedState.validTitle && updatedState.validUrl && updatedState.validTags) {
      updatedState.validForm = true;
    } else {
      updatedState.validForm = false;
    }

    return updatedState;
  }

  if (action.type === 'RESET_STATE') {
    return {
      title: '',
      validTitle: null,
      url: '',
      validUrl: null,
      tags: [],
      validTags: null,
      notes: '',
      validForm: false,
    };
  }
};

const AddUpdateBookmark = (props) => {
  const { bookmarkToEdit } = props;
  let inintailState = {};

  if (bookmarkToEdit) {
    inintailState = {
      validTitle: true,
      title: bookmarkToEdit.title,
      validUrl: true,
      tags: bookmarkToEdit.tags,
      validTags: true,
      notes: bookmarkToEdit.notes,
      url: bookmarkToEdit.url,
      id: bookmarkToEdit.id,
      validForm: false,
    };
  } else {
    inintailState = {
      title: '',
      validTitle: null,
      url: '',
      validUrl: null,
      tags: [],
      validTags: null,
      notes: '',
      validForm: false,
    };
  }

  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const [state, dispatch] = useReducer(inputsReducer, inintailState);
  const { validForm } = state;

  const onSubmithHandler = (e) => {
    e.preventDefault();
    dispatch({ type: 'VALID_FORM' });
  };

  useEffect(() => {
    let bookmark = {
      // Refactor
      title: state.title,
      url: state.url,
      tags: state.tags,
      notes: state.notes,
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
    };

    const setBookmark = () => {
      reduxDispatch(addOneBookmark(uid, bookmark)); // state === booksmark in addOneFunction
    };

    const updateBookmark = () => {
      // reduxDispatch(bookmarksActions.updateBookmark({ bookmark: state }));
      bookmark.id = state.id;
      reduxDispatch(UpdateOneBookmark(uid, bookmark));
    };

    if (!validForm) {
      return;
    }

    if (bookmarkToEdit) {
      updateBookmark();
    } else {
      setBookmark();
    }
    dispatch({ type: 'RESET_STATE' });
    navigate('/myBookmarks');
  }, [state, validForm, dispatch, reduxDispatch, navigate, bookmarkToEdit, uid]);

  return (
    <AddUpdateForm
      onSubmithHandler={onSubmithHandler}
      validTitle={state.validTitle}
      validUrl={state.validUrl}
      validTags={state.validTags}
      formIsValid={validForm}
      title={state.title}
      url={state.url}
      tags={state.tags}
      notes={state.notes}
      onDispatch={dispatch}
      isUpdate={bookmarkToEdit ? true : false}
    />
  );
};

export default AddUpdateBookmark;
