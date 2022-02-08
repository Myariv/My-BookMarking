import classes from './SingleContainer.module.css';
import SingleLink from './SingleLink';

const SingleContainer = () => {
  return (
    <main className={classes.container}>
      <header className={classes['head-container']}>
        <div className={classes['head-container__control']}>
          <p>Category Name</p>
          <button>X</button>
        </div>
      </header>
      <main className={classes['main-container']}>
        <ul>
          <SingleLink />
        </ul>
      </main>
    </main>
  );
};

export default SingleContainer;
