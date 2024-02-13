import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Container } from './Pages.styled';
import Navigator from './Navigator';

export default function SharedLayout() {
  return (
    <Container>
      <AppBar>
        <Navigator />
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
