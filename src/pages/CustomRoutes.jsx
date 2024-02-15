import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const SharedLayout = lazy(() => import('pages/SharedLayout'));
// const HomePage = lazy(() => import('pages/HomePage'));
// const Catalog = lazy(() => import('pages/CatalogPage'));
// const Favorites = lazy(() => import('pages/FavoritesPage'));
// const NotFound = lazy(() => import('pages/NotFoundPage'));

const HomePage = lazy(() => import('pages/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage'));
const Favorites = lazy(() => import('pages/FavoritesPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

export default function CustomRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<SharedLayout />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      {/* </Route> */}
    </Routes>
  );
}
