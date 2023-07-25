import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export const createRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotPwd" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};
