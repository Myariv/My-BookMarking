import { useParams } from 'react-router-dom';

const EditBookmark = () => {
  const params = useParams();

  console.log(params);
  return <h1>Edit BookMark</h1>;
};

export default EditBookmark;
