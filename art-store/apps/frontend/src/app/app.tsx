import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../components/pages/HomePage";
import ArtworkDetailPage from "../components/pages/ArtworkDetailPage";
import ArtistsPage from "../components/pages/ArtistsPage";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
    <Route path="/artists" element={<ArtistsPage />} />
    {/*<Route path="/manage-artwork" element={<ManageArtwork />} />*/}
  </Routes>
);

export default App;
