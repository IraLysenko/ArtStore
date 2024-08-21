import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTWORKS } from '../../graphql/queries';
import Header from '../organisms/Header';
import ArtworkCard from '../molecules/ArtworkCard';
import {Link} from "react-router-dom";
import {Artwork} from "../../generated/graphql";

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery<{ artworks: Artwork[] }>(GET_ARTWORKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Art Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.artworks?.map((artwork) => (
            <div
              key={artwork.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <Link to={`/artwork/${artwork.id}`} className="block h-64">
                <img
                  src={artwork?.imageUrl || artwork?.title}
                  alt={artwork?.title}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-bold mb-2">{artwork.title}</h2>
                  <div className="mt-1 mb-3">
                    <Link
                      to={`/artists/${artwork?.artist?.id}`}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      {artwork?.artist?.name}
                    </Link>
                  </div>
                  <p className="text-gray-700 mb-4">{artwork.description}</p>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-lg font-bold">${artwork.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomePage;
