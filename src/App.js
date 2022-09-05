import React from 'react';
import Article from './components/layout/Article';
import { Routes , Route } from 'react-router-dom';
import HambergurMenu from './components/shared/HambergurMenu';
import Footer from './components/layout/Footer';
const App = () => {
  
  return (
    <>
    <div>
      <HambergurMenu />
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/*" element={<Article />} />
        </Routes>
    </div>
    </>
  );
};

export default App;