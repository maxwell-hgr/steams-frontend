import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Navbar from './components/Navbar';
import Profile from './pages/Profile/Profile';
import { useAuth } from './hooks/useAuth';
import { profile } from './redux/slices/userSlice';

import Lobby from './pages/Lobby/Lobby';
import Games from './pages/Games/Games';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const { auth } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) dispatch(profile());
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={auth ? <Home /> : <Navigate to="/login" />} />
            <Route path='/profile' element={auth ? <Profile /> : <Navigate to="/login" />} />
            <Route path='/lobby' element={auth ? <Lobby /> : <Navigate to="/login" />} />
            <Route path='/games' element={auth ? <Games /> : <Navigate to="/login" />} />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to="/" />} />
            <Route path='/logout' element={!auth ? <Login /> : <Navigate to="/" />} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
