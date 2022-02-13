import classes from './AddUpdateForm.module.css';

const AddUpdateForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmitHandler}>
      <section className={classes.inputs}>
        <div className={classes.input}>
          <input
            placeholder='URL'
            type='text'
            id='url'
            onChange={props.onChange}
            value={props.url}
          />
          {!props.isValidUrl && (
            <p className={classes.invalid}>Invalid Url: Must includes (http, https)</p>
          )}
        </div>
      </section>
      <button className={classes.button}>ADD</button>
    </form>
  );
};

export default AddUpdateForm;
