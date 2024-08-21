import React from 'react';

interface ArtworkCardProps {
  artwork: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  };
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={artwork.imageUrl} alt={artwork.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{artwork.title}</div>
      <p className="text-gray-700 text-base">{artwork.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: ${artwork.price}</span>
    </div>
  </div>
);
export default ArtworkCard;
