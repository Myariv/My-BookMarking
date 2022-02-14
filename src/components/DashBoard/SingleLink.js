import { useSelector, useDispatch } from 'react-redux';
import { deleteOneLink } from '../../store/links/links-actions';
import classes from './SingleContainer.module.css';

const SingleLink = (props) => {
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteOneLink(uid, props.id));
  };

  return (
    <li>
      <div className={classes['link-props']}>
        <img src={props.favicon} alt={`${props.title} icon`} />
        <a href={props.url}>{props.title}</a>
      </div>
      <button onClick={deleteHandler}>x</button>
    </li>
  );
};

export default SingleLink;
