import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser, getCurrentUser } from '../api/mockAuthApi';

export default function Dashboard() {
  const navigate = useNavigate();
  const userEmail = getCurrentUser(); // safer and reusable

  useEffect(() => {
    // if no user is logged in, redirect to login
    if (!userEmail) {
      navigate('/login');
    }
  }, [userEmail, navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate('/'); // redirect to home after logout
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md text-center">
      <h1 className="text-3xl font-bold mb-6">
        Welcome{userEmail ? `, ${userEmail}` : ''}!
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-2xl text-[17px]"
      >
        Logout
      </button>
    </div>
  );
}
