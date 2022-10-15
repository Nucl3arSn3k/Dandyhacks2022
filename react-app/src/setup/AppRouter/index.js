import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import ExternalRoute from './components/ExternalRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<ExternalRoute element={<Home />} />} />
      <Route path="/search" element={<ExternalRoute element={<Search />} />} />
    </Routes>
  );
};

export default AppRouter;
