import classes from './SingleContainer.module.css';
import SingleLink from './SingleLink';

const SingleContainer = (props) => {
  return (
    <main className={classes.container}>
      <header className={classes['head-container']}>
        <div className={classes['head-container__control']}>
          <p>{props.category}</p>
          <button>X</button>
        </div>
      </header>
      <main className={classes['main-container']}>
        <ul></ul>
      </main>
    </main>
  );
};

export default SingleContainer;
