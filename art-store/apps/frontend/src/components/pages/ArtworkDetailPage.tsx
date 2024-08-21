import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARTWORK } from '../../graphql/queries';
import Header from '../organisms/Header';
import DeleteArtworkButton from "../organisms/DeleteArtworkButton";
import ArtworkForm from "../organisms/ArtworkForm";
import Drawer from "../molecules/Drawer";

interface ArtworkProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  artist: {
    name: string;
    biography: string;
  };
}

const ArtworkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_ARTWORK, { variables: { id } });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const artwork: ArtworkProps = data.artwork;

  return (
    <div>
      <Header />
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <h2 className="text-3xl font-bold text-gray-900">{artwork.title}</h2>
            <div className="flex justify-between">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Edit Artwork
              </button>
              <DeleteArtworkButton artworkId={artwork.id}/>

              <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
                <ArtworkForm
                  initialData={artwork}
                  onClose={handleDrawerClose}
                />
              </Drawer></div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Artist</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{artwork.artist.name}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{artwork.description}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Price</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${artwork.price}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:px-6">
                <img src={artwork.imageUrl} alt={artwork.title} className="w-full object-cover object-center"/>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailPage;
