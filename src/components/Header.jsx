import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styles

function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Instagram Clone</h1>
      <nav className="space-x-4">
        <a href="#" className="text-white hover:text-gray-400">Home</a>
        <a href="#" className="text-white hover:text-gray-400">Profile</a>
        <a href="#" className="text-white hover:text-gray-400">Messages</a>
        <a href="#" className="text-white hover:text-gray-400">Settings</a> 
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-400">Login</a>
        <a href="#" className="text-white hover:text-gray-400">Sign Up</a>
      </div>
      <div className="flex items-center space-x-2">   
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full w-10 h-10"
        />
     </div>
        <input
        type="text"
        className="border p-2 rounded w-1/3"
        placeholder="Search"
      />
    </header>
  );
}

export default Header;
