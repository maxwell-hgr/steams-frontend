import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Navbar from './components/Navbar';
import Profile from './pages/Profile/Profile';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { profile } from './redux/slices/userSlice';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const { auth } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={auth ? <Home /> : <Navigate to="/login" />} />
            <Route path='/profile' element={auth ? <Profile /> : <Navigate to="/login" />} />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to="/" />} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
