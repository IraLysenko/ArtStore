import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARTIST } from '../../graphql/queries'; // Adjust the path as necessary

import Header from '../organisms/Header';
import {Artist} from "../../generated/graphql"; // Assuming Header component is in organisms

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ artist: Artist }, { id: string }>(GET_ARTIST, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const artist = data?.artist;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{artist?.name}</h1>
          <p className="text-gray-700 mb-6">{artist?.biography}</p>

          <h2 className="text-2xl font-semibold mb-4">Artworks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artist?.artworks?.map((artwork) => (
              <Link
                key={artwork?.id}
                to={`/artwork/${artwork?.id}`}
                className="block bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={artwork?.imageUrl || artwork?.title}
                  alt={artwork?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{artwork.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistPage;
