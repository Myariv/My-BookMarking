import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    props.onSetSearchTerm(e.target.value);
  };

  return (
    <header className={classes.header}>
      <div className={classes['search-container']}>
        <form onSubmit={submitHandler} className={classes.form}>
          <input
            type='text'
            id='search'
            placeholder='Sreach By Title'
            onChange={changeHandler}
          />
          <button>Search</button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
