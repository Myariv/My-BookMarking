import SearchBar from '../components/MyBookmarks/SearchBar';
import AllBookMarks from '../components/MyBookmarks/AllBookmarks';

import { Fragment } from 'react';

const MyBookMarks = () => {
  return (
    <Fragment>
      <SearchBar />
      <AllBookMarks />
    </Fragment>
  );
};

export default MyBookMarks;
