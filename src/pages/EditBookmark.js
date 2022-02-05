import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import AddUpdateBookmark from '../components/AddUpdateBookmark/AddUpdateBookmark';
import Modal from '../components/Ui/modal/Modal';

const EditBookmark = () => {
  const context = useOutletContext();
  const { editId } = context;
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const bookmarkToEdit = bookmarks.find((single) => single.id === editId);

  return (
    <Modal>
      <AddUpdateBookmark bookmarkToEdit={bookmarkToEdit} />
    </Modal>
  );
};

export default EditBookmark;
