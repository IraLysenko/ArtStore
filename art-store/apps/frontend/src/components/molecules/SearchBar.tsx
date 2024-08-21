import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  return (
    <div className="flex space-x-4">
      <Input value={term} onChange={setTerm} placeholder="Search artworks..." />
      <Button label="Search" onClick={() => onSearch(term)} />
    </div>
  );
};

export default SearchBar;
