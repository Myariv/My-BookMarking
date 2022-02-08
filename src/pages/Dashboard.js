import DashBoardContainer from '../components/DashBoard/DashBoardContainer';
import DashBoardHeader from '../components/DashBoard/DashBoardHeader';
import { Fragment } from 'react';

const DashBoard = () => {
  return (
    <Fragment>
      <DashBoardHeader />
      <DashBoardContainer />
    </Fragment>
  );
};

export default DashBoard;
