// BASE IMPORTS -------------------
// import { useState } from 'react';
import './auth.css';
import PropTypes from 'prop-types';

// COMPONENT IMPORTS --------------------------------
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';

// ICON IMPORTS -------------------------------------------
import { userIcon, keyIcon, keyButtonIcon } from '../../assets/fontIcons';

function Login({ userName, password, setUserName, setPassword }) {
  return (
    <>
      <p className='auth-header'>Sign in with your account</p>
      <Input label='Username:' type='text' className='input auth-input' value={userName} setValue={setUserName} icon={userIcon} />
      <Input label='Password:' type='text' className='input auth-input' value={password} setValue={setPassword} icon={keyIcon} />
      <div className='submit-auth-container'>
        <Button label=' Log In' type='submit' className='button submit-auth-button' onClick={() => {}} icon={keyButtonIcon} />
      </div>
    </>
  )
}

Login.prototypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired
}

export default Login;