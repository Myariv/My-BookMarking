import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddUpdateBookmark from '../components/AddUpdateBookmark/AddUpdateBookmark';
import Modal from '../components/Ui/modal/Modal';

const EditBookmark = () => {
  const { id } = useParams();

  const { bookmarks } = useSelector((state) => state.bookmarks);
  const bookmarkToEdit = bookmarks.find((single) => single.id === id);

  return (
    <Modal>
      <AddUpdateBookmark bookmarkToEdit={bookmarkToEdit} />
    </Modal>
  );
};

export default EditBookmark;
