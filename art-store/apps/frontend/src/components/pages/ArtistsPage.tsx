import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ARTISTS } from '../../graphql/queries';
import Header from '../organisms/Header';
import {Artist} from "../../generated/graphql";

const ArtistsPage: React.FC = () => {
  const { loading, error, data } = useQuery<{ artists: Artist[] }>(GET_ARTISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Artists</h1>
        <div className="space-y-8">
          {data?.artists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 relative">
                {artist.artworks && artist.artworks.length > 0 && artist.artworks[0].imageUrl ? (
                  <Link to={`/artwork/${artist.artworks[0].id}`} className="block h-full">
                    <img
                      src={artist.artworks[0].imageUrl}
                      alt={artist.artworks[0].title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{artist.name}</h2>
                  <p className="text-gray-700 mb-4">{artist.biography}</p>
                </div>
                <div className="flex flex-wrap -mx-2">
                  {artist.artworks?.slice(0, 4).map((artwork) => (
                    <Link
                      key={artwork.id}
                      to={`/artwork/${artwork.id}`}
                      className="relative m-2 block bg-gray-100 p-2 rounded-md shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                      style={{ width: 'calc(50% - 1rem)' }}
                    >
                      {artwork.imageUrl ? (
                        <img
                          src={artwork.imageUrl}
                          alt={artwork.title}
                          className="w-full h-32 object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">{artwork.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Link
                    to={`/artists/${artist.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtistsPage;
