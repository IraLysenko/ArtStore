import { gql } from 'graphql-tag';

const typeDefs = gql`
  # Define the Artwork type
  type Artwork {
    id: ID!                 # Unique identifier for the artwork
    title: String!          # Title of the artwork
    description: String     # Description of the artwork
    artistId: ID!           # The ID of the artist who created the artwork
    artist: Artist          # The artist who created the artwork
  }

  # Define the Artist type
  type Artist {
    id: ID!                 # Unique identifier for the artist
    name: String!           # Name of the artist
    nameBig: String           # Name of the artist
    biography: String       # Biography of the artist
    artworks: [Artwork!]   # List of artworks created by the artist
  }

  # Define the Query type
  type Query {
    # Get all artworks for the homepage grid
    artworks: [Artwork!]!

    # Get a single artwork by ID
    artwork(id: ID!): Artwork

    # Get all artists
    artists: [Artist!]!

    # Get a single artist by ID
    artist(id: ID!): Artist
  }

  # Define the Mutation type
  type Mutation {
    # Create a new artwork
    createArtwork(input: CreateArtworkInput!): CreateArtworkResponse!

    # Update an existing artwork
    updateArtwork(id: ID!, input: UpdateArtworkInput!): UpdateArtworkResponse!

    # Delete an artwork
    deleteArtwork(id: ID!): DeleteArtworkResponse!

    # Create a new artist
    createArtist(input: CreateArtistInput!): CreateArtistResponse!

    # Update an existing artist
    updateArtist(id: ID!, input: UpdateArtistInput!): UpdateArtistResponse!

    # Delete an artist
    deleteArtist(id: ID!): DeleteArtistResponse!
  }

  # Define input type for creating an artwork
  input CreateArtworkInput {
    title: String!
    description: String
    artistId: ID!
  }

  # Define response type for creating an artwork
  type CreateArtworkResponse {
    code: Int!
    success: Boolean!
    message: String!
    artwork: Artwork
  }

  # Define input type for updating an artwork
  input UpdateArtworkInput {
    title: String
    description: String
  }

  # Define response type for updating an artwork
  type UpdateArtworkResponse {
    code: Int!
    success: Boolean!
    message: String!
    artwork: Artwork
  }

  # Define response type for deleting an artwork
  type DeleteArtworkResponse {
    code: Int!
    success: Boolean!
    message: String!
  }

  # Define input type for creating an artist
  input CreateArtistInput {
    name: String!
    biography: String
  }

  # Define response type for creating an artist
  type CreateArtistResponse {
    code: Int!
    success: Boolean!
    message: String!
    artist: Artist
  }

  # Define input type for updating an artist
  input UpdateArtistInput {
    name: String
    biography: String
  }

  # Define response type for updating an artist
  type UpdateArtistResponse {
    code: Int!
    success: Boolean!
    message: String!
    artist: Artist
  }

  # Define response type for deleting an artist
  type DeleteArtistResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;

export default typeDefs;
