import React, { useState } from 'react';
import ArtworkForm from '../organisms/ArtworkForm';
import { useNavigate } from 'react-router-dom';

const CreateArtworkPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormClose = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create New Artwork</h1>
        <ArtworkForm onClose={handleFormClose} />
        <div className="text-center mt-4">
          {isSubmitting && <p className="text-blue-600">Submitting your artwork...</p>}
        </div>
      </div>
    </div>
  );
};

export default CreateArtworkPage;
