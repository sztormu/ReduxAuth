import { useDispatch, useSelector } from 'react-redux'

import { authActions } from '../store/index'

import classes from './Header.module.css';

const Header = () => {

  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)


  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  const afterLogin =
    <ul>
      <li>
        <a href='/'>My Products</a>
      </li>
      <li>
        <a href='/'>My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLoggedIn && afterLogin}
      </nav>
    </header>
  );
};

export default Header;
