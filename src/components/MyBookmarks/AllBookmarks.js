import { deleteOneBookmark } from '../../store/bookmarks/bookmarks-actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './AllBookmarks.module.css';
import SingleBookmark from '../MyBookmarks/SingleBookmark';

const AllBookmarks = (props) => {
  const navigate = useNavigate();
  let { bookmarks } = useSelector((state) => state.bookmarks);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deleteOneHandler = (id) => {
    dispatch(deleteOneBookmark(uid, id));
  };

  const editOneHandler = (id) => {
    navigate(`/myBookmarks/${id}`);
  };

  const addOneHandler = () => {
    navigate('/myBookmarks/add');
  };

  if (props.searchTerm) {
    bookmarks = bookmarks.filter((bookmark) =>
      bookmark.title.toLowerCase().startsWith(props.searchTerm)
    );
  }

  return (
    <main className={classes.main}>
      <div className={classes['head-contol']}>
        <div className={classes['head-control__count']}>
          <p>Total</p> <span>{bookmarks.length}</span>
        </div>
        <div className={classes['head-control__add']}>
          <button onClick={addOneHandler}>Add</button>
        </div>
      </div>

      <div
        className={
          bookmarks.length >= 4 ? classes['container-overflow'] : classes.container
        }
      >
        {bookmarks.map((single) => {
          return (
            <SingleBookmark
              onEditOneHandler={editOneHandler}
              onDeleteOne={deleteOneHandler}
              key={single.id}
              id={single.id}
              title={single.title}
              url={single.url}
              tags={single.tags}
              notes={single.notes}
              date={single.date}
            />
          );
        })}
      </div>
    </main>
  );
};

export default AllBookmarks;
