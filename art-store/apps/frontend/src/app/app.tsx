import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../components/pages/HomePage";
import ArtworkDetailPage from "../components/pages/ArtworkDetailPage";


const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
  </Routes>
);

export default App;
