import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-6">

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Welcome to the React Boilerplate</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This boilerplate helps you quickly start building React apps with modern tools like Vite, Tailwind CSS, and React Router.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Features Included:</h2>
          <p className="list-disc list-inside text-gray-700 text-base space-y-2">
            Vite for fast development and build.
            Tailwind CSS for styling.
            React Router for navigation.
            Sample pages: Home, About, Login.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
