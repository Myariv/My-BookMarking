import { useNavigate } from 'react-router-dom';
import classes from './DashBoardHeader.module.css';

const DashBoardHeader = () => {
  const nagitate = useNavigate();

  const addCategoryModalHnadler = () => {
    nagitate('/dashboard/addcategory');
  };

  return (
    <div className={classes.container}>
      <div className={classes['container-control']}>
        <button onClick={addCategoryModalHnadler}>+</button>
      </div>
    </div>
  );
};

export default DashBoardHeader;
