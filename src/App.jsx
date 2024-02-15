import SharedLayout from './pages/SharedLayout';
import React from 'react';
// import CustomRoutes from './pages/CustomRoutes';
// import React, { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

// const SharedLayout = lazy(() => import('pages/SharedLayout'));
// const HomePage = lazy(() => import('pages/HomePage'));
// const Catalog = lazy(() => import('pages/CatalogPage'));
// const Favorites = lazy(() => import('pages/FavoritesPage'));
// const NotFound = lazy(() => import('pages/NotFoundPage'));

export default function App() {
  return (
    <div>
      <SharedLayout/>
    </div>
    // <Routes>
    //   <Route path="/" element={<SharedLayout />} />
    //   <Route index element={<HomePage />} />
    //   <Route path="catalog" element={<Catalog />} />
    //   <Route path="favorites" element={<Favorites />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}
