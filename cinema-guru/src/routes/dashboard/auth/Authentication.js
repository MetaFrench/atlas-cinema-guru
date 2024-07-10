// BASE IMPORTS -------------------
import { useState } from 'react';
import './auth.css';
import PropTypes from 'prop-types';
import axios from 'axios';

// COMPONENT IMPORTS --------------------------------
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, set_switch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
    const data = { username, password };

    // console.log('Submitting to URL:', url);
    // console.log('Data:', data);

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      console.log('Response:', response);

      if (response.data.accessToken) {
        console.log(`Authentication js Success!`);
        localStorage.setItem('accessToken', response.data.accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  function handleSignIn() {
    set_switch(true);
  }
  function handleSignUp() {
    set_switch(false);
  }

  return (
    <>
      <form className='authForm' onSubmit={handleSubmit}>
        {_switch ? <div>
          <Button label='Sign In' className='inactive-button auth-button' onClick={handleSignIn} />
          <Button label='Sign Up' className='active-button auth-button' onClick={handleSignUp} />
          <Login userName={username} password={password} setUserName={setUsername} setPassword={setPassword} />
        </div> : <div>
          <Button label='Sign In' className='active-button auth-button' onClick={handleSignIn} />
          <Button label='Sign Up' className='inactive-button auth-button' onClick={handleSignUp} />
          <Register userName={username} password={password} setUserName={setUsername} setPassword={setPassword} />
        </div>}
      </form>
    </>
  )
}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserUsername: PropTypes.func.isRequired
}

export default Authentication;