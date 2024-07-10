// BASE IMPORTS
import './dashboard.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// COMPONENT IMPORTS -----------------------------------
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';

function Dashboard ({ userUsername, setIsLoggedIn }) {
  // COMPONENT SATES
  const [searchTitle, setSearchTitle] = useState('');

  return (
    <BrowserRouter>
      <div className='dashboard'>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <h1>Dashboard</h1>
        <SideBar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/favorite' element={<Favorites />} />
          <Route path='/watchlater' element={<WatchLater />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
        <h1>Dashboard End</h1>
      </div>
    </BrowserRouter>
  )
}

Dashboard.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
}

export default Dashboard;