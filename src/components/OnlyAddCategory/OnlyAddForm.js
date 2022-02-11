import classes from './OnlyAddForm.module.css';

const AddUpdateForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmitHandler}>
      <section className={classes.inputs}>
        <div className={classes.input}>
          <input
            placeholder='Category Name'
            type='text'
            id='category'
            value={props.name}
            onChange={props.onChange}
          />
          {!props.isValidName && (
            <p className={classes.invalid}>Category Name Is Required</p>
          )}
        </div>
      </section>
      <button className={classes.button}>ADD</button>
    </form>
  );
};

export default AddUpdateForm;
