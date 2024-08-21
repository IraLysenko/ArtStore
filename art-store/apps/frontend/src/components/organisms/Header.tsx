import React from 'react';
import SearchBar from '../molecules/SearchBar';

const Header: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => (
  <header className="bg-gray-800 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Art Gallery</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  </header>
);
export default Header;
