import Modal from './Modal';
import { useSelector } from 'react-redux';
import NewBookmarkForm from '../../AddBookmark/NewBookmarkForm';

const MoadlFrom = (props) => {
  const { editId } = props.context;
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const bookmarkToEdit = bookmarks.find((single) => single.id === editId);

  return (
    <Modal>
      <NewBookmarkForm bookmarkToEdit={bookmarkToEdit} />
    </Modal>
  );
};

export default MoadlFrom;
