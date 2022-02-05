import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SearchBar from '../components/MyBookmarks/SearchBar';
import AllBookMarks from '../components/MyBookmarks/AllBookmarks';

import { Fragment } from 'react';

const MyBookMarks = () => {
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();
  const editHandler = (id) => {
    setEditId(id);
    navigate(`/myBookmarks/${id}`);
  };

  return (
    <Fragment>
      <SearchBar />
      <AllBookMarks onEditHandler={editHandler} />
      <Outlet context={{ editId }} />
    </Fragment>
  );
};

export default MyBookMarks;
