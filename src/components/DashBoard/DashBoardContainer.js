import classes from './DashBoardContainer.module.css';
import SinglerContainer from './SingleContainer';

const DashBoardContainer = () => {
  return (
    <div className={classes.container}>
      <SinglerContainer />
      <SinglerContainer />
      <SinglerContainer />
    </div>
  );
};

export default DashBoardContainer;
