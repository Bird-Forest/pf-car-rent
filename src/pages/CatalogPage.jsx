import ListCars from '../components/ListCars'
import React, { useEffect } from 'react'
import { fetchCatalog } from '../redux/server';
import { useDispatch } from 'react-redux';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);
  return (
    <div><ListCars /></div>
  )
}