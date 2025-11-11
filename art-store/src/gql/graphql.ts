/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Define the Artist type */
export type Artist = {
  __typename?: 'Artist';
  /** List of artworks by the artist */
  artworks?: Maybe<Array<Artwork>>;
  /** Biography of the artist */
  biography?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the artist */
  id: Scalars['ID']['output'];
  /** Name of the artist */
  name: Scalars['String']['output'];
};

/** Define the Artwork type */
export type Artwork = {
  __typename?: 'Artwork';
  /** The artist who created the artwork */
  artist?: Maybe<Artist>;
  /** The ID of the artist who created the artwork */
  artistId?: Maybe<Scalars['ID']['output']>;
  /** Description of the artwork */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the artwork */
  id: Scalars['ID']['output'];
  /** URL for the artwork image */
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The price of the artwork */
  price?: Maybe<Scalars['Int']['output']>;
  /** Title of the artwork */
  title: Scalars['String']['output'];
};

/** Define input type for creating an artist */
export type CreateArtistInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Define response type for creating an artist */
export type CreateArtistResponse = {
  __typename?: 'CreateArtistResponse';
  artist?: Maybe<Artist>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Define input type for creating an artwork */
export type CreateArtworkInput = {
  artistId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

/** Define response type for creating an artwork */
export type CreateArtworkResponse = {
  __typename?: 'CreateArtworkResponse';
  artwork?: Maybe<Artwork>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Define response type for deleting an artist */
export type DeleteArtistResponse = {
  __typename?: 'DeleteArtistResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Define response type for deleting an artwork */
export type DeleteArtworkResponse = {
  __typename?: 'DeleteArtworkResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Define the Mutation type */
export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new artist */
  createArtist: CreateArtistResponse;
  /** Create a new artwork */
  createArtwork: CreateArtworkResponse;
  /** Delete an artist */
  deleteArtist: DeleteArtistResponse;
  /** Delete an artwork */
  deleteArtwork: DeleteArtworkResponse;
  /** Update an existing artist */
  updateArtist: UpdateArtistResponse;
  /** Update an existing artwork */
  updateArtwork: UpdateArtworkResponse;
};


/** Define the Mutation type */
export type MutationCreateArtistArgs = {
  input: CreateArtistInput;
};


/** Define the Mutation type */
export type MutationCreateArtworkArgs = {
  input: CreateArtworkInput;
};


/** Define the Mutation type */
export type MutationDeleteArtistArgs = {
  id: Scalars['ID']['input'];
};


/** Define the Mutation type */
export type MutationDeleteArtworkArgs = {
  id: Scalars['ID']['input'];
};


/** Define the Mutation type */
export type MutationUpdateArtistArgs = {
  id: Scalars['ID']['input'];
  input: UpdateArtistInput;
};


/** Define the Mutation type */
export type MutationUpdateArtworkArgs = {
  id: Scalars['ID']['input'];
  input: UpdateArtworkInput;
};

/** Define the Query type */
export type Query = {
  __typename?: 'Query';
  /** Get a single artist by ID */
  artist?: Maybe<Artist>;
  /** Get all artists */
  artists: Array<Artist>;
  /** Get a single artwork by ID */
  artwork?: Maybe<Artwork>;
  /** Get all artworks for the homepage grid */
  artworks: Array<Artwork>;
};


/** Define the Query type */
export type QueryArtistArgs = {
  id: Scalars['ID']['input'];
};


/** Define the Query type */
export type QueryArtworkArgs = {
  id: Scalars['ID']['input'];
};

/** Define input type for updating an artist */
export type UpdateArtistInput = {
  biography?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Define response type for updating an artist */
export type UpdateArtistResponse = {
  __typename?: 'UpdateArtistResponse';
  artist?: Maybe<Artist>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Define input type for updating an artwork */
export type UpdateArtworkInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Define response type for updating an artwork */
export type UpdateArtworkResponse = {
  __typename?: 'UpdateArtworkResponse';
  artwork?: Maybe<Artwork>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateArtworkMutationVariables = Exact<{
  input: CreateArtworkInput;
}>;


export type CreateArtworkMutation = { __typename?: 'Mutation', createArtwork: { __typename?: 'CreateArtworkResponse', code: number, success: boolean, message: string, artwork?: { __typename?: 'Artwork', id: string, title: string, description?: string | null, price?: number | null, imageUrl?: string | null } | null } };

export type UpdateArtworkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateArtworkInput;
}>;


export type UpdateArtworkMutation = { __typename?: 'Mutation', updateArtwork: { __typename?: 'UpdateArtworkResponse', code: number, success: boolean, message: string, artwork?: { __typename?: 'Artwork', id: string, title: string, description?: string | null, price?: number | null, imageUrl?: string | null } | null } };

export type DeleteArtworkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteArtworkMutation = { __typename?: 'Mutation', deleteArtwork: { __typename?: 'DeleteArtworkResponse', code: number, success: boolean, message: string } };

export type CreateArtistMutationVariables = Exact<{
  input: CreateArtistInput;
}>;


export type CreateArtistMutation = { __typename?: 'Mutation', createArtist: { __typename?: 'CreateArtistResponse', code: number, success: boolean, message: string, artist?: { __typename?: 'Artist', id: string, name: string, biography?: string | null } | null } };

export type UpdateArtistMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateArtistInput;
}>;


export type UpdateArtistMutation = { __typename?: 'Mutation', updateArtist: { __typename?: 'UpdateArtistResponse', code: number, success: boolean, message: string, artist?: { __typename?: 'Artist', id: string, name: string, biography?: string | null } | null } };

export type DeleteArtistMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteArtistMutation = { __typename?: 'Mutation', deleteArtist: { __typename?: 'DeleteArtistResponse', code: number, success: boolean, message: string } };

export type GetArtworksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArtworksQuery = { __typename?: 'Query', artworks: Array<{ __typename?: 'Artwork', id: string, title: string, description?: string | null, imageUrl?: string | null, price?: number | null, artist?: { __typename?: 'Artist', id: string, name: string, biography?: string | null } | null }> };

export type GetArtworkQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetArtworkQuery = { __typename?: 'Query', artwork?: { __typename?: 'Artwork', id: string, title: string, description?: string | null, price?: number | null, imageUrl?: string | null, artist?: { __typename?: 'Artist', id: string, name: string } | null } | null };

export type GetArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArtistsQuery = { __typename?: 'Query', artists: Array<{ __typename?: 'Artist', id: string, name: string, biography?: string | null, artworks?: Array<{ __typename?: 'Artwork', id: string, title: string, imageUrl?: string | null }> | null }> };

export type GetArtistQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetArtistQuery = { __typename?: 'Query', artist?: { __typename?: 'Artist', id: string, name: string, biography?: string | null, artworks?: Array<{ __typename?: 'Artwork', id: string, title: string, imageUrl?: string | null }> | null } | null };


export const CreateArtworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArtwork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateArtworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArtwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"artwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<CreateArtworkMutation, CreateArtworkMutationVariables>;
export const UpdateArtworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArtwork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateArtworkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArtwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"artwork"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateArtworkMutation, UpdateArtworkMutationVariables>;
export const DeleteArtworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArtwork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteArtwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteArtworkMutation, DeleteArtworkMutationVariables>;
export const CreateArtistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateArtistInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"}}]}}]}}]}}]} as unknown as DocumentNode<CreateArtistMutation, CreateArtistMutationVariables>;
export const UpdateArtistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateArtistInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateArtistMutation, UpdateArtistMutationVariables>;
export const DeleteArtistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteArtistMutation, DeleteArtistMutationVariables>;
export const GetArtworksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArtworks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artworks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtworksQuery, GetArtworksQueryVariables>;
export const GetArtworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArtwork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtworkQuery, GetArtworkQueryVariables>;
export const GetArtistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArtists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"}},{"kind":"Field","name":{"kind":"Name","value":"artworks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistsQuery, GetArtistsQueryVariables>;
export const GetArtistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"}},{"kind":"Field","name":{"kind":"Name","value":"artworks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistQuery, GetArtistQueryVariables>;