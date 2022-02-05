import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import NewBookmarkForm from '../components/AddBookmark/NewBookmarkForm';
import Modal from '../components/Ui/modal/Modal';

const EditBookmark = () => {
  const context = useOutletContext();
  const { editId } = context;
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const bookmarkToEdit = bookmarks.find((single) => single.id === editId);

  return (
    <Modal>
      <NewBookmarkForm bookmarkToEdit={bookmarkToEdit} />
    </Modal>
  );
};

export default EditBookmark;
