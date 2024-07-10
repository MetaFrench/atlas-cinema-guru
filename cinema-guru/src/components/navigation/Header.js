import './navigation.css';
import PropTypes from 'prop-types';

import { logoutIcon } from '../../assets/fontIcons';

function Header({ userUsername, setIsLoggedIn }) {
  function Logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <>
      <nav className='header-nav'>
        <p className='cinema-guru'>Cinema Guru</p>
        <img className='profile-img' src="https://picsum.photos/100/100"></img>
        <p className='welcome-user'>Welcome, {userUsername}!</p>
        <span className='header-span' onClick={Logout}>
          {logoutIcon} Logout
        </span>
      </nav>
    </>
  )
}

Header.prototypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}

export default Header;