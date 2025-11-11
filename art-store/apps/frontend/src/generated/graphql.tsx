import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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
  artworks: Maybe<Array<Artwork>>;
  /** Biography of the artist */
  biography: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the artist */
  id: Scalars['ID']['output'];
  /** Name of the artist */
  name: Scalars['String']['output'];
};

/** Define the Artwork type */
export type Artwork = {
  __typename?: 'Artwork';
  /** The artist who created the artwork */
  artist: Maybe<Artist>;
  /** The ID of the artist who created the artwork */
  artistId: Maybe<Scalars['ID']['output']>;
  /** Description of the artwork */
  description: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the artwork */
  id: Scalars['ID']['output'];
  /** URL for the artwork image */
  imageUrl: Maybe<Scalars['String']['output']>;
  /** The price of the artwork */
  price: Maybe<Scalars['Int']['output']>;
  /** Title of the artwork */
  title: Scalars['String']['output'];
};

/** Define input type for creating an artist */
export type CreateArtistInput = {
  biography: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Define response type for creating an artist */
export type CreateArtistResponse = {
  __typename?: 'CreateArtistResponse';
  artist: Maybe<Artist>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Define input type for creating an artwork */
export type CreateArtworkInput = {
  artistId: Scalars['ID']['input'];
  description: InputMaybe<Scalars['String']['input']>;
  imageUrl: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

/** Define response type for creating an artwork */
export type CreateArtworkResponse = {
  __typename?: 'CreateArtworkResponse';
  artwork: Maybe<Artwork>;
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
  artist: Maybe<Artist>;
  /** Get all artists */
  artists: Array<Artist>;
  /** Get a single artwork by ID */
  artwork: Maybe<Artwork>;
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
  biography: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

/** Define response type for updating an artist */
export type UpdateArtistResponse = {
  __typename?: 'UpdateArtistResponse';
  artist: Maybe<Artist>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Define input type for updating an artwork */
export type UpdateArtworkInput = {
  description: InputMaybe<Scalars['String']['input']>;
  imageUrl: InputMaybe<Scalars['String']['input']>;
  price: InputMaybe<Scalars['Int']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

/** Define response type for updating an artwork */
export type UpdateArtworkResponse = {
  __typename?: 'UpdateArtworkResponse';
  artwork: Maybe<Artwork>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateArtworkMutationVariables = Exact<{
  input: CreateArtworkInput;
}>;


export type CreateArtworkMutation = { __typename?: 'Mutation', createArtwork: { __typename?: 'CreateArtworkResponse', code: number, success: boolean, message: string, artwork: { __typename?: 'Artwork', id: string, title: string, description: string | null, price: number | null, imageUrl: string | null } | null } };

export type UpdateArtworkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateArtworkInput;
}>;


export type UpdateArtworkMutation = { __typename?: 'Mutation', updateArtwork: { __typename?: 'UpdateArtworkResponse', code: number, success: boolean, message: string, artwork: { __typename?: 'Artwork', id: string, title: string, description: string | null, price: number | null, imageUrl: string | null } | null } };

export type DeleteArtworkMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteArtworkMutation = { __typename?: 'Mutation', deleteArtwork: { __typename?: 'DeleteArtworkResponse', code: number, success: boolean, message: string } };

export type CreateArtistMutationVariables = Exact<{
  input: CreateArtistInput;
}>;


export type CreateArtistMutation = { __typename?: 'Mutation', createArtist: { __typename?: 'CreateArtistResponse', code: number, success: boolean, message: string, artist: { __typename?: 'Artist', id: string, name: string, biography: string | null } | null } };

export type UpdateArtistMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateArtistInput;
}>;


export type UpdateArtistMutation = { __typename?: 'Mutation', updateArtist: { __typename?: 'UpdateArtistResponse', code: number, success: boolean, message: string, artist: { __typename?: 'Artist', id: string, name: string, biography: string | null } | null } };

export type DeleteArtistMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteArtistMutation = { __typename?: 'Mutation', deleteArtist: { __typename?: 'DeleteArtistResponse', code: number, success: boolean, message: string } };

export type GetArtworksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArtworksQuery = { __typename?: 'Query', artworks: Array<{ __typename?: 'Artwork', id: string, title: string, description: string | null, imageUrl: string | null, price: number | null, artist: { __typename?: 'Artist', id: string, name: string, biography: string | null } | null }> };

export type GetArtworkQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetArtworkQuery = { __typename?: 'Query', artwork: { __typename?: 'Artwork', id: string, title: string, description: string | null, price: number | null, imageUrl: string | null, artist: { __typename?: 'Artist', id: string, name: string } | null } | null };

export type GetArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArtistsQuery = { __typename?: 'Query', artists: Array<{ __typename?: 'Artist', id: string, name: string, biography: string | null, artworks: Array<{ __typename?: 'Artwork', id: string, title: string, imageUrl: string | null }> | null }> };

export type GetArtistQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetArtistQuery = { __typename?: 'Query', artist: { __typename?: 'Artist', id: string, name: string, biography: string | null, artworks: Array<{ __typename?: 'Artwork', id: string, title: string, imageUrl: string | null }> | null } | null };


export const CreateArtworkDocument = gql`
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
export type CreateArtworkMutationFn = Apollo.MutationFunction<CreateArtworkMutation, CreateArtworkMutationVariables>;

/**
 * __useCreateArtworkMutation__
 *
 * To run a mutation, you first call `useCreateArtworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArtworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArtworkMutation, { data, loading, error }] = useCreateArtworkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArtworkMutation(baseOptions?: Apollo.MutationHookOptions<CreateArtworkMutation, CreateArtworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArtworkMutation, CreateArtworkMutationVariables>(CreateArtworkDocument, options);
      }
export type CreateArtworkMutationHookResult = ReturnType<typeof useCreateArtworkMutation>;
export type CreateArtworkMutationResult = Apollo.MutationResult<CreateArtworkMutation>;
export type CreateArtworkMutationOptions = Apollo.BaseMutationOptions<CreateArtworkMutation, CreateArtworkMutationVariables>;
export const UpdateArtworkDocument = gql`
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
export type UpdateArtworkMutationFn = Apollo.MutationFunction<UpdateArtworkMutation, UpdateArtworkMutationVariables>;

/**
 * __useUpdateArtworkMutation__
 *
 * To run a mutation, you first call `useUpdateArtworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArtworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArtworkMutation, { data, loading, error }] = useUpdateArtworkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateArtworkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArtworkMutation, UpdateArtworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArtworkMutation, UpdateArtworkMutationVariables>(UpdateArtworkDocument, options);
      }
export type UpdateArtworkMutationHookResult = ReturnType<typeof useUpdateArtworkMutation>;
export type UpdateArtworkMutationResult = Apollo.MutationResult<UpdateArtworkMutation>;
export type UpdateArtworkMutationOptions = Apollo.BaseMutationOptions<UpdateArtworkMutation, UpdateArtworkMutationVariables>;
export const DeleteArtworkDocument = gql`
    mutation DeleteArtwork($id: ID!) {
  deleteArtwork(id: $id) {
    code
    success
    message
  }
}
    `;
export type DeleteArtworkMutationFn = Apollo.MutationFunction<DeleteArtworkMutation, DeleteArtworkMutationVariables>;

/**
 * __useDeleteArtworkMutation__
 *
 * To run a mutation, you first call `useDeleteArtworkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArtworkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArtworkMutation, { data, loading, error }] = useDeleteArtworkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArtworkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArtworkMutation, DeleteArtworkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArtworkMutation, DeleteArtworkMutationVariables>(DeleteArtworkDocument, options);
      }
export type DeleteArtworkMutationHookResult = ReturnType<typeof useDeleteArtworkMutation>;
export type DeleteArtworkMutationResult = Apollo.MutationResult<DeleteArtworkMutation>;
export type DeleteArtworkMutationOptions = Apollo.BaseMutationOptions<DeleteArtworkMutation, DeleteArtworkMutationVariables>;
export const CreateArtistDocument = gql`
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
export type CreateArtistMutationFn = Apollo.MutationFunction<CreateArtistMutation, CreateArtistMutationVariables>;

/**
 * __useCreateArtistMutation__
 *
 * To run a mutation, you first call `useCreateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArtistMutation, { data, loading, error }] = useCreateArtistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArtistMutation(baseOptions?: Apollo.MutationHookOptions<CreateArtistMutation, CreateArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArtistMutation, CreateArtistMutationVariables>(CreateArtistDocument, options);
      }
export type CreateArtistMutationHookResult = ReturnType<typeof useCreateArtistMutation>;
export type CreateArtistMutationResult = Apollo.MutationResult<CreateArtistMutation>;
export type CreateArtistMutationOptions = Apollo.BaseMutationOptions<CreateArtistMutation, CreateArtistMutationVariables>;
export const UpdateArtistDocument = gql`
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
export type UpdateArtistMutationFn = Apollo.MutationFunction<UpdateArtistMutation, UpdateArtistMutationVariables>;

/**
 * __useUpdateArtistMutation__
 *
 * To run a mutation, you first call `useUpdateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArtistMutation, { data, loading, error }] = useUpdateArtistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateArtistMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArtistMutation, UpdateArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArtistMutation, UpdateArtistMutationVariables>(UpdateArtistDocument, options);
      }
export type UpdateArtistMutationHookResult = ReturnType<typeof useUpdateArtistMutation>;
export type UpdateArtistMutationResult = Apollo.MutationResult<UpdateArtistMutation>;
export type UpdateArtistMutationOptions = Apollo.BaseMutationOptions<UpdateArtistMutation, UpdateArtistMutationVariables>;
export const DeleteArtistDocument = gql`
    mutation DeleteArtist($id: ID!) {
  deleteArtist(id: $id) {
    code
    success
    message
  }
}
    `;
export type DeleteArtistMutationFn = Apollo.MutationFunction<DeleteArtistMutation, DeleteArtistMutationVariables>;

/**
 * __useDeleteArtistMutation__
 *
 * To run a mutation, you first call `useDeleteArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArtistMutation, { data, loading, error }] = useDeleteArtistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArtistMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArtistMutation, DeleteArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArtistMutation, DeleteArtistMutationVariables>(DeleteArtistDocument, options);
      }
export type DeleteArtistMutationHookResult = ReturnType<typeof useDeleteArtistMutation>;
export type DeleteArtistMutationResult = Apollo.MutationResult<DeleteArtistMutation>;
export type DeleteArtistMutationOptions = Apollo.BaseMutationOptions<DeleteArtistMutation, DeleteArtistMutationVariables>;
export const GetArtworksDocument = gql`
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

/**
 * __useGetArtworksQuery__
 *
 * To run a query within a React component, call `useGetArtworksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtworksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtworksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArtworksQuery(baseOptions?: Apollo.QueryHookOptions<GetArtworksQuery, GetArtworksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtworksQuery, GetArtworksQueryVariables>(GetArtworksDocument, options);
      }
export function useGetArtworksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtworksQuery, GetArtworksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtworksQuery, GetArtworksQueryVariables>(GetArtworksDocument, options);
        }
export function useGetArtworksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetArtworksQuery, GetArtworksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArtworksQuery, GetArtworksQueryVariables>(GetArtworksDocument, options);
        }
export type GetArtworksQueryHookResult = ReturnType<typeof useGetArtworksQuery>;
export type GetArtworksLazyQueryHookResult = ReturnType<typeof useGetArtworksLazyQuery>;
export type GetArtworksSuspenseQueryHookResult = ReturnType<typeof useGetArtworksSuspenseQuery>;
export type GetArtworksQueryResult = Apollo.QueryResult<GetArtworksQuery, GetArtworksQueryVariables>;
export const GetArtworkDocument = gql`
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

/**
 * __useGetArtworkQuery__
 *
 * To run a query within a React component, call `useGetArtworkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtworkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtworkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArtworkQuery(baseOptions: Apollo.QueryHookOptions<GetArtworkQuery, GetArtworkQueryVariables> & ({ variables: GetArtworkQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtworkQuery, GetArtworkQueryVariables>(GetArtworkDocument, options);
      }
export function useGetArtworkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtworkQuery, GetArtworkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtworkQuery, GetArtworkQueryVariables>(GetArtworkDocument, options);
        }
export function useGetArtworkSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetArtworkQuery, GetArtworkQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArtworkQuery, GetArtworkQueryVariables>(GetArtworkDocument, options);
        }
export type GetArtworkQueryHookResult = ReturnType<typeof useGetArtworkQuery>;
export type GetArtworkLazyQueryHookResult = ReturnType<typeof useGetArtworkLazyQuery>;
export type GetArtworkSuspenseQueryHookResult = ReturnType<typeof useGetArtworkSuspenseQuery>;
export type GetArtworkQueryResult = Apollo.QueryResult<GetArtworkQuery, GetArtworkQueryVariables>;
export const GetArtistsDocument = gql`
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

/**
 * __useGetArtistsQuery__
 *
 * To run a query within a React component, call `useGetArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArtistsQuery(baseOptions?: Apollo.QueryHookOptions<GetArtistsQuery, GetArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistsQuery, GetArtistsQueryVariables>(GetArtistsDocument, options);
      }
export function useGetArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistsQuery, GetArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistsQuery, GetArtistsQueryVariables>(GetArtistsDocument, options);
        }
export function useGetArtistsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetArtistsQuery, GetArtistsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArtistsQuery, GetArtistsQueryVariables>(GetArtistsDocument, options);
        }
export type GetArtistsQueryHookResult = ReturnType<typeof useGetArtistsQuery>;
export type GetArtistsLazyQueryHookResult = ReturnType<typeof useGetArtistsLazyQuery>;
export type GetArtistsSuspenseQueryHookResult = ReturnType<typeof useGetArtistsSuspenseQuery>;
export type GetArtistsQueryResult = Apollo.QueryResult<GetArtistsQuery, GetArtistsQueryVariables>;
export const GetArtistDocument = gql`
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

/**
 * __useGetArtistQuery__
 *
 * To run a query within a React component, call `useGetArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArtistQuery(baseOptions: Apollo.QueryHookOptions<GetArtistQuery, GetArtistQueryVariables> & ({ variables: GetArtistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
      }
export function useGetArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
        }
export function useGetArtistSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetArtistQuery, GetArtistQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArtistQuery, GetArtistQueryVariables>(GetArtistDocument, options);
        }
export type GetArtistQueryHookResult = ReturnType<typeof useGetArtistQuery>;
export type GetArtistLazyQueryHookResult = ReturnType<typeof useGetArtistLazyQuery>;
export type GetArtistSuspenseQueryHookResult = ReturnType<typeof useGetArtistSuspenseQuery>;
export type GetArtistQueryResult = Apollo.QueryResult<GetArtistQuery, GetArtistQueryVariables>;