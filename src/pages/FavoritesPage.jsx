import ListFavorites from '../components/ListFavorites';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../redux/server';

export default function FavoritesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  return (
    <div><ListFavorites/></div>
  )
}
