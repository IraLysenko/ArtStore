import { gql } from '@apollo/client';

// Mutation to create a new artwork
export const CREATE_ARTWORK = gql`
  mutation CreateArtwork($input: CreateArtworkInput!) {
    createArtwork(input: $input) {
      code
      success
      message
      artwork {
        id
        title
        description
        price
        imageUrl
      }
    }
  }
`;

// Mutation to update an existing artwork
export const UPDATE_ARTWORK = gql`
  mutation UpdateArtwork($id: ID!, $input: UpdateArtworkInput!) {
    updateArtwork(id: $id, input: $input) {
      code
      success
      message
      artwork {
        id
        title
        description
        price
        imageUrl
      }
    }
  }
`;

// Mutation to delete an artwork
export const DELETE_ARTWORK = gql`
  mutation DeleteArtwork($id: ID!) {
    deleteArtwork(id: $id) {
      code
      success
      message
    }
  }
`;

// Mutation to create a new artist
export const CREATE_ARTIST = gql`
  mutation CreateArtist($input: CreateArtistInput!) {
    createArtist(input: $input) {
      code
      success
      message
      artist {
        id
        name
        biography
      }
    }
  }
`;

// Mutation to update an existing artist
export const UPDATE_ARTIST = gql`
  mutation UpdateArtist($id: ID!, $input: UpdateArtistInput!) {
    updateArtist(id: $id, input: $input) {
      code
      success
      message
      artist {
        id
        name
        biography
      }
    }
  }
`;

// Mutation to delete an artist
export const DELETE_ARTIST = gql`
  mutation DeleteArtist($id: ID!) {
    deleteArtist(id: $id) {
      code
      success
      message
    }
  }
`;
