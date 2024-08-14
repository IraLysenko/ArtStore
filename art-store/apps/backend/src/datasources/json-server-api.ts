const {RESTDataSource} = require('@apollo/datasource-rest');

// Create a REST data source for interacting with the JSON server
class JSONServerAPI extends RESTDataSource {
  baseURL = "http://localhost:3001/"; // Base URL of the JSON server

  // Fetch all artworks from the JSON server
  getArtworks() {
    return this.get('artworks/');
  }

  // Fetch a single artwork by ID
  getArtworkById(id) {
    return this.get(`artworks/${id}`);
  }

  // Create a new artwork
  postArtwork(data) {
    console.log('input__', data)
    return this.post('artworks', {body: {...data}});
  }

  // Update an existing artwork by ID
  patchArtwork(id, data) {
    return this.patch(`artworks/${id}`, {body: {...data}});
  }

  // Delete an artwork by ID
  deleteArtwork(id) {
    return this.delete(`artworks/${id}`);
  }

  // Fetch all artists from the JSON server
  getArtists() {
    return this.get('artists');
  }

  // Fetch a single artist by ID
  getArtistById(id) {
    return this.get(`artists/${id}`);
  }

  // Create a new artist
  postArtist(data) {
    return this.post('artists', {body: {...data}});
  }

  // Update an existing artist by ID
  patchArtist(id, data) {
    return this.patch(`artists/${id}`, {body: {...data}});
  }

  // Delete an artist by ID
  deleteArtist(id) {
    return this.delete(`artists/${id}`);
  }
}

module.exports = JSONServerAPI;
