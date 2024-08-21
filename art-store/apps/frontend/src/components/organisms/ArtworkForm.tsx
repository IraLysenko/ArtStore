import React, { useReducer, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ARTWORK, UPDATE_ARTWORK } from '../../graphql/mutations';
import { GET_ARTWORKS } from '../../graphql/queries';

type ArtworkFormState = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

type ArtworkFormProps = {
  initialData?: {
    id?: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  };
  onClose: () => void;
};

type Action =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_DESCRIPTION'; payload: string }
  | { type: 'SET_PRICE'; payload: number }
  | { type: 'SET_IMAGE_URL'; payload: string }
  | { type: 'RESET_FORM'; payload: ArtworkFormState };

const formReducer = (state: ArtworkFormState, action: Action): ArtworkFormState => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'SET_PRICE':
      return { ...state, price: action.payload };
    case 'SET_IMAGE_URL':
      return { ...state, imageUrl: action.payload };
    case 'RESET_FORM':
      return action.payload;
    default:
      return state;
  }
};

const ArtworkForm: React.FC<ArtworkFormProps> = ({ initialData, onClose }) => {
  const initialState: ArtworkFormState = {
    title: initialData?.title || '',
    description: initialData?.description || '',
    price: initialData?.price || 0,
    imageUrl: initialData?.imageUrl || '',
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const [createArtwork] = useMutation(CREATE_ARTWORK, {
    refetchQueries: [{ query: GET_ARTWORKS }],
  });

  const [updateArtwork] = useMutation(UPDATE_ARTWORK, {
    refetchQueries: [{ query: GET_ARTWORKS }],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (initialData?.id) {
      await updateArtwork({
        variables: { id: initialData.id, input: state },
      });
    } else {
      await createArtwork({
        variables: { input: state },
      });
    }

    onClose();
  };

  useEffect(() => {
    if (initialData) {
      dispatch({ type: 'RESET_FORM', payload: initialState });
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={state.title}
          onChange={(e) => dispatch({ type: 'SET_TITLE', payload: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={state.description}
          onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={state.price}
          onChange={(e) => dispatch({ type: 'SET_PRICE', payload: Number(e.target.value) })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          value={state.imageUrl}
          onChange={(e) => dispatch({ type: 'SET_IMAGE_URL', payload: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="text-right">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {initialData?.id ? 'Update Artwork' : 'Add Artwork'}
        </button>
        <button type="button" onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ArtworkForm;
