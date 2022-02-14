import { Outlet } from 'react-router-dom';
import SearchBar from '../components/MyBookmarks/SearchBar';
import AllBookMarks from '../components/MyBookmarks/AllBookmarks';

import { Fragment, useState } from 'react';

const MyBookMarks = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Fragment>
      <SearchBar onSetSearchTerm={setSearchTerm} />
      <AllBookMarks searchTerm={searchTerm} />
      <Outlet />
    </Fragment>
  );
};

export default MyBookMarks;
