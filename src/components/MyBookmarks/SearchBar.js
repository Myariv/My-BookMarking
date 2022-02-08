import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes['search-container']}>
        <form className={classes.form}>
          <input
            type='text'
            id='search'
            placeholder='Sreach By [Title, URL, Tags, Notes]'
          />
          <button>Search</button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
