import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth/auth-slice';
// import { bookmarksAction } from '../../store/bookmarks/bookmarks-slice';
import ControlButton from '../Ui/ControlButton';
import { useNavigate } from 'react-router-dom';
import classes from './MainNav.module.css';

const MainNav = () => {
  const { isLogin, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch(authActions);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate('/', { replace: true });
  };

  const loginHandler = () => {
    dispatch(authActions.register(true));
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to={isLogin ? '/myBookmarks' : '/'}>BookMarking</Link>
        {name && (
          <p>
            Welcome, <span>{name}</span>
          </p>
        )}
      </div>

      <nav className={classes.nav}>
        <ul>
          <li>{isLogin && <Link to='/myBookmarks'>My Bookmarks</Link>}</li>
          <li>{isLogin && <Link to='/dashboard'>Dashboard</Link>}</li>
        </ul>
        {isLogin && <ControlButton onClick={logoutHandler} label={'Logout'} />}
        {!isLogin && <ControlButton onClick={loginHandler} label={'Login'} />}
      </nav>
    </header>
  );
};

export default MainNav;
