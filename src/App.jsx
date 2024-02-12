import React, { useEffect } from 'react';
import { fetchCatalog } from './redux/server';

export default function App() {
  useEffect(() => {
    fetchCatalog();
  }, []);
  return <div>App</div>;
}
