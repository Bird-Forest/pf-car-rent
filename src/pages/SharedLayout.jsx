import React from 'react';
import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Container } from './Pages.styled';
import CustomRoutes from './CustomRoutes';
import { Loading } from '../helper/Loading';

export default function SharedLayout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loading/>}>
        <CustomRoutes/>
      </Suspense>
    </Container>
  );
}
