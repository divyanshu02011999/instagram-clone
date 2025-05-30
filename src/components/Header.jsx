import React from 'react';

function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Instagram Clone</h1>
      <input
        type="text"
        className="border p-2 rounded w-1/3"
        placeholder="Search"
      />
    </header>
  );
}

export default Header;
