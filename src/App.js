import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import necessary components from react-router-dom
import Login from './Login';  // Import the Login component
import Signup from './Signup';  // Import the Signup component
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<h1>Welcome to the App</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
