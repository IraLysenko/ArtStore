const resolvers = {
  Query: {
    // Fetch all artworks
    artworks:  (_, __, { dataSources }) => {
      return dataSources.jsonServerAPI.getArtworks();
    },
    // Fetch a single artwork by ID
    artwork: (_, { id }, { dataSources }) => {
      return dataSources.jsonServerAPI.getArtworkById(id);
    },
    // Fetch all artists
    artists:  (_, __, { dataSources }) => {
      return  dataSources.jsonServerAPI.getArtists();
    },
    // Fetch a single artist by ID
    artist:  (_, { id }, { dataSources }) => {
      return  dataSources.jsonServerAPI.getArtistById(id);
    },
  },
  Mutation: {
    // Create a new artwork
    createArtwork: async (_, { input }, { dataSources }) => {
      try {
        const artwork = await dataSources.jsonServerAPI.postArtwork(input);
        return {
          code: 201,
          success: true,
          message: 'Artwork created successfully',
          artwork,
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: 'Failed to create artwork',
          artwork: null,
        };
      }
    },
    // Update an existing artwork
    updateArtwork: async (_, { id, input }, { dataSources }) => {
      try {
        const artwork = await dataSources.jsonServerAPI.patchArtwork(id, input);
        return {
          code: 200,
          success: true,
          message: 'Artwork updated successfully',
          artwork,
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: `Failed to update artwork with ID ${id}`,
          artwork: null,
        };
      }
    },
    // Delete an artwork
    deleteArtwork: async (_, { id }, { dataSources }) => {
      try {
        await dataSources.jsonServerAPI.deleteArtwork(id);
        return {
          code: 200,
          success: true,
          message: 'Artwork deleted successfully',
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: `Failed to delete artwork with ID ${id}`,
        };
      }
    },
    // Create a new artist
    createArtist: async (_, { input }, { dataSources }) => {
      try {
        const artist = await dataSources.jsonServerAPI.postArtist(input);
        return {
          code: 201,
          success: true,
          message: 'Artist created successfully',
          artist,
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: 'Failed to create artist',
          artist: null,
        };
      }
    },
    // Update an existing artist
    updateArtist: async (_, { id, input }, { dataSources }) => {
      try {
        const artist = await dataSources.jsonServerAPI.patchArtist(id, input);
        return {
          code: 200,
          success: true,
          message: 'Artist updated successfully',
          artist,
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: `Failed to update artist with ID ${id}`,
          artist: null,
        };
      }
    },
    // Delete an artist
    deleteArtist: async (_, { id }, { dataSources }) => {
      try {
        await dataSources.jsonServerAPI.deleteArtist(id);
        return {
          code: 200,
          success: true,
          message: 'Artist deleted successfully',
        };
      } catch (error) {
        return {
          code: 500,
          success: false,
          message: `Failed to delete artist with ID ${id}`,
        };
      }
    },
  },
  Artist: {
    // Resolve artworks field for Artist
    artworks:  (parent, _, { dataSources }) => {
      dataSources.jsonServerAPI.getArtworksByArtistId(parent.id);
    },
  },
  Artwork: {
    // Resolve artist field for Artwork
    artist:  (parent, _, { dataSources }) => {
      return  dataSources.jsonServerAPI.getArtistById(parent.artistId);
    },
  },
};

export default resolvers;
