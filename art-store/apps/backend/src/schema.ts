import { gql } from 'graphql-tag';

const typeDefs = gql`
  "Define the Artwork type"
  type Artwork {
    "Unique identifier for the artwork"
    id: ID!
    "Title of the artwork"
    title: String!
    "Description of the artwork"
    description: String
    "The ID of the artist who created the artwork"
    artistId: ID!
    "The artist who created the artwork"
    artist: Artist
    "The price of the artwork"
    price: Int
  }

  "Define the Artist type"
  type Artist {
    id: ID!
    "Unique identifier for the artist"
    name: String!
    "Name of the artist"
    nameBig: String
    "Name of the artist"
    biography: String
    "Biography of the artist"
    artworks: [Artwork!]
  }

  "Define the Query type"
  type Query {
    "Get all artworks for the homepage grid"
    artworks: [Artwork!]!

    "Get a single artwork by ID"
    artwork(id: ID!): Artwork

    "Get all artists"
    artists: [Artist!]!

    "Get a single artist by ID"
    artist(id: ID!): Artist
  }

  "Define the Mutation type"
  type Mutation {
    "Create a new artwork"
    createArtwork(input: CreateArtworkInput!): CreateArtworkResponse!

    "Update an existing artwork"
    updateArtwork(id: ID!, input: UpdateArtworkInput!): UpdateArtworkResponse!

    "Delete an artwork"
    deleteArtwork(id: ID!): DeleteArtworkResponse!

    "Create a new artist"
    createArtist(input: CreateArtistInput!): CreateArtistResponse!

    "Update an existing artist"
    updateArtist(id: ID!, input: UpdateArtistInput!): UpdateArtistResponse!

    "Delete an artist"
    deleteArtist(id: ID!): DeleteArtistResponse!
  }

  "Define input type for creating an artwork"
  input CreateArtworkInput {
    title: String!
    description: String
  }

  "Define response type for creating an artwork"
  type CreateArtworkResponse {
    code: Int!
    success: Boolean!
    message: String!
    artwork: Artwork
  }

  "Define input type for updating an artwork"
  input UpdateArtworkInput {
    title: String
    description: String
  }

  "Define response type for updating an artwork"
  type UpdateArtworkResponse {
    code: Int!
    success: Boolean!
    message: String!
    artwork: Artwork
  }

  "Define response type for deleting an artwork"
  type DeleteArtworkResponse {
    code: Int!
    success: Boolean!
    message: String!
  }

  "Define input type for creating an artist"
  input CreateArtistInput {
    name: String!
    biography: String
  }

  "Define response type for creating an artist"
  type CreateArtistResponse {
    code: Int!
    success: Boolean!
    message: String!
    artist: Artist
  }

  "Define input type for updating an artist"
  input UpdateArtistInput {
    name: String
    biography: String
  }

  "Define response type for updating an artist"
  type UpdateArtistResponse {
    code: Int!
    success: Boolean!
    message: String!
    artist: Artist
  }

  "Define response type for deleting an artist"
  type DeleteArtistResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;

module.exports = typeDefs;
