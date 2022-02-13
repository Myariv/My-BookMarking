import {
  deleteOneCategory,
  UpdateOneCategory,
} from '../../store/categories/categories-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleLink from './SingleLink';
import classes from './SingleContainer.module.css';

// Little Help Function
const reFuctName = (e) => {
  if (!e.target.value.length) return;
  let reFactName = e.target.value.toLowerCase();
  reFactName = reFactName.replace(reFactName[0], reFactName[0].toUpperCase());
  return reFactName;
};

const SingleContainer = (props) => {
  const [categoryName, setCategoryName] = useState(props.categoryName);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  const delteOneHndler = () => {
    dispatch(deleteOneCategory(uid, props.id));
  };

  const doubleClickHandler = (e) => {
    setIsClicked(true);
  };

  const focusOutUpdateHandler = (e) => {
    setCategoryName(() => {
      const name = reFuctName(e);
      return name;
    });

    if (!e.target.value.length) return;

    setIsClicked(false);
    const name = reFuctName(e);
    dispatch(UpdateOneCategory(uid, props.id, name));
  };

  const addLinkModalHandler = () => {
    navigate(`/dashboard/${props.id}/addlink`);
  };

  return (
    <main className={classes.container}>
      <header className={classes['head-container']}>
        <div className={classes['head-container__control']}>
          {!isClicked && <p onDoubleClick={doubleClickHandler}>{categoryName}</p>}
          {isClicked && (
            <input
              type='text'
              defaultValue={categoryName}
              onBlur={focusOutUpdateHandler}
            ></input>
          )}
          <div className={classes['head-container__controls']}>
            <button onClick={addLinkModalHandler} className={classes.plus}>
              +
            </button>
            <button onClick={delteOneHndler}>X</button>
          </div>
        </div>
      </header>
      <main className={classes['main-container']}>
        <ul></ul>
      </main>
    </main>
  );
};

export default SingleContainer;
