import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTWORKS } from '../../graphql/queries';
import Header from '../organisms/Header';
import ArtworkCard from '../molecules/ArtworkCard';
import {Link} from "react-router-dom";

const HomePage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ARTWORKS);

  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header onSearch={(term) => console.log(term)} />
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.artworks.map((artwork: any) => (
            <Link
              to={`/artwork/${artwork.id}`}
              className="block border rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold">{artwork.title}</h3>
                  <p className="text-gray-700 text-sm">{artwork.description}</p>
                </div>
                <p className="text-gray-800 text-sm mt-2 self-end">Price: ${artwork.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
