import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Search from '../../pages/Search';
import Restaurant from '../../pages/Search/components/Restaurant';
import ExternalRoute from './components/ExternalRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<ExternalRoute element={<Home />} />} />
      {/* <Route path="/search" element={<ExternalRoute element={<Search />} />} /> */}
      <Route path="/search">
        <Route index element={<ExternalRoute element={<Search />} />} />
        <Route
          path="restaurant/:search"
          element={<ExternalRoute element={<Restaurant />} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
