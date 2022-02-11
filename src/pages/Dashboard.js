import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardContainer from '../components/DashBoard/DashBoardContainer';
import DashBoardHeader from '../components/DashBoard/DashBoardHeader';

const DashBoard = () => {
  return (
    <Fragment>
      <DashBoardHeader />
      <DashBoardContainer />
      <Outlet />
    </Fragment>
  );
};

export default DashBoard;
