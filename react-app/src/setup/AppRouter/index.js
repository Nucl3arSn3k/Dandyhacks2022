import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Search from '../../pages/Search';

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default AppRouter;
