import React from 'react';
import { Loader, LoaderWrap } from './Loading.styled';

export function Loading() {
  return (
    <LoaderWrap>
      <Loader />
    </LoaderWrap>
  );
}
