import classes from './SingleBookmark.module.css';

const SingleBookmark = (props) => {
  const getIdDelHandler = () => {
    props.onDeleteOne(props.id);
  };

  const getIdEditHandler = () => {
    props.onEditOneHandler(props.id);
  };

  return (
    <div className={classes.container}>
      <div className={classes.control}>
        <button onClick={getIdDelHandler} className={classes.button}>
          X
        </button>
        <button onClick={getIdEditHandler} className={classes.button}>
          E
        </button>
      </div>

      <div className={classes.content}>
        <div className={classes['content--header']}>
          <p>{props.title}</p>
          <time>{props.date}</time>
        </div>

        <div className={classes['content--main']}>
          <p>
            <a target='_blank' rel='noreferrer' href={props.url}>
              {props.url}
            </a>
          </p>

          <div className={classes.tags}>
            {props.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>

          <div className={classes.notes}>
            <p>{props.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookmark;
