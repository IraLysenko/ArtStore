// src/components/pages/ArtistPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARTIST } from '../../graphql/queries';
import {Artist} from "../../generated/graphql";


const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ artist: Artist }, { id: string }>(GET_ARTIST, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="font-bold text-xl mb-2">{data?.artist.name}</div>
      <p>{data?.artist.biography}</p>
      {/* Display artworks or other related information here */}
    </div>
  );
};

export default ArtistPage;
