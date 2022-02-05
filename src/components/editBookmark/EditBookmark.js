import ModalForm from '../Ui/modal/ModalForm';
import { useOutletContext } from 'react-router-dom';

const EditBookmark = (props) => {
  const context = useOutletContext();

  return <ModalForm context={context} />;
};

export default EditBookmark;
