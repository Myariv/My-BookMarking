import { useEffect, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bookmarksAction } from '../../store/bookmarks/bookmarks-slice';
import Form from './Form';
// import classes from './NewBookmarkForm.module.css';

let inintailState = { title: true, url: true, tags: [], notes: '', validForm: false };

const inputsReducer = (state, action) => {
  let updatedState = { ...state };

  if (action.type === 'TITLE') {
    if (!action.enterdTitle) {
      updatedState.title = undefined;
      return updatedState;
    }

    updatedState.title = action.enterdTitle;
    return updatedState;
  }

  if (action.type === 'URL') {
    if (
      !action.enterdUrl.startsWith('https://') &&
      !action.enterdUrl.startsWith('http://')
    ) {
      updatedState.url = undefined;
      return updatedState;
    }

    updatedState.url = action.enterdUrl;
    return updatedState;
  }

  if (action.type === 'TAGS') {
    if (action.enterdTags.length > 0) {
      updatedState.tags = action.enterdTags.split(',');
    }
    return updatedState;
  }

  if (action.type === 'NOTES') {
    updatedState.notes = action.enterdNotes;
    return updatedState;
  }

  if (action.type === 'VALID_FORM') {
    if (state.title && state.url) {
      updatedState.validForm = true;
    } else {
      updatedState.validForm = false;
    }
    return updatedState;
  }

  if (action.type === 'RESET_STATE') {
    return { title: true, url: true, tags: [], notes: '', validForm: false };
  }
  return state;
};

const NewBookmarkForm = (props) => {
  const { bookmarkToEdit } = props;

  if (bookmarkToEdit) {
    inintailState = {
      title: bookmarkToEdit.title,
      tags: bookmarkToEdit.tags,
      notes: bookmarkToEdit.notes,
      url: bookmarkToEdit.url,
      id: bookmarkToEdit.id,
    };
  }

  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(inputsReducer, inintailState);

  const { validForm } = state;
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const tagsInputRef = useRef();
  const notesInputRef = useRef();

  const onSubmithHandler = (e) => {
    e.preventDefault();

    const enterdTitle = titleInputRef.current.value;
    const enterdUrl = urlInputRef.current.value;
    let enterdTags = tagsInputRef.current.value;
    const enterdNotes = notesInputRef.current.value;

    dispatch({ type: 'TITLE', enterdTitle });
    dispatch({ type: 'URL', enterdUrl });
    dispatch({ type: 'TAGS', enterdTags });
    dispatch({ type: 'NOTES', enterdNotes });
    dispatch({ type: 'VALID_FORM' });
  };

  const clearInputs = () => {
    titleInputRef.current.value = '';
    urlInputRef.current.value = '';
    tagsInputRef.current.value = '';
    notesInputRef.current.value = '';
  };

  useEffect(() => {
    const setBookmark = () => {
      reduxDispatch(bookmarksAction.addBookmark({ bookmark: state }));
    };

    const updateBookmark = () => {
      reduxDispatch(bookmarksAction.updateBookmark({ bookmark: state }));
    };

    if (!validForm) {
      return;
    }

    if (bookmarkToEdit) {
      updateBookmark();
    } else {
      setBookmark();
    }
    clearInputs();
    dispatch({ type: 'RESET_STATE' });
    navigate('/myBookmarks');
  }, [state, validForm, dispatch, reduxDispatch, navigate, bookmarkToEdit]);

  return (
    <Form
      onSubmithHandler={onSubmithHandler}
      titleInputRef={titleInputRef}
      urlInputRef={urlInputRef}
      tagsInputRef={tagsInputRef}
      notesInputRef={notesInputRef}
      state={state}
      title={bookmarkToEdit && state.title}
      url={bookmarkToEdit && state.url}
      tags={bookmarkToEdit && state.tags}
      notes={bookmarkToEdit && state.notes}
      onDispatch={bookmarkToEdit && dispatch}
    />
  );
};

export default NewBookmarkForm;
