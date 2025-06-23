"use client"

import React from 'react';
import FramerMotionProvider from './FramerMotionProvider';
import StateProvider from './state-provider';

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StateProvider>
      <FramerMotionProvider>
        {children}
      </FramerMotionProvider>
    </StateProvider>
  );
};

export default LayoutWrapper;
