import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_ARTWORK } from '../../graphql/mutations';
import { GET_ARTWORKS } from '../../graphql/queries';
import {useNavigate} from "react-router-dom";

type DeleteArtworkButtonProps = {
  artworkId: string;
};

const DeleteArtworkButton: React.FC<DeleteArtworkButtonProps> = ({ artworkId }) => {
  const navigate = useNavigate();
  const [deleteArtwork] = useMutation(DELETE_ARTWORK, {
    refetchQueries: [{ query: GET_ARTWORKS }],
  });

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this artwork?')) {
      deleteArtwork({ variables: { id: artworkId } });
      navigate('/')
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteArtworkButton;
