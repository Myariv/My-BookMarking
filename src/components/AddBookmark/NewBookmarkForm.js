import { useEffect, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bookmarksAction } from '../../store/bookmarks/bookmarks-slice';
import classes from './NewBookmarkForm.module.css';

const inintailState = { title: true, url: true, tags: [], notes: '', validForm: false };

const inputsReducer = (state, action) => {
  let updatedState = { ...state };

  if (action.type === 'TITLE') {
    if (!action.enterdTitle) {
      updatedState.title = false;
      return updatedState;
    }

    updatedState.title = action.enterdTitle;
    return updatedState;
  }

  if (action.type === 'URL') {
    if (!action.enterdUrl.includes('https://') && !action.enterdUrl.includes('http://')) {
      updatedState.url = false;
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

    if (!validForm) {
      return;
    }

    setBookmark();
    clearInputs();
    dispatch({ type: 'RESET_STATE' });
    navigate('/myBookmarks');
  }, [state, validForm, dispatch, reduxDispatch, navigate]);

  return (
    <form className={classes.form} onSubmit={onSubmithHandler}>
      <section className={classes.inputs}>
        <section className={classes.flex}>
          <div className={classes.input}>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' ref={titleInputRef} />
          </div>
          {!state.title && <p className={classes.invalid}>Title Is Required</p>}
        </section>

        <div className={classes.flex}>
          <div className={classes.input}>
            <label htmlFor='url'>URL</label>
            <input type='text' id='url' ref={urlInputRef} />
          </div>
          {!state.url && (
            <p className={classes.invalid}>Invalid Url Must includes (http, https)</p>
          )}
        </div>

        <div className={classes.flex}>
          <div className={classes.input}>
            <label htmlFor='tags'>Tags</label>
            <input type='text' id='tags' ref={tagsInputRef} />
          </div>
        </div>

        <div className={classes.flex}>
          <div className={classes.input}>
            <label className={classes.start} htmlFor='notes'>
              Notes
            </label>
            <textarea id='notes' rows={7} ref={notesInputRef} />
          </div>
        </div>
      </section>
      <button className={classes.button}>Add</button>
    </form>
  );
};

export default NewBookmarkForm;
