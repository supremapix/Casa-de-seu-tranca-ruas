import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { States } from './pages/States';
import { StatePage } from './pages/StatePage';
import { CityPage } from './pages/CityPage';
import { NeighborhoodPage } from './pages/NeighborhoodPage';
import { Contact } from './pages/Contact';
import { Sitemap } from './pages/Sitemap';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/estados" element={<States />} />
          <Route path="/estados/:stateSlug" element={<StatePage />} />
          <Route path="/estados/pr/curitiba/:neighborhoodSlug" element={<NeighborhoodPage />} />
          <Route path="/estados/:stateSlug/:citySlug" element={<CityPage />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/mapa-do-site" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
