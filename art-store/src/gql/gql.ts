/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateArtwork($input: CreateArtworkInput!) {\n    createArtwork(input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n": typeof types.CreateArtworkDocument,
    "\n  mutation UpdateArtwork($id: ID!, $input: UpdateArtworkInput!) {\n    updateArtwork(id: $id, input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n": typeof types.UpdateArtworkDocument,
    "\n  mutation DeleteArtwork($id: ID!) {\n    deleteArtwork(id: $id) {\n      code\n      success\n      message\n    }\n  }\n": typeof types.DeleteArtworkDocument,
    "\n  mutation CreateArtist($input: CreateArtistInput!) {\n    createArtist(input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n": typeof types.CreateArtistDocument,
    "\n  mutation UpdateArtist($id: ID!, $input: UpdateArtistInput!) {\n    updateArtist(id: $id, input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n": typeof types.UpdateArtistDocument,
    "\n  mutation DeleteArtist($id: ID!) {\n    deleteArtist(id: $id) {\n      code\n      success\n      message\n    }\n  }\n": typeof types.DeleteArtistDocument,
    "\n  query getArtworks {\n    artworks {\n      id\n      title\n      description\n      imageUrl\n      price\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n": typeof types.GetArtworksDocument,
    "\n  query getArtwork($id: ID!) {\n    artwork(id: $id) {\n      id\n      title\n      description\n      price\n      imageUrl\n      artist {\n        id\n        name\n      }\n    }\n  }\n": typeof types.GetArtworkDocument,
    "\n  query getArtists {\n    artists {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n": typeof types.GetArtistsDocument,
    "\n  query getArtist($id: ID!) {\n    artist(id: $id) {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n": typeof types.GetArtistDocument,
};
const documents: Documents = {
    "\n  mutation CreateArtwork($input: CreateArtworkInput!) {\n    createArtwork(input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n": types.CreateArtworkDocument,
    "\n  mutation UpdateArtwork($id: ID!, $input: UpdateArtworkInput!) {\n    updateArtwork(id: $id, input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n": types.UpdateArtworkDocument,
    "\n  mutation DeleteArtwork($id: ID!) {\n    deleteArtwork(id: $id) {\n      code\n      success\n      message\n    }\n  }\n": types.DeleteArtworkDocument,
    "\n  mutation CreateArtist($input: CreateArtistInput!) {\n    createArtist(input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n": types.CreateArtistDocument,
    "\n  mutation UpdateArtist($id: ID!, $input: UpdateArtistInput!) {\n    updateArtist(id: $id, input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n": types.UpdateArtistDocument,
    "\n  mutation DeleteArtist($id: ID!) {\n    deleteArtist(id: $id) {\n      code\n      success\n      message\n    }\n  }\n": types.DeleteArtistDocument,
    "\n  query getArtworks {\n    artworks {\n      id\n      title\n      description\n      imageUrl\n      price\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n": types.GetArtworksDocument,
    "\n  query getArtwork($id: ID!) {\n    artwork(id: $id) {\n      id\n      title\n      description\n      price\n      imageUrl\n      artist {\n        id\n        name\n      }\n    }\n  }\n": types.GetArtworkDocument,
    "\n  query getArtists {\n    artists {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n": types.GetArtistsDocument,
    "\n  query getArtist($id: ID!) {\n    artist(id: $id) {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n": types.GetArtistDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateArtwork($input: CreateArtworkInput!) {\n    createArtwork(input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArtwork($input: CreateArtworkInput!) {\n    createArtwork(input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateArtwork($id: ID!, $input: UpdateArtworkInput!) {\n    updateArtwork(id: $id, input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateArtwork($id: ID!, $input: UpdateArtworkInput!) {\n    updateArtwork(id: $id, input: $input) {\n      code\n      success\n      message\n      artwork {\n        id\n        title\n        description\n        price\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteArtwork($id: ID!) {\n    deleteArtwork(id: $id) {\n      code\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteArtwork($id: ID!) {\n    deleteArtwork(id: $id) {\n      code\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateArtist($input: CreateArtistInput!) {\n    createArtist(input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArtist($input: CreateArtistInput!) {\n    createArtist(input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateArtist($id: ID!, $input: UpdateArtistInput!) {\n    updateArtist(id: $id, input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateArtist($id: ID!, $input: UpdateArtistInput!) {\n    updateArtist(id: $id, input: $input) {\n      code\n      success\n      message\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteArtist($id: ID!) {\n    deleteArtist(id: $id) {\n      code\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteArtist($id: ID!) {\n    deleteArtist(id: $id) {\n      code\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getArtworks {\n    artworks {\n      id\n      title\n      description\n      imageUrl\n      price\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n"): (typeof documents)["\n  query getArtworks {\n    artworks {\n      id\n      title\n      description\n      imageUrl\n      price\n      artist {\n        id\n        name\n        biography\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getArtwork($id: ID!) {\n    artwork(id: $id) {\n      id\n      title\n      description\n      price\n      imageUrl\n      artist {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getArtwork($id: ID!) {\n    artwork(id: $id) {\n      id\n      title\n      description\n      price\n      imageUrl\n      artist {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getArtists {\n    artists {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query getArtists {\n    artists {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getArtist($id: ID!) {\n    artist(id: $id) {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query getArtist($id: ID!) {\n    artist(id: $id) {\n      id\n      name\n      biography\n      artworks {\n        id\n        title\n        imageUrl\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;