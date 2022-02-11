import { useSelector } from 'react-redux';
import classes from './DashBoardContainer.module.css';
import SinglerContainer from './SingleContainer';

const DashBoardContainer = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <div className={classes.container}>
      {categories.map((single) => (
        <SinglerContainer key={single.id} id={single.id} categoryName={single.category} />
      ))}
    </div>
  );
};

export default DashBoardContainer;
