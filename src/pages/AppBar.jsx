import React from 'react';
import { WrapAppBar } from './Pages.styled';
import Navigator from './Navigator';

export default function AppBar() {
  return (
    <WrapAppBar>
      <Navigator />
    </WrapAppBar>
  );
}
