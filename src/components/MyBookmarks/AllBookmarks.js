import { bookmarksAction } from '../../store/bookmarks/bookmarks-slice';
import { useSelector, useDispatch } from 'react-redux';
import classes from './AllBookmarks.module.css';
import SingleBookmark from '../MyBookmarks/SingleBookmark';

const AllBookmarks = () => {
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const deleteOneHandler = (id) => {
    dispatch(bookmarksAction.deleteBookmark({ id }));
  };

  return (
    <main className={classes.main}>
      <div className={classes.count}>
        <p>Total</p> <span>{bookmarks.length}</span>
      </div>

      <div
        className={
          bookmarks.length >= 4 ? classes['container-overflow'] : classes.container
        }
      >
        {bookmarks.map((single) => (
          <SingleBookmark
            onDeleteOne={deleteOneHandler}
            key={single.id}
            id={single.id}
            title={single.title}
            url={single.url}
            tags={single.tags}
            notes={single.notes}
            date={single.date}
          />
        ))}
      </div>
    </main>
  );
};

export default AllBookmarks;
