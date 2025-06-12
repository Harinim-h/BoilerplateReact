import React, { useState } from 'react';
import { loginUser } from '../api/mockAuthApi';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await loginUser(email, password);
      navigate('/dashboard'); // redirect on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">LOGIN</h1>

      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 text-[22px]">Email ID</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-auto  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[17px]"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-700 text-[23px]">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[17px]"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-auto space-y-6 border-2 border-blue-600 text-blue-700 font-semibold py-2 rounded-md hover:bg-blue-700 hover:text-white transition text-[20px]"
        >
          LOGIN
        </button>
      </form>

      <div className=" mt-6">
        <p className="text-gray-700 text-[18px]">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
