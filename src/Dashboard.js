import React, { useState } from 'react';
import { auth, db } from './firebase';  // Import auth and Firestore db from Firebase
import { collection, addDoc } from 'firebase/firestore';  // Import Firestore functions
import { signOut } from 'firebase/auth';  // Import the signOut function from Firebase auth
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection

const Dashboard = () => {
  const user = auth.currentUser;  // Get the current logged-in user
  const navigate = useNavigate();  // Hook to navigate to different routes
  const [inputData, setInputData] = useState('');  // State to store input data
  const [error, setError] = useState(null);  // State to store errors

  // Function to handle adding data to Firestore
  const handleAddData = async (data) => {
    try {
      await addDoc(collection(db, "userData"), {
        content: data,
        userId: auth.currentUser.uid,  // Associate data with the logged-in user
        timestamp: new Date(),
      });
      console.log('Data added');
      setInputData('');  // Clear the input field after submission
      setError(null);  // Clear any error
    } catch (error) {
      console.error('Error adding data:', error);
      setError(error.message);  // Set error message
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    if (inputData.trim() !== '') {
      handleAddData(inputData);  // Add data to Firestore
    } else {
      setError('Input field cannot be empty');
    }
  };

  // Function to handle logging out
  const handleLogout = async () => {
    try {
      await signOut(auth);  // Sign out the current user
      console.log('User signed out');
      navigate('/');  // Redirect to home page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to your dashboard, {user?.email}</h1>
      
      {/* Display user-specific data */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter data"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}  // Update state on input change
        />
        <button type="submit">Add Data</button>
      </form>

      {/* Display error if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Logout Button */}
      <button onClick={handleLogout} style={{ marginTop: '20px' }}>Logout</button>
    </div>
  );
};

export default Dashboard;
