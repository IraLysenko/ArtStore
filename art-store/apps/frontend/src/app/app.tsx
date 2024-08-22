import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../components/pages/HomePage";
import ArtworkDetailPage from "../components/pages/ArtworkDetailPage";
import ArtistsPage from "../components/pages/ArtistsPage";
import ArtistPage from "../components/pages/ArtistPage";
import CreateArtwork from "../components/pages/CreateArtwork";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
    <Route path="/artists" element={<ArtistsPage />} />
    <Route path="/artists/:id" element={<ArtistPage />} />
    <Route path="/create-artwork" element={<CreateArtwork />} />
  </Routes>
);

export default App;
