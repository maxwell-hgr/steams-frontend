import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
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
