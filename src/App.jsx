import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
