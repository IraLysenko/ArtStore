const resolvers = {
  Query: {
    // Fetch a single artwork by ID
    artwork: (_, { id }, { dataSources }) => {
      return dataSources.jsonServerAPI.getArtworkById(id);
    },
    // Fetch all artists
    artists:  (_, __, { dataSources }) => {
      return  dataSources.jsonServerAPI.getArtists();
    },
    // Fetch all artworks
    artworks:  (_, __, { dataSources }) => {
      return dataSources.jsonServerAPI.getArtworks();
    },
    // Fetch a single artist by ID
    artist:  (_, { id }, { dataSources }) => {
      return  dataSources.jsonServerAPI.getArtistById(id);
    },
  },
  //Mutations are in process
  Mutation: {
    // Create a new artwork
    createArtwork: async (_, { input }, { dataSources }) => {
      console.log("Input received:", input);
      try {
        const artwork = await dataSources.jsonServerAPI.postArtwork(input);
        console.log("Artwork created:", artwork);
        return {
          code: 201,
          success: true,
          message: 'Artwork created successfully',
          artwork,
        };
      } catch (error) {
        console.error("Error creating artwork:", error);
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
       return parent.artworks.map((artworkId) => dataSources.jsonServerAPI.getArtworkById(artworkId))
    },
    //exercise for the field level resolver
    nameBig: (parent) => { return parent.name.toUpperCase() },
  },
  Artwork: {
    // Resolve artist field for Artwork
    artist:  (parent, _, { dataSources }) => {
      console.log('parent', parent)
      return  dataSources.jsonServerAPI.getArtistById(parent.artistId);
    }
  },
};

module.exports = resolvers;
