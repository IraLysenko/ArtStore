// import React from 'react';
// import SearchBar from '../molecules/SearchBar';
//
// const Header: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => (
//   <header className="bg-gray-800 p-4 text-white">
//     <div className="container mx-auto flex justify-between items-center">
//       <h1 className="text-3xl font-bold">Art Gallery</h1>
//       //<SearchBar onSearch={onSearch} />
//     </div>
//   </header>
// );
// export default Header;

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
            <Link to="/manage-artwork" className="hover:text-gray-300">Manage Artwork</Link>
          </li>
        </ul>
        {/*<div>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    placeholder="Search..."*/}
        {/*    className="mr-2 p-1 rounded"*/}
        {/*    onKeyPress={(e) => { if (e.key === 'Enter') console.log('Search Term:', e.target.value); }}*/}
        {/*  />*/}
        {/*  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">*/}
        {/*    Search*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </header>
  );
};

export default Header;

