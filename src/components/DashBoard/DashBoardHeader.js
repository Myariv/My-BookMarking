import classes from './DashBoardHeader.module.css';

const DashBoardHeader = () => {
  return (
    <div className={classes.container}>
      <div className={classes['container-control']}>
        <button>+</button>
      </div>
    </div>
  );
};

export default DashBoardHeader;
