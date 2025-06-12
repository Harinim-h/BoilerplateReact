import React from 'react';

export default function About() {
  return (
    <div className="p-6 text-center max-w-3xl mx-auto mt-12 bg-white rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-6">ABOUT</h1>
      <p className="text-2xl leading-relaxed text-[25px]">
        This is a <strong>React frontend Boilerplate.</strong><br /><br />
        This assignment uses <strong>Vite</strong> or <strong>Create React App</strong> to initialize the project.<br />
        Install <strong>Tailwind CSS</strong> for styling.<br />
        Add <strong>React Router</strong> for page navigation.
      </p>
    </div>
  );
}
