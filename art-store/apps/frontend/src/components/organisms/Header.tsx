import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">Art Gallery</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/artists" className="hover:text-gray-300">Artists</Link>
          </li>
          <li>
            <Link to="/create-artwork" className="hover:text-gray-300">Create Artwork</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

