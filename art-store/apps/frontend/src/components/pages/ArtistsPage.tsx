// src/components/pages/ArtistsPage.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ARTISTS } from '../../graphql/queries';
import {Artist} from "../../generated/graphql";

const ArtistsPage: React.FC = () => {
  const { loading, error, data } = useQuery<{ artists: Artist[] }>(GET_ARTISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.artists.map((artist) => (
          <div key={artist.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{artist.name}</div>
              <p className="text-gray-700 text-base">
                {artist.biography}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {artist.artworks.map(artwork => (
                <span key={artwork.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{artwork.title}</span>
              ))}
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link to={`/artists/${artist.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Artist
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsPage;
