import { gql } from '@apollo/client';

// Query to get all artworks
export const GET_ARTWORKS = gql`
  query getArtworks {
    artworks {
      id
      title
      description
      imageUrl
      price
      artist {
        id
        name
        biography
      }
    }
  }
`;


// Query to get a single artwork by ID
export const GET_ARTWORK = gql`
  query getArtwork($id: ID!) {
    artwork(id: $id) {
      id
      title
      description
      price
      imageUrl
      artist {
        id
        name
      }
    }
  }
`;

// Query to get all artists
export const GET_ARTISTS = gql`
  query getArtists {
    artists {
      id
      name
      biography
      artworks {
        id
        title
        imageUrl
      }
    }
  }
`;

// Query to get a single artist by ID
export const GET_ARTIST = gql`
  query getArtist($id: ID!) {
    artist(id: $id) {
      id
      name
      biography
      artworks {
        id
        title
        imageUrl
      }
    }
  }
`;

