import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchCatalog } from '../redux/server';
import { useDispatch } from 'react-redux';
import { selectVisibleCars } from '../redux/selectors';
import CarCard from './CarCard';
import { nanoid } from '@reduxjs/toolkit';
import { WrapListCars } from './Car.styled';

export default function ListCars() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const newCars = useSelector(selectVisibleCars);

  const Arr = Array.isArray(newCars) && newCars.length > 0;
  return (
    <WrapListCars>
      {Arr &&
        newCars.map(item => {
          return <CarCard key={nanoid()} item={item} />;
        })}
    </WrapListCars>
  );
}
