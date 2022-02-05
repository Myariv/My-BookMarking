import classes from './NewBookmarkForm.module.css';

const Form = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmithHandler}>
      <section className={classes.inputs}>
        <section className={classes.flex}>
          <div className={classes.input}>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              ref={props.titleInputRef}
              value={props.title}
              onChange={
                props.title
                  ? (e) => {
                      props.onDispatch({ type: 'TITLE', enterdTitle: e.target.value });
                    }
                  : undefined
              }
            />
          </div>
          {!props.state.title && <p className={classes.invalid}>Title Is Required</p>}
        </section>

        <div className={classes.flex}>
          <div className={classes.input}>
            <label htmlFor='url'>URL</label>
            <input
              type='text'
              id='url'
              ref={props.urlInputRef}
              value={props.url}
              onChange={
                props.url
                  ? (e) => {
                      props.onDispatch({ type: 'URL', enterdUrl: e.target.value });
                    }
                  : undefined
              }
            />
          </div>
          {!props.state.url && (
            <p className={classes.invalid}>Invalid Url Must includes (http, https)</p>
          )}
        </div>

        <div className={classes.flex}>
          <div className={classes.input}>
            <label htmlFor='tags'>Tags</label>
            <input
              type='text'
              id='tags'
              ref={props.tagsInputRef}
              value={props.tags}
              onChange={
                props.tags
                  ? (e) => {
                      props.onDispatch({ type: 'TAGS', enterdTags: e.target.value });
                    }
                  : undefined
              }
            />
          </div>
        </div>

        <div className={classes.flex}>
          <div className={classes.input}>
            <label className={classes.start} htmlFor='notes'>
              Notes
            </label>
            <textarea
              id='notes'
              rows={7}
              ref={props.notesInputRef}
              value={props.notes}
              onChange={
                props.notes
                  ? (e) => {
                      props.onDispatch({ type: 'NOTES', enterdNotes: e.target.value });
                    }
                  : undefined
              }
            />
          </div>
        </div>
      </section>
      <button className={classes.button}>{props.onDispatch ? 'UPDATE' : 'ADD'}</button>
    </form>
  );
};

export default Form;
